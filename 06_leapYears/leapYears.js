const leapYears = function(year) {

if (year%4==0 ) {

    if (year%100==0) {
        if (year%400 ==0) {
            return true
        }
        else { return false
        }
    }  

    else {return true}

}
else {
   return false
}


};




// Do not edit below this line
module.exports = leapYears;


// le doy un año ->
// evalua si es leap year o no ->
// retorna true or false según resultado
