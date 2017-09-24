var scroll = $('html, body');
$('.btn-contato').click(function() {
    scroll.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
});


$('.btn-espc').click(function() {
    scroll.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
});

$(".fechar").click(function() {
    event.preventDefault();
    $(".horario").hide();
});


$(".fechar-marcada").click(function() {
    event.preventDefault();
    $(".consulta-marcada ul").hide();
});

$('.btn-mobile').on('click', function(evt) { // capturar o click
    $('.menu-mobile').toggle();

});

$('.navbar-aluno li a').on('click', function() {
    $(this).addClass("active");
});