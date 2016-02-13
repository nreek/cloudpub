@extends('shared.master')

@section('content')
<section class="teal">
	<div class="section-title">
		<h3>{{ $shelf->shelf_name }}</h3>
	</div>
	<div class="section-content">
		@foreach($shelf->Books as $book) 
		@include('_partials.book',['area'=>'BookInShelf'])
		@endforeach
	</div>
</section>
@stop

@section('script')
<script type="text/javascript">
	function removeBookInShelf(id){
		$.ajax({
			url : '/shelf/{{ $shelf->shelf_id }}/remove/'+id,
			dataType : 'TEXT',
			type : 'GET',
		}).success(function(data){
			
		}); 
	}
</script>
@stop