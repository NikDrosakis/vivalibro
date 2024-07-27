/*
* DUCKDUCKGO API
DuckDuckGo Search Engine Results API
* */
$(document).on('click', "#finfo", function () {
    var q= $('#finfotitle').val().trim();
	const apiKey="c070a5c543d6aa0734b815fb1583bd729327470c2c03e1a85daa1937a54ac5f7"
    $.get(`https://serpapi.com/search?engine=duckduckgo&q=${q}&api_key=${apiKey}`,function(res){
		console.log(res)
        var items='';
        var res= JSON.parse(res);
        for(var i in res.RelatedTopics){
            items += '<li class="item">'+res.RelatedTopics[i].Text+'</li>';
        }
        $('#inforeply').html('<h2>'+res.AbstractText+'</h2>');
        $('#finfos').html(items);

        // $( "#finfos" ).after('<button id="savefinfo">Save Info</button>');
        // $('#bookimg').attr('src',)
    })
})

/*
* GOOGLE BOOKS
* */
$(document).on('click', "#fbooks", function () {
    var q= $('#finfotitle').val().trim();
 search_googlebookapi(q);
})
