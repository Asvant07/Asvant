let number="02578354571 "
let yes=number.split('')
 let sum=""

for(let i=0;i<yes.length;i++){
    if(yes[i]%2!=0 && yes[i+1]%2!=0){
    sum+=yes[i]+"-";
    }
    else{
        sum+=yes[i]
    }
}
console.log(sum)
  

let nam="name"
let sum=""
for(let i=0;i<nam.length;i++){
    for(let j=i;j<=nam.length;j++){
        sum+=nam.substring(i,j)+"\n "
    }
}
console.log(sum)




let num=['55','10','15','25','37'];

/*for(let i=0;i<num.length;i++){
    if(num[i]%5==0){
        console.log(num[i])
    }
}*/
let res= num.filter((elem)=> elem%5==0);

let res1=res.map((elem)=> elem*2);

console.log(res1);







function fun(a,b){
     let sum=a+b;
      return String.fromCharCode(sum);
 }
let x=fun(64,1)
 console.log(x)



