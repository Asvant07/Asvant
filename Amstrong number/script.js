let sum=0;
function submit()
{
    let n=document.getElementById("in").value;

for(let i=0;i<n.length;i++)
{
    sum+= parseInt(n[i]*n[i]*n[i])
}
if(sum==n)
{
    document.getElementById("one").innerHTML=n+"is armstrong number";
}
else{
    document.getElementById("one").innerHTML=n+"is not armstrong number";
}
}
console.log(sum);