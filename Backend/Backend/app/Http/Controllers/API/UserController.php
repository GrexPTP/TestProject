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
class UserController extends Controller 
{
public $successStatus = 200;
/** 
     * login api 
     * 
     * @return \Illuminate\Http\Response 
     */ 
    public function login(){ 
        if(Auth::attempt(['email' => request('email'), 'password' => request('password')])){ 
            $user = Auth::user(); 
            $success['token'] =  $user->createToken(request('email'))->accessToken; 
            return response()->json(['success' => $success['token'], 'role' => $user->role], $this-> successStatus); 
        } 
        else{ 
            return response()->json(['error'=>'Unauthorised'], 401); 
        } 
    }
/** 
     * Register api 
     * 
     * @return \Illuminate\Http\Response 
     */ 
    public function signup(Request $request) 
    { 
        $validator = Validator::make($request->all(), [ 
            'name' => 'required', 
            'email' => 'required|email', 
            'password' => 'required', 
            'c_password' => 'required|same:password',
            'phone' => 'nullable|max:10',
            'id_number' => 'nullable|max:11',
            'role_id' => 'required' 
        ]);
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }
        $input = $request->all(); 
        $input['password'] = bcrypt($input['password']);
        // return response()->json(['success'=>$input], $this-> successStatus); 
        $user = User::create($input);
        $success['token'] =  $user->createToken($input['email'])-> accessToken; 
        $success['name'] =  $user->name;
        return response()->json(['success'=>$success], $this-> successStatus); 
    }
/** 
     * details api 
     * 
     * @return \Illuminate\Http\Response 
     */ 
    public function details(Request $request) 
    {   
        
        $user = Auth::user();
        $user['role'] = $user->role()->pluck('role')[0]; 
        return response()->json(['success' => $user], $this-> successStatus); 
    } 

    public function updateProfile(Request $request){
        $user = Auth::user();
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
        $avatars = $user->avartar ? json_decode($user->avartar) :  [];
        $front_id = $user->front_id ? json_decode($user->front_id) :  [];
        $back_id = $user->back_id ? json_decode($user->back_id) :  [];
        $uploader = new Util();
        foreach($request->avaPictures as $image){
            if(strpos($image, 'base64') !== false)
            array_push($avatars, '/storage/image/'.$user->id.'/'.$uploader->saveImgBase64($image, 'image/'.$user->id));
        }
        foreach($request->frontPictures as $image){
            if(strpos($image, 'base64') !== false)
            array_push($front_id, '/storage/image/'.$user->id.'/'.$uploader->saveImgBase64($image, 'image/'.$user->id));
        }
        foreach($request->backPictures as $image){
            if(strpos($image, 'base64') !== false)
            array_push($back_id, '/storage/image/'.$user->id.'/'.$uploader->saveImgBase64($image, 'image/'.$user->id));
        }
        $user->avartar = json_encode($avatars);
        $user->front_id = json_encode($front_id);
        $user->back_id = json_encode($back_id);
        $user->save();
        return response()->json(['success' => $user], $this-> successStatus); 
    }
    
    
    
}