/// <reference path="..\Scripts/jquery-2.1.0-vsdoc.js" />
Math.toRadians = function (angle) {
    return angle * Math.PI / 180;
}

var nave = {
    x: 100,
    y: 100
};


var game = {};

$().ready(function () {
    var canvas = $("#testcanvas")[0];
    var context = canvas.getContext('2d');

    game.context = context;

   
    var image = new Image();
    image.src = 'images/spaceship.png';

    nave.spriteSheet = image;

    image.onload = function () {
        //alert('Imagem foi carregada com sucesso');
    }


    context.save();
    context.translate(150, 150);
    context.rotate(Math.toRadians(180)); 
    // (image, sourceX, sourceY, sourceWidth, sourceHeight, x, y, width, height)
    context.drawImage(image, 0, 0, 60, 50, 0, 0, 120, 100);
    context.restore();


    var musica = new Audio();
     
    if (musica.canPlayType("audio/mp3") != "")
    {
        musica.oncanplaythrough = function () {
            //alert('Musica foi carregada.');
            musica.play();
        };
            
        musica.src = 'musics/03a01.mp3';
    }


    

    setInterval(function () {
        nave.x += 10;
    }, 100);

    window.requestAnimationFrame(desenhar) 

});

function desenhar() {
    game.context.clearRect(0, 0, 640, 480);
    game.context.drawImage(nave.spriteSheet, 128, 0, 60, 50, nave.x, nave.y, 120, 100);
    window.requestAnimationFrame(desenhar);
}