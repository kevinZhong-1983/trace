window.index=window.index||{};
index.Index=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*//*_a2x_need_end*/
	annie.initRes(s,"index","Index");
    // var sl=new annieUI.ScrollList(index.btn_MC,181,55,530,147,true,1);
    // sl.y=120;
    // s.addChild(sl)
    // sl.updateData(s.getData());


};
A2xExtend(index.Index,annie.Sprite);
// index.Index.prototype.getData=function(){
//     var s=this;
//     var dataList=[];
//     for(var i=0;i<12;i++){
//         dataList.push({kk:i+1});
//         //s.dataCount++;
//
// 		console.log(i)
//     }
//     return dataList;
// }