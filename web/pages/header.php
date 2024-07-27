<div class="topnav" id="myTopnav">
<?php if($my['libid']!=0){ ?>
    <a href="/" class="<?=$G['page']==''?'active':''?>">Home</a>
<?php } ?>
    <a href="/libraries" class="<?=$G['page']=='libraries'?'active':''?>">Libraries</a>
    <a class="<?=$G['page']=='ebook'?'active':''?>" href="/ebook">Ebooks</a>
    <a class="<?=$G['page']=='writer'?'active':''?>" href="/writer">Writers</a>
    <a class="<?=$G['page']=='editor'?'active':''?>" href="/editor">Editors</a>
    <a class="<?=$G['page']=='cat'?'active':''?>" href="/cat">Categories</a>

	<div id="searchbox">
    <input id="search_book" placeholder="search <?=$G['mode']?>">
    <button type="button" style="border:none;background:none;margin:0 0 0 -32px" aria-hidden="true" id="ssearch_book">GO</button><button type="button" onclick="coo('pagenum');$('#search_book').val('');booklist()" style="border:none;background:none;margin:0 0 0 0" aria-hidden="true" id="ssearch_book">RESET</button>
</div>
	<?php if($loggedin){ ?>
	<a class="<?=$G['page']=='profile'?'active':''?>" href="/profile">Profile</a>
<a onclick="s.init.logout()" id="logout">Logout</a>
<?php }else{ ?>
<a class="<?=$G['page']=='login'?'active':''?>" style="cursor:pointer" onclick="s.redirect(&quot;/login&quot;)">Login</a>
<?php } ?>
</div>
