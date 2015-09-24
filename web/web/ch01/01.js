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

var tiro = {
    x: 0,
    y: 0,
    angulo: 0,
    ativo: false,
};

$().ready(function () {
    var canvas = document.getElementById("testcanvas");

    $(canvas).click(function () {
        if (!tiro.ativo){
            tiro.ativo = true;
            tiro.x = nave.x + nave.spriteSheet.width;;
            tiro.y = nave.y + 50;
        }
            
    });

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
    game.larguraJanela = canvas.clientWidth;
    game.alturaJanela = canvas.clientHeight;

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

    window.requestAnimationFrame(desenhar);

    setInterval(atualizar, 100);

});

function atualizar() {
    if( tiro.ativo === true )
    {
        tiro.x += 5;
        
        if (tiro.x > game.larguraJanela)
            tiro.ativo = false;
    }
}

function desenhar() {
    game.context.clearRect(0, 0, 640, 480);
    game.context.drawImage(nave.spriteSheet, 128, 0, 60, 50, nave.x, nave.y, 120, 100);

    if (tiro.ativo === true)
    {
        game.context.beginPath();
        game.context.fillStyle = "#9ACD32";
        game.context.arc(tiro.x, tiro.y, 10, 2 * Math.PI, false);
        game.context.closePath();
        game.context.fill();
    }

    window.requestAnimationFrame(desenhar);
}