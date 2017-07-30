/**
 * Created by 96004 on 2017/7/30.
 */
let Movie=require('../model');
module.exports=function (movies,callback) {
    Movie.create(movies,callback)
}
/*
module.exports([{name:'阿牛',url:'http://wwww.tokyohot.com'}],function (err,doc) {
    console.log(doc);
})*/
