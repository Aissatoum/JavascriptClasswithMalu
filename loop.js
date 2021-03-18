function primeNum(){
    var num = document.getElementById("enter").value;
    var div = 2;
    while(div < num){
    if(num % div == 0){
        document.write(`${num} is a not a prime number`);
        break;
    
    }
    div++;
    }
    if(div == num)
    {
        document.write(`${num} is a prime number`);  
    }
}
/*
write a javascript programm to ask user to enter a number and print it's reverse number.

extend the above programm to check wheter the given number was palindron or not.
*/ 