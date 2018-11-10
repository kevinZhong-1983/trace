window.index=window.index||{};
index.btn_MC=function(){
	var s = this;

	annie.MovieClip.call(s);
	/*_a2x_need_start*/s.mc=null;/*_a2x_need_end*/
	annie.initRes(s,"index","btn_MC");

	//var temp_Num=0
    //s.mouseChildren=false;
    s.addEventListener(annie.MouseEvent.CLICK,function (e) {
       // alert(s.id)
        console.log(s.id)

        s.mc.gotoAndStop(2)
        temp_num=s.id
        annie.globalDispatcher.dispatchEvent("onOtherClick");


    })

    annie.globalDispatcher.addEventListener("onOtherClick",function (e) {
        if(temp_num!=s.id){
            s.mc.gotoAndStop(1);
        }
    })

};
A2xExtend(index.btn_MC,annie.MovieClip);
//一定要有这个属性
index.btn_MC.prototype.id=0;
//一定要有这个属性
index.btn_MC.prototype.data=null;
//一定要实现这个方法
index.btn_MC.prototype.initData=function(id,data){
    var s=this;

    if(data) {
        s.data=data;
        s.id=id;
        s.gotoAndStop(data.kk)
        if(temp_num!=s.id){
            s.mc.gotoAndStop(1);
        }else{
            s.mc.gotoAndStop(2);
        }
    }else{
        s.data=null;
        s.id=-1;
    }


};

