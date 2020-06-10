
 window.onload = () => {
      for(let i = 0; i< 17;i++){
          document.getElementById("spiral").innerHTML+="<span></span>";
          document.getElementById("spiral_1").innerHTML+="<span></span>";
          if(i<13){
          document.getElementById("spiral_2").innerHTML+="<span></span>";
          document.getElementById("spiral_2").style.fontSize="40px";
          }

     } 
  }

  function login(){
     var forms = document.getElementById("fp");
     var book = document.getElementById("book");
     
book.classList.add('animate__animated', 'animate__fadeInRight');
      
     $("#f-2").fadeOut(1);
     $("#f").fadeOut(1);
       document.getElementById("f-1").style.display="inline-block";
       forms.style.background="#eb1654";
       $("#f-1").fadeIn(1);
       setTimeout(function(){            
          book.classList.remove('animate__animated');
                 },2000);
document.getElementById("form__page").style.width="50%";
  
  }

  
  function reg(){
     var book = document.getElementById("book1");
     $("#f-2").fadeOut(1);
     $("#f-1").fadeOut(1);
       document.getElementById("f").style.display="inline-block";
         
book.classList.add('animate__animated', 'animate__fadeInRight');
    
       $("#f").fadeIn(1);
       setTimeout(function(){            
book.classList.remove('animate__animated');
       },2000);
document.getElementById("form__page").style.width="50%";

  }

  
  function otp(){
     var book = document.getElementById("book2");
    
  document.getElementById("handler").style.fontSize="35px";
  document.getElementById("handler").style.width="60%";
  document.getElementById("handler").style.paddingLeft="20%";
 
book.classList.add('animate__animated', 'animate__fadeInRight');
    
     $("#f-1").fadeOut(1);
     $("#f").fadeOut(1);
       document.getElementById("f-2").style.display="inline-block";
       $("#f-2").fadeIn(1);
       setTimeout(function(){            
          book.classList.remove('animate__animated');
                 },2000);
       
  }
