input = document.getElementById("input");
operators_arr = document.querySelectorAll(".operators div")
numbers_arr = document.querySelectorAll(".numbers div")

result = document.getElementById("result");
clear = document.getElementById("clear");
resultDisp = false;

input.innerHTML="";

for (var i = 0; i < numbers_arr.length; i++) {
   numbers_arr[i].addEventListener("click",function (e) {
        //storing current string and last char.
        var currStr = input.innerHTML;
        var lastChar = currStr[currStr.length-1];

        // if result is not diplayed, just keep adding
        if (resultDisp===false) {
            input.innerHTML+=e.target.innerHTML;
        }else if(resultDisp===true && lastChar==="+" || lastChar==="-" || lastChar==="×" || lastChar==="÷"){
            resultDisp=false;
            input.innerHTML+=e.target.innerHTML;
        }else{
            resultDisp=false;
            input.innerHTML=""
            input.innerHTML+=e.target.innerHTML;
        }
   });
}
for (var i = 0; i < operators_arr.length; i++) {
    operators_arr[i].addEventListener("click",function (e) {
        currStr = input.innerHTML;
        lastChar = currStr[currStr.length-1];

        if (lastChar==="+"||lastChar==="-"||lastChar==="×"||lastChar==="÷") {
            newStr = currStr.substring(0,currStr.length-1)+e.target.innerHTML;
            input.innerHTML = newStr;
        }
        else if(currStr.length==0){
            console.log("Enter a number first");
        }
        else{
            input.innerHTML+=e.target.innerHTML;
        }

    });
    
}
result.addEventListener("click",function() {
    inptStr = input.innerHTML;

    //numbers only array
    numOnly = inptStr.split(/\+|\-|\×|\÷/g);

    //operators only aray
    OpOnly = inptStr.replace(/[0-9]|\./g, "").split("");

    divide = OpOnly.indexOf("÷");
    while (divide!=-1) {
        numOnly.splice(divide,2,numOnly[divide]/numOnly[divide+1]);
        OpOnly.splice(divide,1);
        divide=OpOnly.indexOf("÷");
    }
    multiply=OpOnly.indexOf("×");
    while (multiply!=-1) {
        numOnly.splice(multiply,2,numOnly[multiply]*numOnly[multiply+1]);
        OpOnly.splice(multiply,1);
        multiply = OpOnly.indexOf("×");
    }
    sub=OpOnly.indexOf("-");
    while (sub!=-1) {
        numOnly.splice(sub,2,numOnly[sub]-numOnly[sub+1]);
        OpOnly.splice(sub,1);
        sub = OpOnly.indexOf("-");
    }
    add=OpOnly.indexOf("+");
    while (add!=-1) {
        numOnly.splice(add,2,parseFloat(numOnly[add])+parseFloat(numOnly[add+1]));
        OpOnly.splice(add,1);
        add = OpOnly.indexOf("+");
    }

    input.innerHTML = numOnly[0];
    resultDisp=true;

});

clear.addEventListener("click",function() {
    input.innerHTML="";
});


