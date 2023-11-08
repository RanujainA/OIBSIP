var res=document.querySelector("#result");

function display(val){
    res.value+=val;
    return val;
}
function calResult(){
    var x=res.value;
    var y=eval(x);
    res.value=y;
    return y;
}
function clearInput(){
    res.value=""
}
function removeLastdigit(){
    res.value=res.value.toString().slice(0,-1);
}