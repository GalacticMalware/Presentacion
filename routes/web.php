<?php

use Illuminate\Support\Facades\Route;


/*Route::get('/', function () {
    return view('app');
}); 
*/
Route::get('/{any}', 'SinglePageController@index')->where('any', '.*');
