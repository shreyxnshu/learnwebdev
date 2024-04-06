function prime(num) {
    for ( var i=2; i<=num; i++){
        c=0
        for ( var j=1; j<=i; j++){
            if(i%j==0){
                c++
            }
        }
        if (c==2){
            console.log(i)
        }
    }
}

prime(15)
