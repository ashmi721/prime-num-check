
const check = () =>{
    const num = document.getElementById("prime").value;
 
let count= 0;
for(let i=1;i<=num;i++){
    if(num % i == 0){
        count++;
    }if(count==2){
        document.getElementById("results").innerHTML = `${num} is a prime number.`;
    }else{
        document.getElementById("results").innerHTML = `${num} is not a prime number.`; 
    }
}
}