function login(){

window.location="dashboard.html"

}

function logout(){

window.location="index.html"

}

function searchLead(){

let input=
document.getElementById("search");

let filter=
input.value.toUpperCase();

let table=
document.getElementById("leadTable");

let tr=
table.getElementsByTagName("tr");

for(let i=1;i<tr.length;i++){

let td=
tr[i].getElementsByTagName("td")[0];

if(td){

let txt=
td.textContent;

tr[i].style.display=
txt.toUpperCase().indexOf(filter)>-1
?
""
:
"none"

}

}

}