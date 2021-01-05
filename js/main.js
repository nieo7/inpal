$(function(){
    $(".ui-loader").hide(); //jQuery Mobile 引用 隱藏頁面底部出現的loading字樣
    let nowPage = "homeSec";
    // let nowPage = "reviewSec";
    // let nowPage = "productSec";
    let reviewDiv = $("#reviewDiv");
    let isShowCounter = false;
    init();     //初始化

    // 初始化
    function init() {
        // console.log("初始化" + pdTable);
        initProductSec();

        let ar = genPicList();
        addReviewPic(reviewDiv, ar);
        
        changeTag(nowPage);
        $(".navItem").on('click',function(){
            console.log("按鈕ID：" + $(this).attr("name"));
            changeTag($(this).attr("name"));
        });
        $("#counters").hide();
    }

    $("#logoPic").on('click',function(){
        if(isShowCounter){
            $("#counters").hide();
            isShowCounter = false;
        }
        else{
            $("#counters").show();
            isShowCounter = true;
        }
    });

    function changeTag(nowTag){
        $("section").hide();
        $("#" + nowTag).show();
    }

    function initProductSec(){        
        $("#rentTable_div").append(pdTable);
    }

    function genPicList(){
        let ar = new Array(55);
        for(let i = 0; i < 55; i++){
            let str = "";
            if(i < 10) str = "0" + i;
            else str = String(i);
            ar[i] = "img/assess/assess_0" + str + ".jpg";
        }
        ar = randomArray(ar);
        return ar;
    }

    function addReviewPic(div, pic_ar){
        let amount = pic_ar.length;
        for(let i = 0; i < amount; i ++){
            div.append('<img src="' + pic_ar[i] + '">');
        }
    }

    

    // 以隨機亂數改變順序，回傳陣列
	function randomArray(ar)	{		
		let r, t;
		let n = ar.length;
		for (let i = 0 ; i < n ; i++) 	{
			r = Number(Math.random() * n);
			r = Math.floor( Math.random() * n );
			t = ar[r];
			ar[r] = ar[i];
			ar[i] = t;
		}
		return ar;
	}

   
     
});