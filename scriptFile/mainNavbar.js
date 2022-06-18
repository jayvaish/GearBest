function mainNavbar() {
    return `<div class="otherLinkDiv">
    <i class="fa-solid fa-mobile-screen"></i><p>Save $3 with App</p> 
    <select  class="withApp">
        <option ><img src="https://uidesign.gbtcdn.com/GB/image/9534/Smart+Watches+PC+1190X420+EN.jpg" alt=""></option>
        <option ></option>
        <option ></option>
    </select>
    <p>Support Center </p>
    <select  class="withApp">
        <option ></option>
        <option >India</option>
        <option >Usa</option>
        <option >New york</option>
    </select>
    <p>Language</p>
    <select  class="withApp">
        <option ></option>
        <option >Google</option>
    </select>
    <p>Country Website</p>
    <select  class="withApp">
        <option ></option>
        <option >Global(English)</option>
        <option >France</option>
        <option >España</option>
        <option >Deutschland</option>
        <option >Italia</option>
        <option >Portugal</option>
        <option >Japan</option>
    </select>
</div>

<div class="navcontent">

 <div class="logoDiv">
 <a href="landing.html"><img src="https://uidesign.gbtcdn.com/GB/images/promotion/2019/a_evan/Gearbest/logo_gearbest.png" alt="logo image"></a></div>
    <div class="searchDiv"><p>All</p> 
        <select  id="extra">
  <option value=""></option>
  <option value="">MARKETPLACE</option>
  <option value="">Gearbest Selection </option>
  <option value="">Appliances </option>
  <option value="">Cell Phones & Accessories </option>
  <option value="">Computers, Tablets & Office</option>
  <option value="">Consumer Electronics Drones </option>
  <option value="">Toys & Hobbies</option>
        </select>
        <input type="search" class="searchBar" placeholder="Sarech">
        <div class="seIcon"><i class="fa-solid fa-magnifying-glass"></i></div>
    </div>

    <div class="linkDiv">
        <a href="register.html"><p class="SignInP"><i class="fa-regular fa-user"></i>Sign in</p></a>
        <a href=""><p class="linksIcon"><i class="fa-regular fa-heart"></i>Favorites</p></a>
        <a href=""><p class="linksIcon"><i class="fa-solid fa-cart-shopping"></i>Cart</p></a>
    </div>
</div>
<div class="expolorDiv">
    <div class="cataDiv">
        <h3>Category</h3>
    </div>
<a class="eploreTags" href=""><p>SUPER DEALS </p></a>
<a class="eploreTags" href=""><p>APP ONLY</p></a>
<a class="eploreTags" href=""><p>NEW ARRIVALS</p></a>
</div>
 </div>`
}

export default mainNavbar()