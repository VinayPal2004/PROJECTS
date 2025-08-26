// Generate a random color in hexa decimal format
const randomcolor = ()=>{
    const hex ="0123456789abcdef";
    let color ="#";
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
};
let intervalID;
const startchangingcolor=function(){
    if(!intervalID ){
        intervalID = setInterval(changebgcolor,1000);}
    
    function changebgcolor(){
        document.body.style.backgroundColor=randomcolor();
    }
};
const stopchangingcolor=function(){
    clearInterval(intervalID);
    intervalID=null;
};
document.querySelector('#start').addEventListener("click",startchangingcolor);
document.querySelector('#stop').addEventListener("click",stopchangingcolor);