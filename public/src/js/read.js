var originalHTML = [];

function initPage(){
    var p = 1;
    $('#pages p').each(function(index, item) {
        if($.trim($(item).html()) === "") {
            $(item).remove();
        }else{
            $(this).attr('id',book_id+'_'+p);
            p++;
        }
    });

    $('#pages [src]').each(function(){
      var src = $(this).attr('src');
      $(this).attr('src',path+src);
    });

    $('#pages [rel]').each(function(){
      var rel = $(this).attr('rel');
      $(this).attr('rel',path+rel);
    });

    $('.scroll-pages').scrollTop(book_bookmark);

    $('.scroll-pages').scroll(function() {
        var currY = $(this).scrollTop();
        var postHeight = $(this).height();
        var scrollHeight = $('#pages').prop('scrollHeight');
        var scrollPercent = (currY / (scrollHeight - postHeight)) * 100;
        $('.read-percentage').css('width', scrollPercent +"%"  );
    });

    for (var i = 0, l = notes.length; i < l; i++) {
        var v = notes[i];
        if(v.page == curPage) {
            $('p#'+v.element).addClass('quoted').attr('note-index', i);
        }
    }

    initQuote();
}

function initQuote(){
    $('p.quoted').unbind().click(function(){
        var obj = $(this);
        if(!obj.hasClass('open')){
            var v = notes[obj.attr('note-index')];
            originalHTML.push(obj.html());
            obj.html(v.quote).addClass('open').append('<p class="text"><i class="fa fa-trash remove" onclick="removeQuote('+v.id+',\''+v.element+'\')"></i>'+v.text+'</p><div class="close"  onclick="closeQuote(\''+v.element+'\','+(originalHTML.length - 1)+')"><i class="fa fa-times"></i> FECHAR</div>');
        }
    });
}

function closeQuote(id,index){
    setTimeout(function(){
        $('p#'+id).html(originalHTML[index]).removeClass('open');
    },100);
}

function removeQuote(id, el){
    $.ajax({
        url : '/note/remove/'+id,
        dataType : 'HTML',
    }).success(function(data){
        if(data != 0){
            $('#'+el+' .text, #'+el+' .close, #'+el+' br').remove();
            $('#'+el).removeClass('open').removeClass('quoted');
        }
    }); 
}

function getBookPage(url){
    $.ajax({
        url: '/read/'+book_id+'/page',
        type: 'GET',
        dataType: 'text',
        data: { url : url },
        success: function (data, textStatus, jqXHR) {
            $('#pages').html(data);
            initPage();
            $('.scroll-pages').scrollTop(0);
        }
    });
}

function toggleCSS() {
    if($('#book link').length > 0){
        $('#book link').remove();
        $('#rdbEstilo .padrao').addClass('active');
        $('#rdbEstilo .arquivo').removeClass('active');

    }else {
        if($('#book link').length == 0){
            $('#rdbEstilo .padrao').removeClass('active');
            $('#rdbEstilo .arquivo').addClass('active');
            $('#book').append(css);
        }
    }
}

function togglePHighlight(){
    $('#rdbPHighlight span').toggleClass('active');
    $('#pages').toggleClass('hover');
}

function toggleBackground () {
    var obj = $('.toggleBackground');
    $('#book').toggleClass('night');  
    if($('#book').hasClass('night')){  
        obj.html('<i class="fa fa-sun-o"></i>Modo Diurno');
    }else{
        obj.html('<i class="fa fa-moon-o"></i>Modo Noturno');
    }
}

function increaseFont(){
    font_size += 2;
    setFont(font_size);
    recordOption('setFont',font_size,'js');
}

function decreaseFont(){
    font_size -= 2;
    setFont(font_size);
    recordOption('setFont',font_size,'js');
}

function setFont(size){
    $('#pages p').css('font-size',size+'px');
}

function recordOption(option,value,scope){
    $.ajax({
        url : '/option/create',
        dataType : 'HTML',
        type : 'POST',
        data : { option : option, value: value, scope: scope }
    }); 
}

function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    if(text != '') selectedElement = window.getSelection().anchorNode.parentNode;
    else selectedElement = '';
    return text;
}

initPage();

$(document).foundation();

$('.fa-arrow-right').click(function(){
    curPage++;
    getBookPage(pages[curPage]);
});

$('.fa-arrow-left').click(function(){
    curPage--;
    getBookPage(pages[curPage]);
});

$('.mdlNotes .btn.red').click(function(){
    $('.mdlNotes').foundation('reveal','close');
    $.ajax({
        url: '/notes/create',
        type: 'POST',
        dataType: 'text',
        data: { book_id : book_id, note_quote : $('.quote').html(), note_text : $('#note_text').val(), note_page : curPage, note_element : selectedElement.id, note_bookmark : $('#read').scrollTop() }, 
        success: function (data, textStatus, jqXHR) {
            $('#note_text').val('');
            $(selectedElement).addClass('quoted').attr('note-index',notes.length);
            notes.push({
                bookmark : '0',
                element : selectedElement.id,
                quote : $('.quote').html(),
                text : $('#note_text').val(),
                id : data
                });
            initQuote();
        }
    });
});

$('#pages').on('mouseup',function(e){ 
    $('.selection-box').fadeOut('fast');
    setTimeout(function(){
        selectedText = getSelectionText();
        if(selectedText != ''){
            $('.selection-box').fadeIn('fast');
            $('.selection-box').css('left',e.pageX+40);
            $('.selection-box').css('top',e.pageY);
            setTimeout(function(){
                $('.selection-box').fadeOut('fast');
            },2500);
        }
    },100);
});

$('.selection-box').click(function(){
    $('.mdlNotes').foundation('reveal','open');
    $(this).fadeOut('fast');
    $('.quote').html(selectedText);
});

var setBookmark = function(){
    var bookmark = $('.scroll-pages').scrollTop();
    $.ajax({
        url: '/read/'+book_id+'/bookmark',
        type: 'GET',
        dataType: 'text',
        data: { bookmark : bookmark, page : curPage }
    });
}

var intervalId = setInterval(setBookmark,10000);

$(window).focus(function(){
    if(!intervalId)
        intervalId = setInterval(setBookmark,10000);
});

$(window).blur(function(){
    clearInterval(intervalId);
    intervalId = 0;
})