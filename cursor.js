/* =========================
   CUSTOM CURSOR
========================= */

const cursor =
document.querySelector(".cursor");

const cursorDot =
document.querySelector(".cursor-dot");

document.addEventListener(
"mousemove",
(e)=>{

    if(cursor){

        cursor.style.left =
        e.clientX + "px";

        cursor.style.top =
        e.clientY + "px";
    }

    if(cursorDot){

        cursorDot.style.left =
        e.clientX + "px";

        cursorDot.style.top =
        e.clientY + "px";
    }

});

/* =========================
   HOVER EFFECT
========================= */

const hoverElements =
document.querySelectorAll(
"a,button,input,.card"
);

hoverElements.forEach(el=>{

    el.addEventListener(
    "mouseenter",
    ()=>{

        if(cursor){

            cursor.style.transform =
            "translate(-50%,-50%) scale(1.8)";

            cursor.style.borderColor =
            "#db2777";
        }

    });

    el.addEventListener(
    "mouseleave",
    ()=>{

        if(cursor){

            cursor.style.transform =
            "translate(-50%,-50%) scale(1)";

            cursor.style.borderColor =
            "#ffffff";
        }

    });

});

/* =========================
   CLICK EFFECT
========================= */

document.addEventListener(
"mousedown",
()=>{

    if(cursor){

        cursor.style.transform =
        "translate(-50%,-50%) scale(.8)";
    }

});

document.addEventListener(
"mouseup",
()=>{

    if(cursor){

        cursor.style.transform =
        "translate(-50%,-50%) scale(1)";
    }

});