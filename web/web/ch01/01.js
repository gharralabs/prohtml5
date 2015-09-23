/// <reference path="..\Scripts/jquery-2.1.0-vsdoc.js" />

$().ready(function () {
    var canvas = $("#testcanvas")[0];
    var context = canvas.getContext('2d');
    context.fillStyle = "#FF0000";
    context.fillRect(200, 10, 100, 100);
    
    context.strokeStyle = "#0000FF";
    context.strokeRect(110, 10, 50, 50);
    context.clearRect(210, 20, 30, 20);

    context.beginPath();
    context.arc(100, 300, 40, Math.PI, false);
    context.closePath();
    context.fill();

    context.beginPath();
    context.moveTo(170, 160);
    context.lineTo(170, 220);
    context.lineTo(300, 220);
    context.closePath(); // remova essa linha
    context.stroke();
    
    context.fillStyle = "#000000";
    context.font = "20 pt Arial";
    context.fillText("ola mundo", 330, 80);
    context.stroke();

    context.fillStyle = "rgba(0, 255, 0, 0.6)";
    context.fillRect(240, 40, 100, 100);



});