function armstrongNum(user){
var no;
for(i=0; i < user; i++){
var org = i;
var sum=0;
while(org > 0){
no = org % 10;
sum += no * no * no;
org = parseInt(org/10);
}
if(sum == i){
    document.write(i + " is armstrong number" +"<br>");
}
}
}



