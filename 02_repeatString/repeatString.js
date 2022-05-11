const repeatString = function(string,num) {
 let result= "";
 if (num >= 0){
    for (let i =0; i<num; i++){
    result = result + string;
    }    
 }

 else{
     return "ERROR";
 }
  //console.log(result);
   return result;

};

//repeatString("hey",6);
// Do not edit below this line
module.exports = repeatString;
