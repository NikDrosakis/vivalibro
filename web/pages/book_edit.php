	<!-- EDIT / SHOW-->
<?php 
include "page/backto.php";
$sel= $bot->f("SELECT book.*,bookuser.notes,bookuser.isread,
writer.name as writer,
cat.name as cat,
editor.name as editor
FROM book 
left join writer on book.writer=writer.id
left join cat on book.cat=cat.id
left join bookuser on book.id=bookuser.bookid
left join editor on book.editor=editor.id
WHERE book.id=?",array($G['id']));

    $img=$sel['img']=='' ? $G['bookdefaultimg']: $G['SITE_URL'].'media/'.$sel['img'];
    ?>
    <div style="width:98%;background:#fffef4;min-height: 600px">
<h2 id="titlebig"><?=$sel['title']?></h2>
<?php include 'pages/fimg.php'; ?>
        <div style="width:30%;float:left;margin:15px 15px 15px 15px;">
            <img id="bookimg" src="<?=$img?>" style="max-height:350px;">
        </div>

	
<div style="display:inline-block; float:left;width:56%;margin:2%">
<label>Title:</label><input class="input" id="title" value="<?=$sel['title']?>">

<div>
<label>Writer:</label>
<button fun="new" id="new_writer"  class="but_new">New</button>
<input class="input" fun="lookup" id="writer" value="<?=$sel['writer']?>">
<ul id="loolist_writer" class="loolist"></ul>
<!--<div class="vertical-menu"  id="writerlist"></div>
<button class="btn btn-primary" id="savewri">Save Writer</button>-->
</div>
    <div style="display:flex"> <div style="width:75%">
<label>Editor:</label>
<button fun="new" id="new_editor" class="but_new">New</button>
<input class="input" fun="lookup" id="editor" value="<?=$sel['editor']?>">
<ul id="loolist_editor" class="loolist"></ul>
<!--<div class="vertical-menu"  id="editorlist"></div>
<button class="btn btn-primary" id="savedi">Save Editor</button>-->
   </div>
   <div style="display:flex">
<label>Edition Year:</label>
<input class="input" style="display:inline;clear: left;width:20%" type="number" min="1977" max="2024" id="edited" value="<?=$sel['edited']?>">
      </div>
      </div>
	  
    <div>
<label>Category: </label>
<button fun="new" id="new_editor" class="but_new">New</button>
<input class="input" fun="lookup" id="cat" value="<?=$sel['cat']?>">
<ul id="loolist_cat" class="loolist"></ul>
<!--<div class="vertical-menu"  id="catlist"></div>
<button class="btn btn-primary" id="savecat">Save Category</button>-->
        </div>

<label>Status:  </label>
<select class="input" id="status">
<?php foreach($G['book_status'] as $statusid => $statusval){ ?>
<option value="<?=$statusid?>" <?=$sel['status']==$statusid ? "selected=selected" :""?>><?=$statusval?></option>
<?php } ?>
</select>

<label>Volume:</label><input class="input" id="vol" value="<?=$sel['vol']?>">
<label>Tags: </label><input class="input" id="tag" value="<?=$sel['tag']?>">
<label>Summary: </label><textarea class="input" id="summary"><?=$sel['summary']?></textarea>
</div>

<div id="fimgbox">
<label>Is Read:  </label>
<select class="input" id="isread">
<?php foreach($G['isread'] as $readid => $readval){ ?>
<option value="<?=$readid?>" <?=$sel['isread']==$readid ? "selected=selected" :""?>><?=$readval?></option>
<?php } ?>
</select>
<label>Notes: </label><textarea class="input" id="notes"><?=$sel['notes']?></textarea>
</div>



</div>