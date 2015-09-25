/// <reference path="../../Scripts/jquery-2.1.0-vsdoc.js" />
var loader = {
    loaded: true,
    loadedCount: 0,
    totalCount: 0,
    soundFileExtn : ".ogg",

    init: function () {
        var mp3Support, oggSupport;
        var audio = document.createElement('audio');

        if( audio.canPlayType )
        {
            mp3Support = "" != audio.canPlayType("audio/mpeg");
            oggSupport = "" != audio.canPlayType('audio/ogg; codecs="vorbis"');
        }
        else {
            mp3Support = false;
            oggSupport = false;
        }

        loader.soundFileExtn = undefined;

        if (oggSupport)
            loader.soundFileExtn = ".ogg";
        else if (mp3Support)
            loader.soundFileExtn = ".mp3"
    },
    loadImage: function (url) {
        this.totalCount++;
        this.loaded = false;
        $("#loadingscreen").show();
        var image = new Image();
        image.src = url;
        image.onload = loader.itemLoaded;
        return image;
    },

    loadSound: function (url) {
        this.totalCount++;
        this.loaded = false;
        $("#loadingscreen").show();
        var audio = new Audio();
        audio.src = url + loader.soundFileExtn;
        audio.oncanplaythrough = loader.itemLoaded;
        return audio;
    },

    itemLoaded: function () {
        loader.loadedCount++;
        $("#loadingmessage").html('Loaded ' + loader.loadedCount +
            ' of ' + loader.totalCount);

        if (loader.loadedCount === loader.totalCount) {
            loader.loaded = true;
            $("#loadingscreen").hide();

            if (loader.onload) {
                loader.onload();
                loader.onload = undefined;
            }
        }
    }
}

var game = {
    init: function () {
        loader.init();
        levels.init();
        $(".gamelayer").hide();
        $("#gamestartscreen").show();

        game.canvas = $("#gamecanvas")[0];
        game.context = game.canvas.getContext("2d");
    },

    showLevelScreen: function () {
        $(".gamelayer").hide();
        $("#levelselectscreen").show('slow');
    }
};


var levels = {
    data: [{ 
             foreground: "desert-foreground.png",
             background: "clouds-background.png",
             entities: []
           },
           {
               foreground: "desert-foreground.png",
               background: "clouds-background.png",
               entities: []
           }],

    init: function () {
        var html = "";
        for (var i = 0; i < levels.data.length; i++) {
            var level = levels.data[i]
            html += '<input type="button" value="' + (i + 1) + '">';
        }

        $("#levelselectscreen").html(html);

        $("#levelselectscreen input").click(function () {
            levels.load(this.value - 1);
            $("levelselectscreen").hide();
        });
    },

    load : function(number){
        alert('Nivel ' + number + ' carregado')
    }
};

$().ready(function(){
    game.init();
});