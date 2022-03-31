let x=document.getElementsByClassName("Hand Sec")[0]
let y=document.getElementsByClassName("Hand Min")[0]
let z=document.getElementsByClassName("Hand Hour")[0]
let inc=0


setInterval(func,1000)
function func(){
    let today=new Date();
    let sec=today.getSeconds()/60;
    let min=(sec+today.getMinutes())/60;
    let hour=(min+today.getHours())/12;
    x.style.transform="translateX(-50%) rotate("+(sec*360)+"deg)";
    y.style.transform="translateX(-50%) rotate("+(min*360)+"deg)";
    z.style.transform="translateX(-50%) rotate("+(hour*360)+"deg)";
}