<template id="template-books">
	<div  v-for="book in books | orderBy 'created_at' -1" class="book" >
		<i class="fa fa-trash remove" @click="removeBook(book)"></i>
		<a href="/book/@{{ book.book_id }}" data-id="@{{ book.book_id }}" >
			<div style="background-image: url(@{{ book.book_cover }})" class="cover img-center" draggable="true"></div>
			<p class="title">@{{ book.book_title }}</p>
			<p class="author">@{{ book.book_author }}</p>
		</a>
	</div>
</template>

<template id="template-books-uploading">
	<form v-for="upload in uploads" v-if="upload.uploading" class="dropzone upload-area dz-clickable dz-complete complete">
		<div class="column large-3">
			<img src="@{{ upload.book_cover }}" alt="" class="upload-cover">
		</div>
		<div class="column large-9">
			<input type="hidden" name="book_id" v-model="upload.book_id" class="uplId">
			<div class="upload-info">
				<b>Título: </b> <input :disabled="uploadEditDisabled[0]" name="title" type="text" class="upload-title" v-model="upload.book_title"> 
				<i @click="uploadEditDisabled[0] = true" class="fa fa-pencil"></i>
			</div>
			<div class="upload-info">
				<b>Autor: </b> <input :disabled="uploadEditDisabled[1]" name="author" type="text" class="upload-author" v-model="upload.book_author"> 
				<i @click="uploadEditDisabled[1] = true" class="fa fa-pencil"></i>
			</div>
			<div class="upload-info">
				<b>Descrição: </b><input :disabled="uploadEditDisabled[2]" name="description" type="text" class="upload-description" v-model="upload.book_description"> 
				<i @click="uploadEditDisabled[2] = true" class="fa fa-pencil"></i>
			</div>
		</div>
	</form>
</template>
<!-- component template -->
<template id="grid-template">
  <table style="width: 100%">
    <thead>
      <tr>
        <th v-for="key in columns"
          @click="sortBy(key)"
          :class="{active: sortKey == key}">
          @{{key | capitalize}}
          <span class="arrow"
            :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
          </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="
        entry in data
        | filterBy filterKey in columns[1]
        | orderBy sortKey sortOrders[sortKey]">
        <td v-for="key in columns">
          @{{entry[key]}}
        </td>
      </tr>
    </tbody>
  </table>
</template>
