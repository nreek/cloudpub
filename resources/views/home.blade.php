@extends('shared.master')

@section('content')
<section class="blue">
	<div class="section-title">
		<h3>leituras recentes</h3>
	</div>
	<div id="leituras-recentes" class="section-content">
		<div v-if="books">
			<book :books.sync="books | limitBy 5"></book>
		</div>
		<div class="v-align" v-else>
			<h3>Clique na núvem acima para adicionar livros à sua biblioteca!</h3>
		</div>
	</div>
</section>

<section class="teal">
	<div class="section-title">
		<h3>estantes</h3>
	</div>
	<div class="section-content">
		@foreach($user->Shelves as $shelf)
		@include('_partials.shelves')
		@endforeach
	</div>
</section>

<section class="gray">
	<div class="section-title">
		<h3>todos os livros</h3>
	</div>
	<div class="section-content">
		<book :books.sync="books"></book>
	</div>
</section>
@stop