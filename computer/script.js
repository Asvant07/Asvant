function my(){
    event.preventDefault();
    const input=document.getElementById("input").value
    const res=document.getElementById("result")
    
    
     let sum=0;
    let str1=input;
    
    console.log(str1)
    let str2="!abcdefghijklmnopqrstuvxyz"
for(let i=0;i<str1.length;i++){
    for(let j=0;j<str2.length;j++){
        if(str1[i]==str2[j]){
            sum=sum+j;
        }
    }
    console.log(sum)
}
}