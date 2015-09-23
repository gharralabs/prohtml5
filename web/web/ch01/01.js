/// <reference path="..\Scripts/jquery-2.1.0-vsdoc.js" />

$().ready(function () {
    var canvas = $("#testcanvas")[0];
    var context = canvas.getContext('2d');
    
    var image = $("#spaceship")[0];
    // (image, x, y)
    context.drawImage(image, 0, 350);
    // (image, x, y, width, height
    context.drawImage(image, 0, 400, 100, 25);
    // (image, sourceX, sourceY, sourceWidth, sourceHeight, x, y, width, height)
    context.drawImage(image, 0, 0, 60, 50, 0, 420, 60, 50);

});