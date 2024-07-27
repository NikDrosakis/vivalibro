<?php include 'pages/head.php'; ?>
<div id="<?=in_array($G['page'],['login','register'])? 'wrapper_thin':'wrapper_inner'?>" style="display:block">
<?php include 'pages/header.php'; ?>
<?php
if($G['page']==""){
include 'pages/book.php';
}else{
include "pages/".$G['page'].'.php';
}
if($G['id']=="" && !in_array($G['page'],['login','register'])){
include 'pages/finfo.php';
}
?>
<?php include 'pages/footer.php'; ?>
</div>
<div id="modal" style="display:none;"><div class="modalbg"><div id="modalhead"><a id="modalclose">x</a><span id="modaltitle"></span></div><div id="modalbody"></div><div id="modalfoot"></div></div></div>
<script src="/js/load.js"></script>
</body>
</html>
