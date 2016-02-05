<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Input;
use App\Http\Requests;
use App\User;
use App\Http\Controllers\Controller;
use Auth;

class UserController extends Controller
{
	public function index()
	{
        //
	}

	public function create(Request $request)
	{
		$input = Input::all();
		$input['password'] = bcrypt($input['password']);
		$a = User::create($input);

		if (Auth::attempt(['use_email' => Input::get('use_email'), 'password' => Input::get('password') ], true))
			return redirect()->intended('home');
	}

	public function login(Request $request){
		$input = $request->all();

		if (Auth::attempt(['use_email' => $input['use_email'], 'password' => $input['password']], true)) {
			return redirect()->intended('home');
		}
	}
}
