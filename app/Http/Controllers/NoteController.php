<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Input;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Notes;
use App\Book;
use Auth;

class NoteController extends Controller
{
    public function index()
    {
        
    }

    public function create(Request $request)
    {
        if (Auth::check()) {
            $input = Input::all();
            $a = Notes::create($input);   
		} 
    }

}
