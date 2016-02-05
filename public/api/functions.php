<?php 
function uploadPath($user_id,$subfolder = 'books')
{
	$path = '/uploads/'.$subfolder.'/'.substr("0000".$user_id,-4,-2)."/".substr("0000".$user_id,-2);
	if(!file_exists($_SERVER["DOCUMENT_ROOT"].$path))
		 mkdir($_SERVER["DOCUMENT_ROOT"].$path, 0777, true);

	return $path;
}

function uploadFilePath($user_id,$exten,$name,$subfolder='books')
{
	$filepath = uploadPath($user_id,$subfolder).'/'.fileName($user_id,$exten,$name);
   	if( ($exten == 'epub' || $exten == 'pdf') && !file_exists($_SERVER["DOCUMENT_ROOT"].$filepath))
		 mkdir($_SERVER["DOCUMENT_ROOT"].$filepath);
	return $filepath; 
}

function fileName($user_id,$exten,$name)
{
	$file = ($exten == 'epub' || $exten == 'pdf') ? $user_id . '_' .$name. "/" :  $user_id . '_' .$name. ".".$exten ;
	return $file;
}

function findFiles($path,$exten){
    $it = new RecursiveDirectoryIterator(str_replace('\\','/',$path));
    $files = [];
    foreach(new RecursiveIteratorIterator($it) as $file)
    {
        $ar = explode('.', $file);
        if (in_array(strtolower(array_pop($ar)), $exten)){
            $files[] = (string)str_replace('\\','/',$file);
        }
    }  
    return $files;
}
 ?>
