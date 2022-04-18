$(document).ready(function(){
    
//햄버거 메뉴
    $(".nav .hambuger").click(function(e){
        e.preventDefault();
        
        if($(".nav").hasClass("active")){
            $(".nav").removeClass("active");
        }else{
            $(".nav").addClass("active");
        }
    });
    
//메인 이미지 
    $("#main h1").stop().animate({"opacity":"1"},1000,function(){
        $("#main .icon_size").stop().animate({"opacity":"1"});
    });
    
//해당 페이지에 가면 컨텐츠 나오게
    $(document).scroll(function(){
        var sc_top = $(document).scrollTop();
        $(".score").text(sc_top);
        
        if(sc_top >= 952 && sc_top <2033){
            $("#section #article1 .content1").stop().animate({"left":"0px"},1000);
        }else{
             $("#section #article1 .content1").stop().animate({"left":"-959px"},1000);
        }
        
        
        if(sc_top >=2034 && sc_top < 3111){
            $("#section #article2 .content2 .img2").stop().animate({"opacity":"1"},function(){
                $("#section #article2 .content2 .img1").stop().animate({"opacity":"1"});
            });
        }else{
          $("#section #article2 .content2 .img2").stop().animate({"opacity":"0"},function(){
            $("#section #article2 .content2 .img1").stop().animate({"opacity":"0"});
          });
        }
        
        if(sc_top >= 3112 && sc_top <4193){
            $("#section #article3 .content5 h3").stop().animate({"opacity":"1"},function(){
                $("#section #article3 .content6 h3").stop().animate({"opacity":"1"});
            });
        }else{
            $("#section #article3 .content5 h3").stop().animate({"opacity":"0"},function(){
                $("#section #article3 .content6 h3").stop().animate({"opacity":"0"});
            });
        }
        
        //클린부스터 카운트
        if(sc_top >=2034 && sc_top < 3111){
               $('.count1').countTo({
                from: 1.1,
                to: 7.5,
                speed: 1000,
            decimals: 1,
            separator: '.',
            refreshInterval: 100
            });

            $('.count2').countTo({
                from: 1.1,
                to: 24,
                speed: 1000,
            decimals: 0,
            separator: '.',
            refreshInterval: 100

            });
       
        }
    });
    
//공기청정 디스플레이 슬라이드
    var i = $("#article1 .content1 .con1_list li.on").index();
    var len = $("#article1 .content1 .con1_list li").length;
    
    function showFade(){
        $("#article1 .content1 .con1_list li").stop().fadeOut();
        $("#article1 .content1 .con1_list li").eq(i).stop().fadeIn();
        $("#article1 .content1 .con1_list li").removeClass("on");
        $("#article1 .content1 .con1_list li").eq(i).addClass("on");
    }
    $("#article1 .content1 .prev").click(function(){
       if( i == 0){
            i = len - 1;
          }else{
              i = i - 1;
          }
        showFade();
    });
    
    $("#article1 .content1 .next").click(function(){
        if(i == len -1){
           i = 0;
           }else{
               i = i + 1;
           }
        showFade();
    });
    var autoslide = setInterval(auto,2000);
    
    function auto(){
        if(i == len -1){
           i = 0;
           }else{
               i = i + 1;
           }
        showFade();
    }
    $("#article1 .content1 .con1_list").mouseenter(function(){
        clearInterval(autoslide);
    });
    $("#article1 .content1 .con1_list").mouseleave(function(){
        autoslide = setInterval(auto, 3000);
    });
    
    // 토탈케어 팝업
    $("#section #article3 .content4 .more").click(function(e){
        e.preventDefault();
        
        $("#section #article3 .popup").stop().fadeIn();
    });
    $("#section #article3 .popup .pop_btn").click(function(){
        $("#section #article3 .popup").stop().fadeOut();
    });
    
    //배너 효과
    setInterval(function(){
        var current = $("#section #article4 .content7 li.act").index();
        var leng = $("#section #article4 .content7 li").length;
        
        if(current == leng - 1){
            current = 0;   
        }else{
            current++;
        }
        $("#section #article4 .content7 li").stop().fadeOut(2000);
        $("#section #article4 .content7 li").eq(current).stop().fadeIn(2000);
        $("#section #article4 .content7 li").removeClass("act");
        $("#section #article4 .content7 li").eq(current).addClass("act");
    },2000);
    
    //클린 부스터 카운트
    jQuery(function($) {
        $('.count1').countTo({
            from: 1.1,
            to: 7.5,
            speed: 700,
        decimals: 1,
        separator: '.'
        });
        
        $('.count2').countTo({
            from: 1.1,
            to: 24,
            speed: 700,
        decimals: 0,
        separator: '.'
        });
    });
});