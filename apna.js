
let h1 = document.querySelector("h1");
let div = document.querySelector("div");
 function nextcolor(){

}

function changecolor(color,delay,nextcolor){
    setTimeout(() => {
       div.style.backgroundColor = color;
       nextcolor();
    }, delay);
};

 changecolor("red" , 1000 , ()=>{
    changecolor("yellow" , 1000 , ()=>{
        changecolor("orange" , 1000 , ()=>{
            changecolor("purple" , 1000 , ()=>{
                changecolor("brown", 1000);
            });
        });
    });
});
    
