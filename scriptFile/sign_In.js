
    function chechUserData(){
        event.preventDefault();
        // let checkUser=JSON.parse(localStorage.getItem("Information")) || [] for array format
        let checkUser=JSON.parse(localStorage.getItem("Information")) 
        

        let checkEmail=document.getElementById("checkEmail_In").value;
        let checkPassword=document.getElementById("checkPassword_In").value;
        


            if ((checkEmail=="") || (checkUser.userEmail!==checkEmail) ) 
            {
                document.getElementById("emailError").innerText="Please enter a valid email address"
            }


            else if((checkPassword=="") || (checkUser.createPass!==checkPassword)){

                document.getElementById("passError").innerText="Please enter the same value again"
            }


            else if((document.getElementById("checkBox").checked!==true))
             {
                 alert("Please click on check box")
                    
             }
            
            else if ((checkUser.userEmail==checkEmail) && (checkUser.createPass==checkPassword)) 
            {
                alert("Sign In Successful")
                window.location.href="index.html"
            } 
            
}