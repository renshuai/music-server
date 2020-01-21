const mongoose=require('mongoose')
let userSchema={username:String,password:String}

mongoose.model("user",userSchema);