(function(){
    var Core = function(){
        var score, numberArr;

        this.init = function(){
            score = 0;
            numberArr = [
                [0, 0, 0, 0],
                [2, 0, 0, 0],
                [0, 2, 0, 0],
                [0, 0, 0, 0]
            ];
            this.ui.notify(this);
        };

        this.getScore = function(){
            return score;
        };

        this.getNumArr = function(){
            return numberArr;
        };

        this.move = function(dir){
            var beforeMove = numberArr.toString();
            switch(dir){
                case 'up':
                    up();
                    break;
                case 'down':
                    down();
                    break;
                case 'left':
                    left();
                    break;
                case 'right':
                    right();
                    break;
            }
            if(beforeMove != numberArr.toString()){
                randAdd();
                this.ui.notify(this);
                if(isGameOver()){
                    alert('GG.得分' + score);
                }
            }
        };

        var up = function(){
            for(var j = 0; j < 4; j++){
                var merged, tmp = [];

                for(var i = 0; i < 4; i++){
                    tmp.push(numberArr[i][j]);
                }
                merged = merge(tmp);

                for(var i = 0; i < 4; i++){
                    numberArr[i][j] = merged.shift();
                }
            }
        };

        var down = function(){
            for(var j = 0; j < 4; j++){
                var merged, tmp = [];

                for(var i = 0; i < 4; i++){
                    tmp.unshift(numberArr[i][j]);
                }
                merged = merge(tmp);

                for(var i = 0; i < 4; i++){
                    numberArr[i][j] = merged.pop();
                }
            }
        };

        var left = function(){
            for(var i = 0; i < 4; i++){
                numberArr[i] = merge(numberArr[i]);
            }
        };

        var right = function(){
            for(var i = 0; i < 4; i++){
                numberArr[i] = merge(numberArr[i].reverse()).reverse();
            }
        };

        var merge = function(arr){
            var lineWithoutZero = [], result = [];
            for(var i in arr){
                if(arr[i]){
                    lineWithoutZero.push(arr[i]);
                }
            }

            var a;
            while(a = lineWithoutZero.shift()){
                var b = lineWithoutZero[0];
                if(b && b == a){
                    score += a;
                    result.push(a+lineWithoutZero.shift());
                }else{
                    result.push(a);
                }
            }
            while(result.length < 4){
                result.push(0);
            }

            return result;
        };

        var randAdd = function(){
            var dot = [];
            for(var i in numberArr){
                for(var j in numberArr[i]){
                    if(numberArr[i][j] == 0){
                        dot.push([i, j]);
                    }
                }
            }
            var d = dot[Math.floor(Math.random()*dot.length)];
            numberArr[d[0]][d[1]] = 2;
        };

        var isGameOver = function(){
            for(var i in numberArr){
                for(var j in numberArr[i]){
                    if(numberArr[i][j] === 0){
                        return false;
                    }
                }
            }

            for(var i in numberArr){
                for(var j = 0; j < 3; j++){
                    if(numberArr[i][j] == numberArr[i][j+1]){
                        return false;
                    }
                }
            }
            for(var i in numberArr){
                for(var j = 0; j < 3; j++){
                    if(numberArr[j][i] == numberArr[j+1][i]){
                        return false;
                    }
                }
            }

            return true;
        };
    };

    window.core = new Core();
})();