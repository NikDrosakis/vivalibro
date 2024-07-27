<div class="row">
<?php 
for ($i=0;$i<count($sel);$i++) {
$postid = $sel[$i]['id'];
$img = !$sel[$i]['img'] ? $G['writerdefaultimg'] : SITE_URL.'media/'. $sel[$i]['img'];
?>
<div style="display:flex" id="nodorder1_<?=$postid?>"class="card">
<button  type="button" class="close" aria-label="delete" id="del<?=$sel[$i]['id']?>"><span aria-hidden="true">&times;</span></button>
<img style="float: left;width: auto;height: 100%;" id="img<?=$postid?>" src="<?=$img?>">
<div class="cardleft"><span><a href="/writer?id=<?=$sel[$i]['id']?>"><?=$sel[$i]['name'] != null ? $sel[$i]['name'] : ''?></a></span>


<!---list of books--->
<ul style="margin: 14px 0px 0px 0x;">
<?php if(!empty($sel[$i]['books'])){ ?>
<li class="list"><?=implode('</li><li class="list">',$sel[$i]['books'])?></li>
<?php }else{ ?>
<li>No books listed</li>
<?php } ?>
</ul>
</div>
<!---list of catogories--->
<?php if(!empty($sel[$i]['categories'])){ ?>
<div class="tag">
<a href="/cat?id=<?=implode(',',$sel[$i]['categories'])?>"><?=implode(',',$sel[$i]['categories'])?></a>
</div>
<?php } ?>
</div>
<?php } ?>

</div>