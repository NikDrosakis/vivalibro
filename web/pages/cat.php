<?php $sel= $bot->fa("SELECT * FROM cat ORDER BY name"); ?>
<div class="post-section">
<button onclick="location.href='/cat?id=new'" class='btn btn-default'>New</button>
<!-- CAT NEW -->
<?php if($G['id']=='new'){ ?>
<?php $table='cat';?>
<div style="background:white;margin:1%;padding:1%">
<h2 style="cursor:pointer">New Category</h2>
<section id="newcat">

<form id='form_<?=$table?>'>
<input type='hidden' name='a' value='newbkscat'>
<label>Name:<label><input class="form-control" name="name" value="">
<label>parent:  <label>
<select class="form-control" name="parent">
<option value="0">None</option>
<?php for($i=0;$i<count($sel);$i++){ $catid=$sel[$i]['id'];	?>
<option value="<?=$catid?>" <?=$sel[$i]['parent']==$catid ? "selected=selected" :""?>><?=$sel[$i]['name']?></option>
<?php } ?>
</select>


<button class='btn btn-default' id='submit_<?=$table?>'>Save new <?=$table?></button>
</form>
</section>
</div>

<!-- CAT EDIT -->
<?php }elseif($G['id']!=''){ ?>

	<!-- EDIT / SHOW-->
<a href="/bks">Back to List</a>
<span style="float:left;" onclick="s.ui.goto(['previous','cat','id',g.get.id,'/cat?id='])" class="next glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
<span style="float:right" onclick="s.ui.goto(['next','cat','id',g.get.id,'/cat?id='])" class="next glyphicon glyphicon-chevron-right" aria-hidden="true"></span>

<?php  $sel= $this->fetch("SELECT * FROM cat WHERE id=?",array($G['id'])); ?>

<?php include 'fimg.php'; ?>

<label>Name:<label><input class="form-control" id="name" value="<?=$sel['name']?>">
<div class="vertical-menu"  id="catlist"></div>
</section>

<!-- CAT LIST -->
<?php }else{  ?>

<br/>
<div style="color:red"><?=count($sel)?> categories</div>

<table class="TFtable">    
<tr>			
	<td>ID</td>
	<td>img</td>
	<td>Cat</td>	
	<td>Parent</td>	
	<td>Action</td>	
</tr>			
<tbody id="list1" class="group1">
<?php for($i=0;$i<count($sel);$i++){
	$catid=$sel[$i]['id'];
	$parentid=$sel[$i]['parent'];
	?>
	<tr id="nodorder1_<?=$catid?>" style="cursor:move;">                        
		<td id="id<?=$catid?>"><span id="id<?=$catid?>"><?=$catid?></span></td>
		<td><img id="img<?=$catid?>" src="<?=$sel[$i]['img']=='' ? "/img/empty.png": UPLOADS.'thumbs/'.$sel[$i]['img']?>" width="30" height="30"></td>                       
		<td><a href="/cat?id=<?=$sel[$i]['id']?>"><?=$sel[$i]['name']?></a></td>
		<td>
		<select class="form-control" id="parent<?=$catid?>">
		<option value="0">None</option>
		<?php for($j=0;$j<count($sel);$j++){ ?>
		<option value="<?=$sel[$j]['id']?>" <?=$parentid==$sel[$j]['id'] ? "selected=selected" :""?>><?=$sel[$j]['name']?></option>
		<?php } ?>
		</select>		
		</td>
		
		<td><button class="btn btn-danger" id="del<?=$sel[$i]['id']?>">Delete</button></td>
	</tr>
<?php } ?>

</tbody></table>

<?php } ?>
</div>