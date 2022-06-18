let getdata=async (url)=>{
let response=await fetch(url);
let data=response.json();
return data;
}

let append=(data,container)=>{
console.log(data);
data.forEach(({image,price,title})=>{
let div=document.createElement("div");
let image1=document.createElement("img");
image1.src=image;
div.append(image1);
container.append(div);
})
}

export {getdata,append};