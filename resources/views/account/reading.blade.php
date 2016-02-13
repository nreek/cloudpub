@extends('shared.master')
<?php 
$options = $user->Options()->get(); 

function option($options, $filter){
	$a = $options->where('option',$filter);
	if($a->count() == 0)
		return '';

	return $a->first()->value;
}
?>
@section('content')
<section class="blue">
	<div class="section-title">
		<h3>Opções de Leitura</h3>
	</div>
	<div class="section-content">
		<form id="reading_options">
			<div class="column large-5">
				<h4>Fonte</h4>

				<div class="column large-8 no-p"><label class="inline">Tamanho:</label></div>
				<div class="column large-4 no-p">{!! Form::text('setFont',option($options,'setFont'),'',['v='=>'read.options.font']) !!}</div>

				<div class="column large-8 no-p"><label class="inline">Fonte:</label></div>
				<div class="column large-4 no-p">{!! Form::select('setFontFamily', array('Raleway'=>'Raleway','Calibri'=>'Calibri','Times New Roman'=>'Times New Roman'), option($options,'setFontFamily'),['v-model' => 'read.options.fontFamily']) !!}</div>

				<div class="column large-8 no-p"><label class="inline">Alinhamento:</label></div>
				<div class="column large-4 no-p">{!! Form::select('setTextAlign',array('Esquerda'=>'Esquerda','Centro'=>'Centro','Direita'=>'Direita'),option($options,'setTextAlign'),['v-model'=>'read.options.textAlign']) !!}</div>

				<div class="column large-8 no-p"><label class="inline">Destacar Parágrafo:</label></div>
				<div class="column large-4 no-p">{!! Form::select('togglePHighlight',['S'=>'Sim','N'=>'Não'],option($options,'togglePHighlight'),['v-model'=>'read.options.togglePHighlight']) !!}</div>
				
			</div>
			<div class="column large-5 end">
				<h4>Página</h4>
				<div class="column large-8 no-p"><label class="inline">Estilo:</label></div>
				<div class="column large-4 no-p">{!! Form::select('toggleCSS',['N'=>'Padrão','S'=>'Arquivo'],option($options,'toggleCSS'),['v-model'=>'read.options.toggleCSS']) !!}</div>

				<div class="column large-8 no-p"><label class="inline">Cor de Fundo:</label></div>
				<div class="column large-4 no-p">{!! Form::select('toggleBackground',['N'=>'Diurno','S'=>'Noturno'],option($options,'toggleBackground'),['v-model'=>'read.options.toggleBackground']) !!}</div>
			</div>
			<hr style="border-color:transparent">
			<a href="javascript:void(0);" onclick="updateReadingOptions()" class="btn btn-big">Salvar</a>
		</form>
	</div>
</section>

<section class="teal">
	<div class="section-title">
		<h3>Estilos Avançados</h3>
	</div>
	<div class="section-content">
		<div class="column large-5">
			<form id="novo_estilo">
				<h4>Novo Estilo</h4>
				<div class="column large-4 no-p"><label class="inline">Estilo:</label></div>
				<div class="column large-8 no-p">{!! Form::text('style','','estilo',['v='=>'read.newStyle.style']) !!}</div>
				<hr class="i">
				<div class="column large-4 no-p"><label class="inline">Valor:</label></div>
				<div class="column large-8 no-p">{!! Form::text('value','','valor',['v='=>'read.newStyle.value']) !!}</div>
				<hr class="i">
				<div class="column large-4 no-p"><label class="inline">Elemento:</label></div>
				<div class="column large-8 no-p">
					<select v-model="read.newStyle.element">
						<option value="p">Parágrafo</option>
						<option value="c">Container</option>
					</select>
				</div>
				<hr class="i">
				<a href="javascript:void(0);" @click="read.styles.push(newStyle)" class="btn btn-big">Adicionar</a>
			</form>
		</div>
		<div class="column large-5 end">
			<form id="search">
				<h4>Estilos Aplicados</h4>
				<div class="column large-4 no-p">
					<label class="inline">Elemento</label>
				</div> 
				<div class="column large-8 no-pl">
					<select v-model="read.searchQuery">
						<option value="">Todos</option>
						<option value="p">Parágrafo</option>
						<option value="c">Container</option>
					</select>
				</div>
				<hr>
				<grid :data="read.styles" :columns="read.styleColumns" :filter-key="read.searchQuery"></grid>
			</form>
		</div>
	</div>
</section>
@stop

@section('script')
<script type="text/javascript">
	function updateReadingOptions(){
		$.ajax({
			url : '/account/reading/options',
			dataType : 'HTML',
			type : 'POST',
			data : $('#reading_options').serialize(),
		}).success(function(data){
			alertBox('message', 'class');
		}); 
	}
</script>
@stop