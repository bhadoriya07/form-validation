 function validation()
 {
     console.log("hello world");
     s1=document.getElementById("exampleInpute1");
     s2=document.getElementById("exampleInputP1");
     var flag=true;
     input=document.getElementsByTagName("input");
     if(s1.value.length==0)
     {
         s1.style.bordercolor="red";
         flag=false;
         s1.innerHTML="Field cannot be empty";
     }
     else
     {
        s1.style.bordercolor="black";
     }
     if(s2.value.length==0)
     {
         s2.style.bordercolor="red";
         flag=false;
         s2.innerHTML="Field cannot be empty";
     }
     else
     {
        input[1].style.bordercolor="black";
     }
     return flag;
 }