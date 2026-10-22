let students = [];

function register() {
    let n = document.getElementById("name").value;
    let r = document.getElementById("roll").value;

    if (n == "" || r == "") {
        alert("Fill all fields");
    } else {
        students.push({name: n, roll: r});
        alert("Student Registered");
    }
}

function search() {
    let r = document.getElementById("roll").value;
    let s = students.find(x => x.roll == r);

    if (s)
        document.getElementById("result").innerHTML =
            "Name: " + s.name + "<br>Roll: " + s.roll;
    else
        document.getElementById("result").innerHTML =
            "Student Not Found";
}