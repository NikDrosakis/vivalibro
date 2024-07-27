<?php
//include_once "/var/www/gaia/boot.php";
//include_once $cms->APPSROOT."bks/config.php";
include_once "config.php";
$time=time();
$a= $_REQUEST['a'];
$b= $_REQUEST['b'];
$c= $_REQUEST['c'];

if($a=='func2'){
    //b:method c:param
     $cq = $b == 'fetchList1' ? explode(',', $c) : $c;
	if(in_array($b,array("name_not_exist","validate"))){
		$sel = $cms->$b($cq);
		echo $sel ? json_encode("ok"): json_encode("no");
    }else{
        $sel = $cms->db->$b($cq);
		echo $b=="q" && $sel ? json_encode("yes") : json_encode($sel);
		//echo $b!='get' ? ($b=='query' && $sel ? json_encode("yes") : json_encode($sel)) :$sel;
    }    


}elseif($a=='func') {
$cq = $b == 'fl' ? explode(',', $c) : $c;
$data = $bot->$b($cq);
echo $b=="q" && $data ? json_encode("yes") : json_encode($data);

}elseif($a=='list') {		
	$buffer=$cms->booklist();
	echo json_encode($buffer);
	
}elseif($a=='bookedit') { //$b:param $c:id of writer $d:id of book
	$q= $bot->q("UPDATE book set $b=? WHERE id=?",[$_GET['val'],$_GET['id']]);
	echo !$q ? "NO":"OK";
}elseif($a=='lookupsave') { //$b:param $c:id of writer $d:id of book
	$q= $bot->q("UPDATE book set $b=? WHERE id=?",[$c,$_GET['id']]);
	echo !$q ? "NO":"OK";
	
}elseif($a=='lookup') {
	$sel= $bot->fl(["name","id"],$b,"WHERE name LIKE '%$c%' ORDER BY name");
	echo json_encode($sel);
}elseif($a=='new') {
		   $ins=$bot->inse($b,["name"=>$c]);
		   	$q= $bot->q("UPDATE book set $b=? WHERE id=?",[$ins,$_GET['id']]);
		   	echo $q && $ins ? "OK":"NO";	
}elseif($a=='newbks') {
	/*
	{name: 'a', value: 'newbks'}
{name: 'title', value: 'test'}
{name: 'writer', value: 'test'}
{name: 'editor', value: 'test'}
{name: 'editorlist', value: '79'}
{name: 'cat', value: 'test'}
{name: 'status', value: ''}
{name: 'isread', value: '1'}
{name: 'tag', value: 'test'}
{name: 'summary', value: 'test'}
{name: 'notes', value: 'test'}
{name: 'saved', value: 1710584056}*/
	   $book=array(
	   'title'=> "new book"
	//   'status'=> 0,
	  // 'summary'=> $_POST['summary'],
	   //'notes'=> $_POST['notes'],
	   //'isread'=> $_POST['isread'],
	   //'saved'=> $_POST['saved']
	   );

	   $insert=$bot->inse('book',$book);
	echo !$insert ? "NO":$insert;	   
//insert editor and get id		
	/*	if($_POST['editorlist']!=""){
	   $inseditor=(int)$_POST['editorlist'];
	   
	   }elseif($_POST['editor']!=''){
	   $editor=array('name'=>$_POST['editor']);
	   $inseditor=$bot->inse('editor',$editor);
	}else{
			$inseditor=0;
		}
//insert writer and get id
	   if(isset($_POST['writerlist'])){
	   $inswriter=(int)$_POST['writerlist'];
	   
	   }elseif($_POST['writer']!=''){
	   $writer=array('name'=>$_POST['writer']);
	   $inswriter=$bot->inse('writer',$writer);
	   }else{
		   $inswriter=0;
	   }
//insert cat and get id
	    if(isset($_POST['catlist'])){
	   $inscat=(int)$_POST['catlist'];
	   
	   }elseif($_POST['cat']!=''){
	   $cat=array('name'=>$_POST['cat']);
	   $inscat=$bot->inse('cat',$cat);
	   }else{
		   $inscat=0;
	   }

//insert img 
		if (isset($_POST['img_url'])){
			   $path = pathinfo($_POST['img_url']);
			   $ext=!empty($path['extension']) ? $path['extension'] : 'jpg';
			   $img=md5($_POST['img_url']).'.'.$ext;
			   if(copy($_POST['img_url'],$G['SITE_ROOT']."media/" .$img)){
				  $insimg =$img; 
			  }else{
				  $insimg='';
			  }
		}

	   $updatearray=array(	   
	   $inscat,
	   $inswriter,
	   $inseditor,	   
	   $insimg,
	   $insert	   
	   );		
	   $update = $bot->q("UPDATE book SET cat=?,writer=?,editor=?,img=? WHERE id=?",$updatearray);
	   
	   if($insert && $update){
		echo json_encode($updatearray);	   
	   }else{
		   echo json_encode($updatearray);	   
		}		
*/

}elseif($a=='newbkscat'){
	if($_POST['name']!=''){
	   $cat=array('name'=>$_POST['name'],'parent'=>$_POST['parent']);
	   $inscat=$bot->inse('cat',$cat);
	   echo json_encode($inscat);	   
	}
}elseif($a=='del'){
	$b=!empty($b) ? $b : 'book';
	$bot->q("DELETE FROM $b WHERE id=$c");

}elseif($a=='login'){
    $b= trim($b);
    $c= trim($c);
    echo json_encode($cms->login($b,$c));
}elseif($a=='copy'){
   if ($_SERVER['REQUEST_METHOD'] === "POST" && isset($_POST['url'])){
       $url=$_POST['url'];
       $path = pathinfo($url);
       $ext=!empty($path['extension']) ? explode('?',$path['extension'])[0] : 'jpg';
       $img=$_POST['name'].'.'.$ext;
       if(copy($_POST['url'],$G['GAIABASE']."media/" .$img)){
           //save to db
           $id=(int)$_POST['id'];
		   $table=$_POST['page'];
			$query="UPDATE $table SET img='$img' WHERE id=$id";
			$q=$bot->q($query);
            if($q) {
                echo $query;
            }else{echo $query;}
       }else{
           echo $query;
       }
   }
}elseif($a='radiolist'){
	$like= $c.'%';
	$sel=$bot->fetchList(array("id","name"),$b,"WHERE name LIKE '$like' LIMIT 3");
	echo !empty($sel) ? json_encode($sel) : json_encode('no');
}elseif($a=='cachereset'){
    $output=array();
    $output[]= opcache_reset();
//    $redispass = $GLOBAL['CONF']['redis_pass'];
//       $output[] = shell_exec("redis-cli -a $redispass flushall");
    echo implode('',$output);

    //$siteroot= SITE_ROOT.'gaia/c/test.c';
    //shell_exec("g++ $siteroot -o test1");
    //echo exec(SITE_ROOT.'gaia/c/test1');
}

