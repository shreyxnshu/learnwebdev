
function startTask() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task A completed");
        }, 1000); // 1 second delay
    });
}


function processTask(taskAResult) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Task B processed: ${taskAResult}`);
        }, 1500); // 1.5 seconds delay
    });
}


function finalizeTask(taskBResult) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Final result: ${taskBResult}`);
        }, 500); // 0.5 second delay
    });
}


startTask()
    .then(resultA => {
        console.log(resultA);
        return processTask(resultA);
    })
    .then(resultB => {
        console.log(resultB);
        return finalizeTask(resultB);
    })
    .then(finalResult => {
        console.log(finalResult);
    })
    .catch(error => {
        console.error("An error occurred:", error);
    });
