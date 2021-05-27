function task3(){
    p=document.getElementById("p").value;
    t=document.getElementById("t").value;
    r=document.getElementById("r").value;
    result=document.getElementById("result");
    val=p*t*r/100;
    result.value=val;
}