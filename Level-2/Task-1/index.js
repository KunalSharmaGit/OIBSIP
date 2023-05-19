let calculation="";
let numButtons=document.querySelectorAll(".num");
let enter= document.querySelector(".enter");
let negativeSign=document.querySelector(".negative");
let clear=document.querySelector(".clear");
let del=document.querySelector(".del");
let power=document.querySelector(".power");
let squareroot=document.querySelector(".sqrt");
const sqrt = Math.sqrt
let result;
Array.from(numButtons).forEach((numButton)=>{
  numButton.addEventListener('click' , (e)=>{
    calculation=calculation + e.target.innerHTML;
    document.querySelector(".intake").innerHTML=calculation;
  })
});
negativeSign.addEventListener('click', ()=>{
  calculation='-'+`(${calculation})`;
  document.querySelector(".intake").innerHTML=calculation;
})
enter.addEventListener('click', ()=>{
  result= eval(calculation);
  document.querySelector(".output").innerHTML=result;
})
clear.addEventListener("click",()=>{
  calculation="";
  result=0;
  document.querySelector(".output").innerHTML=result;
  document.querySelector(".intake").innerHTML=calculation;
})
del.addEventListener("click", ()=>{
  calculation=calculation.slice(0, -1);
  document.querySelector(".intake").innerHTML=calculation;
})
squareroot.addEventListener('click', ()=>{
  calculation=`sqrt(${calculation}`;
  document.querySelector(".intake").innerHTML=calculation;
})
power.addEventListener('click', ()=>{
  calculation=`(${calculation})`+ '**';
  document.querySelector(".intake").innerHTML=calculation;
})
