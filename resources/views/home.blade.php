@extends('shared.master')

@section('content')
<div class="column large-3 section-title blue">
	<h3>leituras recentes</h3>
</div>
<div id="leituras-recentes" class="column large-9 section-content blue">
	<div v-if="books">
		<book :books.sync="books"></book>
	</div>
	<div class="v-align" v-else>
		<h3>Clique na núvem acima para adicionar livros à sua biblioteca!</h3>
	</div>
</div>
<div class="column large-3 section-title teal">
	<h3>estantes</h3>
</div>
<div class="column large-9 section-content teal">
	@foreach($user->Shelves as $shelf)
	@include('_partials.shelves')
	@endforeach
</div>
<div class="column large-3 section-title gray">
	<h3>últimos livros adicionados</h3>
</div>
<div class="column large-9 section-content gray"></div>
@stop