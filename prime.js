function checkprime(num){
    
let factor=0;
for(let i=1;i<=num;i++){
if(num%i==0){
factor++;
}}
if(f==2){
return true;
}else{
    return false;
}
}
let answer=checkprime(13);
if(answer==true){
    console.log("Prime");
}else{
    console.log("Not Prime");
}
