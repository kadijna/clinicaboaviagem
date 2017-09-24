var scroll = $('html, body');
$('#linkContato').click(function() {
    scroll.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
});


$('#linkEspc').click(function() {
    scroll.animate({
        scrollTop: $($.attr(this, 'href')).offset().top}, 500);
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

$('.confirm-consulta').on('click', function(evt) { // capturar o click
    $('.alert').show();
});
$('.cadastro').on('click', function(evt) { // capturar o click
    $('.alert').show();
});
$('#contato form button').on('click', function(evt) { // capturar o click
    $('.alert').show();
});

var selector = '.menu ul li';

$(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
    localStorage.setItem('active', $(this).children().attr('id'));
});

$(window).on('load', function() {
    var linkActived = '#' + localStorage.getItem('active');
    $(linkActived).parent().addClass('active');
});
