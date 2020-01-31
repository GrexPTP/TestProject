<?php
namespace App\Http\Controllers\API;
use Illuminate\Support\Facades\Storage;
class Util {
    public function saveImgBase64($param, $folder){
        if (substr_count($param,";") == 2)
        list($extension,$name ,$content) = explode(';', $param);
        else list($extension,$content) = explode(';', $param);
        $tmpExtension = explode('/', $extension);
        preg_match('/.([0-9]+) /', microtime(), $m);
        $fileName = sprintf('img%s%s.%s', date('YmdHis'), $m[1], $tmpExtension[1]);
        $content = explode(',', $content)[1];
        $storage = Storage::disk('public');
    
        $checkDirectory = $storage->exists($folder);
    
        if (!$checkDirectory) {
            $storage->makeDirectory($folder);
        }
    
        $storage->put($folder . '/' . $fileName, base64_decode($content), 'public');
    
        return $fileName;
    }
}