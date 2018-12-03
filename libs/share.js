
function wxShare() {

    $(function() {
        $.ajax({
            type: "POST",
            url: "/201812xmas-api/wx-sign.php",
            data: {},
            dataType: 'json',
            success: function(json) {

                if (json.result == '1') {
                    wx.config({
                        debug: false,
                        appId: json.appId, // 必填，公众号的唯一标识
                        timestamp: json.timestamp, // 必填，生成签名的时间戳
                        nonceStr: json.nonceStr, // 必填，生成签名的随机串
                        signature: json.signature, // 必填，签名，见附录1
                        jsApiList: [
                            'onMenuShareTimeline',
                            'onMenuShareAppMessage'
                        ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                    });

                    wx.ready(function() {
                        actionShare()
                    });
                } else {
                    alert('服务器繁忙，请稍后再试');
                }
            }
        });
    });




    function actionShare(openid) {

        wx.onMenuShareTimeline({

            title: '唤醒12星座肌肤圣诞奇迹',
            link: 'http://campaign.biotherm.com.cn/201812xmasmb/',
            imgUrl: 'http://campaign.biotherm.com.cn/201812xmasmb/resource/share.jpg',
            trigger: function(res) {
                //alert('用户点击分享到朋友圈');
            },
            success: function(res) {
                //alert('已分享');

                $.ajax({
                    type: "POST",
                    dataType: 'json',
                    data:{openid:openid_num,share_url:'http://campaign.biotherm.com.cn/201812xmasmb/',share_type:'1',device_from:device_type,utm_source:utm_source,utm_medium:utm_medium,utm_content:utm_content,utm_campaign:utm_campaign},
                    url: "/201812xmas-api/share.php",
                    success: function(res){

                        if(res.result==1){

                            console.log('分享朋友圈成功！')

                        }
                    }
                });





            },
            cancel: function(res) {
                //alert('已取消');
            },
            fail: function(res) {
                //alert(JSON.stringify(res));
            }
        });

        //alert('已注册获取“分享到朋友圈”状态事件');

        wx.onMenuShareAppMessage({
            title: '唤醒12星座肌肤圣诞奇迹',
            link: 'http://campaign.biotherm.com.cn/201812xmasmb/',
            imgUrl: 'http://campaign.biotherm.com.cn/201812xmasmb/resource/share.jpg',
            desc: '唤醒你的圣诞绮肌',

            trigger: function(res) {
                //alert('用户点击发送给朋友');
            },
            success: function(res) {

                // alert('已分享');

                $.ajax({
                    type: "POST",
                    dataType: 'json',
                    data:{openid:openid_num,share_url:'http://campaign.biotherm.com.cn/201812xmasmb/',share_type:'2',device_from:device_type,utm_source:utm_source,utm_medium:utm_medium,utm_content:utm_content,utm_campaign:utm_campaign},
                    url: "/201812xmas-api/share.php",
                    success: function(res){

                        if(res.result==1){

                            console.log('分享好友成功！')

                        }
                    }
                });



            },
            cancel: function(res) {
                //alert('已取消');
            },
            fail: function(res) {
                //alert(JSON.stringify(res));
            }
        });
    }

    window.actionShare = actionShare;

}



