exports.sum = function(){
    let sum = 0;

    // Array.from(arguments).forEach(function(e){
    //     sum+=e;
    // });

    Array.from(arguments).forEach(e =>{
        sum+=e;
    });

    return sum
}

exports.max = function(){
    let max = Number.MIN_SAFE_INTEGER;

    Array.from(arguments).forEach(e => {
        if(e > max){
            max = e;
        }
    });

    return max
}

exports.min = function(){
    let min = Number.MAX_SAFE_INTEGER;

    Array.from(arguments).forEach(e => {
        min = (e < min ? e : min)
    });

    return min
}
