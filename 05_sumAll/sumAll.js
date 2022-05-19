
const sumAll = function(x,y) {
    let array = [];
    if (x<0 || y<0 ){
        return "ERROR";
    }

    else if (typeof(x) == 'string' || typeof(y) == 'string'){
        return "ERROR";

    }

    // else if (typeof(x) != 'string' || typeof(y) != 'string'){
    //     return "ERROR";

    // }

    else if (x<y){ 
        for (let i=x; i <= y;i++){
            array.push(i);
        }
    }
    else {
        for (let i=y; i <= x;i++){
            array.push(i);
        }
    }

    let reduceArray = array.reduce((acumulador, numero) => {return acumulador + numero}, 0);
    console.log(reduceArray);
    return reduceArray;


};




//sumAll(2,10);
// Do not edit below this line
module.exports = sumAll;
