// var roll = 0
var StudentName = document.getElementById("name")
var FatherName = document.getElementById("fatherName")
var age = document.getElementById("age")
var gender = document.getElementById("gender")
var dob = document.getElementById("dob")

var butnstu = document.getElementById("student")
var table = document.createElement("table")
var thead = document.createElement("thead")
var tr = document.createElement("tr")



table.appendChild(thead)
thead.appendChild(tr)
tr.innerHTML = `<th>Name</th> <th>Father Name</th> <th>Roll No</th> <th>Age</th> <th>Gender</th> <th>Date Of Birth</th> <th colspan="2">Action</th>`

var tbody = document.createElement("tbody")
table.appendChild(tbody)

butnstu.parentNode.appendChild(table)

butnstu.addEventListener("click", function(){
    if(StudentName.value === "" || FatherName.value === "" || age.value === "" || gender.value === "" || dob.value === ""
    ){
        alert("Please fill your input")
        return false
    }
    var getData = JSON.parse(localStorage.getItem("studentData")) || []
    var data = {
        StudentName: StudentName.value,
        FatherName: FatherName.value,
        age: age.value,
        gender: gender.value,
        dob: dob.value,
        rollno : Math.round(Math.random()*321)
        
    }

    getData.push(data)
    localStorage.setItem("studentData", JSON.stringify(getData))
    // tbody.innerHTML = ""
    for(var i = 0; i < getData.length; i++){
        var bodyRow = document.createElement("tr")
        bodyRow.innerHTML = `
        <td>${getData[i].StudentName}</td>
        <td>${getData[i].FatherName}</td>
        <td>${getData[i].rollno}</td>
        <td>${getData[i].age}</td>
        <td>${getData[i].gender}</td>
        <td>${getData[i].dob}</td>
        <td>Edit</td>
        <td onclick="delete1(${i})" >Delete</td>

        `
        tbody.appendChild(bodyRow)
    }
})

var arr = [];
var get = localStorage.getItem("studentData");
if (get) {
  arr = JSON.parse(get);
}

function delete1(e) {
  console.log(e);
  arr.splice(e, 1);
  localStorage.setItem("studentData", JSON.stringify(arr));
  event.target.parentNode.remove();
}