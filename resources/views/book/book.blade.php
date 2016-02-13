@extends('shared.master')

@section('content')
<section id="page-book" class="blue">
	<div class="section-title">
		<div class="page-title">
			<h3>gerenciar livro</h3>
		</div>
		<div class="page-submenu ">
			<a href="javascript:void(0);" onclick="	history.pushState(null, null, '/read/{{$book->book_id}}');$('#inside-read').fadeIn();getPage('/read/{{$book->book_id}}','inside-read');" class="btn btn-panel teal">LER</a>
			<a href="javascript:void(0);" class="btn btn-panel btn-remove red" onclick="confirmFunction = 'removeBook'; confirmParams = [{{ $book->book_id }}];">EXCLUIR</a>
		</div>
	</div>
	<div class="page-content ">
		<div class="book">
			<img src="{{ $book->book_cover }}" class="cover img-center">
			<p class="title">{{ $book->book_title }}</p>
			<p class="author">{{ $book->book_author }}</p>
		</div>
	</div>
</section>
<section class="teal">
	<div class="section-title">
		<div class="page-title">
			<h3>estantes</h3>
		</div>
		<div class="page-submenu">
			<a href="javascript:void(0);" class="btn btn-panel blue" onclick="curBookId = {{$book->book_id}};$('#mdlAddToShelf').addClass('open');">ADICIONAR À ESTANTE</a>
			<a href="javascript:void(0);" class="btn btn-panel btn-remove red">REMOVER DE TODAS AS ESTANTES</a>
		</div>
	</div>
	<div class="section-content">
		@foreach($book->Shelves as $shelf)
		<div class="shelf">
			<a href="/shelf/{{ $shelf->shelf_id }}">
				<div class="cover img-center"></div>
				<p class="title">{{ $shelf->shelf_name }}</p>
			</a>
		</div>
		@endforeach
	</div>
</section>
<section class="gray">
	<div class="section-title">
		<div class="page-title">
			<h3>compartilhamento</h3>
		</div>
		<div class="page-submenu">
			<a href="javascript:void(0);" class="btn btn-panel teal">COMPARTILHAR</a>
		</div>
	</div>
	<div class="section-content"></div>
</section>
@stop

@section('script')
<script type="text/javascript">
	function removeBook(id){
		$.ajax({
			url : '/book/remove/'+id,
			dataType : 'TEXT',
			type : 'GET',
		}).success(function(data){
			getPage('/home','content');
		}); 
	}
</script>
@stop
