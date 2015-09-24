/// <reference path="..\Scripts/jquery-2.1.0-vsdoc.js" />
Math.toRadians = function (angle) {
    return angle * Math.PI / 180;
}

var nave = {
    x: 100,
    y: 100,

    moverParaCima: function () {
        this.y -= 10;
    },

    moverParaBaixo : function(){
        this.y += 10;
    }
};

var game = {};
var teclado = {};

var teclas = { SETA_ESQUERDA : 37,
    SETA_CIMA : 38,
    SETA_DIREITA : 39,
    SETA_BAIXO : 40
};

$().ready(function () {
    var canvas = document.getElementById("testcanvas");

    $(document).keydown(function (e) {
        e.preventDefault();

        switch (e.which) {
            case teclas.SETA_BAIXO:
                nave.moverParaBaixo();
                break;

            case teclas.SETA_CIMA:
                nave.moverParaCima();
                break;
        }
    });
   
    game.context = canvas.getContext('2d');

    nave.spriteSheet = new Image();
    nave.spriteSheet.src = 'images/spaceship.png';

    game.musicaFundo = new Audio();
     
    if (game.musicaFundo.canPlayType("audio/mp3") != "")
    {
        game.musicaFundo.oncanplaythrough = function () {
            game.musicaFundo.play();
        };
            
        game.musicaFundo.src = 'musics/03a01.mp3';
    }

    window.requestAnimationFrame(desenhar) 

});



function desenhar() {
    game.context.clearRect(0, 0, 640, 480);
    game.context.drawImage(nave.spriteSheet, 128, 0, 60, 50, nave.x, nave.y, 120, 100);
    window.requestAnimationFrame(desenhar);
}