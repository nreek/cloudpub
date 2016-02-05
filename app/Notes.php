<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Notes  extends Model
{
	protected $table = 'Notes';
	protected $primaryKey = 'note_id';
	
	protected $fillable = [
        'note_page',
        'note_bookmark',
        'note_quote',
        'note_text', 
        'note_element',   
	    'book_id'
    ];

	protected $hidden = [];

	public function Book()
	{
		return $this->belongsTo('App\Book');
	}
}
