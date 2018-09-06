var data = ["1-3元","3-5元","5-10元","10-15元","15元以上"];

// 获取元素对象
var Allprice = document.querySelector(".Allprice");

var str = "";
for(var i=0;i<data.length;i++){
    str += "<li><a href='javascript:;'>"+ data[i] +"</a></li>"
}
Allprice.innerHTML = str;

    // 商铺数据
    $.get("http://193.112.55.79:9090/api/getgsshop",function (res) {

        // 调用模板方法
        var html=template("shops",{arr:res.result});

        // 渲染
        $(".Allshops").html(html);
    })

    // 地址数据
    $.get("http://193.112.55.79:9090/api/getgsshoparea",function (res){

        // 调用模板方法
        var htmlStr = template("address",{data:res.result});

        // 渲染页面
        $(".Alladdress").html(htmlStr);
    });

    // 产品数据
    $.get("http://193.112.55.79:9090/api/getgsproduct",{shopid:0,areaid:0},function (res){
    console.log(res);
        // 调用模板方法
        var htmlStr = template("goods",{data:res.result});

        // 渲染页面
        $(".goods").html(htmlStr);
    });

window.onload = function (){

    // 获取元素对象
    var headList = document.querySelectorAll(".head_ul li");
    var dropOneInfo = document.querySelectorAll(".dropOneInfo");

    // 循环创建点击事件
    $.each(headList,function (index,element){
        $(this).on("tap",function (){
            $(".dropOneInfo").eq(index).toggleClass("active").siblings().removeClass("active");
        });
    });

    // 获取元素对象
    var shopli = document.querySelector(".Allshops");
    console.log(shopli.children);
    $.each(shopli,function (index,element){
        // console.log(element);
    });

}