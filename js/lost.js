/**
 * Created by Terry5 on 16/3/20.
 */

//设置moment全局中文
moment.locale('zh-cn');
var LostInfo = Bmob.Object.extend("lost_info");
var query = new Bmob.Query(LostInfo);
// 查询所有数据
query.find({
    success: function(results) {
        // 循环处理查询到的数据
        for (var i = 0; i < results.length; i++) {
            var object = results[i];
            var info = object.get('info');
            var location = object.get('location');
            var lost_time = object.get('lost_time');
            var people = object.get('people');
            var phone = object.get('phone');
            var img_url = object.get('img_url');
            var submit_time = object.get('submit_time');

            $('.content-container')
                .prepend($('<li class="container-fluid">')
                    .append($('<div class="jumbotron" style="background-color: rgba(135,206,250,0.3)">' )
                        .append($('<p class="alert alert-danger">').text('物品描述:' + info),
                            $('<img class="img-rounded" width="100%" height="30%" alt="假装有图片!">').attr("src", img_url),
                            $('<p class="btn btn-primary" style="margin-top: 3%">').text('丢失地点:' + location),
                            $('<br>'),
                            $('<p class="btn btn-info">').text('丢失时间:' + lost_time),
                            $('<br>'),
                            $('<p class="btn btn-success">').text('丢失人:' + people),
                            $('<br>'),
                            $('<p class="btn btn-danger">').text('电话:' + phone),
                            $('<br>'),
                            $('<p class="weui_btn weui_btn_warn">').text('发布时间:' + moment.unix(submit_time).format('LL'))
                        )
                    )
                );

        }
        $(function(){
            $("div.holder").jPages({
                containerID : "pager",
                perPage : 10,
                first       : "首页",
                previous    : "上一页",
                next        : "下一页",
                last        : "末页"
            });
        });

    },
    error: function(error) {
        alert("查询失败: " + error.code + " " + error.message);
    }
});

/**
 * 回到顶部
 */
$(function(){
    //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
    $(function () {
        $(window).scroll(function(){
            if ($(window).scrollTop()>100){
                $("#back-to-top").fadeIn(500);
            }
            else
            {
                $("#back-to-top").fadeOut(500);
            }
        });

        //当点击跳转链接后，回到页面顶部位置

        $("#back-to-top").click(function(){
            $('body,html').animate({scrollTop:0},1000);
            return false;
        });
    });
});