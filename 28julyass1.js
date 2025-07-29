function timer(duration, onComplete){
    setTimeout(()=>{
        const message = `Timer of ${duration} ms finished`;
        onComplete(message);
    }, duration);
}
function handletimer(message){
    console.log(message);
}
timer(3000, handletimer);