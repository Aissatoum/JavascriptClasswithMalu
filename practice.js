
function check(){
    var text = document.getElementById("enter").value;
if(text > 0){
    document.write(`the ${text} is positive`);
}else if(text < 0){
    document.write(`the ${text} is negative`);
}
}

