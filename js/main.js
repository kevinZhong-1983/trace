"use strict";function rotate(){var e=window.orientation;90!=e&&e!=-90||($(".orientation").show(),$(".back_btn").hide())}kevin_resize({size:[640,1136],full:1});var geolocation=new qq.maps.Geolocation("5LSBZ-25J3V-SY3PK-UK574-HDNTK-JWFJM","biothermh5");$(function(){var e=$("img"),t=0;e.each(function(a){var i=new Image;i.onload=function(){i.onload=null,$(".loading b").html(parseInt(t/e.length*100)+"%"),t++,t>=a&&$(".loading").fadeOut()},i.src=e[a].src})}),window.onorientationchange=function(){$(".orientation").hide(),$(".back_btn").show(),rotate()},$(document).ready(function(){function e(){var e=$("#mobile_txt").val(),a=/^1[3|4|5|7|8][0-9]\d{4,8}$/;null!=e&&""!=e&&a.exec(e)?$("#verify_code").val()?$.ajax({type:"POST",dataType:"json",data:{captcha:$("#verify_code").val()},url:"http://biotherm.nurunci.com/201812xmas-api/verify-captcha.php",success:function(e){console.log("短信验证码:"+e),1==e.result?(t(),$.ajax({type:"POST",dataType:"json",data:{mobile:$("#mobile_txt").val(),captcha:$("#verify_code").val()},url:"http://biotherm.nurunci.com/201812xmas-api/mobile-captcha.php",success:function(e){console.log("短信验证码:"+e)}})):alert("输入的图形验证码不正确！")}}):alert("请输入图形验证码!"):alert("手机号码不正确!")}function t(){$("#smsCode_btn").unbind("click",e);var t=60;$("#smsCode_btn").html(t+"s后重新发送"),c=setInterval(function(){return--t<=0?(clearInterval(c),$("#smsCode_btn").html("获取验证码"),$("#smsCode_btn").bind("click",e),!1):void $("#smsCode_btn").html(t+"s后重新发送")},1e3)}function a(e){$("#pic_code").attr("src","http://biotherm.nurunci.com/201812xmas-api/captcha.php?v="+1e3*Math.random())}function i(e){o?($("#click_img").attr("src","../img/p3-06.png"),o=!1):($("#click_img").attr("src","../img/p3-05.png"),o=!0)}function n(t){$(".page1").hide(),$(".page2").show();var a=$("#name_txt").val(),i=$("#mobile_txt").val(),l=$("#phone_code").val(),r=/^1[3|4|5|7|8][0-9]\d{4,8}$/,s=$("#province").val(),m=$("#city").val(),p=$("#district").val();if(a)if(null!=i&&""!=i&&r.exec(i))if(l)if("-1"==s)alert("请选择省份!");else if("-1"==m)alert("请选择城市!");else if("-1"==p)alert("请选择柜台!");else if(o)alert("请选择同意隐私政策!");else{$(".submit").unbind("click",n),datapush(gaTrackingData.xmas_05,FloodTrackingData.xmas_05),console.log("提交!");var u={mobile:i,user_from:1,mobile_captcha:l,openid:openid_num,user_name:a,utm_source:utm_source,utm_medium:utm_medium,utm_content:utm_content,utm_campaign:utm_campaign,constellation:start_arr[temp_num],province:s,city:m,shoppe_name:p,shoppe_code:shoppe_code_txt};console.log(JSON.stringify(u)),$.ajax({type:"POST",dataType:"json",data:{mobile:i,user_from:1,mobile_captcha:l,openid:openid_num,user_name:a,utm_source:utm_source,utm_medium:utm_medium,utm_content:utm_content,utm_campaign:utm_campaign,constellation:start_arr[temp_num],province:s,city:m,shoppe_name:p,shoppe_code:shoppe_code_txt},url:"/201812xmas-api/apply.php",success:function(t){console.log("表单:"+t),1==t.result?(stage.removeAllChildren(),stage.removeAllEventListener(),page2_init(1)):2==t.result?(stage.removeAllChildren(),stage.removeAllEventListener(),page2_init(2)):3==t.result?location.href=t.online_apply_url:4==t.result?($(".submit").bind("click",n),$("#pic_code").attr("src","/201812xmas-api/captcha.php?v="+1e3*Math.random()),$("#verify_code").val(""),$("#phone_code").val(""),clearInterval(c),$("#smsCode_btn").html("获取验证码"),$("#smsCode_btn").bind("click",e),alert("验证码错误!")):($(".submit").bind("click",n),$("#pic_code").attr("src","/201812xmas-api/captcha.php?v="+1e3*Math.random()),$("#verify_code").val(""),$("#phone_code").val(""),clearInterval(c),$("#smsCode_btn").html("获取验证码"),$("#smsCode_btn").bind("click",e),alert("提交失败！"))}})}else alert("请输入手机短信验证码!");else alert("手机号码不正确!");else alert(" 请输入姓名！")}var c;$("#smsCode_btn").bind("click",e),$("#pic_code").bind("click",a);var o=!1;$(".click_mc").bind("click",i),$(".submit").bind("click",n),$(".title2").click(function(){$(".guize").show(),$(".form_mc").hide()}),$(".guize").click(function(){$(".guize").hide(),$(".form_mc").show()}),$("#Private").click(function(){location.href="http://policy.lorealchina.com/privacypolicy"})});