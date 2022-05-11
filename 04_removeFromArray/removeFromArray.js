const removeFromArray = function(array, element) {

    let array1 = array;

    for (let i=0; i<array1.length; i++){
        if (array1[i] == element){
            array1.splice(i,1);
            console.log(array1);
            return array1;

        }
    }
   

    //let array2 = array.pop(element);


    //return ;
    console.log(array1, element);

};




removeFromArray([1, 2, 3, 4], 3)



// Do not edit below this line
module.exports = removeFromArray;