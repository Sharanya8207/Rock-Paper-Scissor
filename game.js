let ps=0;
let cs=0;

const ch=document.querySelectorAll(".c");
const msg=document.querySelector("#i5");
const p=document.querySelector("#i4");
const c=document.querySelector("#i8");
const genc=()=>{
    let op=["rock","paper","scissor"];
    const i=Math.floor((Math.random()*3));
    return op[i];

}
const playgame=(userchoice)=>{
    console.log(userchoice);
    const cc=genc();
    console.log(cc);


if(userchoice===cc){
    msg.innerHTML="Draw";

}
else{
    let uw=true;
    if(userchoice==="rock"){
        uw=cc==="paper"?false:true;
    }
    else if(userchoice==="paper"){
        uw=cc==="scissor"?false:true;
    }
    else{
        uw=cc==="rock"?false:true;
    }
    if(uw){
        msg.innerHTML="You Win";
        ps+=1;
        p.innerHTML=ps;

    }
    else{
        msg.innerHTML="You Lost";
        cs+=1;
        c.innerHTML=cs;
    }
}}
ch.forEach((ch1)=>{
    ch1.addEventListener("click",()=>{
        const userchoice=ch1.getAttribute("id");
        playgame(userchoice);
    });
});
