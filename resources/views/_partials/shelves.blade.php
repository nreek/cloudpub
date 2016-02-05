<div class="shelf" data-id="{{ $shelf->shelf_id }}">
	<a href="@if(!isset($nolink))/shelf/{{ $shelf->shelf_id }}@else#@endif">
		<div class="cover img-center"></div>
		<p class="title">{{ $shelf->shelf_name }}</p>
	</a>
</div>

