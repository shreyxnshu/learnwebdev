let employeeName = document.querySelector("#name")
let id = document.querySelector("#employeeID")
let department = document.querySelector("#department")
let experience = document.querySelector("#exp")
let emailadd = document.querySelector("#email")
let mobno = document.querySelector("#mbl")
let tablebody = document.getElementById("tableBody")
let data = []


let form = document.getElementById("btn")
form.addEventListener("click" , handleclick)

function saveData(){
    localStorage.setItem("data" , JSON.stringify(data))

}
 
function loadData(){
    let storedvalue = JSON.parse(localStorage.getItem("data"))
    if (storedvalue){
        data = storedvalue
        showData(data)
    }
}

function handleclick(){
    let obj = {
        employeeName : employeeName.value ,
        employeeID : id.value ,
        department : department.value ,
        experience : experience.value , 
        emailadd : emailadd.value , 
        mobno : mobno.value
    }
    data.push(obj)
    saveData()
    showData(data)
    // localStorage.setItem("data" , JSON.stringify(employeeName.value))
    // let value = JSON.parse(localStorage.getItem("data"))
    // console.log(value)
    // console.log(employeeName.value , id.value , department.value , mobno.value)
}

function showData(arr){
    tablebody.innerHTML = ""
    arr.forEach(function(ele , i){
        let tr = document.createElement("tr")

        let td1 = document.createElement("td")
        td1.innerHTML = ele.employeeName

        let td2 = document.createElement("td")
        td2.innerHTML = ele.employeeID

        let td3 = document.createElement("td")
        td3.innerHTML = ele.department

        let td4 = document.createElement("td")
        td4.innerHTML = ele.experience

        let td5 = document.createElement("td")
        td5.innerHTML = ele.emailadd

        let td6 = document.createElement("td")
        td6.innerHTML = ele.mobno

        let td7 = document.createElement("td")
        if (ele.experience > 5){
            td7.innerHTML = "<p> Senior </p>"
        }
        else if (ele.experience > 2 && ele.experience < 5){
            td7.innerHTML = "<p> Junior </p>"
        }
        else if (ele.experience <= 1){
            td7.innerHTML = "<p> Fresher </p>"
        }

        tr.append(td1, td2, td3, td4, td5, td6 , td7)
        tablebody.append(tr)
    })
}

loadData()