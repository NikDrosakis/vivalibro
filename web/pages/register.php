<div class="register">
<div id="bg">
<div class="module">
<div id="login-box">

<h1>Signup</h1>
</div>

	<div id="messageBoard" style="color:red;float:left"></div>
	<div id="registration"></div>

	
	<input class="input" id="gs-mail" required type="text" autocomplete="on" placeholder="Email">
	<input class="input" id="gs-name" onkeyup="this.value=s.greeklish(this.value)" required type="text" autocomplete="on" placeholder="Username">
	<input class="input" id="gs-firstname" required type="text" autocomplete="on" placeholder="Firstname">
	<input class="input" id="gs-lastname" required type="text" autocomplete="on" placeholder="Lastname">
	<input class="input" id="gs-pass" required type="password" placeholder="Password">
	<input class="input" id="gs-pass2" required type="password" placeholder="Repeat Password">
	<button onclick="s.init.register.submit()" class="button key13">Enter</button>
	<a class="input" href="login">Login</a>
</div>

</div>
</div>
<script src="/js/register.js"></script>