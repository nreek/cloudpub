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
					<a href="/login"><img src="/src/img/welcome-login-facebook.png" alt=""></a>
					{{-- <a href="#"><img src="/src/img/welcome-login-twitter.png" alt=""></a> --}}
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
			{!! Form::text('use_name','','nome',['v='=>'use_name',"!class" => "{'valid': use_name != ''}"]) !!}
			{!! Form::text('use_email','','e-mail',[
			'@blur'=>'emailBlur',
			'v='=>'use_email',
			'!class'=>"{'valid': validemail == '' && use_email != '', 'error' : validemail != ''}"
			]) !!}

			<span class="form-error" v-show="validemail != ''" style="width:100%; display:block">@{{ validemail }}</span>
			
			{!! Form::password('password','senha',['v='=>'password','!class'=> "{'valid':checkPassword(),'error':!checkPassword()&&this.password!=''}"]) !!}
			{!! Form::password('repeatpassword','repita a senha',[
			'v='=>'repeatpassword','!class'=> "{'valid':checkPassword(),'error':!checkPassword()&&this.password!=''}"
			]) !!}

			<span 
			class="form-error" 
			v-show="password != repeatpassword" 
			style="width:100%; display:block">A senhas devem ser iguais </span>
			<span 
			class="form-error" 
			v-show="passwordMessage != '' && password != ''" 
			style="width:100%; display:block">@{{ passwordMessage }}</span>
			<div class="column small-12 medium-6 no-p" style="padding-right:15px;">
				{!! Form::text('use_birthday','','data de nascimento',[
					'class' => 'maskDate',
					'v=' => 'use_birthday',
					'!class' => "{'valid': validBirthday =='' && use_birthday != '', 'error' : validBirthday != ''}"
				]) !!}

				<span class="form-error" v-show="validBirthday != ''" style="width:100%; display:block">@{{ validBirthday }}</span>
			</div>
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
			<input type="submit" value="CRIAR CONTA" class="btn btn-big pull-right">
			{!! Form::close() !!}
		</div>
		<a class="close-reveal-modal" aria-label="Close">&#215;</a>
	</div>

	<footer></footer>
	<script type="text/javascript" src="/src/js/plugins.js"></script>

	<script>

		function toggleModal() {
			$('#modal').toggleClass('active');
			$('#modal-bg').fadeToggle();
		}

		var Vue = new Vue({
			el : 'body',
			data: {
				use_name : '',
				use_email : '',
				use_birthday : '',
				password : '',
				repeatpassword : '',
				passwordMessage : '',
				validemail : '',
				validBirthday : '',

			},
			ready : function(){
				$(document).foundation();
				$('.maskDate').mask('99/99/9999');
			},
			watch : {
				'use_birthday' : function(val){
					this.validBirthday = (moment(this.use_birthday,'DD/MM/YYY').isValid() || this.use_birthday == '') ? '' : 'Data inválida';
				}
			},
			methods : {
				'checkPassword' : function(){
					this.passwordMessage = (this.password.length < 6) ? 'Sua senha precisa conter no mínimo 6 dígitos' : '';	

					if(this.password == this.repeatpassword && this.password != '' && this.passwordMessage == '')
						return true;
					else return false;
				},
				'emailBlur' : function(){
					this.validemail = '';
					var obj = this;
					var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

					if(!re.test(this.use_email))
						this.validemail = 'E-mail inválido';

					if(this.validemail == ''){
						$.ajax({
							url : '/user/email_exists',
							dataType : 'text',
							type : 'POST',
							data : { email :  obj.use_email }
						}).success(function(data){
							if(data != '0')
								obj.validemail = 'Este e-mail já está sendo utilizado.';
						}); 
					}
				}
			}
		});
</script>
</body>
</html>
