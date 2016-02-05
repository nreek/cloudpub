<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Style extends Model
{
	protected $table = 'Style';
	protected $primaryKey = 'id';
	
	protected $fillable = [
	'style',
	'value',
	'element',
	'use_id'
	];

	protected $hidden = [];
}
