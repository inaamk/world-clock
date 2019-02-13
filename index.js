function showTime(){
  let arr=["paris","london"];
  let arr2=["lebanon", "egypt"];
  let arr3=["luanda"];
  var country = document.getElementById("list").value;
  var b;
  var d = new Date();
  if(arr.includes(country)){
      b=new Date(d.toLocaleString("en-US", {timeZone: "Europe/Paris"}));
  }else if(arr2.includes(country)){
    b=new Date(d.toLocaleString("en-US", {timeZone: "Asia/Beirut"}));
  }else if(arr3.includes(country)){
    b=new Date(d.toLocaleString("en-US", {timeZone: "America/Los_Angeles"}));
  }
  //var b = new Date(d.toLocaleString("en-US", {timeZone: "Europe/Paris"}));
  var nhar = b.getUTCDate();
  var seneh = b.getUTCFullYear();
  var chaher = b.getUTCMonth()+1;
  var day;
  //var n = b.getTimezoneOffset();
  var a = -(b.getTimezoneOffset()/60);
  //var se3a = b.getUTCHours()+a;
  //var min = b.getUTCMinutes();
  //var sec = b.getUTCSeconds();
  let formatHours= convertFormat(b.getUTCHours()+a);
  //hours=checkTime(b.getUTCHours()+a);
  hours =addZero(checkTime(b.getUTCHours()+a));
  minutes =addZero(b.getUTCMinutes());
  seconds =addZero(b.getUTCSeconds());
switch (new Date().getUTCDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}

document.getElementById("wday").innerHTML = "Today is " + day +" "+ nhar + " "+ chaher + " "+ seneh;
document.getElementById("hours").innerHTML= hours + " "+ minutes +" "+seconds +" "+ formatHours;
}

function convertFormat(time){
  let format='AM';
  if(time>=12){
    format='PM';
  }
  return format;
}
function checkTime(time){
  if(time>12){
    time =time -12;
  }
  if(time===0){
    time=12;
  }
  return time;
}
function addZero(time){
  if (time<10){
    time="0"+time;
  }
  return time;
}
showTime();
setInterval(showTime,1000);


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90;
setInterval(drawClock, 1000);

function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
  var grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2*Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();
  grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
  grad.addColorStop(0, '#333');
  grad.addColorStop(0.5, 'white');
  grad.addColorStop(1, '#333');
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius*0.1;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
  ctx.fillStyle = '#333';
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  var ang;
  var num;
  ctx.font = radius*0.15 + "px arial";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  for(num = 1; num < 13; num++){
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius*0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius*0.85);
    ctx.rotate(-ang);
  }
}

function drawTime(ctx, radius){
  let arr=["paris","london"];
  let arr2=["lebanon", "egypt"];
  let arr3=["luanda"];
  var country = document.getElementById("list").value;
  var b;
  var d = new Date();
  if(arr.includes(country)){
      b=new Date(d.toLocaleString("en-US", {timeZone: "Europe/Paris"}));
  }else if(arr2.includes(country)){
    b=new Date(d.toLocaleString("en-US", {timeZone: "Asia/Beirut"}));
  }else if(arr3.includes(country)){
    b=new Date(d.toLocaleString("en-US", {timeZone: "America/Los_Angeles"}));
  }
  var d = new Date();
  //var b = new Date(d.toLocaleString("en-US", {timeZone: "Europe/Paris"}));
  var day;
  var a = -(b.getTimezoneOffset()/60);
  let formatHours= convertFormat(b.getUTCHours()+a);
  hours =addZero(checkTime(b.getUTCHours()+a));
  minutes =addZero(b.getUTCMinutes());
  seconds =addZero(b.getUTCSeconds());
    //hour
    hours=hours%12;
    hours=(hours*Math.PI/6)+
    (minutes*Math.PI/(6*60))+
    (seconds*Math.PI/(360*60));
    drawHand(ctx, hours, radius*0.5, radius*0.07);
    //minute
    minutes=(minutes*Math.PI/30)+(seconds*Math.PI/(30*60));
    drawHand(ctx, minutes, radius*0.8, radius*0.07);
    // second
    seconds=(seconds*Math.PI/30);
    drawHand(ctx, seconds, radius*0.9, radius*0.02);
}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}
function myFunction() {
  var x = document.getElementById("canvas");
  var y=document.getElementById("page");
  var q=document.getElementById("anDig")
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.display="block";
    q.innerHTML="Analog";
  } else {
    x.style.display = "block";
    y.style.display="none";
    q.innerHTML="Digital";
  }
}
