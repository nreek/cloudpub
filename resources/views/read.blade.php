@if(!Request::ajax())
<html>
<head>
	<title>CloudPub</title>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<meta name="viewport" content="user-scalable=0, initial-scale=1, width=device-width">
	<link rel="stylesheet" href="/src/plugins/fontawesome/css/font-awesome.min.css"/>
	<link rel="stylesheet" href="/src/css/style.css"/>
</head>
<body>
	<script src="/src/plugins/jquery/dist/jquery.min.js"></script>
	<script src="/src/plugins/foundation/js/foundation.min.js"></script>
	@endif
	<div data-role="spritzer"></div>
	<div id="read">
		<div id="menu">
			<div class="row">
				<div class="menu-icon"><i class="fa fa-navicon"></i></div>
				<div class="menu-title area">ESTILO</div>
				<div class="menu-title-options area">
					<div class="radio" id="rdbEstilo">
						<span onclick="toggleCSS();" class="padrao active">Padrão</span>
						<span onclick="toggleCSS();" class="arquivo">Arquivo</span>
					</div>
				</div>
				<div class="menu-button area" onclick="$('#menu').toggleClass('expand')">
					<i class="fa fa-plus"></i>
					Avançado
				</div>
				<div class="menu-button area toggleBackground" onclick="toggleBackground();">
					<i class="fa fa-moon-o"></i>
					Modo Noturno 
				</div>
				<div class="menu-button area">
					<i class="fa fa-pencil"></i>
					Anotações
				</div>
				<div class="menu-button area">
					<i class="fa fa-list-ol"></i>
					Índice
				</div>
				@if(Request::ajax())
				<div class="menu-button area"  onclick="$('#inside-read').fadeOut();" >
					<i class="fa fa-times"></i> Fechar
				</div>
				@endif
				<div class="mais">
					<div class="menu-title area">FONTE</div>
					<div class="menu-title-options area">
						<div class="select">
							<span class="selected">Verdana</span>
							<i class="fa fa-caret-down"></i>
						</div>
						<span class="font-size bigger" onclick="increaseFont()">A</span>
						<span class="font-size smaller" onclick="decreaseFont()">A</span>
					</div>
					<div class="menu-title area">TEXTO</div>
					<div class="menu-title-options area">
						<div class="align">
							<i class="fa fa-align-justify"></i>
							<i class="fa fa-align-center"></i>
							<i class="fa fa-align-left"></i>
							<span>Alinhamento</span>
						</div>
					</div>
					<div class="menu-title area">LEITOR</div>
					<div class="menu-title-options area">
						<div class="align">
							<div class="radio" id="rdbPHighlight">
								<span onclick="togglePHighlight($(this));" class="nao active">Não</span>
								<span onclick="togglePHighlight($(this));" class="sim">Sim</span>
							</div>
							<span>Destacar Parágrafo</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="book">
			<div class="row">             
				<div class="navigation">
					<i class="fa fa-arrow-left"></i>
					<i class="fa fa-arrow-right"></i>
				</div>
				<div class="read-percentage"></div>
				<div class="book-title">{{ trim($book->book_title) }} <small>por {{ $book->book_author }}</small>
				</div>
				<div class="scroll-pages">
					<div id="pages">
						<p>{!! $text !!}</p>
					</div>
				</div>
			</div>

			<div class="reveal-modal read mdlNotes" data-reveal aria-labelledby="modalTitle" aria-hidden="true" role="dialog">
				<h3>Adicionar Anotação </h3>
				<div class="quote"></div>
				<textarea id="note_text" name="" cols="30" rows="5"></textarea>
				<a href="javascript:void(0);" class="close btn medium center pull-right red" onclick="">Salvar</a>
				<a class="close-reveal-modal" aria-label="Close">&#215;</a>
			</div>
		</div>
		<div class="selection-box">
			Adicionar Anotação
		</div>
		<script type="text/javascript">
			var pages = [
			@foreach($files as $file)
			"{{ $file }}",
			@endforeach
			];

			var notes = [
			@foreach($book->Notes as $note)
			{
				"id" : {{ $note->note_id }},
				"bookmark": "{{ $note->note_bookmark }}",
				"page" : "{{ $note->note_page }}",
				"quote" : {!! json_encode(nl2br($note->note_quote)) !!},
				"text": "{{ nl2br($note->note_text) }}",
				"element" : "{{ $note->note_element }}"
			},
			@endforeach
			];

			var css = '@foreach($css as $cssFile) <link rel="stylesheet" href="{{ str_replace(str_replace('\\','/',public_path()),'',$cssFile) }}"> @endforeach';
			var curPage = {{$book->book_page}}, selectedText, selectedElement, book_id = {{ $book->book_id }}, book_bookmark = {{ $book->book_bookmark }};
			var font_size = 16;
		</script>
		<script type="text/javascript" src="/src/js/read.js"></script>
		<script type="text/javascript">
			@foreach($user->Options()->where('scope', 'js')->get() as $option)
			{{ $option->option }}({{$option->value}});
			@endforeach
		</script>
		<style type="text/css">
			body{ overflow:hidden; }

			@foreach($user->Styles as $style)
			#read #book #pages {{ $style->element }}{
				{{ $style->style }}:{{$style->value}} ;
			}
			@endforeach
		</style>
		@if(!Request::ajax())
	</body>
	</html>
	@endif
