const possibility=[["1","2","3"],["4","5","6"],["7","8","9"],["1","4","7"],
             ["2","5","8"],["3","6","9"],["1","5","9"],["3","5","7"],];
console.log(possibility[1]);
let Oarr=[];
let Xarr=[];
let Owin=[];
let Xwin=[];
let n=0;
let m=0;
let turnO=true;
let v=0;

const reset=document.querySelector(".reset");
// console.log(reset);
reset.addEventListener("click",()=>{
    location.reload();
})

function winnerO(){
    let O=[];
    
    for(i=0;i<Owin.length/2;i++){
        let oele=1;
        for(j=i+1;j<Owin.length;j++){
            if(Owin[i]==Owin[j]){
                oele=oele+1;
            }
        }
        // console.log(oele);
        O.push(oele);
    }
    // console.log(O);
    for(i=0;i<O.length;i++){
        if(O[i]==3){
            const msg=document.querySelector(".msghide");
            msg.classList.remove("msghide");
            msg.classList.add("msg");
            document.querySelector(".msg").innerHTML="Winner is O";
            
            boxes.forEach((box)=>{
                box.disabled = true;
            })
        }
    }
}

function winnerX(){
    var X=[];
    
    for(i=0;i<Xwin.length/2;i++){
        let xele=1;
        for(j=i+1;j<Xwin.length;j++){
            if(Xwin[i]==Xwin[j]){
                xele=xele+1;
            }
        }
        // console.log(xele);
        X.push(xele);
    }
    // console.log(X);
    for(i=0;i<X.length;i++){
        if(X[i]==3){
            const msg=document.querySelector(".msghide");
            msg.classList.remove("msghide");
            msg.classList.add("msg");
            document.querySelector(".msg").innerHTML="Winner is X";
            boxes.forEach((box)=>{
                box.disabled = true;
            });
        }
    }
    // console.log(X);
}
// console.log(X);
function checkO(){
    
    for(i=n;i<Oarr.length;i++){
        for(j=0;j<possibility.length;j++){
            for(k=0;k<possibility[j].length;k++){
                if(Oarr[i]==possibility[j][k]){
                    Owin.push(j);
                }
            }
        }
    }
    n=n+1;
    // console.log(Owin);
    if(n>=3){
    winnerO();
    }
}

function checkX(){
    
    for(i=m;i<Xarr.length;i++){
        for(j=0;j<possibility.length;j++){
            for(k=0;k<possibility[j].length;k++){
                if(Xarr[i]==possibility[j][k]){
                    Xwin.push(j);
                }
            }
        }
    }
    m=m+1;
    // console.log(Xwin);
    if(m>=3){
    winnerX();
    }
}

let boxes=document.querySelectorAll(".boxes");
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        console.log(v)
        if(box.innerHTML==""){
            if(turnO==true){
                box.innerHTML="O"
                turnO=false;
                Oarr.push(box.id);
                v=v+1;
                checkO();
            }
            else{
                box.innerHTML="X";
                turnO=true;
                Xarr.push(box.id);
                v=v+1;
                checkX();

            }
            if(v==9){
                const msg=document.querySelector(".msghide");
                        msg.classList.remove("msghide");
                        msg.classList.add("msg");
                        document.querySelector(".msg").innerHTML="DRAW";
            }
        }
        else{
            console.log("disabled");
        }
    })
})
// if(turnO==true){
//     const msg=document.querySelector(".msghide");
//     msg.classList.remove("msghide");
//     msg.classList.add("msg");
//     document.querySelector(".msg").innerHTML="TURN O";
// }
// else{
//     // const msg=document.querySelector(".msghide");
//     // msg.classList.remove("msghide");
//     // msg.classList.add("msg");
//     document.querySelector(".msg").innerHTML="TURN X";
// }