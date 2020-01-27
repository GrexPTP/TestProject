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
    public function updateIndividual(Request $request){
        $user = User::where('id', $request->id)->first();
        

        $validator = Validator::make($request->all(), [ 
            'password' => 'nullable', 
            'c_password' => 'nullable|same:password',
        ]);
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }
        
        $user->name = $request['name'] ?? $user->name;
        $user->phone = $request['phone'] ?? $user->phone ;
        $user->address = $request['address'] ?? $user->address ;
        $user->id_number = $request['id_number'] ?? $user->id_number ;
        $user->password = $request['password'] ? bcrypt($request['password']) : $user->password;
        $avatars = [];
        $front_id = [];
        $back_id = [];
        $uploader = new Util();
        foreach($request->avaPictures as $image){
            array_push($avatars, '/storage/image/'.$user->id.'/'.$uploader->saveImgBase64($image, 'image/'.$user->id));
        }
        foreach($request->frontPictures as $image){
            array_push($front_id, '/storage/image/'.$user->id.'/'.$uploader->saveImgBase64($image, 'image/'.$user->id));
        }
        foreach($request->backPictures as $image){
            array_push($back_id, '/storage/image/'.$user->id.'/'.$uploader->saveImgBase64($image, 'image/'.$user->id));
        }
        $user->avartar = json_encode($avatars);
        $user->front_id = json_encode($front_id);
        $user->back_id = json_encode($back_id);
        
        $user->save();
        return response()->json(['success' => $user], 200); 
    }
    public function delete(Request $request){
        User::destroy($request->id);
        return response()->json(['success' => 'deleted'], 200); 
    }
}
