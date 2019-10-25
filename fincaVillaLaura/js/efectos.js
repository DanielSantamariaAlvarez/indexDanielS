$('.ir-arriba').click(function(){
  $('body, html').animate({
    scrollTop:'0px'
  }, 300);
});

$(window).scroll(function(){
  if($(this).scrollTop()>0){
    $('.ir-arriba').slideDown(300);
  }else{
    $('.ir-arriba').slideUp(300);
  }
});



// BOTONES
var galeria= $('#galeria').offset().top;
var contacto = $('#contacto').offset().top;
var ubicacion =$('#ubicacion').offset().top;

$('#btn-servicios').on('click', function(e){
  e.preventDefault();
  $('html, body').animate({
      scrollTop: galeria
/*tiempo que tarda la animación --> */    }, 500);
});

$('#btn-ubicacion').on('click', function(e){
  e.preventDefault();
  $('html, body').animate({
      scrollTop: ubicacion
/*tiempo que tarda la animación --> */    }, 500);
});

$('#btn-contacto').on('click', function(e){
  e.preventDefault();
  $('html, body').animate({
      scrollTop: contacto
/*tiempo que tarda la animación --> */    }, 500);
});
