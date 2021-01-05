
function niPlugInShowPic(imgList){       
// jQuery.fn.niPlugInShowPic = function(imgList){

    $('body').append('<div id="niPlugBase"></div>');
    $('#niPlugBase').append('<div id="niPlugMask"></div>');
    $('#niPlugBase').append('<div id="niPlugPoint_div"></div>');
    let point_div = $("#niPlugPoint_div");
    // console.log(" #niPlugBase 寬度 " + $('#niPlugBase').width());
    // console.log(" #niPlugMask 寬度 " + $('#niPlugMask').width());    
    let baseWidth = $('#niPlugBase').width();
    let picWidth = $('#niPlugMask').width();
    let nowPage = 0;
    let amount = imgList.length;
    let picDiv_ar = new Array(amount);
    let point_ar  = new Array(amount);

    for(let i = 0; i < amount; i ++){
        $('#niPlugMask').append('<div class="cniPlug_pic" id="niPlugPic_' + i + '"></div>');
        point_div.append('<span class="cniPlugPointUnTurn" id="niPlugPoint_' + i + '">●</span>');
        point_ar[i] = $("#niPlugPoint_" + i);        
    
        picDiv_ar[i] = $("#niPlugPic_" + i);
        picDiv_ar[i].append('<img class="cniPlugPic_body" src="' + imgList[i] + '">');        
        picDiv_ar[i].offset({left: baseWidth});
    }
    // console.log(" .cniPlug_pic 寬度 " + $('.cniPlug_pic').width());

    picDiv_ar[0].offset({left: 0});
    $("#niPlugMask").append('<p class="niPlugArrow" id="niPlugPrev">》</p>');
    $("#niPlugMask").append('<p class="niPlugArrow" id="niPlugNext">《</p>');
    
    checkArrowShow();
    point_ar[0].removeClass("cniPlugPointUnTurn").addClass("cniPlugPointTurn");

    $("#niPlugPrev").on('click',function(){        
        aniPic(baseWidth);
        point_ar[nowPage].removeClass("cniPlugPointTurn").addClass("cniPlugPointUnTurn");
        nowPage --;
        if(nowPage < 0)   nowPage = 0
        checkArrowShow();
        aniPic(0);
        point_ar[nowPage].removeClass("cniPlugPointUnTurn").addClass("cniPlugPointTurn");
        // picDiv_ar[nowPage].offset({left:0});
    });
    $("#niPlugNext").on('click',function(){
        // console.log("按鈕ID：" , this);
        let rightPosX = 500;        
        aniPic(-baseWidth);
        point_ar[nowPage].removeClass("cniPlugPointTurn").addClass("cniPlugPointUnTurn");        
        nowPage ++;
        if(nowPage >= amount)  nowPage = amount - 1;
        checkArrowShow();
        aniPic(0);
        point_ar[nowPage].removeClass("cniPlugPointUnTurn").addClass("cniPlugPointTurn");
        // picDiv_ar[nowPage].offset({left:0});
    });

    function checkArrowShow(){
        $(".niPlugArrow").show();
        // $("#niPlugNext").show();
        if(nowPage > (amount - 2))  $("#niPlugNext").hide();
        if(nowPage < 1)             $("#niPlugPrev").hide();
    }

    function aniPic(posx){
        let posxs = String(posx) + "px";
        picDiv_ar[nowPage].animate({left:posxs});
    }

}