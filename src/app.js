// var roll = 0

var butnstu = document.getElementById("student")
var table = document.createElement("table")
var thead = document.createElement("thead")
var tr = document.createElement("tr")



table.appendChild(thead)
thead.appendChild(tr)
tr.innerHTML = `<th>Name</th> <th>Father Name</th> <th>Roll No</th> <th>Age</th> <th>Gender</th>`

var tbody = document.createElement("tbody")
table.appendChild(tbody)

butnstu.parentNode.appendChild(table)

butnstu.addEventListener("click", function(){
    var getData = JSON.parse(localStorage.getItem("studentData")) || []
    var data = {
        StudentName: prompt("Enter your name "),
        FatherName: prompt("Enter your fathername "),
        age: prompt("Enter your age "),
        gender: prompt("Enter a gender"),
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

        `
        tbody.appendChild(bodyRow)
    }
})