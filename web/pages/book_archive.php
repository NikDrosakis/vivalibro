<div class="row">

<?php 
for ($i=0;$i<count($sel);$i++) {
$postid = $sel[$i]['id'];
$img = !$sel[$i]['img'] ? "/img/empty.png" : SITE_URL.'media/'. $sel[$i]['img'];
?>
<div id="nodorder1_<?=$postid?>"class="card">
<button  type="button" class="close" aria-label="delete" id="del<?=$sel[$i]['id']?>"><span aria-hidden="true">&times;</span></button>
<img style="float: left;width: auto;height: 100%;" id="img<?=$postid?>" src="<?=$img?>">
<div class="cardleft"><span><a href="/writer?id=<?=$sel[$i]['writer']?>"><?=$sel[$i]['writername'] != null ? $sel[$i]['writername'] : ''?></a></span>
<a data="pdf" style="display:grid;margin:35px 0px 35px 0px;color:#000000;font-size:15px;" href="<?=$sel[$i]['booklink']?>"><?=$sel[$i]['title']?></a>
<div style="margin-top: 15px;"><a href="/editor?id=<?=$sel[$i]['editor']?>"><?=$sel[$i]['editorname'] != null ? $sel[$i]['editorname'] : ''?></a></div>
</div>
<?php if($sel[$i]['catname'] != null){ ?>
<div class="tag">
<a href="/bks/cat?id=<?=$sel[$i]['cat']?>"><?=$sel[$i]['catname']?></a>
</div>
<?php } ?>
<div class="tag3"><?=$G['isread'][$sel[$i]['isread']]?></div>
<div class="tag2"><?=$G['book_status'][$sel[$i]['status']]?></div>
</div>
<?php } ?>

</div>