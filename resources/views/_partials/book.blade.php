<div class="book book-{ $book->book_id }" >
	@if(isset($area))
	<i class="fa fa-trash remove" onclick="confirmFunction = 'remove{{ $area }}'; confirmParams = [{{ $book->book_id }}];"></i>
	@endif
	<a href="/book/{{ $book->book_id }}" data-id="{{ $book->book_id }}" >
		<div style="background-image: url({{ $book->book_cover }})" class="cover img-center" draggable="true"></div>
		<p class="title">{{ $book->book_title }}</p>
		<p class="author">{{ $book->book_author }}</p>
	</a>
</div>
