/* =========================
   LEADFLOW CRM
   NOTIFICATIONS.JS
========================= */

document.addEventListener(
"DOMContentLoaded",
()=>{

/* -------------------------
   Notification Data
-------------------------- */

const notifications = [

{
title:"New Lead Added",
message:"John Doe has been added."
},

{
title:"Meeting Scheduled",
message:"Client meeting at 4:00 PM."
},

{
title:"Lead Converted",
message:"David Lee became a customer."
}

];

/* -------------------------
   Notification Bell
-------------------------- */

const bell =
document.querySelector(
".notification"
);

if(!bell) return;

bell.addEventListener(
"click",
showNotifications
);

/* -------------------------
   Show Notifications
-------------------------- */

function showNotifications(){

let content = "";

notifications.forEach(item=>{

content +=
`
🔔 ${item.title}

${item.message}

---------------------

`;
});

alert(content);

}

/* -------------------------
   Auto Popup
-------------------------- */

setTimeout(()=>{

showToast(
"🚀 Welcome to LeadFlow CRM"
);

},2000);

/* -------------------------
   Random Toast Messages
-------------------------- */

const tips = [

"📈 Revenue increased this week",

"👥 5 New Leads Added",

"🎯 Conversion Goal Reached",

"🔥 Weekly Report Generated"

];

setInterval(()=>{

const randomTip =

tips[
Math.floor(
Math.random()*tips.length
)
];

showToast(randomTip);

},25000);

/* -------------------------
   Toast Function
-------------------------- */

function showToast(message){

const toast =
document.createElement("div");

toast.className =
"crm-toast";

toast.innerHTML =
message;

document.body.appendChild(
toast
);

setTimeout(()=>{

toast.classList.add(
"show"
);

},100);

setTimeout(()=>{

toast.classList.remove(
"show"
);

setTimeout(()=>{

toast.remove();

},500);

},3500);

}

});