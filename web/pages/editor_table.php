<table class="TFtable">
<tr><td><a class="orderby" id="order_book.id">ID</a></td>
<td>img</td>
<td><a class="orderby" id="order_book.id">Writer</a></td>
<td><a class="orderby" id="order_book.title">Titles</a></td>
<td><a class="orderby" id="order_cat.name">Categories</a></td>
<td>Action</td>
</tr><tbody id="list1" class="group1">

<?php
for ($i=0;$i<count($sel);$i++) {
$postid = $sel[$i]['id'];
$img = !$sel[$i]['img'] ? $G['editordefaultimg'] : '/media/'. $sel[$i]['img'];
?>
<tr id="nodorder1_ postid?>" style="cursor:move;">
<td id="id<?=$postid?>"><span id="id<?=$postid?>"><?=$postid?></span></td>
<td><img id="img<?=$postid?>" src="<?=$img?>" width="30" height="30"></td>
<td><a href="/writers?id=<?=$sel[$i]['id']?>"><?=$sel[$i]['name'] != null ? $sel[$i]['name'] : ''?></a></td>
<td><a href="/book?id=<?=$sel[$i]['id']?>"><?=!empty($sel[$i]['books'])!= null ? implode(',',$sel[$i]['books']) : ''?></a></td>
<td><?=!empty($sel[$i]['categories']) ? implode(',',$sel[$i]['categories']) : ''?></a></td>
  <td><button type="button" class="close" aria-label="delete" id="del<?=$sel[$i]['id']?>"><span aria-hidden="true">&times;</span></button></td>
</tr>
<?php } ?>
