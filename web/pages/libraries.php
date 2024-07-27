<?php $sel=$bot->fa("SELECT * from lib"); ?>

<style>
.post-section {
	width: 96%;
	background-color: #F0F2F5;
    padding: 20px 20px 40px 20px;
}
</style>
<div class="post-section">
<button onclick="location.href='/cat?id=new'" class='btn btn-default'>New</button>
<!-- CAT NEW -->
<?php if($G['id']=='new'){ ?>
<?php $table='lib';?>
<div style="background:white;margin:1%;padding:1%">
<h2 style="cursor:pointer">New Category</h2>
<section id="newcat">

<form id='form_<?=$table?>'>
<input type='hidden' name='a' value='newbkscat'>
<label>Name:<label><input class="form-control" name="name" value="">


<button class='btn btn-default' id='submit_<?=$table?>'>Save new <?=$table?></button>
</form>
</section>
</div>

<!-- lib EDIT -->
<?php }elseif($G['id']!=''){ ?>

	<!-- EDIT / SHOW-->
<a href="/bks">Back to List</a>
<span style="float:left;" onclick="s.ui.goto(['previous','lib','id',g.get.id,'/lib?id='])" class="next glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
<span style="float:right" onclick="s.ui.goto(['next','lib','id',g.get.id,'/lib?id='])" class="next glyphicon glyphicon-chevron-right" aria-hidden="true"></span>

<?php  $sel= $bot->f("SELECT * FROM lib WHERE userid=?",array($my['id'])); ?>


<label>Name:<label><input class="form-control" id="name" value="<?=$sel['name']?>">
<div class="vertical-menu"  id="catlist"></div>
</section>

<!-- lib LIST -->
<?php }else{  ?>

<br/>
<div style="color:red"><?=count($sel)?> libraries</div>

<table class="TFtable">    
<tr>			
	<td>ID</td>
	<td>img</td>
	<td>Library</td>	
	<td>Action</td>	
</tr>			
<tbody id="list1" class="group1">
<?php for($i=0;$i<count($sel);$i++){
	$catid=$sel[$i]['id'];
	?>
	<tr id="nodorder1_<?=$catid?>" style="cursor:move;">                        
		<td id="id<?=$catid?>"><span id="id<?=$catid?>"><?=$catid?></span></td>
		<td><img id="img<?=$catid?>" src="<?=$sel[$i]['img']=='' ? "/img/empty.png": UPLOADS.'thumbs/'.$sel[$i]['img']?>" width="30" height="30"></td>                       
		<td><a href="/lib?id=<?=$sel[$i]['id']?>"><?=$sel[$i]['name']?></a></td>

		
		<td><button class="btn btn-danger" id="del<?=$sel[$i]['id']?>">Delete</button></td>
	</tr>
<?php } ?>

</tbody></table>

<?php } ?>
</div>