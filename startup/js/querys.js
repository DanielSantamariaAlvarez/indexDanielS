var productos= $('#fotos').offset().top;
var precios = $('#precios').offset().top;
var contacto =$('#contacto').offset().top;
var caracteristicas =$('#caracteristicas').offset().top;

$('#btn-productos').on('click', function(e){
  e.preventDefault();
  $('html, body').animate({
      scrollTop: productos
/*tiempo que tarda la animación --> */    }, 500);
});

$('#btn-precios').on('click', function(e){
  e.preventDefault();
  $('html, body').animate({
      scrollTop: precios
/*tiempo que tarda la animación --> */    }, 500);
});

$('#btn-contacto').on('click', function(e){
  e.preventDefault();
  $('html, body').animate({
      scrollTop: contacto
/*tiempo que tarda la animación --> */    }, 500);
});

$('#btn-caracteristicas').on('click', function(e){
  e.preventDefault();
  $('html, body').animate({
      scrollTop: caracteristicas
/*tiempo que tarda la animación --> */    }, 500);
});




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
