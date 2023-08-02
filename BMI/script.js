function myCal()
{
 let a=document.getElementById("one").value;
 let b=document.getElementById("two").value;
 
 let Bmi=((a)/(b*b))*1000;


 document.getElementById("final").innerHTML="Your BMI Is:"+Bmi;

}
function range()
{
  let a=document.querySelector("#one").value
  let b=document.querySelector("#two").value
  let one=document.querySelector(".aa")
  let two=document.querySelector(".bb")
  one.innerHTML=a
  two.innerHTML=b
}