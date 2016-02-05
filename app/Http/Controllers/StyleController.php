<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Input;
use App\Http\Requests;
use App\User;
use App\Style;
use App\Http\Controllers\Controller;
use Auth;

class StyleController extends Controller
{
	public function index()
	{
		
	}

	public function create(Request $request){
		$input = Input::all();
		$input['use_id'] = Auth::user()['use_id'];
		return Style::create($input);
	}

	public function remove($id){
		Style::find($id)->delete();
	}
}
