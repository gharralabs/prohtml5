/// <reference path="..\Scripts/jquery-2.1.0-vsdoc.js" />
Math.toRadians = function (angle) {
    return angle * Math.PI / 180;
}

$().ready(function () {
    var canvas = $("#testcanvas")[0];
    var context = canvas.getContext('2d');
    
    var image = $("#spaceship")[0];

    context.save();
    context.translate(150, 150);
    context.rotate(Math.toRadians(180)); 
    // (image, sourceX, sourceY, sourceWidth, sourceHeight, x, y, width, height)
    context.drawImage(image, 0, 0, 60, 50, 0, 0, 120, 100);
    context.restore();


    var musica = new Audio();

    // "" the browser does not support this audio/video type
    // "maybe"  the browser might support this audio/video type
    // "probably" the browser most likely supports this audio/video type
    if ( musica.canPlayType("audio/mp3") != "" )
    {
        musica.src = 'musics/03a01.mp3';
        musica.play();
    }
        
    


    


});