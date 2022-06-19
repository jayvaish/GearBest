let getdata=JSON.parse(localStorage.getItem("userdata"));


let showdata=(getdata)=>{
    // let div=document.createElement("div");
    // div.setAttribute("id","end");
    let container=document.getElementById("end");
    let div1=document.createElement("div");
    div1.setAttribute("class","same");
    
    div1.innerHTML=getdata.name+" "+ getdata.lname;
    div1.style.color="black";
    div1.style.fontSize="15px";
    div1.style.fontWeight="700";
    let div2=document.createElement("div");
    div2.setAttribute("class","same");
    div2.innerText=getdata.phone_number+" "+"/"+" "+getdata.email;
    let div3=document.createElement("div");
    div3.setAttribute("class","same");
    div3.innerText=getdata.adress1+","+getdata.city+","+getdata.state+","+getdata.postal_code+","+getdata.country;
let div4=document.createElement("div");
div4.innerText="Edit";
div4.setAttribute("class","same");

div4.style.color="#007aff";

    // div.append(div1,div2,div3,div4);
    container.append(div1,div2,div3,div4);
}
showdata(getdata);


let item_price={
    price:200,
};
let shipping_cost={
    ship:80
};


// *******************************************

let details=JSON.parse(localStorage.getItem("proDetail"));
console.log(details);
function items(details){
    details.forEach(function(ele){

        console.log(ele);
      
        let div=document.createElement("div");
        div.setAttribute("class","forall");


        let image=document.createElement("img");
        image.style.height="100px"
        image.style.width="100px"
        image.src=ele.Image;


let div2=document.createElement("div");
div2.setAttribute("class","d22");


let div21=document.createElement("div");
div21.innerText=ele.proname;
div21.style.fontSize="18px";

div2.append(div21);

// let div3=document.createElement("div");
let div22=document.createElement("div");
div22.style.color="blue";
div22.style.fontSize="18px";
div22.innerText="Color"+" "+ ele.color;



div22.append(div2);

        div.append(image,div2,div22);
        // div0.append(div);
        let container=document.getElementById("p11");

        container.append(div);
        let h3=document.createElement("h3");
        h3.style.margin="0px 0px 0px 25px";
        h3.style.color="black";
     let container1= document.getElementById("p22");
    h3.innerText="Price:"+" "+ele.netPrice;
    container1.append(h3);
    
    })

    
}
items(details);


function subtotal(details){
    let sum=0
    
    details.forEach(function(ele){
sum=sum+ele.netPrice;
let d=document.querySelector(".item_sub");
d.innerHTML="Item Sub Total      :  " + "  "+" "+"  "+"<b>"+sum+"</b>";


var o=document.querySelector(".item_sub1");
o.innerHTML="Shipping Cost  : "+" "+"<b>"+shipping_cost.ship+"</b>";
var totalsum=sum+shipping_cost.ship;

var check=localStorage.setItem("gdPrice",JSON.stringify(totalsum))
console.log(totalsum);

let c=document.querySelector(".item_sub2");
c.innerHTML="Grand Total : "+" "+totalsum;
let con=document.getElementById("p33");
con.innerHTML= "<b>"+ 1+"</b>";
con.style.color="black";
con.style.fontSize="30px";
// con.style.margin="10px 0px 0px 10px";
let con1=document.getElementById("p44");
con1.innerHTML=totalsum;
con1.style.fontSize="30px";
con1.style.color="red";


    })
    
}

subtotal(details);



document.getElementById("place").addEventListener("click",function(){

    // console.log("hello");
    
    let datastored=(totalsum)=>{
    
        let setdata=localStorage.setItem("formdata",JSON.stringify(getdata));
        let setdetails=localStorage.setItem("productdata",JSON.stringify(details));
    //  let grendTotl=localStorage.setItem("tlPrice",JSON.stringify(totalsum))
    
    // window.location.href="payment\payment.html"
    window.location.href="finPayment.html"
    }
    // console.log(datastored);
    alert("Order place Successful")
    datastored()
    
});




