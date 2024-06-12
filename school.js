const school = {
    name: "XYZ School",
    establishYear: 1990,
    departments: {
      math: { teachers: 5, students: 150 },
      science: { teachers: 4, students: 120 },
      history: { teachers: 3, students: 100 },
      english: { teachers: 4, students: 130 },
    },
    courses: ["math", "science", "history", "english"],
    students: [
      {
        name: "Alice",
        className: "Grade 5",
        scores: { math: 95, science: 88, history: 85, english: 92 },
      },
      {
        name: "Bob",
        className: "Grade 4",
        scores: { math: 80, science: 78, history: 92, english: 85 },
      },
      {
        name: "Charlie",
        className: "Grade 5",
        scores: { math: 88, science: 90, history: 78, english: 88 },
      },
      {
        name: "Diana",
        className: "Grade 4",
        scores: { math: 92, science: 85, history: 88, english: 90 },
      },
    ],
  };

  //  problem - 10
 function countCalculation(school){
    const{departments: {math, history}}     = school
    return {
        mathTeachersCount: math.teachers,
        historyTeachersCount: history.teachers,
        mathStudentsCount: math.students,
        historyStudentsCount: history.students,
    }

  }
  // output
  console.log("Output :",countCalculation(school))


  //  problem - 11
  function findTopStudent(school, courseName) {
    const { students } = school;

    let highestScore = 0;
    let topStudent = null;

    students.forEach(student => {
        if (student.scores[courseName] > highestScore) {
            highestScore = student.scores[courseName];
            topStudent = student;
        }
    });

    return topStudent;
}
//  output
  console.log("Output :",findTopStudent(school,'math'))


  //  problem - 12
function addNewDept(school,newDepartment){
  let {departments} = school
   let department = {...departments,...newDepartment}
   school.departments = department
   return school;
}


let newDepartment ={
  art:{
  teachers:2,
  students:50,
  }
}


//  output
  console.log("Output : ",addNewDept(school,newDepartment))


  // problem - 13
  function higheststudentcountdepartment(school){
    const {departments} = school
    let maxstudents = 0
    let departmentname = ""
    for(const i in departments){
      let department = departments[i]
      if(department.students>maxstudents){
        maxstudents = department.students

        departmentname = i;
      }
    }
    return departmentname;
    

    
  }
console.log(higheststudentcountdepartment(school))


// Problem - 14
function generateGreeting(name,language)
{

  
  
  let greeting = {
    "English":"Hello",
    "Spanish":"Hola",
    "French":"Bonjour"
  }

  if(language==undefined || language=="English"){
    return "Hello"+", "+name }
  else{
    return greeting[language]+", "+name
  }  
}

console.log(generateGreeting("Alice"));
console.log(generateGreeting("Bob", "Spanish")); 
console.log(generateGreeting("Charlie", "French")); 


