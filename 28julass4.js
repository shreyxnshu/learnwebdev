function checkEvenNumber(num) {
    return new Promise((resolve, reject) => {
        if (typeof num === "number" && num % 2 === 0) {
            resolve(`${num} is even`);
        } else {
            reject(`${num} is odd or invalid`);
        }
    });
}


checkEvenNumber(4).then(console.log).catch(console.error); 
checkEvenNumber(5).then(console.log).catch(console.error); 
checkEvenNumber("hello").then(console.log).catch(console.error); 
