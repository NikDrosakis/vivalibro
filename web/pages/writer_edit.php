<!--writers edit--->
<?php
$sel= $bot->f("SELECT * FROM writer WHERE id=?",array($G['id']));
$img=$sel['img']=='' ? $G['writerdefaultimg']: '/media/'.$sel['img'];
?>
	<!-- EDIT / SHOW-->
<a href="/writer">Back to Writers</a>
<span style="float:left;" onclick="g.ui.goto(['previous','writer','id',g.get.id,'/writer?id='])" class="next glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
<span style="float:right" onclick="g.ui.goto(['next','writer','id',g.get.id,'/writer?id='])" class="next glyphicon glyphicon-chevron-right" aria-hidden="true"></span>

<div style="width:98%;background:#fffef4;min-height: 600px">
<h2 id="titlebig"><?=$sel['name']?></h2>
<?php include 'fimg.php'; ?>
    <div style="width:30%;float:left;margin:15px 15px 15px 15px;">
        <img id="bookimg" src="<?=$img?>" style="max-height:350px;">
    </div>
	
<div style="display:inline-block; width:56%;margin:2%">
<label>Name:</label><input class="input" id="name" value="<?=$sel['name']?>">

<div>
<label>Summary: </label><textarea class="input" id="summary"><?=$sel['summary']?></textarea>
<button class="btn btn-primary" id="update">Save Writer</button>
</div>


</div>
</div>