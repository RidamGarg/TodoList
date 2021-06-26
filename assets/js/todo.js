$("input[type='text'").on('keypress',function(event){
    if(event.which === 13){
       const text = $(this).val();
       $(this).val("");
      if(text) {
          $('ul').append(`<li><span><i class="fas fa-trash-alt"></i></span> ${text}</li>`);
        };
    }
})
$('ul').on('click','li',function(){
    $(this).toggleClass('completed');
})
$('ul').on('click','span',function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    })
    event.stopPropagation();//Stops allthings happens further
})
$('h1 span').on('click',function(){
    $('input').fadeToggle();
})