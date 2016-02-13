<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\User;
use App\Option;
use Auth;
use Input;

class AccountController extends Controller
{
	public function index(){
		if (!Auth::check()) 
			return redirect('/');

		return view('account.index')->with('user',Auth::user());
	}

	public function reading(){
		if (!Auth::check())
			return redirect('/');

		return view('account.reading')->with('user',Auth::user());
	}

	public function options(Request $request){
		if (!Auth::check()) 
			return redirect('/');
		
		$input = Input::all();
		$options = Auth::user()->Options()->get();
		
		foreach ($input as $k => $v) {
			if($options->where('option',$k)->count() > 0)
				$options->where('option',$k)->first()->update(['value'=>$v]);
			else
				Option::create(['option' => $k, 'value'=>$v,'scope'=>'js','use_id'=>Auth::user()->use_id]);
		}
	}
}
