<div class="post-section">
<?php
$sel= $bot->f("SELECT * FROM user WHERE id=?",array($_COOKIE['GSID']));
$img=$sel['img']=='' ? $bookdefaultimg: '/media/'.$sel['img'];
?>
<!-- EDIT / SHOW-->
<a href="/writer">Back to Writers</a>
<span style="float:left;" onclick="g.ui.goto(['previous','writer','id',g.get.id,'/writer?id='])" class="next glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
<span style="float:right" onclick="g.ui.goto(['next','writer','id',g.get.id,'/writer?id='])" class="next glyphicon glyphicon-chevron-right" aria-hidden="true"></span>

<div style="width:98%;background:#fcfbec">
    <h2 id="titlebig"><?=$sel['name']?></h2>

    <div style="width:30%;float:left;margin:15px 15px 15px 15px;">
        <img id="bookimg" src="<?=$img?>" style="max-height:350px;">
    </div>

    <div style="display:inline-block; width:56%;margin:2%">
        <label>Name:</label><input class="input" id="name" value="<?=$sel['name']?>">
        <label>Firstname:</label><input class="input" id="firstname" value="<?=$sel['firstname']?>">
        <label>Lastname:</label><input class="input" id="lastname" value="<?=$sel['lastname']?>">
        <label>Email:</label><input class="input" id="mail" value="<?=$sel['mail']?>">
        <div>
            <label>Bio: </label><textarea class="input" id="content"><?=$sel['content']?></textarea>
            <button class="btn btn-primary" id="update">Save Writer</button>
        </div>


    </div>
</div>
</div>