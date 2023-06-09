 const form   =  document.getElementById("form");
      const campos =  document.querySelectorAll(".required");
      const spans   = document.querySelectorAll(".span-required");
      const emailRengex = /^\w+([-+.']\w+)+@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

      form.addEventListener("submit", (event) =>{
         event.preventDefault();
         console.log("asdasd");
         nameValidate();
         emailValidate();
         mainPasswordValidate();
         comparePassword();
      });
      
      function setError(index){
         campos[index].style.border = '2px solid #e63636';
         spans[index].style.display = 'block';
      }

      function removeError(index){
         campos[index].style.border = '';
         spans[index].style.display = 'none';
      }

      function nameValidate(){
         if(campos[0].value.length < 3) 
         {
            setError(0);
         }
         else
         {
            removeError(0);
         }// body...
      }

      function emailValidate(){
         if(!emailRengex.test(campos[1].value))
         {
            setError(1);
         } 
         else
         {
            removeError(1);
         }    
      }

      function mainPasswordValidate(){
          if(campos[2].value.length < 8)
           {
            setError(2);
         } 
         else
         {
            removeError(2);
            comparePassword();
         }     

      }

      function comparePassword(){
          if(campos[2].value == campos[3].value && campos[3].value.length >= 8)
           {
            setError(3);
         } 
         else
         {
            removeError(3);
         }      
      }

