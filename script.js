/**
 * Created by cher on 2017/3/29.
 */


// 顶层图片点击消失
$(function () {
   $('.toppic p').click(function(){
     $('.toppic').slideUp();
   });
});
// 切换城市
$(function(){
    $('.top button').mouseover(function(){
        $(this).css('background-color','#f1f1f1');
    }).mouseout(function(){
        $(this).css('background-color','');
    })
});


// 切换输入框
$(function(){
    var a = ['例如：荷棠鱼坊烤鱼 或 樱花日本料理','例如：昌平区育新站龙旗广场2号楼609室','例如：万达影院双人情侣券','例如：东莞出事了，大老虎是谁？','例如：北京初春降雪，天气变幻莫测'];
    $('.nav-title p').click(function(){
        $('.nav-title p').eq($(this).index()).css({'color':'#fff','background':'#e21c01'}).siblings().css({'color':'black','background':'#fbfbfb'});

        $('.scroll-input input').eq($(this).index()).css({display:'block'}).siblings().css({display:'none'});
        $('.scroll-input input').eq($(this).index()).val(a[$(this).index()]);
    });
    $('.scroll-input >  input').focus(function(){
        $(this).val('');
    });
    $('.scroll-input >  input').blur(function(){
        $(this).val(a[$(this).index()]);
    });
});

// 二级菜单切换

$(function(){
    function Pde(){
        var l = -1;
        $('.main-one > .rowlist > li').css('background-position-x',function(){
            if( l > 9){
                return;
            }
            l++;
            return -l * 66+'px';
        })
    }
    Pde();
    $('.main-one > ul > li').mouseover(function () {
        $(this).css('background-position-y','-66px');
        $(this).css('color','red')
    }).mouseout(function () {
        $(this).css('background-position-y','0px');
        $(this).css('color','#000')
    })

});

// 头部中文字轮播
$(function(){
    var timer = null;

    var a = 0;

    timer = setInterval(demo,100);

    function demo(){
        if($('.inner-scroll').scrollTop() >= 66){
            $('.inner-scroll').scrollTop(0);
            a=0;
        }
        $('.inner-scroll').scrollTop(a+=4);
    }


    $('.updown .up').click(function(){

        if($('.inner-scroll').scrollTop() >= 66){
            $('.inner-scroll').scrollTop(0);
            a=0;
        }
        $('.inner-scroll').scrollTop(a+=22);

    });

    $('.updown .down').click(function(){

        if($('.inner-scroll').scrollTop() <=0 ){
            $('.inner-scroll').scrollTop(66);
            a=66;
        }
        $('.inner-scroll').scrollTop(a-=22);
    });

    $('.updown').mouseover(function(){
        clearInterval(timer);
    })
    $('.updown').mouseout(function(){
        timer = setInterval(demo,100);
    });

});

// 轮播图

$(function () {
    var index = 0;
    var timer = null;
    $('.continer').mouseover(function () {
        $('.control').css('display','block');
        clearInterval(timer);
    }).mouseout(function () {
        $('.control').css('display','none');
        timer = setInterval(scroll,1000);
    });
    timer = setInterval(scroll,1000);
    function scroll() {
        index++;
        if(index>4) {
            index = 0;
        }
        scrollImgAndRound(index);
    }
    $('.round>li').mouseover(function () {
        scrollImgAndRound($(this).index());
        index = $(this).index();
    });
    $('#controlLeft').click(function () {
        index--;
        if (index<0){
            index = 4;
        }
        scrollImgAndRound(index);
    });
    $('#controlRight').click(function () {
        index++;
        if(index>4){
            index = 0;
        }
        scrollImgAndRound(index);
    });
    function scrollImgAndRound(index) {
        $('.scrollImage>li').eq(index).css('display','block').siblings().css('display','none');
        $('.round>li').eq(index).css('background','#b7000f').siblings().css('background','#878787');
    }
});

// 登录正则

$(function(){
    $('.box-list').click(function(){

        var reg = /^[A-z]\w{5,11}$/;
        var val =  $('#input1').val();
        var vall = $('#input2').val();

        if(val.match(reg) == null){
            alert('请输入正确的用户名和密码');
        }
        if(vall.match(reg) == null){
            alert('请输入正确的用户名和密码')
        }

    });
});

// 今日推荐时钟
$(function () {
    var date = new Date();

    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var se = s*6;
    var ms = m*6 +(s/60)*6;
    var hs = 30*h + (m/60)*30 + 30/3600 * s;
    $('.hour').css('transform','rotate('+hs+'deg)');
    $('.minute').css('transform','rotate('+ms+'deg)');
    $('.second').css('transform','rotate('+se+'deg)');

    var utc = setInterval(function(){
        $('.hour').css('transform',function(){
            hs += 30/3600;
            return 'rotate('+hs+'deg)';
        });
        $('.minute').css('transform',function(){
            ms += 0.1;
            return 'rotate('+ms+'deg)';
        });
        $('.second').css('transform',function(){
            se += 6;
            return 'rotate('+se+'deg)';
        });
    },1000);
});



// 抢券选项卡

$(function(){

    $('.midtitle1').mouseover(function(){
        $('.hide').css('display','none');
        $('.hidden1').css('display','block');
        $('.hidden2').css('display','none');
        $(this).css('border-bottom-color','#fff').css('background','#fff').siblings().css('border-bottom-color','#dbdbdb').css('background','#f8f8f8');
        $(".jiao").eq(1).css("border-top-color","#cc0d13");
        $(".jiao").eq(0).css("border-top-color","#ccc");
        $(".jiao").eq(2).css("border-top-color","#ccc");
    });

    $('.bottitle1').mouseover(function(){
        $('.hide').css('display','none');
        $('.hidden1').css('display','none');
        $('.hidden2').css('display','block');
        $(this).css('border-bottom-color','#fff').css('background','#fff').siblings().css('border-bottom-color','#dbdbdb').css('background','#f8f8f8');
        $(".jiao").eq(1).css("border-top-color","#ccc");
        $(".jiao").eq(0).css("border-top-color","#ccc");
        $(".jiao").eq(2).css("border-top-color","#cc0d13");
    });

    $('.lefttitle1').mouseover(function(){
        $('.hide').css('display','block');
        $('.hidden1').css('display','none');
        $('.hidden2').css('display','none');
        $(this).css('border-bottom-color','#fff').css('background','#fff').siblings().css('border-bottom-color','#dbdbdb').css('background','#f8f8f8');
        $(".jiao").eq(1).css("border-top-color","#ccc");
        $(".jiao").eq(0).css("border-top-color","#cc0d13");
        $(".jiao").eq(2).css("border-top-color","#ccc");
    });

});

// 知识分子选项卡
$(function(){

    $('.midtitle2').mouseover(function(){
        $('.yincang').css('display','none');
        $('.yincang1').css('display','block');
        $('.yincang2').css('display','none');
        $(this).css('border-bottom-color','#fff').css('background','#fff').siblings().css('border-bottom-color','#dbdbdb').css('background','#f8f8f8');
        $(".jiao2").eq(1).css("border-top-color","#cc0d13");
        $(".jiao2").eq(0).css("border-top-color","#ccc");
        $(".jiao2").eq(2).css("border-top-color","#ccc");
    });

    $('.bottitle2').mouseover(function(){
        $('.yincang').css('display','none');
        $('.yincang1').css('display','none');
        $('.yincang2').css('display','block');
        $(this).css('border-bottom-color','#fff').css('background','#fff').siblings().css('border-bottom-color','#dbdbdb').css('background','#f8f8f8');
        $(".jiao2").eq(1).css("border-top-color","#ccc");
        $(".jiao2").eq(0).css("border-top-color","#ccc");
        $(".jiao2").eq(2).css("border-top-color","#cc0d13");
    });

    $('.lefttitle2').mouseover(function(){
        $('.yincang').css('display','block');
        $('.yincang1').css('display','none');
        $('.yincang2').css('display','none');
        $(this).css('border-bottom-color','#fff').css('background','#fff').siblings().css('border-bottom-color','#dbdbdb').css('background','#f8f8f8');
        $(".jiao2").eq(1).css("border-top-color","#ccc");
        $(".jiao2").eq(0).css("border-top-color","#cc0d13");
        $(".jiao2").eq(2).css("border-top-color","#ccc");
    });

});



// 日历

$(function(){
    $('.calendar .girl>img').mouseover(function(){
        $('.girl .hiddenbox').css('display','block');
    });
    $('.calendar .girl>img').mouseout(function(){
        $('.girl .hiddenbox').css('display','none');
    });
    $('.calendar .soup>img').mouseover(function(){
        $('.soup .hiddenbox').css('display','block');
    });
    $('.calendar .soup>img').mouseout(function(){
        $('.soup .hiddenbox').css('display','none');
    });
    $('.calendar .food>img').mouseover(function(){
        $('.food .hiddenbox').css('display','block');
    });
    $('.calendar .food>img').mouseout(function(){
        $('.food .hiddenbox').css('display','none');
    });
    $('.calendar .boy>img').mouseover(function(){
        $('.boy .hiddenbox').css('display','block');
    });
    $('.calendar .boy>img').mouseout(function(){
        $('.boy .hiddenbox').css('display','none');
    });


});

// 精彩推荐轮播

$(function(){
    var index = 0;
    var timer = null;
    timer = setInterval(scroll,1000);
    function scroll(){
        index++;
        if(index>2){
            index = 0;
        }

        scrollImage(index);
    }

    $('.recommand-right > img').click(function() {
        scrollImage($(this).index());
        index = $(this).index();

    });
    $('.recommand-middle').mouseover(function() {
        clearInterval(timer);
    });
    $('.recommand-middle').mouseout(function(){
        timer = setInterval(scroll,1000);
    });


    function scrollImage(index){
        $('.recommand-middle-left>img').eq(index).css('display','block').siblings("img").css('display','none');
        $('.pwhere p').eq(index).css('display','block').siblings('p').css('display','none');
        $('.recommand-right img').eq(index).css('border','3px solid red').siblings().css('border','3px solid #fff');
    }
});


// 交通的选项卡切换

$(function(){
    $('.lefttitle').click(function(){
        $('.left-fourthline-pic img').eq(0).css('display','block').siblings('').css('display','none');
        $(".triangle").eq(0).css("border-top-color","#cc0d13");
        $(".triangle").eq(1).css("border-top-color","#ccc");
        $(this).css('background','#fff').siblings().css('background','#f6f6f6');
        $(this).siblings().css('border-right','1px solid #e5e5e5');
        $(this).css('border-bottom','none').siblings().css('border-bottom','1px solid #e5e5e5');

    });
    $('.righttitle').click(function(){
        $('.left-fourthline-pic img').eq(1).css('display','block').siblings('').css('display','none');
        $(this).css('background','#fff').siblings().css('background','#f6f6f6');
        $(this).css('border-bottom','none').siblings().css('border-bottom','1px solid #e5e5e5');
        $(this).siblings().css('border-left','1px solid #e5e5e5');
        // $(this).css('border-right','1px solid #e5e5e5');
        $(".triangle").eq(1).css("border-top-color","#cc0d13");
        $(".triangle").eq(0).css("border-top-color","#ccc");
    })
});


// BBS论坛鼠标事件
$(function(){
    $('.shortbox').mouseover(function(){
        $('.shortbox').css('display','block').next().css('display','none');
        $(this).css('display','none').next().css('display','block');
    });
});


// 红人烧客

$(function(){
    $('.left-sixthline-two-bot li img').mouseover(function(){
        $(this).next('p').css('display','block');
    });
        $('.left-sixthline-two-bot li p').mouseout(function(){
        $(this).css('display','none');
    });
});


// 大牌盒子中的小轮播图

$(function () {
    var index = 0;
    var timer = null;
    $('.dapai-left-two').mouseover(function () {
        $('.control-one').css('display','block');
        clearInterval(timer);
    }).mouseout(function () {
        $('.control-one').css('display','none');
        timer = setInterval(scroll,1000);
    });
    timer = setInterval(scroll,1000);
    function scroll() {
        index++;
        if(index>3) {
            index = 0;
        }

        scrollImgAndRound(index);
    }
    $('.round-one>li').mouseover(function () {
        scrollImgAndRound($(this).index());
        index = $(this).index();
    });
    $('#controlleft-one').click(function () {
        index--;
        if (index<0){
            index = 3;
        }
        scrollImgAndRound(index);
    });
    $('#controlright-one').click(function () {
        index++;
        if(index>3){
            index = 0;
        }
        scrollImgAndRound(index);
    });
    function scrollImgAndRound(index) {
        $('.scrollImage-one>li').eq(index).css('display','block').siblings().css('display','none');
        $('.round-one>li').eq(index).css('background','#b7000f').siblings().css('background','#878787');
    }
});

// 猜你喜欢

var h = 1;
$(function(){
    $('.shuaxin1').mouseover(function(){
        if(h >= 3){
            h = 0;
        }
        $('.bigdiv > div ').eq(h).css('display','block').siblings().css('display','none');
        h++;
    });
    $('.shuaxin1').mousemove(function(){
        $('.change').css('color','red');
        $('.shuaxin').css('opacity','0');
    });
    $('.shuaxin1').mouseout(function(){
        $('.change').css('color','');
        $('.shuaxin').css('opacity','1');
    });

    $('.shuaxin1').mouseover(function(){

        $('.jindu').css('left','0px');

        $('.jindu').animate({left:595 + 'px'},500);

    });
    $('.shuaxin1').mouseout(function(){

        $('.jindu').animate({right:0 + 'px'},500);
    });

});

// 服装箱包选项卡
$(function(){
    $('.ulli >  li ').mouseover(function(){
        $(this).css('border','1px solid red').css('border-bottom','none').siblings().css('border','none').css('border-bottom','1px solid red');
        $('.hidebigbox > div').eq($(this).index()).css('display','block').siblings().css('display','none');
    });

});

//天天低价图片滑动
$(function(){
    $('.lowprice-content-left img').mouseenter(function(){
        $(this).css('margin-left','5px');
        $(this).css('transition','1s');
    });
    $('.lowprice-content-left img').mouseleave(function(){
        $(this).css('margin-left','0px');
        $(this).css('transition','1s');
    });
    $('.lowprice-content-mid img').mouseenter(function(){
        $(this).css('margin-left','30px');
        $(this).css('transition','1s');
    });
    $('.lowprice-content-mid img').mouseleave(function(){
        $(this).css('margin-left','0px');
        $(this).css('transition','1s');
    });
});


// 楼层动态

$(function(){
    $('.louceng>div').eq(0).click(function(){
        $('html,body').finish().animate({scrollTop:300},1000);
    });
    $('.louceng > div').eq(1).click(function(){
        $('html,body').finish().animate({scrollTop:1000},1000);
    });

});

$(function(){
    $(window).scroll(function(){
        t = $(document).scrollTop();
        if(t > 300){
            $('.louceng').css('display','block');
        }else{
            $('.louceng').css('display','none');
        }
    });
});

// 侧边栏

$(function(){
    $('.yellowbox').click(function(){

        console.log(11);
        $('.sidebar').animate({right:-252+'px'},1000);
        $(this).css('display','none');
        $('.yellowbox2').css('display','block');
    });

    $('.yellowbox2').click(function(){
        $('.sidebar').animate({right:0+'px'},1000);
        $(this).css('display','none');
        $('.yellowbox').css('display','block');
    });
});

// 滑动事件红色盒子出现

$(function(){
    $('.sidebar-left-mid>ul>li>a').mouseover(function(){
        $(this).parent('li').css('background','red');
        $(this).parent('li').css('border','1px solid red');
        $(this).next('p').finish().animate({right:+33 +'px'},500);
        $(this).next('p').css('display','block');

    });
    $('.sidebar-left-mid>ul>li>a').mouseout(function(){

        $(this).parent('li').css('background','#7a6e6e');
        $(this).parent('li').css('border','1px solid #7a6e6e');
        $(this).next('p').finish().animate({right:0 +'px'},500);
        $(this).next('p').css('display','none');

    });

    $('.sidebar-left-bot .ag').mouseover(function(){

        $(this).parent('li').css('background','red');
        $(this).parent('li').css('border','1px solid red');
        $(this).next('div').finish().animate({right:+33 +'px'},500);
        $(this).next('div').css('display','block');

    });
    $('.sidebar-left-bot>ul>li>a').mouseout(function(){

        $(this).parent('li').css('background','#7a6e6e');
        $(this).parent('li').css('border','1px solid #7a6e6e');
        $(this).next('div').finish().animate({right:0 +'px'},500);
        $(this).next('div').css('display','none');

    });
});

// 返回顶部

$(function(){
    $('.ag').click(function(){
        $('html,body').finish().animate({scrollTop:10},1000);
    });
});



// 闪光的

$(function(){

    $('.clothes-left-content>img').mouseover(function(){
        $('.shanguang').finish().animate({left:+250 +'px'},1000);
        $('.shanguang').css('display','block');
    });
    $('.clothes-left-content>img').mouseout(function(){
        $('.shanguang').finish().animate({left:+0 +'px'},1000);
        $('.shanguang').css('display','none');
    });
});

// 右下角的轮播

$(function(){
    var timer = null;

    var a = 0;

    timer = setInterval(demo,2000);

    function demo(){
        if($('.scrollbigbox').scrollTop() >= 420){
            $('.scrollbigbox').scrollTop(0);
            a=0;
        }

        $('.scrollbigbox').finish().animate({scrollTop:a+=140},1000);

    }


});