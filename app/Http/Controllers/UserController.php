<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Input;
use App\Http\Requests;
use App\User;
use App\Http\Controllers\Controller;
use Auth;
use Laravel\Socialite\Contracts\Factory as Socialite;

class UserController extends Controller
{
	public function __construct(Socialite $socialite){
		$this->socialite = $socialite;
	}

	public function create(Request $request)
	{
		$input = Input::all();
		$input['password'] = bcrypt($input['password']);
		$a = User::create($input);

		if (Auth::attempt(['use_email' => Input::get('use_email'), 'password' => Input::get('password') ], true))
			return redirect()->intended('home');
	}

	public function update(Request $request)
	{
		if(!Auth::check())
			return redirect('/home');

		$a = Auth::user()->update(Input::all());
	}

	public function desvincular(){
		if(!Auth::check())
			return redirect('/home');

		Auth::user()->update(['use_socialid' => '', 'use_source'=> 'C']);
	}

	public function login(Request $request){
		$input = $request->all();

		if (Auth::attempt(['use_email' => $input['use_email'], 'password' => $input['password']], true)) {
			return redirect()->intended('home');
		}
	}

	public function social_login(){
		if(Input::has('code')){
			$social_user = $this->socialite->driver('facebook')->fields(['birthday','email','name','gender'])->user();
			$user = User::where('use_email',$social_user->user['email'])->get();
			if(!$user->count()){
				$user = User::create([
					'use_name' 		=> $social_user->user['name'], 
					'use_email'     => $social_user->user['email'],
					'use_birthday'	=> $social_user->user['birthday'],
					'use_picture' 	=> $social_user->avatar_original,
					'use_gender'	=> $social_user->user['gender'],
					'use_socialid'	=> $social_user->id,
					'use_source' => 'F',
					]);
			}

			$user->first()->update(['use_socialid'	=> $social_user->id,'use_source' => 'F']);
			Auth::login($user->first());

			return redirect('/home');
		}
		else
			return $this->socialite->with('facebook')->fields([
				'birthday','email','name','gender'
				])->scopes(['user_birthday','email'])->redirect();

	}

	public function email_exists(Request $request){
		return Auth::check() ? User::where('use_email',$request['email'])->where('use_id','<>',Auth::user()->use_id)->count() : User::where('use_email',$request['email'])->count();
	}
}
