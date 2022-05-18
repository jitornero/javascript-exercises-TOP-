const removeFromArray = function(array, ...element) {

    let before = array;
    console.log("before:", before);
    let elements = element;
    console.log("tiene que eliminar:", elements);

    for (let i=0; i<before.length; i++){
        for (let j=0; j<elements.length; j++){
            if (before[i] == elements[j]){
                before.splice(i,1);
               // console.log(array1);

            }
            
        }
        console.log(before);
    }
   
     console.log("array Devuelto es:", before);
     return before;
     

};




removeFromArray([1, 2, 3, 4], 3, 2)



// Do not edit below this line
module.exports = removeFromArray;