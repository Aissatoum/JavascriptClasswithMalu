/*
write a javascript programm to ask user to enter a number and print it's reverse number.

extend the above programm to check wheter the given number was palindron or not.
*/
function getReverse() {
    var user = document.getElementById('number').value;
    //var num = document.getElementById('result');
    var i,rev=0;
    var store;
    store = user;
    //var palin = user;
    while(user !=0){
        rev=(rev*10)+(user%10);
        user=parseInt(user/10);
    }  
    if(store == rev){
        document.write(` ${store} is a palindrome`);
    } else{
        document.write(` ${store} is not a palindrome`);
        return false;
    }
    // document.write(`reverse number is = ${rev}`);
    // return false;
}