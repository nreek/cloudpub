<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Input;
use App\Http\Requests;
use App\User;
use App\Http\Controllers\Controller;
use Auth;

class HomeController extends Controller
{
	public function index()
	{
		if (Auth::check()) {
			return view('home')->with('user',Auth::user());
		} else
			return redirect('/');
	}
}
