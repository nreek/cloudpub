<?php

namespace App;

use Illuminate\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;

class User extends Model implements AuthenticatableContract, CanResetPasswordContract
{
	use Authenticatable, CanResetPassword;

	protected $table = 'User';
	protected $primaryKey = 'use_id';
	
	protected $fillable = [
	'use_name',
	'use_email',
	'use_birthday',
	'use_gender',
	'use_url',
	'use_picture',
	'use_mobile',
	'use_source',
	'use_socialid',
	'use_socialsource',
	'password'
	];

	protected $hidden = ['password', 'remember_token'];

	public function Books(){
		return $this->hasMany('App\Book','use_id');
	}

	public function Shelves(){
		return $this->hasMany('App\Shelf','use_id');
	}

	public function Styles(){
		return $this->hasMany('App\Style','use_id');
	}

	public function Options(){
		return $this->hasMany('App\Option','use_id');
	}
}
