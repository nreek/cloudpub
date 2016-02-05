<div id="modal-bg" onclick="toggleModal();"></div>
<div id="mdlUpload" class="reveal-modal" data-reveal aria-labelledby="modalTitle" aria-hidden="true" role="dialog">
	<h2 id="modalTitle">Envie seus livros</h2>
	<p>Lembre-se de que você deve possuir os direitos sobre o livro para envia-lo.</p>
	<p><small>São aceitos arquivos em formato PDF e ePub.</small></p>

	<form v-if="!uploading" action="/upload" class="dropzone upload-area" enctype="multipart/form-data" id="dropupload">			
		<div class="fallback">
			<input name="file" type="file" multiple />
		</div>
	</form>

	<book-uploading v-else :uploads.sync="books" />

	<a class="close-reveal-modal" aria-label="Close">&#215;</a>
</div>

<div class="reveal-modal tiny mdlConfirm" data-reveal aria-labelledby="modalTitle" aria-hidden="true" role="dialog">
	<h3>Deseja realmente </h3>
	<div style="margin: 0 auto; width: 360px;">
		<a href="javascript:void(0);" class="btn medium center blue">Sim</a>
		<a href="javascript:void(0);" class="close btn medium center red" onclick="$('.mdlConfirm').foundation('reveal','close');">Não</a>
	</div>
	<a class="close-reveal-modal" aria-label="Close">&#215;</a>
</div>

<div class="reveal-modal modal-bottom teal" id="mdlAddToShelf" data-reveal aria-labelledby="modalTitle" aria-hidden="true" role="dialog">
	<div class="modal-close">Cancelar <i class="fa fa-times"></i></div>
	@foreach($user->Shelves as $shelf)
	@include('_partials.shelves',["nolink" => "true"])
	@endforeach
</div>



