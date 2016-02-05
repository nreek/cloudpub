<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Option extends Model
{
	protected $table = 'Option';
	protected $primaryKey = 'id';
	
	protected $fillable = [
	'option',
	'value',
	'scope',
	'use_id',
	];
}
