<!----------------------------the MENU---------------------------->
<?php $dsh=$G['page']=="dsh" ? true : false; ?>
<div id="dashbar" style="display:block">
<img id="logo" src="/img/logo.png">
<div id="menuwrapper">
<ul>
    <?php
    $permissions= $bot->f("SELECT permissions FROM usergrp WHERE id=?",array($_COOKIE['GSGRP']))['permissions'];
    //$permissions=json_decode($permissions,true);
    if(is_json($permissions)){
        $permissionList=json_decode($permissions,true);
        foreach($this->apages as $mpage){
            if(in_array($mpage,$permissionList)){
                $targ= $mpage == $G['mode'] ? 'style="color:greenyellow;"' : '';
                ?>
                <li <?=$mpage==$G['mode'] ? $targ : ''?>>
                    <a id="paging_menu" href="/dsh/<?=$mpage?>">
                        <!--$dsh ? "/dsh/$mpage":"?dsh=$mpage"-->
                        <span style="color: inherit;" class="glyphicon glyphicon-<?=icon($mpage)?>" aria-hidden="true"></span>
                        <?=$mpage?>
                    </a>
                </li>
            <?php 	}}}  ?>
    <li>
        <a style="<?='home'==$G['mode'] ? 'color:greenyellow;' : ''?>" href='<?=$dsh ? "/dsh/home":"?dsh=home"?>'>
            <span style="color: inherit;" class="glyphicon glyphicon-<?=icon('home')?>" aria-hidden="true"></span>home</a>
    </li>
</ul>
</div>
</div>

<div id="gs-header">
<?php if($loggedin && $ismobile){ ?>
<span id="menu-opener2" style="cursor:pointer;float:right;margin: 14px 13px 2px -28px;color: white;" class="menuopener gs-mobile"></span>
<?php } ?>
<ul class="gs-topheader" style="margin: 10px;list-style-type:none">

<?php if(isset($_COOKIE['GSID']) && $_COOKIE['GSGRP'] > 1 && $G['page'] != 'dsh'){ ?>
<li><a href="/dsh">Dashboard</a></li>
<?php } ?>

<?php
$permissions= $bot->f("SELECT permissions FROM usergrp WHERE id=?",array($_COOKIE['GSGRP']))['permissions'];
//$permissions=json_decode($permissions,true);
if(is_json($permissions)){
$permissionList=json_decode($permissions,true);
foreach($this->apages as $mpage){
    if(in_array($mpage,$permissionList)){
        $targ= $mpage == $G['mode'] ? 'style="color:greenyellow;"' : '';
        ?>
        <li>
            <a <?=$mpage==$G['mode'] ? $targ : ''?> id="paging_menu" href="/dsh/<?=$mpage?>">
                <!--$dsh ? "/dsh/$mpage":"?dsh=$mpage"-->
                <span style="color: inherit;" class="glyphicon glyphicon-<?=icon($mpage)?>" aria-hidden="true"></span>
                <?=$mpage?>
            </a>
        </li>
    <?php 	}}}  ?>
<li><a style="<?='home'==$G['mode'] ? 'color:greenyellow;' : ''?>" href='<?=$dsh ? "/dsh/home":"?dsh=home"?>'><span class="glyphicon glyphicon-<?=icon('home')?>" aria-hidden="true"></span>home</a></li>

<?php if($G['page'] == 'dsh'){ ?>
<li><a href="/">Public</a></li>
<?php } ?>

<?php if($loggedin){ ?>

<?php if($G['mode']!='global'){ ?>
    <li><a style="cursor:pointer" onclick="if(G.page=='dsh'){location.href='/dsh/global'}else{s.coo('globs_tab','pvar');s.varg_switch();}"><span class="glyphicon glyphicon-equalizer" aria-hidden="true"></span>Globals</a></li>
<?php } ?>

<!--<li><a class="white" href="/gaiasys" target="_blank"><span class="glyphicon glyphicon-question-sign" aria-hidden="true"></span> Doc</a></li>'-->
<?php } ?>

<?php if($loggedin){ ?>
<li><astyle="cursor:pointer" onclick="s.init.logout()" id="logout"><span class="glyphicon glyphicon-hand-right" aria-hidden="true"></span>Logout</a></li>
<?php }else{ ?>
<li><a style="cursor:pointer" onclick="s.redirect(&quot;/login&quot;)"><span class="glyphicon glyphicon-hand-right" aria-hidden="true"></span>Login</a></li>
<?php } ?>
</ul>
<div class="gs-topheader1">

<?php if($loggedin && $this->mobile){ ?>
<div id="menu-opener"><span style="cursor:pointer;margin: 8px 0 0 8px;" class="menuopener"></span></div>
<?php } ?>


<div class="logo_image_id">
<img src="<?=isset($_COOKIE['GSIMG']) ? UPLOADS.$_COOKIE['GSIMG'] : "/img/user.png"?>" width="32" height="32" style="margin-top: 3px;">
</div>

<div style="cursor:pointer;float:right; margin-top: 5px;font-size: 20px;position: relative;">
<a onclick="event.preventDefault();s.coodel('lang');location.href='?lang=en'">english</a> |
<a onclick="event.preventDefault();s.coo('lang','gr');location.href='?lang=gr'">ελληνικά</a>
</div>
<div class="gs-desktop"><p style="margin: 0 0 0 0;"><?=!isset($_COOKIE['GSGRP']) ? 'Welcome!' : $this->usergrps[$_COOKIE['GSGRP']]?></p>
<a style="margin: 0 0 0 0;" href="/dsh/user?uid=<?=$_COOKIE['GSID']?>"><?=isset($_COOKIE['GSNAME']) ?  $_COOKIE['GSNAME'] : ''?></a>
</div>

</div>
</div>