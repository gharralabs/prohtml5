/// <reference path="..\Scripts/jquery-2.1.0-vsdoc.js" />

$().ready(function () {
    var canvas = $("#testcanvas")[0];
    var context = canvas.getContext('2d');
    context.fillStyle = "#FF0000";
    context.fillRect(200, 10, 100, 100);
    
    context.strokeStyle = "#0000FF";
    context.strokeRect(110, 10, 50, 50);
    context.clearRect(210, 20, 30, 20);
});