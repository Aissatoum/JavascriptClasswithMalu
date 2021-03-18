//ask the user to enter two string
//convert the string to lowercase
//check the length of the string if their are equal
//create a for loop
//create an if statement
//check if the string match
//compare each character
var s1 = "listen";
var s2 = "silent+-";

var len = s2.length;
//var convert = ask.toLowerCase();
for(i=0; i<s1.length; i++){
   for(j=0; j<s2.length; j++){
       if(s1[i] == s2[j]){
           len--;
        // document.write(s1[i] + "<br>");
        for(m=j;m<len;m++){
            // document.write(s2[j] + "<br>");
         s2[m]= s2[m+1];
        }
    }
}
}
document.write(s2);
        for(n=0; n<len; n++){
            if((s2[n] > 65 && s2[n] < 90) || (s2[n] > 97 && s2[n] < 122 )){

                document.write('the string not are anagram');
                break;
        }
    }
    if(n==len){
            document.write('the string  are anagram')
       }
    
