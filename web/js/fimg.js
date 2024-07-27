//find image from google api

$(document).on('click', "#savefimg", function () {
    var url = $("input[name='fitems']:checked").val();
    $('#bookimg').attr('src',url);
    var name=$("input[name='fitems']:checked").attr('data');
    console.log(name)
	var mode= G.mode=='' ? 'book':G.mode;
    //save to db
var params ={a:"copy",page:G.page,url:url,name:sanitizeFilename(name),id:G.id,table:mode};
console.log(params)	
    $.post('/ajax.php',params,function(data){
        console.log(data);
    })


})

if(G.id=='new'){
$(document).on('click', "input[name='fitems']", function () {
	var url = $("input[name='fitems']:checked").val();
	$('#form_book').append("<input type='hidden' name='img_url' value='"+url+"'>")
})
}

$(document).on('click', "#fimg", function () {

    if(G.page=='book') {
        var ftitle = $('#ftitle').val().trim();
        var writer = $('#writer').val();
        var editor = $('#editor').val();
        if(G.id=='new'){
			var query = $('input[name="title"]').val().trim()+' '
					+$('input[name="writer"]').val().trim()+' '
					+$('input[name="editor"]').val().trim();
		}else{
			var query = ftitle != '' ? ftitle : $('#title').val()+' '+writer+' '+editor;
		}
    }else{
		var extratag=G.page=="editor" ? "Εκδόσεις Λογότυπο":"";
        var name= $('#name').val().trim() +" "+extratag;
        var query = name != '' ? name : '';
    }
	console.log(query)
	if(query!=''){
		const url=`https://www.googleapis.com/customsearch/v1?num=6&searchType=image&fileType=jpg|gif|png&safe=off&q=${query}&cx=000897981024708010815%3Ah-9unlwfo7q&key=AIzaSyDNAIWEszhKEjT6E5fpT8OZjIJrPY_zRI8&alt=json`;
    $.get(url,function(res){
        var items='',totalres={};
        console.log(res)
        if(res.hasOwnProperty('items') && res.items.length >0){
        for(var i in res.items) {
		var width = res.items[i].image.width,height = res.items[i].image.height;
		totalres[i]=width+height;
                items += '<li class="list-inline-item">' +
                    '<input id="fimgres'+i+'" class="input-hidden" style="position: absolute;  opacity: 0;  width: 0;  height: 0;" type="radio" name="fitems" data="'+s.greeklish(res.items[i].title)+'" value="'+res.items[i].link+'">'+
                    '<label for="fimgres'+i+'"><img style="cursor: pointer;" src="'+res.items[i].link+'"></label>' +
                    '<div style="width: 120px;"><b>'+res.items[i].title+'</b></div>' +
                    '<div style="width: 120px;">'+res.items[i].snippet+'</div>' +
                    '<div style="width: 120px;">Res:'+width+'X'+height+'</div>' +
                    '</li>';
                '</li>';
            }
        }
        $('#fimgs').html(items);
		//check the higher resolution 
		const keyWithHighestValue = getKeyWithHighestValue(totalres);
		$('#fimgres'+keyWithHighestValue).prop("checked",true);
        if($( "#savefimg" ).length==0){$( "#fimgs" ).before('<button class="but_bot" id="savefimg">Save image</button>');}
        // $('#bookimg').attr('src',)
    })
	}
})