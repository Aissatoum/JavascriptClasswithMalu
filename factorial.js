function factorialNum(){
    var user = document.getElementById("number").value;
//     var facto = 1;
//     while(user > 0){
//         facto =(facto * user);
//         user--;
//     }
//     document.write(facto);
// }
var prev = 0, next = 1, sum = 0, cnt= 0;
while(cnt < user){
    document.write(prev + " ");
    sum = prev + next;
     prev=next;
     next=sum;
    cnt++;
}
}