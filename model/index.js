const mongoose=require('mongoose')
let userSchema={
    username:String,
    password:String,
    collections: Array
}


let albumsSchema={
    album_id: String,
    album_name: String,
    public_time: String,
    week: Number,
    price: Number,
    cover: String,
    singers: Array
}

let singersSchema = {
    singer_id: String,
    singer_name: String
}

mongoose.model("user",userSchema);

mongoose.model("albums",albumsSchema);

mongoose.model('singers', singersSchema);