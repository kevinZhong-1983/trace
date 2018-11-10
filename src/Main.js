
var temp_num=0 //星座id


window.A2xExtend=__extends;
window.addEventListener("load",function(){
    annie.debug=false;

    var stage=new annie.Stage("annieEngine",640,1136,30,annie.StageScaleMode.FIXED_HEIGHT,0);
    //默认关闭自动旋转和自动resize
    //stage.autoResize=true;
    //stage.autoSteering=true;
    stage.addEventListener(annie.Event.ON_INIT_STAGE,function (e) {
    	//想要同时加载多个场景的话，Annie2x.loadScene的第一个参数可以传数组如 ["scene1","scene2",...]
        annie.loadScene("index",function(per){
            //加载进度
            trace("加载进度:"+per+"%");
            $('.per').html(per+'%')

        },function(result){
            //加载完成 result 里包含了当前加载完成的是哪个场景序号，以及总加载场景数有多少，所以
            //需要同时加载多个模块时可以判断已经加载好的后直接出内容，其他偷偷在后台加载
            if(result.sceneId==result.sceneTotal){


                if($(window).width()==375&&$(window).height()==724){

                    stage.scaleMode=annie.StageScaleMode.FIXED_WIDTH
                    stage.resize()
                    stage.y=420

                }else{

                    stage.scaleMode=annie.StageScaleMode.FIXED_HEIGHT
                    stage.resize()
                }




            	stage.addChild(new index.Index());


                //页面1

            	function page1_init(){


                    var page1_mc=new index.page1_MC()
                    var temp_Y=0

                    stage.addChild(page1_mc)

                    //annie.initRes(stage,"scrollList","ScrollList");
                    // window.scrollList=window.scrollList||{};

                    var sl=new annieUI.ScrollList(index.btn_MC,181,55,530,147,true,1);
                    sl.x=120;
                    page1_mc.list_mc.box_mc.addChild(sl)
                    sl.updateData(getData());


                    function getData(){

                        var dataList=[];
                        for(var i=0;i<12;i++){

                            dataList.push({kk:i+1});
                        }
                        return dataList;
                    }



                    sl.addEventListener(annie.Event.ON_SCROLL_STOP,function (e) {

                        //console.log(sl.currentPos);
                        //sl.updateData(getData());


                        //temp_Y=(sl.currentPos/(sl.maxDistance-147))

                        //console.log(temp_Y)

                        //page1_mc.list_mc.bar_mc.y+=77*temp_Y




                    });


                    page1_mc.start_btn.addEventListener(annie.MouseEvent.CLICK,start_C)

                    function start_C(e){


                        console.log(temp_num)

                        stage.removeAllChildren()
                        stage.removeAllEventListener()
                        page2_init()

                    }



                }

                page1_init()



                //页面2

                function page2_init(){



            	    var page2_mc=new index.page2_MC()
                    var temp_y=0
                    var alpha_num=0
                    var timerCount=10
                    var maxDistance_arr=[1500,1950,1510,1510,1510,2030,1450,1510,1420,1510,1510,1510]



                    stage.addChild(page2_mc)

                    page2_mc.hit_mc.mouseEnable=false
                    page2_mc.start_mc.mouseEnable=false

                    page2_mc.alpha_mc.alpha=0


                    page2_mc.alpha_mc.addEventListener(annie.MouseEvent.MOUSE_DOWN,alpha_D)

                    function alpha_D(e){


                        page2_mc.alpha_mc.addEventListener(annie.MouseEvent.MOUSE_MOVE,alpha_M)
                        page2_mc.alpha_mc.addEventListener(annie.MouseEvent.MOUSE_UP,alpha_U)
                        temp_y=484


                    }


                    //计算alpha

                    function alpha_M(e){


            	        if(Math.abs(e.stageY-temp_y)>100){

                            alpha_num+=0.01

                            if(alpha_num>=1){

                                alpha_num=1
                                console.log("ok")


                                annie.Tween.to(page2_mc.text_mc, .5, {y:1236,alpha:0,ease:annie.Tween.exponentialOut()})
                                annie.Tween.to(page2_mc.name_mc, 1, {alpha:1})

                                page2_mc.name_mc.gotoAndStop(temp_num+1)

                                if(temp_num>5){

                                    page2_mc.man_mc.gotoAndStop((temp_num-5)+1)


                                }else{

                                    page2_mc.man_mc.gotoAndStop(temp_num+2)

                                }

                                page2_mc.start_mc.gotoAndStop(temp_num+1)

                                annie.Tween.to(page2_mc.free_btn, .5, {y:862,alpha:1,delay:.4,ease:annie.Tween.bounceOut()})
                                annie.Tween.to(page2_mc.buy_btn, .5, {alpha:1,y:961,delay:.5,ease:annie.Tween.bounceOut()})
                                annie.Tween.to(page2_mc.start_mc, 1, {alpha:1,delay:.3})

                                page2_mc.alpha_mc.removeEventListener(annie.MouseEvent.MOUSE_DOWN,alpha_D)
                                page2_mc.alpha_mc.removeEventListener(annie.MouseEvent.MOUSE_MOVE,alpha_M)
                                page2_mc.alpha_mc.removeEventListener(annie.MouseEvent.MOUSE_UP,alpha_U)

                                add_mc(temp_num)


                                page2_mc.free_btn.addEventListener(annie.MouseEvent.CLICK,free_C)
                                page2_mc.buy_btn.addEventListener(annie.MouseEvent.CLICK,buy_C)


                            }

                        }

                        page2_mc.alpha_mc.alpha=alpha_num

                    }




                    function alpha_U(e){

                        page2_mc.alpha_mc.removeEventListener(annie.MouseEvent.MOUSE_MOVE,alpha_M)
                        page2_mc.alpha_mc.removeEventListener(annie.MouseEvent.MOUSE_UP,alpha_U)


                    }



                    //增加滚动文字

                    function add_mc(n){

                        var sp=new annieUI.ScrollPage(572,572);
                        var p=new index['T'+n]()
                        sp.x=-53
                        sp.view.addChild(p)
                        sp.isSpringBack=false;

                        sp.maxDistance=maxDistance_arr[n];
                        page2_mc.tt_mc.addChildAt(sp,0);
                        sp.alpha=0

                        annie.Tween.to(sp, 1.5, {alpha:1,onComplete:function(){


                            setTimeout(function (){

                                var timerState=new annie.Timer(10);
                                timerState.start();

                                timerState.addEventListener(annie.Event.TIMER,function (e) {

                                    timerCount++;

                                    //console.log(timerCount)
                                    sp.scrollTo(timerCount)

                                    if(timerCount>=maxDistance_arr[n]-572){

                                        timerState.stop()

                                    }

                                });

                            },2000)

                        }})

                    }


                    //免费申请

                    function free_C(e){


                        stage.removeAllChildren()
                        stage.removeAllEventListener()
                        page4_init()


                    }


                    //购买

                    function buy_C(e){




                    }

                }


                //页面4

                function page4_init(){


                    var page4_mc=new index.page4_MC()
                    stage.addChild(page4_mc)

                    var code=new annie.FloatDisplay();
                    //找到Image标签内容将他赋值给FloatDisplay,这个对是SpriteSheet里的合成图有用
                    code.init(annie.Bitmap.convertToImage(new annie.Bitmap(annie.getResource("index","CodeImg"))));
                    page4_mc.txt_mc.qr_mc.addChild(code);


                }















            }
        });
    })
});