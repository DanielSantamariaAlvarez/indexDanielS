$(document).ready(function(){


//boton arriba
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


//efecto menu
  $('.menu a').each(function(index, elemento){
    $(this).css({
      'top': '-200px'
    });

    $(this).animate({
      top:'0'
    },500+(index*500));
  });




//Scroll menu
var acercaDe =$('#acerca-de').offset().top;
var trabajos =$('#trabajos').offset().top;
var contacto =$('#contacto').offset().top;

$('#btn-acerca-de').on('click', function(e){
  e.preventDefault();
  $('html, body').animate({
      scrollTop: acercaDe
/*tiempo que tarda la animación --> */    }, 500);
});

$('#btn-trabajos').on('click', function(e){
  e.preventDefault();
  $('html, body').animate({
      scrollTop: trabajos
/*tiempo que tarda la animación --> */    }, 500);
});

$('#btn-contacto').on('click', function(e){
  e.preventDefault();
  $('html, body').animate({
      scrollTop: contacto
/*tiempo que tarda la animación --> */    }, 500);
});

});
