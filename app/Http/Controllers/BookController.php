<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Input;
use App\Http\Requests;
use App\User;
use App\Book;
use App\Http\Controllers\Controller;
use Auth;
use ZipArchive;
use RecursiveDirectoryIterator;
use RecursiveIteratorIterator;
use RegexIterator;
use RecursiveRegexIterator;

require_once($_SERVER["DOCUMENT_ROOT"].'/api/epub/BookGluttonEpub.php');
require_once($_SERVER["DOCUMENT_ROOT"].'/api/functions.php');

class BookController extends Controller
{
	public function index($id)
	{
		if (Auth::check()) {
			$book = Book::find($id);
			return view('book.book')->with('user',Auth::user())->with('book', $book);
		} else
		return redirect('/');
	}

	public function remove($id)
	{
		Book::find($id)->delete();
	}

	public function upload(){
		$return = '';
		$user_id = Auth::user()['use_id'];
		foreach ($_FILES as $file) {
			$exten = pathinfo($file['name'], PATHINFO_EXTENSION);
			$time = time()+rand(100,200);
			$epub = new \BookGluttonEpub();
			$epub->open($file['tmp_name']);

			$book['book_title'] = $epub->getTitle();
			$book['book_author'] = $epub->getAuthor();
			$book['book_isbn'] = $epub->getIsbn();
			$book['book_description'] = $epub->getDescription();
			$book['book_language'] = $epub->hasLanguage() ? $epub->getLanguage() : 'pt-BR';
			$book['book_format'] =  $exten;
			$book['book_timestamp'] = $time;
			$book['book_file'] = uploadFilePath($user_id, $exten,$time);
			$book['book_cover'] = uploadFilePath($user_id, 'png',$time,'covers');
			$book['use_id'] = $user_id;
			$cover = $epub->getCoverMetaWithImage();
			$return = Book::create($book);

			//if(!move_uploaded_file($file['tmp_name'],  
			//	$return = 'O arquivo não pôde ser salvo.';

			$data = $cover['content'];
			$data = base64_decode($data);

			$im = imagecreatefromstring($data);
			if ($im !== false) {
				file_put_contents($_SERVER["DOCUMENT_ROOT"].uploadFilePath($user_id, 'png',$time,'covers'), $data);
			}
			$zip = new \ZipArchive;
			$res = $zip->open($file['tmp_name'], ZipArchive::CREATE);
			$extractFolder = $_SERVER["DOCUMENT_ROOT"].uploadFilePath($user_id, $exten,$time);

			if ($res === TRUE) {
				$zip->extractTo($extractFolder);
				$zip->close();
			} else {
				echo 'failed, code:' . $res;
			}	
		}

		return $return;
	}

	public function uploadInfo(){
		print_r($_POST);
	}

	public function read($id) {
		$book = Book::find($id);
		$opf = findFiles(public_path().$book->book_file,['opf']);
		$css = findFiles(public_path().$book->book_file,['css']);
		$xml = simplexml_load_file($opf[0]);
		$files = [];
		$text = '';
		foreach ($xml->manifest->item as $item) {
			if($item->attributes()['media-type'] == 'application/xhtml+xml' && $item->attributes()['id'] != 'titlepage'){
				$file = explode('/',$opf[0]);
				unset($file[count($file)-1]);
				$fileContent = file_get_contents(implode('/',$file).'/'.(string)$item->attributes()['href']);
				$files[] = urlencode(str_replace(str_replace('\\','/',public_path()),'', implode('/',$file)).'/'.(string)$item->attributes()['href']);
				if(count($files) - 1 == $book->book_page){
					$text = strip_html_tags($fileContent);
				}
			} 
		}


		return view('read',['files'=>$files, 'text' => $text,'css'=>$css,'user' => Auth::user()])->with('user',Auth::user())->with('book',$book);
	}

	public function page($id) {
		$url = urldecode($_GET['url']);
		$file = file_get_contents(public_path().$url);
		return strip_html_tags($file);
	}

	public function bookmark($id) {
		$book = Book::find($id);
		$book->book_bookmark = $_GET['bookmark'];
		$book->book_page = $_GET['page'];
		$book->save();
	}

	
}
function strip_html_tags( $text )
	{
		$text = preg_replace(
			array(
          // Remove invisible content
				'@<title[^>]*?>.*?</title>@siu',
				'@<meta[^>]*?>.*?</meta>@siu',
				'@<style[^>]*?>.*?</style>@siu',
				'@<script[^>]*?.*?</script>@siu',
				'@<object[^>]*?.*?</object>@siu',
				'@<embed[^>]*?.*?</embed>@siu',
				'@<applet[^>]*?.*?</applet>@siu',
				'@<noframes[^>]*?.*?</noframes>@siu',
				'@<noscript[^>]*?.*?</noscript>@siu',
				'@<noembed[^>]*?.*?</noembed>@siu',
				),
			array(
				' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '
				),
			$text );
		return strip_tags($text,'<p><img><span><b><i><br><h1><h2><h3><h4><h5><h6>');
	}