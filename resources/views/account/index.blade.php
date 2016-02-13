@extends('shared.master')

@section('content')
<section class="blue">
	<div class="section-title">
		<h3>Informações Pessoais</h3>
	</div>
	<div class="section-content">
		<form action="" id="info_pessoais" name="info_pessoais">
			<div class="column large-6">
				<label>Nome</label>
				{!! Form::text('use_name',$user->use_name,'nome',['v='=>'use_name',"!class" => "{'valid': use_name != ''}"]) !!}
				<label>E-mail</label>
				{!! Form::text('use_email',$user->use_email,'e-mail',[
				'@blur'=>'emailBlur',
				'v='=>'use_email',
				'!class'=>"{'valid': validemail == '' && use_email != '', 'error' : validemail != ''}"
				]) !!}
				<span class="form-error" v-show="validemail != ''" style="width:100%; display:block">@{{ validemail }}</span>
				<label>Data de Nascimento</label>
				{!! Form::text('use_birthday',$user->use_birthday,'data de nascimento',['v='=>'use_birthday', 'class'=>'maskDate','!class' => "{'valid': validBirthday =='' && use_birthday != '', 'error' : validBirthday != ''}"]) !!}
				<label>Gênero</label>
				<label class="radio column large-6 no-p">
					<input id="rdbFem" type="radio" value="F" name="use_gender" checked>
					<span class="outer"><span class="inner"></span></span>Feminino
				</label>
				<label class="radio column large-6 no-p">
					<input id="rdbMas" type="radio" value="M" name="use_gender">
					<span class="outer"><span class="inner"></span></span>Masculino
				</label>
			</div>
			<div class="column large-6">
				<label>Celular</label>
				{!! Form::text('use_mobile',$user->use_mobile,'celular',['class'=>'maskCel']) !!}
				<label for="use_url">Link Personalizado</label>
				{!! Form::text('use_url',$user->use_url,'',['v='=>'use_url','@change'=>'checkUrl()']) !!}
			</div>
			<hr style="border-color:transparent;">
			<a href="javascript:void(0);" v-if="updateStatus != 'E'" @click="updateUser()" v-bind:class="{'green': updateStatus == 'S'}" class="btn btn-big" style="width:300px;">
				<span v-show="updateStatus == 'S'"><i class="fa fa-check"></i> Atualizações Salvas</span>
				<span v-show="updateStatus == 'P'">Salvar Atualizações</span>
			</a>
			<span class="img-center" style="text-align: center;" v-else><i class="fa fa-times"></i> O nome e e-mail não podem ser vazios</span>
		</form>
	</div>
</section>

<section class="teal">
	<div class="section-title">
		<h3>Conta</h3>
	</div>
	<div class="section-content" style="padding: 70px 40px;">
		<form action="" id="info_conta">
			<input type="hidden" id="use_source"  v-model="use_source" value="{{ $user->use_source }}">
			<div v-if="use_source == 'F' || use_source == 'F'">
				Você está vinculado ao <span v-show="use_source == 'F'">Facebook</span><span v-show="use_source == 'T'">Twitter</span>
				<br>
				<br>
				<a href="#" class="btn" style="font-size: 15px;margin-right: 5px;">Atualizar Informações</a>
				<a href="javascript:void(0);" @click="desvincular();">Desvincular</a>
			</div>

			<div class="column large-4" v-if="use_source == 'C'">
				<span>Vincule sua conta ao Facebook</span>
				<div class="social-login">
					<a href="/login"><img src="/src/img/welcome-login-facebook.png" alt=""></a>
				</div>				
			</div>

			<div class="column large-4 end" v-if="use_source == 'C'">
				<span>ou ao Twitter</span>
				<div class="social-login">
					<a href="#"><img src="/src/img/welcome-login-twitter.png" alt=""></a>
				</div>				
			</div>
		</form>
	</div>
</section>

@stop

@section('script')
<script type="text/javascript">
	
</script>
@stop