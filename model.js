/**
 * Created by 96004 on 2017/7/30.
 */
let mongoose=require('mongoose');
let conn=mongoose.createConnection('mongodb://127.0.0.1/crawl');
module.exports=conn.model('Movie',new mongoose.Schema({
    name:String,
    url:String
}))