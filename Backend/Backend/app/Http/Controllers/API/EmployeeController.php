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



class EmployeeController extends Controller
{
    //
    public function employees(Request $request){
        $employees = User::where('role_id',2)->get(['id', 'name','email', 'phone', 'id_number']);
        return response()->json(['success'=>$employees], 200);
    }
    public function employee(Request $request){
        $employee = User::where('id', $request->id)->first();
        return response()->json(['success'=>$employee], 200);
    }
}
