<?php
use App\Models\jobpost;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/jobpost', function() {
    return jobpost::all();
});

Route::post('/jobpost', function() {
    //make sure we have a title when we create a titlepost
    request()->validate([
        'jobtitle'=> 'required',
        'jobDescription'=>'required',
        'jobQualifications'=>'required',
        'jobRequirements'=>'required',
    ]);
    //create the jobpost to selected table
    return jobpost::create([
        'jobtitle'=>request('jobtitle'),
         'jobDescription'=>request('jobDescription'),
         'jobQualifications'=>request('jobQualifications'),
         'jobRequirements'=>request('jobRequirements'),
    ]);
});
        //update jobpost {is going to be the ID} -> $jobpost//take and ID and returning it
Route::put('/jobpost/{jobpost}', function(jobpost $jobpost) {
    return $jobpost->update([
        'jobtitle'=>request('jobtitle'),
         'jobDescription'=>request('jobDescription'),
         'jobQualifications'=>request('jobQualifications'),
         'jobRequirements'=>request('jobRequirements'),
    ]);
});

Route::delete('/jobpost/{jobpost}', function(jobpost $jobpost) {
        return $jobpost->delete();
});