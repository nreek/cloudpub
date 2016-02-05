<html>
<head>
	<title>CloudPub</title>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<meta name="viewport" content="user-scalable=0, initial-scale=0.7, width=device-width">
	<link rel="stylesheet" href="/src/plugins/fontawesome/css/font-awesome.min.css"/>
	<link rel="stylesheet" href="/src/css/welcome.css"/>
</head>
<body>
	<div class="wrap">
		<div class="column large-5" id="logo">
			<h1>CloudPub</h1>
		</div>
		<div class="column large-7" id="login">
			<div class="column medium-6 large-6">
				<p>entre com alguma rede social</p>
				<div class="social-login">
					<a href="#"><img src="/src/img/welcome-login-facebook.png" alt=""></a>
					<a href="#"><img src="/src/img/welcome-login-twitter.png" alt=""></a>
				</div>
			</div>
			<div class="column medium-6 large-6">
				<p>ou faça o login com sua conta CloudPub</p>
				{!! Form::open(array('action' => 'UserController@login')) !!}
				<div class="column small-10 small-centered medium-8 large-6 large-uncentered no-pl">
					<input type="text" placeholder="e-mail" name="use_email" />
				</div>
				<div class="column small-10 small-centered medium-8 large-6 large-uncentered no-pl">
					<input type="password" placeholder="senha" name="password" />
				</div>
				<div class="column small-10 small-centered medium-8 large-12 large-uncentered end">
					<a href="#" data-reveal-id="mdlSignIn" style="margin-left: -15px;">cadastre-se</a> <input type="submit" value="ENTRAR" class="btn pull-right">
				</div>
				{!! Form::close() !!}
			</div>
		</div>
	</div>
	<div id="banner" class="column.large-12">
		<h2>Sua biblioteca com você. <br>Em qualquer lugar.</h2>
	</div>
	<div id="content">
		@yield('content')
	</div>	
	<div id="modal-bg" onclick="toggleModal();"></div>
	<div id="mdlSignIn" class="reveal-modal" data-reveal aria-labelledby="modalTitle" aria-hidden="true" role="dialog">
		<h3 id="modalTitle">Crie uma conta CloudPub</h3>
		<div class="column small-10 small-centered medium-10 large-6 ">
			{!! Form::open(array('action' => 'UserController@create')) !!}
			<input type="text" placeholder="nome" name="use_name">
			<input type="text" placeholder="email" name="use_email">
			<input type="password" placeholder="senha" name="password">
			<input type="password" placeholder="repita a senha" name="repeatpassword">
			<div class="column small-12 medium-6 no-p">
				<label class="radio">
					<input id="rdbFem" type="radio" value="F" name="use_gender" checked>
					<span class="outer"><span class="inner"></span></span>Feminino
				</label>
				<label class="radio">
					<input id="rdbMas" type="radio" value="M" name="use_gender">
					<span class="outer"><span class="inner"></span></span>Masculino
				</label>
			</div>
			<div class="column small-12 medium-6 no-p">
				<input type="text" placeholder="data de nascimento" class="maskDate" name="use_birthday">
			</div>
			<input type="submit" value="CRIAR CONTA" class="btn pull-right">
			{!! Form::close() !!}
		</div>
		<a class="close-reveal-modal" aria-label="Close">&#215;</a>
	</div>

	<footer></footer>
	<script src="/src/plugins/jquery/dist/jquery.min.js"></script>
	<script src="/src/plugins/foundation/js/foundation.min.js"></script>
	<script src="/src/plugins/foundation/js/foundation/foundation.reveal.js"></script>
	<script src="/src/plugins/jquery-maskedinput/dist/jquery.maskedinput.min.js"></script>

	<script>
		$(document).foundation();

		function toggleModal() {
			$('#modal').toggleClass('active');
			$('#modal-bg').fadeToggle();
		}

		$(document).ready(function(){
			
		});
	</script>
</body>
</html>