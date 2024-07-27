var bookdefaultimg= "/img/empty.png";
var book_status={"0" : "lost","1":"not owned","2" :"desired","3" : "shelve"};
var isread={0:"not read",1 :"reading",2 :"read"};
//s.ajaxfile='/bks/ajax.php';

function booklist(q,style) {
    var pagenum=!coo('pagenum') ? 1: coo('pagenum');    
	var params= {a:'list',page:G.page,pagenum:pagenum,q:q,mode:G.mode,name:G.name};
    console.log(params)
	//url,div,data,callback,method,datatype
 $.get('/ajax.php',params,function(res){
	 console.log(res)
	 if(res.titles.length>0){
	 console.log(Object.values(res.titles))
	 //top5 of all titles 
	 var top5=get_top_words(Object.values(res.titles));
	 console.log(top5)
	 var query=!!$('#search_book').val() ? $('#search_book').val(): top5.join(' ');
	search_googlebookapi(query);
	 }
	 //results to main page 
			$('#'+G.page).html(res.html);
             $('#count_'+G.page).text(res.count+ " "+G.page+"s");           
            s.ui.pagination.get(pagenum, res.count, 12,'book');
 },'json');
 
}
/*
* EVENTS
* */
$(document).on('click', "#ssearch_book", function () {
var q= $('#search_book').val().trim()
coo('page',1)
if(!!q){coo('q',q)}
    booklist(q);
})
.on('click', "#submit_cat", function () {
	    var formid=$("#form_cat")
    event.preventDefault();
    var form = formid.serializeArray();
	$.post('/ajax.php', form, function (data, textStatus, jqXHR) {		  
        if (data == 'no') {		
            console.log(textStatus)
            console.log(jqXHR)
            alert("Form cannot be submitted");
        } else {
            console.log(data)         
              location.href="/bks/cat";
            // formid.reset();
        }
    },'json');
	
})
.on('click', "#newbks", function () {
	$.post('/ajax.php', {a:"newbks"}, function (res) {
		console.log(res)
		location.href="/book?id="+res;
	})
})
.on('click', "#submit_book", function () {
    var formid=$("#form_book");
    event.preventDefault();
    var form = formid.serializeArray();
 //   form[s.size(form)]={name:'uid',value: coo('GID')}
   form[s.size(form)]={name:'saved',value: s.time()}
    // form[s.size(form)]={name:'status',value: {0:'unread',1:'reading',2:'read'}}
    //form[s.size(form)]={name:'excerpt',value: $('#excerpt').summernote('code')}
    //form[s.size(form)]={name:'content',value: $('#content').summernote('code')}
    console.log(form)
$.post('/ajax.php', form, function (data, textStatus, jqXHR) {
		  console.log(data)
        if (data == 'no') {		
            console.log(textStatus)
            console.log(jqXHR)
            alert("Form cannot be submitted");
        } else {
            console.log(data)         
          //    location.href="/bks";
            // formid.reset();
        }
    },'json');
})
/*
.on('keyup', "#writer, #editor, #cat", function () {
	var id=this.id;
	var val=this.value.trim();	
	 $.get('/ajax.php',{a:"radiolist",b:id,c:val},function(data){
	 console.log(data);
	 var list='';
	 if(data!='no'){
		 for(var i in data){		 
		 list +='<div style="display:flex"><input type="radio" name="'+id+'list" value='+i+' data-name="'+data[i]+'">'+data[i]+'</div>';
		 }
	 $('#'+id+'list').html(list)
	 }
	 
	 },'json');
})

.on('click', "input[name='writerlist'], input[name='editorlist'], input[name='catlist']", function () {
	var name = this.name.replace('list','');
	//if($(this).is(':checked')){$('input[name="'+this.name+'"]').prop("checked", false);}
	var sel= $("input[name='"+this.name+"']:checked").data('name');
	$('#'+name).val(sel)
})
*/	
.on('change', "select[id^='parent']", function () {
			var catid=this.id.replace('parent','')
			var obj = {
            id :catid,
            value : "parent='"+this.value+"'",
            table : "cat",
            where : "id="+catid
			}
			console.log(obj)
			s.db.queryhtml(obj, function(data){console.log(data);},"POST");
	})
	
	.on('keyup', "#name", function () {
		var name= this.value.trim();
		 s.db.query('UPDATE cat SET name="'+name+'" WHERE id='+G.id);
		 console.log(name)
	})
	/*
.on('change', "#status","#isread", function () {
	var obj = {
            id :G.id,
            value : this.id+"='"+this.value+"'",
            table : "book",
            where : "id="+s.get.id
			}
	s.db.queryhtml(obj, function(data){console.log(data);},"POST");
	})
	*/
.on('click', "#savewri", function () {
    var writer = $('#writer').val().trim();
    var writerlist = $('input[name=writerlist]:checked').val();
        if(typeof(writerlist)!='undefined'){
            s.db.func("q",'UPDATE book SET writer='+writerlist+' WHERE id='+G.id);
            var dataname= $('input[name=writerlist]:checked').attr('data-name');
            $('#writer').val(dataname);
        }else if(writer!=""){
            $.get(s.ajaxfile,{a:"inse",table:"writer",name:writer},function(data){
                console.log(data)
				if(data!='no'){
					s.db.func("q",'UPDATE book SET writer='+data+' WHERE id='+G.id);
					s.ui.notify('alert','Writer saved')
					}
            },'json');
        }else{
            s.ui.notify('alert','Please insert a writer');
        }
})
.on('click', "#savecat", function () {
        var cat= $('#cat').val().trim();
		var catlist = $('input[name=catlist]:checked').val();
         if(typeof(catlist)!='undefined'){
			 console.log('case update')
            s.db.query('UPDATE book SET cat='+catlist+' WHERE id='+G.id);
            var dataname= $('input[name=catlist]:checked').attr('data-name');
            $('#cat').val(dataname);
        }else if(cat!=""){
            $.get(s.ajaxfile,{a:"inse",table:"cat",name:cat},function(data){
                console.log(data)
				if(data!='no'){
					s.db.func("q",'UPDATE book SET cat='+data+' WHERE id='+G.id);
					s.ui.notify('alert','Category saved')
					}
            },'json');
        }else{
            s.ui.notify('alert','Please insert a category.')
        }
})
.on('click', "#savedi", function () {
        var editor= $('#editor').val().trim();
		var editorlist = $('input[name=editorlist]:checked').val();
         if(typeof(editorlist)!='undefined'){
			 console.log('case update')
            s.db.query('UPDATE book SET editor='+editorlist+' WHERE id='+G.id);
            var dataname= $('input[name=editorlist]:checked').attr('data-name');
            $('#editor').val(dataname);
        }else if(editor!=""){
			console.log('case insert')
            $.get(s.ajaxfile,{a:"inse",table:"editor",name:editor},function(data){
                console.log(data)
				if(data!='no'){
					s.db.func("q",'UPDATE book SET editor='+data+' WHERE id='+G.id);
					s.ui.notify('alert','Editor saved')
					}
            },'json');
        }else{
            s.ui.notify('alert','Please insert a category.')
        }
})
.on('keyup change', "#title, #summary, #notes, #tag, #vol, #status, #isread", function () {
	var id=this.id,val=this.value.trim();
	/*
	if (this.id == 'title') {
		$('#titlebig').text(this.value);
	}
	         var obj = {
            id :G.id,
            value : this.id+"='"+this.value+"'",
            table : "book",
            where : "id="+s.get.id
			}
	s.db.queryhtml(obj, function(data){console.log(data);},"POST");
*/		
		var params={a:"bookedit",b:id,val:val,id:parseInt(G.id)};
	  console.log(params)
	  $.get("/ajax.php",params,res=>{
		  console.log(res);
		  if(id=="title")$('#titlebig').text(val)
	  })
})
//delete
.on('click', "button[id^='del']", function () {
	var id=this.id.replace('del','');
	s.confirm("This book record will be deleted. Are you sure?",function(res){
	if(res){
		var params={a:"del",b:G.page,c:id};
		console.log(params)
		 $.get('/ajax.php',params,function(data){
			$('#nodorder1_'+id).hide();
		 })
		 }
	})	
})
//find image from google api
.on('click', "#savefinfo", function () {
    var sel= $("input[name='fitems']:checked"). val();
    $('#bookimg').attr('src',sel);
    //download to media
    //save to db
})
    .on("click","a[id^='order_']",function(){
        var name= this.id.replace('order_','')
//log(name)
        var orderby= coo('orderby')== name+' ASC' ? name+' DESC': name+' ASC';
        coo('orderby',orderby);
        coo.delete('page');
        // reset('mgr')
        location.reload();
    })


//page
.on('click', "button[id^='page_']", function () {
    var page= this.id.replace('page_', '');
    coo('pagenum',page);
    s.ui.reset('#bookbox');
    booklist()
})


//experimental run neo4j
// $.get("https://aimd5.com:7473/db/data/",function(neo){
// console.log(neo)
// },'json')
//lista με writers , editors 
  .on('keyup',"input[fun='lookup']",function(){
	lookup(this)
  })
  //specific job help
  .on('click',"button[id^='new_']",function(){
	  var param=this.id.replace("new_","");
	  var val=$('#'+param).val().trim();
	  var params={a:"new",b:param,c:val,id:parseInt(G.id)};
	  	  $.post("/ajax.php",params,res=>{
		  console.log(res);
		  $(this).hide();
	  })
  })
  .on('click',"li[id^='loo']",function(){
    var param=this.parentNode.id.replace('loolist_','');
	console.log(param)
      var optionvalue= this.id.replace('loo','');
      var optionid= $(this).attr('val');
      $('#loolist_'+param).hide();
	  //save 
	  var params={a:"lookupsave",b:param,c:parseInt(optionid),id:parseInt(G.id)};
	  console.log(params)
	  $.get("/ajax.php",params,res=>{
		  console.log(res);
		  $('#'+param).val(optionvalue)
	  })
  })
  
  function lookup(obj){
	  	var val=obj.value.trim().charAt(0).toUpperCase() + obj.value.trim().slice(1),param=obj.id,
	listi='',length=obj.value.length,counter=0;
	$.get("/ajax.php",{a:"lookup",b:param,c:val},function(newd){
	var re=new RegExp(val,"i"),keys=Object.keys(newd),values=Object.values(newd),
     z={},newd= keys.filter(val=>re.test(val)).map(x=>{z[x]=values[keys.indexOf(x)];return z})[0]
    for (var j in newd){
    var piece= j.split(val);
	console.log(piece)
    listi +='<li id="loo'+j+'" val="'+newd[j]+'">' +piece[0]+
        (!!piece[1] ? '<span style="background:yellow">'+val+'</span>'+piece[1]:'')+
        '</li>';
      counter +=1;
    }
	  if (counter >0 && length >0){
      $('#loolist_'+param).html(listi).show();
      //$('#lookupcounter').text(counter)
    } else {
      $('#loolist_'+param).hide()
      if(length > 8){$('#new_'+param).show();}
	  
 //     $('#lookupcounter').text(0);
    }
	},'json');
  }
  
  $(document).on("click",'#forgot_password',function () {
    s.dialog({
        message: "<input type='text' id='forgotmail'>",
        title: "INSERT_EMAIL_ADDRESS",
        buttons: {
            main: {
                label: "Send",
                className: "btn-primary",
                callback: function () {
                    var forgotmail = $('#forgotmail').val();
                    // console.log(forgotmail)
                    if (forgotmail != '') {
                        $.get(s.ajaxfile, {a: 'forgot_password', b: forgotmail}, function (data) {
                            // console.log(data)
                            if (data == 'yes') {
                                s.modal("EMAIL_SENT_MAILBOX");
                            } else {
                                s.modal('Email can not be sent right now');
                            }
                        })
                    }
                }
            }
        }
    })
});