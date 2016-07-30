(function(core){
    var UI = function(){
        this.$ = function(id){
            return document.getElementById(id);
        };

        this.notify = function(core){
            var score = core.getScore(),
                arr = core.getNumArr();
            for(var i in arr){
                for(var j in arr[i]){
                    this.$(i+'_'+j).innerHTML = arr[i][j] ? arr[i][j] : '';
                }
            }

            this.$('score').innerHTML = score;
        };
    };

    core.ui = new UI();
})(window.core);