/* =========================
   LOGIN
========================= */

function login() {

    const email =
    document.getElementById("email")?.value;

    const password =
    document.getElementById("password")?.value;

    if (!email || !password) {

        alert("Please enter Email & Password");

        return;
    }

    window.location = "dashboard.html";
}

/* =========================
   LOGOUT
========================= */

function logout() {

    if(confirm("Are you sure you want to logout?")){

        window.location = "index.html";
    }
}

/* =========================
   SEARCH LEADS
========================= */

function searchLead() {

    let input =
    document.getElementById("search");

    if(!input) return;

    let filter =
    input.value.toUpperCase();

    let table =
    document.getElementById("leadTable");

    let tr =
    table.getElementsByTagName("tr");

    for(let i = 1; i < tr.length; i++){

        let name =
        tr[i].getElementsByTagName("td")[0];

        let email =
        tr[i].getElementsByTagName("td")[1];

        let text =
        name.textContent +
        email.textContent;

        if(text.toUpperCase().indexOf(filter) > -1){

            tr[i].style.display = "";

        }else{

            tr[i].style.display = "none";
        }
    }
}

/* =========================
   COUNTER ANIMATION
========================= */

function startCounters(){

    const counters =
    document.querySelectorAll(".counter");

    counters.forEach(counter=>{

        const target =
        +counter.getAttribute("data-target");

        let count = 0;

        const speed = target / 60;

        const update = () => {

            count += speed;

            if(count < target){

                counter.innerText =
                Math.floor(count);

                requestAnimationFrame(update);

            }else{

                counter.innerText =
                target;
            }
        };

        update();
    });
}

/* =========================
   REAL TIME CLOCK
========================= */

function updateClock(){

    const clock =
    document.getElementById("clock");

    if(!clock) return;

    const now =
    new Date();

    clock.innerHTML =
    now.toLocaleString();
}

setInterval(updateClock,1000);

/* =========================
   DARK MODE
========================= */

const themeBtn =
document.getElementById("themeToggle");

if(themeBtn){

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark-mode");

});

}

    });


/* =========================
   ADD LEAD
========================= */

document.addEventListener(
"DOMContentLoaded",
()=>{

    const addBtn =
    document.querySelector(".add-lead button");

    if(addBtn){

        addBtn.addEventListener(
        "click",
        ()=>{

            const inputs =
            document.querySelectorAll(
            ".add-lead input"
            );

            const name =
            inputs[0].value;

            const email =
            inputs[1].value;

            if(!name || !email){

                alert(
                "Enter Lead Details"
                );

                return;
            }

            const table =
            document.getElementById(
            "leadTable"
            );

            const row =
            table.insertRow(-1);

            row.innerHTML = `
            <td>${name}</td>
            <td>${email}</td>
            <td>
            <span class="badge low">
            New
            </span>
            </td>
            `;

            inputs.forEach(
            input =>
            input.value=""
            );

            alert(
            "Lead Added Successfully!"
            );
        });
    }

});

/* =========================
   LOADER
========================= */

window.addEventListener(
"load",
()=>{

    const loader =
    document.getElementById(
    "loader"
    );

    if(loader){

        setTimeout(()=>{

            loader.style.opacity="0";

            loader.style.transition=
            "0.5s";

            setTimeout(()=>{

                loader.style.display=
                "none";

            },500);

        },1500);
    }

});

/* =========================
   INITIALIZE
========================= */

document.addEventListener(
"DOMContentLoaded",
()=>{

    startCounters();

    updateClock();

});
const exportBtn =
document.getElementById("exportBtn");

if(exportBtn){

exportBtn.addEventListener("click",()=>{

alert("Leads Exported Successfully");

});

}