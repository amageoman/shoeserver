
// server mongodb integration

//1 ) import mongoose

const mongoose = require ('mongoose')

// 2) state connection string via mongoose

mongoose.connect('mongodb://localhost:27017/shoeserver', {useNewUrlParser:true})




//3) define a bank database model 

const Shoe = mongoose.model('Shoe',{
    price: Number,
    name: String,
    size:[],
    color:[],
    description : String,
    img:String
})


const Cart = mongoose.model('Cart',{
    price: Number,
    name: String,
    size:Number,
    color:String,
    img:String
    
})
// 4) export the schema to use in another files


module.exports=
{
    Shoe,Cart
}

