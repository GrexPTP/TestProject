<?php

namespace App\Http\Controllers\API;
use Illuminate\Http\Request; 
use App\Http\Controllers\Controller; 
use App\User; 

use Illuminate\Support\Facades\Auth; 
use Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;



class ManageController extends Controller
{
    //
    public function list(Request $request){
        $list = User::where('role_id',$request->role_id)->get(['id', 'name','email', 'phone', 'id_number']);
        return response()->json(['success'=>$list], 200);
    }
    public function individual(Request $request){
        $individual = User::where('id', $request->id)->first();
        return response()->json(['success'=>$individual], 200);
    }
}
