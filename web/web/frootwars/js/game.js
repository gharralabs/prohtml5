/// <reference path="../../Scripts/jquery-2.1.0-vsdoc.js" />


var game = {
    init: function () {
        $(".gamelayer").hide();
        $("#gamestartscreen").show();

        game.canvas = $("#gamecanvas")[0];
        game.context = game.canvas.getContext("2d");
    }
};

$().ready(function(){
    game.init();
});