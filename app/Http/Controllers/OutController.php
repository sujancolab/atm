<?php

namespace App\Http\Controllers;

class OutController extends Controller {

	public function __construct() {

	}

	public function index() {

		return view('welcome');

	}
}