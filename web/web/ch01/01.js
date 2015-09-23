/// <reference path="..\Scripts/jquery-2.1.0-vsdoc.js" />
Math.toRadians = function (angle) {
    return angle * Math.PI / 180;
}

$().ready(function () {
    var canvas = $("#testcanvas")[0];
    var context = canvas.getContext('2d');
    
    var image = new Image();
    image.src = 'images/spaceship.png';

    image.onload = function () {
        alert('Imagem foi carregada com sucesso');
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
            alert('Musica foi carregada.');
            musica.play();
        };

        musica.src = 'musics/03a01.mp3';
    }

    
        
    


    


});