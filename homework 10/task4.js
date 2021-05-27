function task4(){
    p=document.getElementById("p").value;
    n=document.getElementById("n").value;
    r=document.getElementById("r").value;
    result=document.getElementById("result");
    k=p*(1+r)
    val=Math.pow(k,n);
    result.value=val;
}