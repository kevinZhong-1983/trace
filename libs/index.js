var device_type=''
var ua = navigator.userAgent.toLowerCase();
var isWeixin = ua.indexOf('micromessenger') != -1;
var isAndroid = ua.indexOf('android') != -1;
var isIos = (ua.indexOf('iphone') != -1) || (ua.indexOf('ipad') != -1);

var geolocation = new qq.maps.Geolocation("5LSBZ-25J3V-SY3PK-UK574-HDNTK-JWFJM", "biothermh5");

if(isIos){

    device_type="ios"
}

if(isAndroid){

    device_type="android"
}


//获取url中的参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}


var openid_num = getUrlParam('openid');


if(openid_num==null||openid_num==''){


    openid_num=''
}




if (isWeixin) {

    //授权跳转

    if(openid_num==null||openid_num==""){


        location.href='/201812xmas-api/wx-auth.php?type=snsapi_base&return_url='+encodeURIComponent(window.location.href)

    }

}




var utm_source = getUrlParam('utm_source');
var utm_medium = getUrlParam('utm_medium');
var utm_content = getUrlParam('utm_content');
var utm_campaign = getUrlParam('utm_campaign');


if(utm_source==null||utm_source==''){


    utm_source=''
}

if(utm_medium==null||utm_medium==''){


    utm_medium=''
}

if(utm_content==null||utm_content==''){


    utm_content=''
}

if(utm_campaign==null||utm_campaign==''){


    utm_campaign=''
}




//alert(openid_num)




//横屏提示

function rotate(){
    var orientation=window.orientation;
    if(orientation==90||orientation==-90){

        $('.orientation').show()
        $('.back_btn').hide()
    }

}

window.onorientationchange=function(){

    $('.orientation').hide()
    $('.back_btn').show()
    rotate();
};


$(document).ready(function(){

    wxShare()


    //背景音乐

    function play_music(){

        document.getElementById("musicPlay").play();
        $("#audioBtn").css("background-image","url(resource/on.png)")
        datapush(gaTrackingData['xmas_08'], FloodTrackingData['xmas_08'])

    }


    function stop_music(){

        document.getElementById("musicPlay").pause();
        $("#audioBtn").css("background-image","url(resource/off.png)")
        datapush(gaTrackingData['xmas_09'], FloodTrackingData['xmas_09'])

    }

    //解决苹果在微信端不能自动音乐的问题
    setTimeout(function(){
        $(window).scrollTop(1);
    },0);

    var audio = $('#musicPlay');
    var isPlaying = false;

    document.getElementById("audioBtn").addEventListener("touchstart",function(e){


        if(isPlaying){

            stop_music()
            isPlaying=false
        }else{

            play_music()
            isPlaying=true
        }


    })
    // function playAudio() {
    //
    //     var audio = $('#musicPlay');
    //     if (audio.attr('src') == undefined) {
    //
    //         audio.attr('src', audio.data('src'));
    //     }
    //     audio[0].play();
    //     isPlaying = true;
    // }
    // $(function(){
    //
    //     playAudio();
    //     document.addEventListener("WeixinJSBridgeReady", function () {
    //         WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
    //
    //             //network = e.err_msg.split(":")[1];  //结果在这里
    //             playAudio();
    //         });
    //     }, false);
    // })

    $('#Private').click(function(){


        datapush(gaTrackingData['xmas_07'], FloodTrackingData['xmas_07'])

        location.href='http://policy.lorealchina.com/privacypolicy'


    })




});

/**
 * Created by Cloud on 2015/11/29.
 */
var gaTrackingData = {


    xmas_01: ["201811Xmas-MB", "201812xmas-Opening"],
    xmas_02: ["201811Xmas-MB", "201812xmas-Apply-trial"],
    xmas_03: ["201811Xmas-MB", "201812xmas-Purchase"],
    xmas_04: ["201811Xmas-MB", "201812xmas-back"],
    xmas_05: ["201811Xmas-MB", "201812xmas-submit"],
    xmas_06: ["201811Xmas-MB", "201812xmas-Rule"],
    xmas_07: ["201811Xmas-MB", "201812xmas-Private"],
    xmas_08: ["201811Xmas-MB", "201812xmas-music-on"],
    xmas_09: ["201811Xmas-MB", "201812xmas-music-off"]




}
var FloodTrackingData = {

    xmas_01: '201812xmas-Opening',
    xmas_02: '201812xmas-Apply-trial',
    xmas_03: '201812xmas-Purchase',
    xmas_04: '201812xmas-back',
    xmas_05: '201812xmas-submit',
    xmas_06: '201812xmas-Rule',
    xmas_07: '201812xmas-Private',
    xmas_08: '201812xmas-music-on',
    xmas_09: '201812xmas-music-off'

}

var u2 = "biotherm";
var u3 = "http://campaign.biotherm.com.cn/201812xmasmb";
var u4 = "MB"


function datapush(action, floodAction) {
    //ga tracking
    try {
        if (typeof ga && action) {
            action.length == 2 && (ga('send', 'event', action[0], u4, $.trim(action[1])));
            action.length == 3 && (ga('send', 'event', action[0], $.trim(action[1]), $.trim(action[2])));
        }
        if (floodAction) {
            FLOOD1(u2, u3, u4, "主页", floodAction);
            FLOOD2(u2, u3, u4, "主页", floodAction);
            if (window.console) console.log("flood->" + u2 + " - " + u3 + ' - ' + u4 + " - " + floodAction);
        }

        if (window.console) console.log(action);

    } catch (Ex) {

    }
}

//PV
function FLOOD1(brand, lpurl, device, catagory, name) {

    var axel = Math.random() + "";
    var a = axel * 10000000000000000;
    var flDiv = document.body.appendChild(document.createElement("div"));
    flDiv.setAttribute("id", "DCLK_FLDiv1");
    flDiv.style.position = "absolute";
    flDiv.style.top = "0";
    flDiv.style.left = "0";
    flDiv.style.width = "1px";
    flDiv.style.height = "1px";
    flDiv.style.display = "none";
    flDiv.innerHTML = ('<iframe src="http://4233021.fls.doubleclick.net/activityi;src=4233021;type=2018n0;cat=2018n0;u2=' + brand + ';u3=' + lpurl + ';u4=' + device + ';u5=' + catagory + ';u6=' + name + ';ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
}
//UV
function FLOOD2(brand, lpurl, device, catagory, name) {
    var axel = Math.random() + "";
    var a = axel * 10000000000000000;
    var flDiv = document.body.appendChild(document.createElement("div"));
    flDiv.setAttribute("id", "DCLK_FLDiv1");
    flDiv.style.position = "absolute";
    flDiv.style.top = "0";
    flDiv.style.left = "0";
    flDiv.style.width = "1px";
    flDiv.style.height = "1px";
    flDiv.style.display = "none";
    flDiv.innerHTML = ('<iframe src="http://4233021.fls.doubleclick.net/activityi;src=4233021;type=2018n0;cat=2018n00;u2=' + brand + ';u3=' + lpurl + ';u4=' + device + ';u5=' + catagory + ';u6=' + name + ';ord=1;num=' + a + '?"width="1" height="1" frameborder="0" style="display:none"></iframe>');
}

FLOOD1(u2, u3, u4, "主页", u4 + '_Pageview');
FLOOD2(u2, u3, u4, "主页", u4 + '_Pageview');










