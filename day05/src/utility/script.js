// import productdata from "./data.js";
// // console.log(productdata);
// let pr=productdata.map((product)=>product.productName);
// console.log(pr);

import users from "./userdata.js";

// console.log(users);

const data=users.map((user)=>{
    let address=user.address.street;
    let city = user.address.city;
    let pincode= user.address.zipcode;
    return {name:user.name,address,city,pincode};
}
)

console.log(data);
