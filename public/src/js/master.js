
var bookComponent = Vue.extend({
    template : '#template-books',
    props: ['books'],
    methods: {
        removeBook : function(book){
            var obj = this;
            $.ajax({
               url : '/book/remove/'+book.book_id,
               dataType : 'TEXT',
               type : 'GET',
           }).success(function(data){
               obj.books.$remove(book);
           }); 
       }
   }
});

var bookUploadingComponent = Vue.extend({
    template : '#template-books-uploading',
    props: ['uploads'],
    data: function(){
        return {
            books : [],
            uploadEditDisabled: [false,false,false]
        }
    }
});

Vue.component('grid', {
  template: '#grid-template',
  props: {
    data: Array,
    columns: Array,
    filterKey: String
},
data: function () {
    var sortOrders = {}
    this.columns.forEach(function (key) {
      sortOrders[key] = 1
  })
    return {
      sortKey: '',
      sortOrders: sortOrders
  }
},
methods: {
    sortBy: function (key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
  }
}
});

Vue.component('book',bookComponent);
Vue.component('bookUploading',bookUploadingComponent);

function initVue(){
    new Vue({
        el: 'body',
        data: { 
            books : bookData,
            openedModals : [],
            uploading : false,
            use_name : '',
            use_email : '',
            use_birthday : '',
            uses_source : '',
            password : '',
            repeatpassword : '',
            passwordMessage : '',
            validemail : '',
            validBirthday : '',
            updateStatus : 'P',
            read : {
                options : {},
                searchQuery: '',
                styleColumns: ['style','value','element'],
                styles : stylesData,
                newStyle : {}
            },
        },
        methods:{
            openModal : function(name){
                this.openedModals.push(name);
            },
            updateUser : function(){
                var obj = this;
                if(this.use_name != '' && this.use_email != ''){
                    $.ajax({
                        url : '/user/update',
                        dataType : 'HTML',
                        type : 'POST',
                        data : $('#info_pessoais').serialize()
                    }).success(function(data){
                        obj.updateStatus = 'S';
                    }); 
                }else
                obj.updateStatus = 'E';
            },
            desvincular : function(){
                var obj = this;
                $.ajax({
                    url : '/user/desvincular',
                    dataType : 'HTML',
                    type : 'GET',
                }).success(function(data){
                    obj.use_source = 'C';
                }); 
            },
            'checkPassword' : function(){
                this.passwordMessage = (this.password.length < 6) ? 'Sua senha precisa conter no mínimo 6 dígitos' : '';    

                if(this.password == this.repeatpassword && this.password != '' && this.passwordMessage == '')
                    return true;
                else return false;
            },
            'emailBlur' : function(){
                this.validemail = '';
                var obj = this;
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                if(!re.test(this.use_email))
                    this.validemail = 'E-mail inválido';

                if(this.validemail == ''){
                    $.ajax({
                        url : '/user/email_exists',
                        dataType : 'text',
                        type : 'POST',
                        data : { email :  obj.use_email }
                    }).success(function(data){
                        if(data != '0')
                            obj.validemail = 'Este e-mail já está sendo utilizado.';
                    }); 
                }
            }
        },
        watch : {
            'use_birthday' : function(val){
                this.validBirthday = (moment(this.use_birthday,'DD/MM/YYY').isValid() || this.use_birthday == '') ? '' : 'Data inválida';
            }
        },
        ready: function(){
            var obj = this;
            $('#info_pessoais input').change(function() {
                obj.updateStatus = 'P';
            });
            Dropzone.options.dropupload = {
                dictDefaultMessage : "<i class='fa fa-cloud-upload'></i>Clique ou arraste seus livros aqui para enviar",
                acceptedFiles: ".pdf,.epub",
                init: function() {
                    this.on("success", function(file, response,e) {
                        obj.uploading = true;
                        $('.upload-area').unbind('click');
                        $('.upload-area').addClass('complete');
                        response.uploading = true;
                        obj.books.push(response);
                        console.log(response);

                    // initBook(id);
                });
                }
            };
        }
    });
}

var confirmFunction, confirmParams, curBookId; 

$(document).foundation();

$(document).ready(function(){
    $('.mdlConfirm .blue').click(function(){
        var fn = window[confirmFunction];
        fn.apply(null,confirmParams);
        $('.mdlConfirm').foundation('reveal','close');
    });

    $('.mobile-menu-icon').click(function(){
        $('.mobile-menu').fadeToggle();
    });
});
init();

window.onpopstate = function (event) {
    $('#inside-read').html('');
    $('#inside-read').hide();
    getPage(document.location, 'content');
};

function uploadInfo(key, val, id,objInput){
    $.ajax({
        url : '/upload/info',
        dataType : 'text',
        type : 'POST',
        data : { id :  id, key : key, val : val }
    }).success(function(data){
        objInput.attr('disabled','true');
        objInput.siblings('.fa-pencil').fadeIn();
        $('.book-'+id+' .'+key.replace('book_','')).text(val);
    }); 
}

(function ($) { 
    $.fn.appendBook = function(object){
        $(this).prepend(
            '<div class="book book-'+object.book_id+'">'+
            '<i class="fa fa-trash remove" onclick="confirmFunction = \'removeBook\'; confirmParams = ['+object.book_id+'];"></i>'+
            '<a href="/book/'+object.book_id+'">'+
            '<div style="background-image: url('+object.book_cover+')" class="cover img-center"></div>'+
            '<p class="title">'+object.book_title+'</p>'+
            '<p class="author">'+object.book_author+'</p>'+
            '</a>'+
            '</div>'
            );

        initBook('uplBook'+object.book_id);
    }

    $.fn.select = function(object){
        var obj = $(this);
        obj.hide();
    }

})(jQuery);

function getPage(url, target) {
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'HTML',
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            $('#sidebar').addClass('active');
            $('#' + target).html(data);
            init();
        },
        error: function (data) {

        }
    });
}

function toggleModal() {
    $('.reveal-model').toggleClass('active');
    $('#modal-bg').fadeToggle();
}

$('#modal .close').click(function () {
    toggleModal();
});

function initBook(id){
    $('#'+id+' .fa-pencil').click(function(){
        $(this).siblings('input').removeAttr('disabled');
        $(this).fadeOut();
    });
}

function init() {
    initVue();
    $('#content a').unbind('click');
    $('a').on('click', function (e) {
        if($(this).attr('redirect') !== undefined){
            var url = $(this).attr('href');
            if (url.indexOf('#') == -1 && url != 'javascript:void(0);') {
                if ($(this).parents('#content').length > 0) {
                    var target = $('#content').attr('id');
                    if ($(this).attr('modal') !== undefined) {
                        target = 'modal';
                        toggleModal();
                    } else {
                        history.pushState(null, null, url);
                    }
                    e.preventDefault();
                    getPage(url, target);
                }
            }
        }
    });

    $('.btn-remove').click(function(){
        var title = 'excluir';
        if($(this).text() != '')
            title = $(this).text().toLowerCase();

        $('.mdlConfirm h3').text('Deseja realmente ' + title+'?');
        $('.mdlConfirm').foundation('reveal','open');
    });

    var mdlShelf = $('#mdlAddToShelf .shelf'); 
    var dragBooks = document.querySelectorAll('.book a');
    mdlShelf.unbind();

    mdlShelf.on('click',function(e){
        addBookToShelf($(this).data('id'));
        $('#mdlAddToShelf').removeClass('open');
    });


    mdlShelf.on('dragover',function(e){ e.preventDefault(); });
    mdlShelf.on('dragenter',handleDragEnter);
    mdlShelf.on('drop',handleDrop);

    [].forEach.call(dragBooks, function(book) {
        book.addEventListener('dragstart', handleDragStart, false);
        book.addEventListener('dragend', handleDragLeave, false);
    });
    $('.modal-close').on('click',function(){
        $('#mdlAddToShelf').removeClass('open');
    });    

    $('.maskCel').mask('(99) 99999-9999');
    $('.maskPhone').mask('(99) 9999-9999');
    $('.maskDate').mask('99/99/9999');
}

function submit(url){
    $.ajaxSetup({ headers: {'X-CSRF-TOKEN': $('[name="_token"]').val()} });
    $.ajax({
        url :'/'+url+'/submit',
        type: 'POST',
        dataType: 'text',
        data: $('.content.active > form').serialize(),
        success : function(data){

        },
        error: function(data){

        }
    })
}
function handleDragStart(e) {
    $('#mdlAddToShelf').addClass('open');
    $(e.target).addClass('drag');
    e.dataTransfer.setData('text/html',$(this).data('id'));
}
function handleDragLeave(e) {
    $('#mdlAddToShelf').removeClass('open');
    $('#mdlAddToShelf').removeClass('drag');
    $(e.target).removeClass('drag');
}

function handleDragEnter(e){
    e.preventDefault();
    $(this).addClass('drag');
}


function handleDrop(e){
    e.preventDefault();
    curBookId = e.originalEvent.dataTransfer.getData('text/html');
    addBookToShelf($(this).data('id'));
}

function addBookToShelf(shelf_id) {
    $.ajax({
        url: '/shelf/'+shelf_id+'/add/'+curBookId,
        type: 'GET',
        dataType: 'json',
        success: function (data, textStatus, jqXHR) {

        },
        error: function (jqXHR, textStatus, errorThrown) {
        }
    });
}

function alertBox(message, css_class){

}