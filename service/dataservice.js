
// import db.js

const db = require("./db")

loaditems = () => {
    return db.Shoe.find().then(res => {
        if (res) {

            return {
                message: res
            }
        }
        else {

            return {
                message: "wrong data"
            }
        }
    }
    )
}


viewitem = (name) => {
    return db.Shoe.findOne({ name }).then(res => {
        if (res) {

            return {
                message: res
            }
        }
        else {

            return {
                message: "wrong data"
            }
        }
    })
}





addtocart = (name, price, color, size, img) => {
    var size = parseInt(size)
    var price = parseInt(price)
    return db.Cart.findOne({ name }).then(item => {
        if (item) {
            return{
                message:"already present in cart",
                price:0
            } 
              

            
        }
        else {


            const newitem = new db.Cart({
                price,
                name,
                size,
                color,
                img
            })

            newitem.save();
            return {
                message:"successfully added",
                price:price
            };
            
        }
    })
}


loadcart=()=>{
    return db.Cart.find().then(res => {
        if (res) {

            return res;
        }
        else {

            return {
                message: " "
            }
        }
    }
    )
}


removeitem=(name)=>{


return db.Cart.findOneAndDelete({name}).then(res=>{
    if(res){

        return {
            message:"successfully deleted",
            price:res.price}
    }
    else{

        return {
            message:"no item found",
            price:res.price
        }
    }
})

}


removeall=()=>{

    return db.Cart.deleteMany().then(res=>{
        if(res){
    
            return "successfully deleted"
        }
        else{
    
            return {
                message:"no item found"
            }
        }
    })


}
module.exports = {
    loaditems,
    viewitem, addtocart,loadcart,removeitem,removeall
}

