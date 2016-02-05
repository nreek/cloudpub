<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Input;
use App\Http\Requests;
use App\User;
use App\Shelf;
use App\Http\Controllers\Controller;
use Auth;

class ShelfController extends Controller
{
	public function index($id)
	{
		if (Auth::check()) {
			$shelf = Shelf::find($id);
			return view('shelf.shelf')->with('user',Auth::user())->with('shelf', $shelf);
		} else
			return redirect('/');
	}

	public function removeBook($id,$book){
		// $shelf = Shelf::find($id)->Books();
		// dd($shelf);
	}

    public function addBook($id, $book) {
       $shelf = Shelf::find($id)->Books()->attach($book); 
    }
}
