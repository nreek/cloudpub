<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Stripe, Mailgun, Mandrill, and others. This file provides a sane
    | default location for this type of information, allowing packages
    | to have a conventional place to find your various credentials.
    |
    */

    'mailgun' => [
        'domain' => '',
        'secret' => '',
    ],

    'mandrill' => [
        'secret' => '',
    ],

    'ses' => [
        'key'    => '',
        'secret' => '',
        'region' => 'us-east-1',
    ],

    'stripe' => [
        'model'  => App\User::class,
        'key'    => '',
        'secret' => '',
    ],

    'facebook' => [
    	'client_id' => env('FB_ID'),
    	'client_secret' => env('FB_SECRET'),
    	'redirect' => env('LOGIN_REDIRECT') 
    ],

    'twitter' => [
    	'client_id' => env('TW_ID'),
    	'client_secret' => env('TW_SECRET'),
    	'redirect' => env('LOGIN_REDIRECT') 
    ],
];
