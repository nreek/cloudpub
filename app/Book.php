<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
	protected $table = 'Book';
	protected $primaryKey = 'book_id';
	
	protected $fillable = [
	'book_title',
	'book_author',
	'book_publisher',
	'book_isbn',
	'book_description',
	'book_language',
	'book_cover',
	'book_file',
	'book_shared',
	'book_format',
	'book_timestamp',
    'book_bookmark',
    'book_page',
	'use_id'
	];

	protected $hidden = [];

	public function Shelves()
	{
		return $this->belongsToMany('App\Shelf','shelf_book');
	}

    public function Notes(){
        return $this->hasMany('App\Notes');
    }
}
