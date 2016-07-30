(function(core){
    var Controller = function(){
        this.keyPressEvent = function(e){
            var key = e.keyCode || e.key;
            switch(key){
                case 'Up'://'firefox36 or lower'
                case 'ArrowUp'://'in firefox37'
                case 38:
                    core.move('up');
                    e.preventDefault();
                    break;
                case 'Left':
                case 'ArrowLeft':
                case 37:
                    core.move('left');
                    e.preventDefault();
                    break;
                case 'Right':
                case 'ArrowRight':
                case 39:
                    core.move('right');
                    e.preventDefault();
                    break;
                case 'Down':
                case 'ArrowDown':
                case 40:
                    core.move('down');
                    e.preventDefault();
                    break;
            }
        };
        this.startGameEvent = function(){
            core.init();
        }
    };
    core.controller = new Controller();
})(window.core);