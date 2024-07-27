   <div class="post-section">
<?php
if($G['id']!=''){ 
include "pages/book_edit.php";
// BOOK LIST 
}else{
  ?>
   <h2 style="cursor:pointer">My Library</h2>
   <div style="margin-top:14px;width:100%;border:none;background:none;">
   <button type="button" style="border:none;background:none;" id="newbks">New Manual Entry</button>
   <a type="button" style="border:none;background:none;" href="/live">New Live Entry</a>
<?php include "pages/styles.php"; ?>
	</div>
  <div id="book">
    <!--APPEND BOXY OR ARCHIVE STYLE-->
  </div>
  <div id="pagination" class="paginikCon"></div>
<?php } ?>
	</div>
