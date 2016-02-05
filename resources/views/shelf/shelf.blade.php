@extends('shared.master')

@section('content')
<div class="column large-3 section-title teal">
	<h3>{{ $shelf->shelf_name }}</h3>
</div>
<div class="column large-9 section-content teal">
	@foreach($shelf->Books as $book) 
	@include('_partials.book',['area'=>'BookInShelf'])
	@endforeach
</div>
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