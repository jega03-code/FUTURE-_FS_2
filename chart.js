/* =========================
   LEAD ANALYTICS CHART
========================= */

document.addEventListener(
"DOMContentLoaded",
()=>{

const chartCanvas =
document.getElementById("leadChart");

if(!chartCanvas) return;

const ctx =
chartCanvas.getContext("2d");

new Chart(ctx,{

type:"line",

data:{

labels:[
"Jan",
"Feb",
"Mar",
"Apr",
"May",
"Jun"
],

datasets:[

{
label:"New Leads",

data:[
30,
45,
60,
55,
80,
95
],

borderColor:"#7c3aed",

backgroundColor:
"rgba(124,58,237,.2)",

fill:true,

tension:.4
},

{
label:"Converted",

data:[
10,
20,
25,
35,
50,
70
],

borderColor:"#db2777",

backgroundColor:
"rgba(219,39,119,.2)",

fill:true,

tension:.4
}

]

},

options:{

responsive:true,

maintainAspectRatio:false,

plugins:{

legend:{
labels:{
color:"#ffffff"
}
}

},

scales:{

x:{
ticks:{
color:"#ffffff"
},
grid:{
color:"rgba(255,255,255,.1)"
}
},

y:{
ticks:{
color:"#ffffff"
},
grid:{
color:"rgba(255,255,255,.1)"
}
}

}

}

});

});