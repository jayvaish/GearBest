var slideIndex = 0;
      showSlides();
      function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        for(i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        slideIndex++;
        if(slideIndex > slides.length) {
          slideIndex = 1
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 2000); // Change image every 2 seconds
      }



 
      document.querySelector("#container").addEventListener("click",function(){
        window.location.href="addToCart.html"
        // console.log("hello");
        
      })

      // var oldUser=JSON.parse(localStorage.getItem("userEmail"))
// var Name=JSON.parse(localStorage.getItem("Information"))
// console.log();
// if (Name.userEmail!=="")
// {
//    document.querySelector(".SignInP").innerText="rajk";
   
// }