var counter;
// console.log(localStorage.getItem("counterNum",counter))
if(localStorage.getItem("counterNum",counter)==null){
    counter = 1;
}else{
    counter = localStorage.getItem("counterNum",counter);
}
document.querySelector(".value").innerText = counter;
console.log(counter)
document.querySelector(".adding").addEventListener("click",incFun);
function incFun(){
    counter++;
    localStorage.setItem("counterNum",counter);
    document.querySelector(".value").innerText = counter;
   
    
}

document.querySelector(".substract").addEventListener("click",decFun);

    function decFun(){
        counter--;
        localStorage.setItem("counterNum",counter);
        document.querySelector(".value").innerText = counter;
    }




document.getElementById("addBtn")
let proArr=[]
function userData(){

  var usersObj={
    name:"2022 New Smartphone 7.3 Inch MIX4 72MP Camera Unlock Mobile Phones Celular Cellphone Qualcomm 888+ - Black 4GB 128GB",
    Image:"https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16488/goods_img_big-v3/d238ad6a3d2a.jpg",
    netPrice:"$114.00",
    color :"Black",
    size:"4GB 256GB"
  };
  proArr.push(usersObj)
//   console.log(proArr);
  localStorage.setItem("proDetail",JSON.stringify(proArr))
}




var suggestPro = [
    {
        proImage:"https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16499/goods_img-v5/6233d35f6f8a.jpg",
        proName : "Samebike 20LVXD30 350W Foldable Electric",
        prodPrice : "$107.40",
        stPrice:"$256.90",
    },
    {
        proImage:"https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16472/goods_img-v1/3a6f1ce7b307.jpg",
        proName : "FIIDO D2S Folding Moped Electric Bike",
        prodPrice : "$114.00",
        stPrice:"$285.00",
    },
    {
        proImage:"https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16487/goods_img-v1/8bb66e417669.jpg",
        proName : "ENGWE EP-2 PRO Folding Electric Bike",
        prodPrice : "$109.90",
        stPrice:"$$219.80",
    },
    {
        proImage:"https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16498/goods_img-v1/b6f581eee531.jpg",
        proName : "FIIDO D3 Pro Folding Electric Moped Bike 14",
        prodPrice : "$359.50",
        stPrice:"$718.00",
    },
    {
        proImage:"https://gloimg.gbtcdn.com/soa/gb/item/6908377430696849408/16520/goods_img-v1/56de61bda51f.jpg",
        proName : "EU/US Stock ENGWE EP-2PRO 20inch Fat Tire",
        prodPrice : "$140.00",
        stPrice:"$280.00",
    },
    {
        proImage:"https://gloimg.gbtcdn.com/soa/gb/item/6908377430696849408/16485/goods_img-v3/94b2d6a693bf.jpg",
        proName : "Samebike SY26 26inch 350W Electric Bike 36V",
        prodPrice : "$181.00",
        stPrice:" $362.00",
    },

];



    let container=document.querySelector(".recommdedDiv")
    suggestPro.forEach(el => {
    
    let box=document.createElement("div")

    let image=document.createElement("img")
    image.src=el.proImage

    let title=document.createElement("p")
    title.innerText=el.proName

    let proPrice=document.createElement("h2")
    proPrice.innerText=el.prodPrice

    let strPric=document.createElement("strike")
    strPric.setAttribute("class","cutPric")
    strPric.innerText=el.stPrice


// console.log(image,title,proPrice,strPric,disPrice);
box.append(image,title,proPrice,strPric)
container.append(box)
});
