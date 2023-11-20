result = document.getElementById("result");

reset = document.getElementById("reset");


boxes = document.querySelectorAll(".row .box");



const x_arr= [0,0,0,
              0,0,0,
              0,0,0];

const o_arr= [0,0,0,0,0,0,0,0,0];

reset.addEventListener("click",function() {
    location.reload();
})

currVal = "X";
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click",function(e) {
        if((x_arr[0]==1 && x_arr[1]==1 && x_arr[2]==1) || (x_arr[3]==1 && x_arr[4]==1 && x_arr[5]==1)|| (x_arr[6]==1 && x_arr[7]==1 && x_arr[8]==1)|| (x_arr[0]==1 && x_arr[3]==1 && x_arr[6])|| (x_arr[1]==1 && x_arr[4]==1 && x_arr[7])|| (x_arr[2]==1 && x_arr[5]==1 && x_arr[8]==1)|| (x_arr[0]==1 && x_arr[4]==1 && x_arr[8]==1) || (x_arr[2]==1 && x_arr[4]==1 && x_arr[6]==1)){
            result.innerHTML = "Player X Wins";
        }
        else if((o_arr[0]==1 && o_arr[1]==1 && o_arr[2]==1) || (o_arr[3]==1 && o_arr[4]==1 && o_arr[5]==1)|| (o_arr[6]==1 && o_arr[7]==1 && o_arr[8]==1)|| (o_arr[0]==1 && o_arr[3]==1 && o_arr[6])|| (o_arr[1]==1 && o_arr[4]==1 && o_arr[7])|| (o_arr[2]==1 && o_arr[5]==1 && o_arr[8]==1)|| (o_arr[0]==1 && o_arr[4]==1 && o_arr[8]==1) || (o_arr[2]==1 && o_arr[4]==1 && o_arr[6]==1)){
            result.innerHTML = "Player O Wins";
        }
        else if (currVal==="X" && x_arr[i]==0 && o_arr[i]==0) {
            const newParagraph = document.createElement("p");
           
            newParagraph.textContent = "X";
            e.target.appendChild(newParagraph);
            
            currVal = "O";
            x_arr[i]=1;
        }
        else if(currVal==="O" && x_arr[i]==0 && o_arr[i]==0){
            const newParagraph = document.createElement("p");
            newParagraph.textContent = "O";
            
            e.target.appendChild(newParagraph);
            currVal = "X";
            o_arr[i]=1;
        }
        if((x_arr[0]==1 && x_arr[1]==1 && x_arr[2]==1) || (x_arr[3]==1 && x_arr[4]==1 && x_arr[5]==1)|| (x_arr[6]==1 && x_arr[7]==1 && x_arr[8]==1)|| (x_arr[0]==1 && x_arr[3]==1 && x_arr[6])|| (x_arr[1]==1 && x_arr[4]==1 && x_arr[7])|| (x_arr[2]==1 && x_arr[5]==1 && x_arr[8]==1)|| (x_arr[0]==1 && x_arr[4]==1 && x_arr[8]==1) || (x_arr[2]==1 && x_arr[4]==1 && x_arr[6]==1)){
            result.innerHTML = "Player X Wins";
        }
        if((o_arr[0]==1 && o_arr[1]==1 && o_arr[2]==1) || (o_arr[3]==1 && o_arr[4]==1 && o_arr[5]==1)|| (o_arr[6]==1 && o_arr[7]==1 && o_arr[8]==1)|| (o_arr[0]==1 && o_arr[3]==1 && o_arr[6])|| (o_arr[1]==1 && o_arr[4]==1 && o_arr[7])|| (o_arr[2]==1 && o_arr[5]==1 && o_arr[8]==1)|| (o_arr[0]==1 && o_arr[4]==1 && o_arr[8]==1) || (o_arr[2]==1 && o_arr[4]==1 && o_arr[6]==1)){
            result.innerHTML = "Player O Wins";
        }
        else{
            cnt=0;
            for (let i = 0; i < o_arr.length; i++) {
                if (o_arr[i]==1 || x_arr[i]==1) {
                    cnt=cnt+1;
                }
            }
            if (cnt>=9) {
                result.innerHTML = "Match Draw";
            }
        }
        
        
    });
}
if((x_arr[0]==1 && x_arr[1]==1 && x_arr[2]==1) || (x_arr[3]==1 && x_arr[4]==1 && x_arr[5]==1)|| (x_arr[6]==1 && x_arr[7]==1 && x_arr[8]==1)|| (x_arr[0]==1 && x_arr[3]==1 && x_arr[6])|| (x_arr[1]==1 && x_arr[4]==1 && x_arr[7])|| (x_arr[2]==1 && x_arr[5]==1 && x_arr[8]==1)|| (x_arr[0]==1 && x_arr[4]==1 && x_arr[8]==1) || (x_arr[2]==1 && x_arr[4]==1 && x_arr[6]==1)){
    result.innerHTML = "Player X Wins";
}
else if((o_arr[0]==1 && o_arr[1]==1 && o_arr[2]==1) || (o_arr[3]==1 && o_arr[4]==1 && o_arr[5]==1)|| (o_arr[6]==1 && o_arr[7]==1 && o_arr[8]==1)|| (o_arr[0]==1 && o_arr[3]==1 && o_arr[6])|| (o_arr[1]==1 && o_arr[4]==1 && o_arr[7])|| (o_arr[2]==1 && o_arr[5]==1 && o_arr[8]==1)|| (o_arr[0]==1 && o_arr[4]==1 && o_arr[8]==1) || (o_arr[2]==1 && o_arr[4]==1 && o_arr[6]==1)){
    result.innerHTML = "Player O Wins";
}

  
