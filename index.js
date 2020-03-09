var oClockInner=document.getElementsByClassName("clockInner")[0];
// 动态添加刻度
function produceLi(i){
    var li=document.createElement("li");
    var span=document.createElement("span");
    li.classList.add("num");
    span.innerText=i+1;
    span.style.transform="rotate("+(-i*30-30)+"deg)";
    li.appendChild(span);
    li.style.transform="rotate("+(i*30+30)+"deg)";
    oClockInner.appendChild(li)
}

for(var i=0;i<12;i++){
    produceLi(i)
}

var oSec=document.getElementsByClassName("sec")[0];
var oMin=document.getElementsByClassName("min")[0];
var oHour=document.getElementsByClassName("hour")[0];

function clock(){
    var time=new Date();
    // time_minsec毫秒
    var time_minsec=time.getMilliseconds();
    // time_sec秒针
    var time_sec=time.getSeconds();
    time_sec>=60?time_sec=0:time_sec=time_sec;
    var time_min=time.getMinutes();
    time_min>=60?time_min=0:time_min=time_min;
    var time_hour=time.getHours();
    time_hour>=12?time_hour=time_hour-12:time_hour=time_hour;

    var fillSecond=time_sec+time_minsec/1000;
    var fillMin=time_min+fillSecond/60;
    var fillHour=time_hour+fillMin/60;

    oSec.style.transform="rotate("+fillSecond*6+"deg)";
    oMin.style.transform="rotate("+fillMin*6+"deg)";
    oHour.style.transform="rotate("+fillHour*30+"deg)";
    var req=requestAnimationFrame(clock)

}
function init(){
    clock();
}
init();
// var timer=setInterval(clock,16.7)


