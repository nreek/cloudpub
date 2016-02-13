<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Input;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Notes;
use App\Book;
use Auth;

class NoteController extends Controller
{
    public function index()
    {
        
    }

    public function create(Request $request)
    {
        if (Auth::check()) {
            $input = Input::all();
            $a = Notes::create($input);  
            return $a->note_id; 
		} 
    }

    public function remove($id){
		if (!Auth::check()) 
			return redirect('/');

		$note = Notes::find($id);
		foreach(Auth::user()->Books()->get() as $book){
			if($book->book_id == $note->book_id){
				$note->delete();
				return '1';
				break;
			}
		}
		return '0';
	}	

}
