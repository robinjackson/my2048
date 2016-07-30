(function(win){
    win.addEventListener('load', function(){
        win.addEventListener('keydown', core.controller.keyPressEvent);
        win.core.ui.$('start_game').addEventListener('click', core.controller.startGameEvent);
    });

})(window);