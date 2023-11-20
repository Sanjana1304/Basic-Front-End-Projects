all_buttons = document.getElementById("all_buttons");

dummyBtn = document.getElementById("dummyBtn");
btn1 = document.getElementById("btn1");
btn2 = document.getElementById("btn2");
temp_options = document.getElementById("temp_options");

input_val = document.getElementById("temp_input");

result = document.getElementById("result");
temp_options.addEventListener("change",function() {

    
    
    if (temp_options.value == "Celsius") {
        all_buttons.style.display = "flex";
        btn1.innerHTML = "Convert to F";
        btn2.innerHTML = "Convert to K";
        
        dummyBtn.style.display="none";

        btn1.addEventListener("click",function(){
            temp_c = parseInt(input_val.value);
            res = ((9/5)*temp_c)+32;
            result.innerHTML = res+"F";
            
        });
        btn2.addEventListener("click",function(){
            temp_c = parseInt(input_val.value);
            res = temp_c+273;
            result.innerHTML = res+"K";
            
        });
    }
    else if (temp_options.value == "Farenheit") {
        all_buttons.style.display = "flex";
        btn1.innerHTML = "Convert to C";
        btn2.innerHTML = "Convert to K";
        
        dummyBtn.style.display="none";

        btn1.addEventListener("click",function(){
            temp_f = parseInt(input_val.value);
            res = (5/9)*(temp_f-32);
            result.innerHTML = res+"C";
            
        });
        btn2.addEventListener("click",function(){
            temp_f = parseInt(input_val.value);
            res = ((5/9)*(temp_f-32))+273;
            result.innerHTML = res+"K";
            
        });
    }
    else if (temp_options.value == "Kelvin") {
        all_buttons.style.display = "flex";
        btn1.innerHTML = "Convert to F";
        btn2.innerHTML = "Convert to C";
        
        dummyBtn.style.display="none";

        btn1.addEventListener("click",function(){
            temp_k = parseInt(input_val.value);
            res = (temp_k - 273) * 9/5 + 32;
            result.innerHTML = res+"F";
            
        });
        btn2.addEventListener("click",function(){
            temp_k = parseInt(input_val.value);
            res = temp_k-273;
            result.innerHTML = res+"C";
            
        });
    }
    const newURL = `index.html?temp=${temp_options.value}#`;
    window.location.href = newURL;
});