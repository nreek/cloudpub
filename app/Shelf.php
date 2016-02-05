<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Shelf extends Model
{
	protected $table = 'Shelf';
	protected $primaryKey = 'shelf_id';
	
	protected $fillable = [
	'shelf_name',
	'shelf_url',
	'shelf_color',
	'shelf_shared',
	'use_id'
	];

	protected $hidden = [];
	
	public function Books()
	{
		return $this->belongsToMany('App\Book','shelf_book');
	}
}
