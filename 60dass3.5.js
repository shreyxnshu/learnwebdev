function tochangespace(str){
    let arr = str.split(" ")
  
    s=""
    
    for (var i=0; i<arr.length; i++){
     s=s+arr[i]+"#"
        
    }
   console.log(s)
}
tochangespace(" Hey there im Shreyanshu Sinha")