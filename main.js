$(document).ready(function(){
    $('.slider-1').slick({
      slidesToShow: 1,  // Mostra 3 slides por vez (ajuste se necessário)
      slidesToScroll: 1, // Avança 1 slide por vez
      autoplaySpeed: 5000,
      autoplay: true, 
      dots: false, 
      arrows: false,
      infinite: true, // Garante o loop infinito
      cssEase: 'linear',
    });
  });



$(document).ready(function(){
  // Inicializa o Slick Slider
  $('.slider-2').slick({
      slidesToShow: 3,  // Exibe 1 slide por vez
      slidesToScroll: 1, // Avança 1 slide por vez
      autoplay: true,  // Ativa o autoplay
      autoplaySpeed: 5000, // Tempo entre transições automáticas
      dots: false, // Não exibe os indicadores de navegação personalizados
      arrows: true, // Mantém as setas de navegação
      infinite: true, // Loop infinito ativado
      cssEase: 'linear', // Suaviza a transição
      
  });
});


$(document).ready(function(){
  // Inicializa o Slick Slider
  $('.slider-3').slick({
      slidesToShow: 1,  // Exibe 1 slide por vez
      slidesToScroll: 1, // Avança 1 slide por vez
      speed: 500,
      autoplay: true,
      dots: false, // Não exibe os indicadores de navegação personalizados
      fade: true,
      arrows: false,
      infinite: true, // Loop infinito ativado
      cssEase: 'linear', // Suaviza a transição
      
  });
});


$(document).ready(function(){
  // Inicializa o Slick Slider
  $('.slider-4').slick({
      slidesToShow: 1,  // Exibe 1 slide por vez
      slidesToScroll: 1, // Avança 1 slide por vez
      speed: 500,
      autoplay: true,
      dots: false, // Não exibe os indicadores de navegação personalizados
      arrows: false,
      infinite: true, // Loop infinito ativado
      cssEase: 'linear', // Suaviza a transição
      variableWidth: true// Evita que os slides tenham larguras variáveis
      
  });
});