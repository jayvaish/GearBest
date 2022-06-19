// let newdata=JSON.parse(localStorage.getItem("userdata"))||[];
document.getElementById("confirm").addEventListener("click",errorthrough);
function errorthrough(){

    let data={
         name:document.getElementById("name").value,
         lname:document.getElementById("lname").value,
         adress1:document.getElementById("a1").value,
         adress2:document.getElementById("a2").value,
         country:document.getElementById("country").value,
         state:document.getElementById("state").value,
         city:document.getElementById("city").value,
         postal_code:document.getElementById("postal_code").value,
phone_number:document.getElementById("phone_number").value,  
email:document.getElementById("e_mail").value,         


    }
    
    if(data.name==""){

  let append= document.getElementById("append");
  append.setAttribute("class","err1");
  
  
  append.innerText="Please fill your name";
  append.style.color="red";
  append.style.fontSize="15px";
}
else if(data.lname==""){

    let append1= document.getElementById("append1");
    append1.setAttribute("class","err1");
 append1.innerText="Please fill Last name";
    append1.style.color="red";
    append1.style.fontSize="15px";
  }
  else if(data.adress1==""){
 let append2= document.getElementById("append2");
    append2.setAttribute("class","err1");
 append2.innerText="Please fill Your Address";
    append2.style.color="red";
    append2.style.fontSize="15px";
  }
  else if(data.adress2==""){

    let append3= document.getElementById("append3");
    append3.setAttribute("class","err1");
    append3.innerText="Please fill Your Address";
    append3.style.color="red";
    append3.style.fontSize="15px";
  }
  else if(data.city==""){

    let append4= document.getElementById("append4");
   append4.innerText="Please Enter Your City name";
    append4.style.color="red";
    append4.style.fontSize="15px";
  }
  else if(data.postal_code==""){

    let append5= document.getElementById("append5");
   append5.innerText="Please Enter Postal_Code name";
    append5.style.color="red";
    append5.style.fontSize="15px";
  }
  else if(data.phone_number==""){

    let append6= document.getElementById("append6");
   append6.innerText="Please Enter Phone Number name";
    append6.style.color="red";
    append6.style.fontSize="15px";
  }
  else if(data.email==""){

    let append7= document.getElementById("append7");
   append7.innerText="Please Enter Phone Number name";
    append7.style.color="red";
    append7.style.fontSize="15px";
  }
  else{
// newdata.push(data);
localStorage.setItem("userdata",JSON.stringify(data));
alert("Address is updated Successful")
window.location.href="placeorder.html";
  }
}