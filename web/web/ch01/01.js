/// <reference path="..\Scripts/jquery-2.1.0-vsdoc.js" />

$().ready(function () {

    var canvas = $("#testcanvas")[0];
    var context = canvas.getContext('2d');
    context.fillRect(200, 10, 100, 100);    
});