const removeFromArray = function(array, elem1, elem2) {

    let array1 = array;
    let elements = [elem1, elem2]

    for (let i=0; i<array1.length; i++){
        if (array1[i] == elem1){
            array1.splice(i,1);
            console.log(array1);
            return array1;
        }
    }


    //let array2 = array.pop(element);
    //return ;
    console.log(array1, elem1);

};

removeFromArray([1, 2, 3, 4], 3)

// Do not edit below this line
module.exports = removeFromArray;