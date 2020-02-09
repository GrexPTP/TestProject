<?php

namespace App\Http\Controllers\API;
use Illuminate\Http\Request; 
use App\Http\Controllers\Controller; 
use App\Order; 
use Swagger;
use GuzzleHttp;
use Illuminate\Support\Facades\Auth; 
use Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Madzipper;


class OrderController extends Controller
{   
    public function create(Request $request){
        $order = new Order();
        $order->email = $request['email'];
        $order->name = $request['name'];
        $order->phone = $request['phone'];
        $order->address = $request['address'];
        $order->id_number=$request['id_number'];
        $order->data = json_encode($request['data']);
        $images = [];
        $uploader = new Util();
        foreach($request->images as $image){
            array_push($images, '/storage/order_image/'.$order->id.'/'.$uploader->saveImgBase64($image, 'image/'.$order->id));
        }
        $order->images = json_encode($images);
        $order->save();
        return response()->json(['success'=> $order], 200);
    }
    public function list(Request $request){
        $list = Order::all();
        return response()->json(['success'=>$list], 200);
    }
    public function order(Request $request){
        $order = Order::where('id', $request->id)->first();
        return response()->json(['success'=>$order], 200);
    }
    public function updateOrder(Request $request){
        $order = Order::where('id', $request->id)->first();
        $order->email = $request['email'] ?? $order->email;
        $order->phone = $request['phone'] ?? $order->phone ;
        $order->address = $request['address'] ?? $order->address ;
        $order->id_number = $request['id_number'] ?? $order->id_number ;
        $order->name = $request['name'] ?? $order->name;
        $images = [];
        $uploader = new Util();
        foreach($request->images as $image){
            array_push($images, '/storage/order_image/'.$order->id.'/'.$uploader->saveImgBase64($image, 'image/'.$order->id));
        }
        $order->images = json_encode($images);
        
        $order->save();
        return response()->json(['success' => $order], 200); 
    }
    public function ocr(Request $request){
        $image = $request->image;
        $uploader = new Util();
        $link = '';
        foreach($request->images as $image){
            if(strpos($image, 'base64') !== false)
            $link = '/storage/order_temp_image/'.$uploader->saveImgBase64($image, 'order_temp_image/');
        }
        $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('Apikey', 'ab633c9a-f692-4c7d-8ef7-8ad36822b468');
        $apiInstance = new Swagger\Client\Api\ImageOcrApi(
    
    
            new GuzzleHttp\Client(),
            $config
        );
        $image_file = "https://localhost:8000".$link;
        try {
            $result = $apiInstance->imageOcrPhotoToText($image_file);
            $result = explode("\n",$result['text_result']);
            $rs = ['email' => $result[6], 'name' => $result[8], 'phone' => $result[10], 'address' => $result[12], 'id' => $result[14]];
            return response()->json(['success' => $rs], 200); 
        } catch (Exception $e) {
            return response()->json(['failure' => $e->getMessage()], 200); 
        }
    }
    //
    // public function list(Request $request){
    //     $list = User::where('role_id',$request->role_id)->get(['id', 'name','email', 'phone', 'id_number']);
    //     return response()->json(['success'=>$list], 200);
    // }
    // public function individual(Request $request){
    //     $individual = User::where('id', $request->id)->first();
    //     return response()->json(['success'=>$individual], 200);
    // }
    // public function updateIndividual(Request $request){
    //     $user = User::where('id', $request->id)->first();
        

    //     $validator = Validator::make($request->all(), [ 
    //         'password' => 'nullable', 
    //         'c_password' => 'nullable|same:password',
    //     ]);
    //     if ($validator->fails()) { 
    //         return response()->json(['error'=>$validator->errors()], 401);            
    //     }
        
    //     $user->name = $request['name'] ?? $user->name;
    //     $user->phone = $request['phone'] ?? $user->phone ;
    //     $user->address = $request['address'] ?? $user->address ;
    //     $user->id_number = $request['id_number'] ?? $user->id_number ;
    //     $user->password = $request['password'] ? bcrypt($request['password']) : $user->password;
    //     $avatars = [];
    //     $front_id = [];
    //     $back_id = [];
    //     $uploader = new Util();
    //     foreach($request->avaPictures as $image){
    //         array_push($avatars, '/storage/image/'.$user->id.'/'.$uploader->saveImgBase64($image, 'image/'.$user->id));
    //     }
    //     foreach($request->frontPictures as $image){
    //         array_push($front_id, '/storage/image/'.$user->id.'/'.$uploader->saveImgBase64($image, 'image/'.$user->id));
    //     }
    //     foreach($request->backPictures as $image){
    //         array_push($back_id, '/storage/image/'.$user->id.'/'.$uploader->saveImgBase64($image, 'image/'.$user->id));
    //     }
    //     $user->avartar = json_encode($avatars);
    //     $user->front_id = json_encode($front_id);
    //     $user->back_id = json_encode($back_id);
        
    //     $user->save();
    //     return response()->json(['success' => $user], 200); 
    // }
    // public function delete(Request $request){
    //     User::destroy($request->id);
    //     return response()->json(['success' => 'deleted'], 200); 
    // }
    // public function download(Request $request){
        
    //     $fileName = Str::random(40);
    //     $filepath = public_path('\storage\zip\\'.$request->id.'\\'.$fileName.'.zip');
    //     Madzipper::make($filepath)->add(public_path('\storage\image\\'.$request->id))->close();
    //     return redirect('storage\zip\\'.$request->id.'\\'.$fileName.'.zip');
    // }
}
