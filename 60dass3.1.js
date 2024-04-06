function isprime(num){
    c=0
    for (var i=1; i<=num; i++){
        
        if(num%i==0){
            c++
        }
    }
    if (c==2){
        console.log(" Prime Number")
    }
    else {
        console.log(" Not a Prime Number")
    }
}
 
isprime(5)