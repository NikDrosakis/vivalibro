$(document)
	.on('keyup', '#gs-pass', function (e) {
		var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
		var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
		var enoughRegex = new RegExp("(?=.{6,}).*", "g");
		var pass = $(this).val();
		if (false == enoughRegex.test() && pass.length < 4) {
			$('#messageBoard').html("<span style='color:green'>PASSWORD_SHORT</span>");
		} else if (strongRegex.test(pass)) {
			$('#messageBoard').html("STRONG_PASSWORD");
		} else if (mediumRegex.test(pass)) {
			$('#messageBoard').html("MEDIUM_PASSWORD");
		} else {
			//  $('#messageBoard').className = 'error';
			$('#messageBoard').html("WEAK_PASSWORD");
		}
		return true;
	})
	.on('keyup','#pass1',function(e) {
     var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
     var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
     var enoughRegex = new RegExp("(?=.{6,}).*", "g");
     if (false == enoughRegex.test($(this).val())) {
             $('#messageBoard').html("PASSWORD_SHORT");
     } else if (strongRegex.test($(this).val())) {
             $('#messageBoard').html("STRONG_PASSWORD");
     } else if (mediumRegex.test($(this).val())) {
              $('#messageBoard').html("MEDIUM_PASSWORD");
     } else {
           //  $('#messageBoard').className = 'error';
             $('#messageBoard').html("WEAK_PASSWORD");
     }
     return true;
	})
	.on('keyup','#pass2',function(){
		var password= _('#pass1').value;
		 if(password != this.value && password.length > 2)
		{ 
		$('#messageBoard').html("PASSWORD_NOT_MATCH")
		}else if (password == this.value){
		$('#messageBoard').html("PASSWORD_MATCH")
		}else{
		password='';
		}
	})
	.on('keyup','#username',function(){
		var a= 'name_exist';
		var b= _('#username').value;
		$.ajax({ 
			type: 'GET', 
			url: s.ajaxfile,
			data: { a:a, b:b },
			dataType: 'text html',
			success: function (data) {
			 $('#messageBoard').html(data);
			}
			});
	})
	.on('keyup','#mail',function(){
		var a= 'mail_validate';
		var b= _('#mail').value;
		$.ajax({ 
			type: 'GET', 
			url: '/ajax/register.ajax.php', 
			data: { a:a, b:b },
			dataType: 'text html',
			success: function (data) {
			 $('#messageBoard').html('data');
			}
			});
	})
	.on('keypress',"#name, #mail, #firstname, #lastname",function(e) {
	var notallowed=[32,42,44,46,60,61,63];
	if (notallowed.indexOf(e.which) > -1) {
	   $('#messageBoard').html("/.,\*= characters are not allowed");
    }
	})
	.on('keyup', '#gs-pass2', function () {
		var password = $('#gs-pass').val();
		if (password != this.value && password.length > 2) {
			$('#messageBoard').html("PASSWORD_NOT_MATCH")
		} else if (password == this.value) {
			$('#messageBoard').html("<span style='color:green'>PASSWORD_MATCH</span>")
		} else {
			password = '';
		}
	})
	.on('keyup', '#gs-name', function () {
		var b = $('#gs-name').val();
		if (b.length > 4) {
			s.db.func('login', 'name_exist', b, function (name_exist) {
				if (name_exist == true) {
					$('#messageBoard').html("<span style='color:red'>Name exists</span>");
				} else {
					$('#messageBoard').html("<span style='color:green'>Username is OK!</span>");
				}
			})
		} else {
			$('#messageBoard').html("<span style='color:red'>Try a longer name...</span>");
		}
	})
	.on('keyup', '#gs-mail', function () {
		var b = $(this).val();
		if (b.length > 3 && b.indexOf('@') > -1) {
			s.db.func('login', 'validate', b, function (mail) {
				if (mail == true) {
					$('#messageBoard').html("<span style='color:green'>Email is correct!</span>");
				} else {
					$('#messageBoard').html("<span style='color:red'>Email is not correct or already exists!</span>");
				}
			});
		} else {
			$('#messageBoard').text('');
		}
	})
	.on('keypress', "#gs-name, #gs-mail, #gs-firstname, #gs-lastname", function (e) {
		var notallowed = [32, 42, 44, 46, 60, 61, 63];
		if (notallowed.indexOf(e.which) > -1) {
			$('#messageBoard').text("/.,\*= characters are not allowed");
		}
	});