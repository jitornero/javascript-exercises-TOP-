const removeFromArray = function(array, ...arguments) {

    let array1 = array;
    //let elements = [elem1, elem2];
    let normalArray = Array.prototype.slice.call(arguments);
    console.log(normalArray);

    for (let i=0; i<array1.length; i++){
        for (let j=0; j<normalArray.length;j++){
            if (array1[i] == normalArray[j]){
                array1.splice(i,1);
                console.log(array1);
                return array1;
                
            }
        }
        
        
    }


    //let array2 = array.pop(element);
    //return ;
    //console.log(array1, normalArray);

};

removeFromArray([1, 2, 3, 4], 3, 4)

// Do not edit below this line
module.exports = removeFromArray;









// LLAMAR ARGUMENTOS, PARA "OBTENER" ARRAY DESDE A PARTIR DE UN ELEMENTO ESPECIFICO,
//FIJARSE EL PRIMER EJEMPLO: ARGUMENTS (EL ARRAY DE ARGUMENTS), "1" ES EL INDEX DE ESE ARGUMENTS.
//EN ESTE CASO, TOMARIA A PARTIR DEL B, PORUQE A ES EL ARGUMENTO [0]
    // function f(a, b) {
    //     let normalArray = Array.prototype.slice.call(arguments,1)
    //     // -- or --
    //     let normalArray = [].slice.call(arguments)
    //     // -- or --
    //     let normalArray = Array.from(arguments)
      


