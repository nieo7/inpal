let point_div = $("#niPlugPoint_div");


function genPicList(){
    let ar = new Array(55);
    for(let i = 0; i < 55; i++){
        let str = "";
        if(i < 10) str = "0" + i;
        else str = String(i);
        ar[i] = "img/assess/assess_0" + str + ".jpg";
    }    
    return ar;
}

function loaddingPic(div, pic_ar){
    let amount = pic_ar.length;
    for(let i = 0; i < amount; i ++){
        div.append('<img src="' + pic_ar[i] + '">');
    }

}



function initReviewSec(div, pic_ar){
    
    div.append('<div id="showMask"></div>');
    div.append('<div id="pointDiv"></div>');
    let baseWidth = div.width();
    let point_div = $("#pointDiv");
    let nowPage = 0;
    let amount = pic_ar.length;
    let picDiv_ar = new Array(amount);
    let point_ar  = new Array(amount);
    let maskX = $("#showMask").offset().left;   //遮罩層X位置
    let maskY = $("#showMask").offset().top;   //遮罩層X位置

    // console.log("/// mask 寬" + $("#showMask").width());
    console.log("/// mask X" + $("#showMask").offset().left);
    console.log("/// mask Y" + $("#showMask").offset().top);
    
    console.log("/// " + baseWidth);

    for(let i = 0; i < amount; i ++){
        // 在遮罩層插入所有圖層，並命名id
        $('#showMask').append('<div class="show_pic_div" id="showPic_' + i + '"></div>');

        point_div.append('<span class="cniPlugPointUnTurn" id="showPoint_' + i + '">●</span>');
        point_ar[i] = $("#showPoint_" + i);
        picDiv_ar[i] = $("#showPic_" + i);  //picDiv_ar[] 陣列放入這些圖層
        
        picDiv_ar[i].append('<img class="imgAuto" src="' + pic_ar[i] + '">');
        picDiv_ar[i].offset({left: baseWidth, top:maskY});
        picDiv_ar[i].hide();
        
        // picDiv_ar[i].offset({left: 800, top:maskY});
        // picDiv_ar[i].offset({top: i * 20});
        // console.log("圖檔X：" + picDiv_ar[i].offset().left);
        // console.log("圖檔Y：" + picDiv_ar[i].offset().top);
        
    }
    picDiv_ar[nowPage].offset({left: maskX, top:maskY});
    picDiv_ar[nowPage].show();
    console.log("圖檔X：" + picDiv_ar[0].offset().left);
    console.log("圖檔Y：" + picDiv_ar[0].offset().top);
    $("#showMask").append('<p class="showArrow" id="showPrev">》</p>');
    $("#showMask").append('<p class="showArrow" id="showNext">《</p>');
    
    // div.append('<img class="imgAuto" src="img/assess/assess_000.jpg"></img>');

    $("#showPrev").on('click',function(){        
        aniPic(baseWidth);
        picDiv_ar[nowPage].hide();
        // point_ar[nowPage].removeClass("cniPlugPointTurn").addClass("cniPlugPointUnTurn");
        nowPage --;        
        if(nowPage < 0)   nowPage = 0
        // checkArrowShow();
        aniPic(0);
        point_ar[nowPage].removeClass("cniPlugPointUnTurn").addClass("cniPlugPointTurn");
        // picDiv_ar[nowPage].offset({left:0});
    });
    $("#showNext").on('click',function(){
        let rightPosX = 500;
        aniPic(-baseWidth);
        picDiv_ar[nowPage].hide();
        console.log("圖片編號" + 1 + " pos "  , picDiv_ar[1].offset().top);
        point_ar[nowPage].removeClass("cniPlugPointTurn").addClass("cniPlugPointUnTurn");        
        nowPage ++;
        picDiv_ar[nowPage].show();
        if(nowPage >= amount)  nowPage = amount - 1;
        // checkArrowShow();
        aniPic(maskY);
        point_ar[nowPage].removeClass("cniPlugPointUnTurn").addClass("cniPlugPointTurn");
        

        // picDiv_ar[nowPage].offset({left:0});
    });

    function aniPic(posx){
        let posxs = String(posx) + "px";
        picDiv_ar[nowPage].animate({left:posxs});
        // console.log("圖片編號" + nowPage + " pos "  , posxs);
        // console.log("圖片編號" + nowPage + " pos "  , picDiv_ar[nowPage].offset());
        // console.log("圖片編號" + 1 + " pos "  , picDiv_ar[1].offset());
    }



}


function showPic(){
    console.log("review showPic");
    // reviewDiv.append('<img class="cniPlugPic_body" src="img/assess/assess_000.jpg">');

    
}



// let baseWidth = $('#niPlugBase').width();
// let picWidth = $('#niPlugMask').width();
// let nowPage = 0;
// let amount = imgList.length;
// let picDiv_ar = new Array(amount);
// let point_ar  = new Array(amount);

// for(let i = 0; i < amount; i ++){
//     $('#niPlugMask').append('<div class="cniPlug_pic" id="niPlugPic_' + i + '"></div>');
//     point_div.append('<span class="cniPlugPointUnTurn" id="niPlugPoint_' + i + '">●</span>');
//     point_ar[i] = $("#niPlugPoint_" + i);        

//     picDiv_ar[i] = $("#niPlugPic_" + i);
//     picDiv_ar[i].append('<img class="cniPlugPic_body" src="' + imgList[i] + '">');        
//     picDiv_ar[i].offset({left: baseWidth});
// }
// // console.log(" .cniPlug_pic 寬度 " + $('.cniPlug_pic').width());

// picDiv_ar[0].offset({left: 0});
// $("#niPlugMask").append('<p class="niPlugArrow" id="niPlugPrev">》</p>');
// $("#niPlugMask").append('<p class="niPlugArrow" id="niPlugNext">《</p>');

// checkArrowShow();
// point_ar[0].removeClass("cniPlugPointUnTurn").addClass("cniPlugPointTurn");

// $("#niPlugPrev").on('click',function(){        
//     aniPic(baseWidth);
//     point_ar[nowPage].removeClass("cniPlugPointTurn").addClass("cniPlugPointUnTurn");
//     nowPage --;
//     if(nowPage < 0)   nowPage = 0
//     checkArrowShow();
//     aniPic(0);
//     point_ar[nowPage].removeClass("cniPlugPointUnTurn").addClass("cniPlugPointTurn");
//     // picDiv_ar[nowPage].offset({left:0});
// });
// $("#niPlugNext").on('click',function(){
//     // console.log("按鈕ID：" , this);
//     let rightPosX = 500;        
//     aniPic(-baseWidth);
//     point_ar[nowPage].removeClass("cniPlugPointTurn").addClass("cniPlugPointUnTurn");        
//     nowPage ++;
//     if(nowPage >= amount)  nowPage = amount - 1;
//     checkArrowShow();
//     aniPic(0);
//     point_ar[nowPage].removeClass("cniPlugPointUnTurn").addClass("cniPlugPointTurn");
//     // picDiv_ar[nowPage].offset({left:0});
// });

// function checkArrowShow(){
//     $(".niPlugArrow").show();
//     // $("#niPlugNext").show();
//     if(nowPage > (amount - 2))  $("#niPlugNext").hide();
//     if(nowPage < 1)             $("#niPlugPrev").hide();
// }

// function aniPic(posx){
//     let posxs = String(posx) + "px";
//     picDiv_ar[nowPage].animate({left:posxs});
// }
