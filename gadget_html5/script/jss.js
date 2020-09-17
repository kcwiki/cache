

$(function(){

	var i=1;

	var f=200;

$('#mainContents.shiptype .post').each(function(){

$(this).addClass('entry0'+i);

i++;

});

//初期表示

$(".shiptype .post").hide();

$(".shiptype .post.entry01").show();

$(".navEntry01").addClass("current")

//クリック

$(".navEntry01").click(function(){

$(".kmNav li").removeClass("current");

$(this).addClass("current");

$(".shiptype .post").hide();

$(".shiptype .post.entry01").fadeIn(f);

	})

$(".navEntry02").click(function(){

$(".kmNav li").removeClass("current");

$(this).addClass("current");

$(".shiptype .post").hide();

$(".shiptype .post.entry02").fadeIn(f);

	})

$(".navEntry03").click(function(){

$(".kmNav li").removeClass("current");

$(this).addClass("current");

$(".shiptype .post").hide();

$(".shiptype .post.entry03").fadeIn(f);

	})

	

	

//	///フキダシ
//
//$(".badge").animate({opacity: 0},{duration: 0})
//
//$("#globalNavi .last").hover(function(){
//
//	$(".badge").stop(true, false).animate({
//
//            opacity: 1
//
//        }, {
//
//            duration: 80
//
//        })
//
//	},function(){
//
//	$(".badge").stop(true, false).animate({
//
//            opacity: 0
//
//        }, {
//
//            duration: 80
//
//        })
//
//
//
//});
//
/////フキダシここまで



///ページ
$(".pageWrap .page0 .page1nav").click(function(){
	$(".pageWrap .page0").stop().animate({ left: -760 }, 150);
	$(".pageWrap .page1").stop().animate({ left: 0 }, 150);
	$(".pageWrap .page2").stop().animate({ left: 760 }, 150);
	$(".pageWrap .page3").stop().animate({ left: 760 }, 150);
	$(".pageWrap .page4").stop().animate({ left: 1520 }, 150);	
	$(".pageWrap .page5").stop().animate({ left: 2280 }, 150);
});

$(".pageWrap .page1 .page2nav").click(function(){
	$(".pageWrap .page0").stop().animate({ left: 0 }, 150);
	$(".pageWrap .page1").stop().animate({ left: 760 }, 150);
	$(".pageWrap .page2").stop().animate({ left: 760 }, 150);
	$(".pageWrap .page3").stop().animate({ left: 1520 }, 150);	
	$(".pageWrap .page4").stop().animate({ left: 2280 }, 150);	
	$(".pageWrap .page5").stop().animate({ left: 3040 }, 150);

	});

$(".pageWrap .page1 .page1nav").click(function(){
	$(".pageWrap .page0").stop().animate({ left: -760 }, 150);
	$(".pageWrap .page1").stop().animate({ left: -760 }, 150);
	$(".pageWrap .page2").stop().animate({ left: 0 }, 150);
	$(".pageWrap .page3").stop().animate({ left: 760 }, 150);
	$(".pageWrap .page4").stop().animate({ left: 1520 }, 150);	
	$(".pageWrap .page5").stop().animate({ left: 2280 }, 150);
});

$(".pageWrap .page2 .page2nav").click(function(){
	$(".pageWrap .page0").stop().animate({ left: -760 }, 150);
	$(".pageWrap .page1").stop().animate({ left: 0 }, 150);
	$(".pageWrap .page2").stop().animate({ left: 760 }, 150);
	$(".pageWrap .page3").stop().animate({ left: 1520 }, 150);	
	$(".pageWrap .page4").stop().animate({ left: 2280 }, 150);	
	$(".pageWrap .page5").stop().animate({ left: 3040 }, 150);

	});



$(".pageWrap .page2 .page1nav").click(function(){
	$(".pageWrap .page0").stop().animate({ left: -760 }, 150);
	$(".pageWrap .page1").stop().animate({ left: -760 }, 150);
	$(".pageWrap .page2").stop().animate({ left: -760 }, 150);
	$(".pageWrap .page3").stop().animate({ left: 0 }, 150);
	$(".pageWrap .page4").stop().animate({ left: 760 }, 150);
	$(".pageWrap .page5").stop().animate({ left: 1520 }, 150);
	});



$(".pageWrap .page3 .page2nav").click(function(){
	$(".pageWrap .page0").stop().animate({ left: -760 }, 150);
	$(".pageWrap .page1").stop().animate({ left: -760 }, 150);
	$(".pageWrap .page2").stop().animate({ left: 0 }, 150);
	$(".pageWrap .page3").stop().animate({ left: 760 }, 150);
	$(".pageWrap .page4").stop().animate({ left: 1520 }, 150);
	$(".pageWrap .page5").stop().animate({ left: 2208 }, 150);

	});



$(".pageWrap .page3 .page1nav").click(function(){
	$(".pageWrap .page0").stop().animate({ left: -760 }, 150);
	$(".pageWrap .page1").stop().animate({ left: -760 }, 150);
	$(".pageWrap .page2").stop().animate({ left: -760 }, 150);
	$(".pageWrap .page3").stop().animate({ left: -760 }, 150);
	$(".pageWrap .page4").stop().animate({ left: 0 }, 150);
	$(".pageWrap .page5").stop().animate({ left: 760 }, 150);

	});


//
//$(".pageWrap .page4 .page2nav").click(function(){
//	$(".pageWrap .page0").stop().animate({ left: -760 }, 150);
//	$(".pageWrap .page1").stop().animate({ left: -760 }, 150);
//	$(".pageWrap .page2").stop().animate({ left: -760 }, 150);
//	$(".pageWrap .page3").stop().animate({ left: 0 }, 150);
//	$(".pageWrap .page4").stop().animate({ left: 760 }, 150);
//	$(".pageWrap .page5").stop().animate({ left: 1520 }, 150);
//	});
//
//
//$(".pageWrap .page4 .page1nav").click(function(){
//	$(".pageWrap .page0").stop().animate({ left: -760 }, 150);
//	$(".pageWrap .page1").stop().animate({ left: -760 }, 150);
//	$(".pageWrap .page2").stop().animate({ left: -760 }, 150);
//	$(".pageWrap .page3").stop().animate({ left: -760 }, 150);
//	$(".pageWrap .page4").stop().animate({ left: -760 }, 150);
//	$(".pageWrap .page5").stop().animate({ left: 0 }, 150);
//	});
//	
//
//	$(".pageWrap .page5 .page2nav").click(function(){
//	$(".pageWrap .page0").stop().animate({ left: -760 }, 150);
//	$(".pageWrap .page1").stop().animate({ left: -760 }, 150);
//	$(".pageWrap .page2").stop().animate({ left: -760 }, 150);
//	$(".pageWrap .page3").stop().animate({ left: -760 }, 150);
//	$(".pageWrap .page4").stop().animate({ left: 0 }, 150);
//	$(".pageWrap .page5").stop().animate({ left: 760 }, 150);
//	});
//

///ページここまで

///rank



//初期表示
/*extra*/
$(".kakushi").hide();
$(".btn_extra").click(function(){
	$(this).toggleClass("checked");
	$(".kakushi").slideToggle();
	$(".rank1pnav,.rank2pnav,.rank3pnav,.rank4pnav").toggle();
	})

$(".rank2p,.rank3p,.rank4p").hide();
$(".rank1p").show();
$(".rank1pnav").addClass("current")

//クリック

$(".rank1pnav").click(function(){
$(".rank1pnav,.rank2pnav,.rank3pnav,.rank4pnav").removeClass("current");
$(this).addClass("current");
$(".rank2p,.rank3p,.rank4p").hide();
$(".rank1p").fadeIn(f);
	})

$(".rank2pnav").click(function(){
$(".rank1pnav,.rank2pnav,.rank3pnav,.rank4pnav").removeClass("current");
$(this).addClass("current");
$(".rank1p,.rank3p,.rank4p").hide();
$(".rank2p").fadeIn(f);
	})

$(".rank3pnav").click(function(){
$(".rank1pnav,.rank2pnav,.rank3pnav,.rank4pnav").removeClass("current");
$(this).addClass("current");
$(".rank1p,.rank2p,.rank4p").hide();
$(".rank3p").fadeIn(f);
	})

$(".rank4pnav").click(function(){
$(".rank1pnav,.rank2pnav,.rank3pnav,.rank4pnav,.rank5pnav").removeClass("current");
$(this).addClass("current");
$(".rank1p,.rank2p,.rank3p").hide();
$(".rank4p").fadeIn(f);
	})

///rankここまで

	
$(".page0 .rank2bp,.page0 .rank3bp,.page0 .rank4bp,.page0 .rank5bp,.page0 .rank6bp,.page0 .rank7bp,.page0 .rank8bp,.page0 .rank9bp,.page0 .rank10bp,.page0 .rank11bp").hide();
$(".page0 .rank1bp").show();
$(".page0 .rank1bpnav").addClass("current")

//クリック

$(".page0 .rank1bpnav").click(function(){
$(".page0 .rank1bpnav,.page0 .rank2bpnav,.page0 .rank3bpnav,.page0 .rank4bpnav,.page0 .rank5bpnav,.page0 .rank6bpnav,.page0 .rank7bpnav,.page0 .rank8bpnav,.page0 .rank9bpnav,.page0 .rank10bpnav,.page0 .rank11bpnav").removeClass("current");
$(this).addClass("current");
$(".page0 .rank1bp,.page0 .rank2bp,.page0 .rank3bp,.page0 .rank4bp,.page0 .rank5bp,.page0 .rank6bp,.page0 .rank7bp,.page0 .rank8bp,.page0 .rank9bp,.page0 .rank10bp,.page0 .rank11bp").hide();
$(".page0 .rank1bp").fadeIn(f);
	})

$(".page0 .rank2bpnav").click(function(){
$(".page0 .rank1bpnav,.page0 .rank2bpnav,.page0 .rank3bpnav,.page0 .rank4bpnav,.page0 .rank5bpnav,.page0 .rank6bpnav,.page0 .rank7bpnav,.page0 .rank8bpnav,.page0 .rank9bpnav,.page0 .rank10bpnav,.page0 .rank11bpnav").removeClass("current");
$(this).addClass("current");
$(".page0 .rank1bp,.page0 .rank2bp,.page0 .rank3bp,.page0 .rank4bp,.page0 .rank5bp,.page0 .rank6bp,.page0 .rank7bp,.page0 .rank8bp,.page0 .rank9bp,.page0 .rank10bp,.page0 .rank11bp").hide();
$(".page0 .rank2bp").fadeIn(f);
	})

$(".page0 .rank3bpnav").click(function(){
$(".page0 .rank1bpnav,.page0 .rank2bpnav,.page0 .rank3bpnav,.page0 .rank4bpnav,.page0 .rank5bpnav,.page0 .rank6bpnav,.page0 .rank7bpnav,.page0 .rank8bpnav,.page0 .rank9bpnav,.page0 .rank10bpnav,.page0 .rank11bpnav").removeClass("current");
$(this).addClass("current");
$(".page0 .rank1bp,.page0 .rank2bp,.page0 .rank3bp,.page0 .rank4bp,.page0 .rank5bp,.page0 .rank6bp,.page0 .rank7bp,.page0 .rank8bp,.page0 .rank9bp,.page0 .rank10bp,.page0 .rank11bp").hide();
$(".page0 .rank3bp").fadeIn(f);
	})

$(".page0 .rank4bpnav").click(function(){
$(".page0 .rank1bpnav,.page0 .rank2bpnav,.page0 .rank3bpnav,.page0 .rank4bpnav,.page0 .rank5bpnav,.page0 .rank6bpnav,.page0 .rank7bpnav,.page0 .rank8bpnav,.page0 .rank9bpnav,.page0 .rank10bpnav,.page0 .rank11bpnav").removeClass("current");
$(this).addClass("current");
$(".page0 .rank1bp,.page0 .rank2bp,.page0 .rank3bp,.page0 .rank4bp,.page0 .rank5bp,.page0 .rank6bp,.page0 .rank7bp,.page0 .rank8bp,.page0 .rank9bp,.page0 .rank10bp,.page0 .rank11bp").hide();
$(".page0 .rank4bp").fadeIn(f);
	})

$(".page0 .rank5bpnav").click(function(){
$(".page0 .rank1bpnav,.page0 .rank2bpnav,.page0 .rank3bpnav,.page0 .rank4bpnav,.page0 .rank5bpnav,.page0 .rank6bpnav,.page0 .rank7bpnav,.page0 .rank8bpnav,.page0 .rank9bpnav,.page0 .rank10bpnav,.page0 .rank11bpnav").removeClass("current");
$(this).addClass("current");
$(".page0 .rank1bp,.page0 .rank2bp,.page0 .rank3bp,.page0 .rank4bp,.page0 .rank5bp,.page0 .rank6bp,.page0 .rank7bp,.page0 .rank8bp,.page0 .rank9bp,.page0 .rank10bp,.page0 .rank11bp").hide();
$(".page0 .rank5bp").fadeIn(f);
	})

$(".page0 .rank6bpnav").click(function(){
$(".page0 .rank1bpnav,.page0 .rank2bpnav,.page0 .rank3bpnav,.page0 .rank4bpnav,.page0 .rank5bpnav,.page0 .rank6bpnav,.page0 .rank7bpnav,.page0 .rank8bpnav,.page0 .rank9bpnav,.page0 .rank10bpnav,.page0 .rank11bpnav").removeClass("current");
$(this).addClass("current");
$(".page0 .rank1bp,.page0 .rank2bp,.page0 .rank3bp,.page0 .rank4bp,.page0 .rank5bp,.page0 .rank6bp,.page0 .rank7bp,.page0 .rank8bp,.page0 .rank9bp,.page0 .rank10bp,.page0 .rank11bp").hide();
$(".page0 .rank6bp").fadeIn(f);
	})

$(".page0 .rank7bpnav").click(function(){
$(".page0 .rank1bpnav,.page0 .rank2bpnav,.page0 .rank3bpnav,.page0 .rank4bpnav,.page0 .rank5bpnav,.page0 .rank6bpnav,.page0 .rank7bpnav,.page0 .rank8bpnav,.page0 .rank9bpnav,.page0 .rank10bpnav,.page0 .rank11bpnav").removeClass("current");
$(this).addClass("current");
$(".page0 .rank1bp,.page0 .rank2bp,.page0 .rank3bp,.page0 .rank4bp,.page0 .rank5bp,.page0 .rank6bp,.page0 .rank7bp,.page0 .rank8bp,.page0 .rank9bp,.page0 .rank10bp,.page0 .rank11bp").hide();
$(".page0 .rank7bp").fadeIn(f);
	})

$(".page0 .rank8bpnav").click(function(){
$(".page0 .rank1bpnav,.page0 .rank2bpnav,.page0 .rank3bpnav,.page0 .rank4bpnav,.page0 .rank5bpnav,.page0 .rank6bpnav,.page0 .rank7bpnav,.page0 .rank8bpnav,.page0 .rank9bpnav,.page0 .rank10bpnav,.page0 .rank11bpnav").removeClass("current");
$(this).addClass("current");
$(".page0 .rank1bp,.page0 .rank2bp,.page0 .rank3bp,.page0 .rank4bp,.page0 .rank5bp,.page0 .rank6bp,.page0 .rank7bp,.page0 .rank8bp,.page0 .rank9bp,.page0 .rank10bp,.page0 .rank11bp").hide();
$(".page0 .rank8bp").fadeIn(f);
	})

$(".page0 .rank9bpnav").click(function(){
$(".page0 .rank1bpnav,.page0 .rank2bpnav,.page0 .rank3bpnav,.page0 .rank4bpnav,.page0 .rank5bpnav,.page0 .rank6bpnav,.page0 .rank7bpnav,.page0 .rank8bpnav,.page0 .rank9bpnav,.page0 .rank10bpnav,.page0 .rank11bpnav").removeClass("current");
$(this).addClass("current");
$(".page0 .rank1bp,.page0 .rank2bp,.page0 .rank3bp,.page0 .rank4bp,.page0 .rank5bp,.page0 .rank6bp,.page0 .rank7bp,.page0 .rank8bp,.page0 .rank9bp,.page0 .rank10bp,.page0 .rank11bp").hide();
$(".page0 .rank9bp").fadeIn(f);
	})

$(".page0 .rank10bpnav").click(function(){
$(".page0 .rank1bpnav,.page0 .rank2bpnav,.page0 .rank3bpnav,.page0 .rank4bpnav,.page0 .rank5bpnav,.page0 .rank6bpnav,.page0 .rank7bpnav,.page0 .rank8bpnav,.page0 .rank9bpnav,.page0 .rank10bpnav,.page0 .rank11bpnav").removeClass("current");
$(this).addClass("current");
$(".page0 .rank1bp,.page0 .rank2bp,.page0 .rank3bp,.page0 .rank4bp,.page0 .rank5bp,.page0 .rank6bp,.page0 .rank7bp,.page0 .rank8bp,.page0 .rank9bp,.page0 .rank10bp,.page0 .rank11bp").hide();
$(".page0 .rank10bp").fadeIn(f);
	})

$(".page0 .rank11bpnav").click(function(){
$(".page0 .rank1bpnav,.page0 .rank2bpnav,.page0 .rank3bpnav,.page0 .rank4bpnav,.page0 .rank5bpnav,.page0 .rank6bpnav,.page0 .rank7bpnav,.page0 .rank8bpnav,.page0 .rank9bpnav,.page0 .rank10bpnav,.page0 .rank11bpnav").removeClass("current");
$(this).addClass("current");
$(".page0 .rank1bp,.page0 .rank2bp,.page0 .rank3bp,.page0 .rank4bp,.page0 .rank5bp,.page0 .rank6bp,.page0 .rank7bp,.page0 .rank8bp,.page0 .rank9bp,.page0 .rank10bp,.page0 .rank11bp").hide();
$(".page0 .rank11bp").fadeIn(f);
	})

/********************************/

$(".page1 .rank2bp,.page1 .rank3bp,.page1 .rank4bp,.page1 .rank5bp,.page1 .rank6bp,.page1 .rank7bp,.page1 .rank8bp,.page1 .rank9bp").hide();
$(".page1 .rank1bp").show();
$(".page1 .rank1bpnav").addClass("current")

//クリック

$(".page1 .rank1bpnav").click(function(){
$(".page1 .rank1bpnav,.page1 .rank2bpnav,.page1 .rank3bpnav,.page1 .rank4bpnav,.page1 .rank5bpnav,.page1 .rank6bpnav,.page1 .rank7bpnav,.page1 .rank8bpnav,.page1 .rank9bpnav").removeClass("current");
$(this).addClass("current");
$(".page1 .rank1bp,.page1 .rank2bp,.page1 .rank3bp,.page1 .rank4bp,.page1 .rank5bp,.page1 .rank6bp,.page1 .rank7bp,.page1 .rank8bp,.page1 .rank9bp").hide();
$(".page1 .rank1bp").fadeIn(f);
	})

$(".page1 .rank2bpnav").click(function(){
$(".page1 .rank1bpnav,.page1 .rank2bpnav,.page1 .rank3bpnav,.page1 .rank4bpnav,.page1 .rank5bpnav,.page1 .rank6bpnav,.page1 .rank7bpnav,.page1 .rank8bpnav,.page1 .rank9bpnav").removeClass("current");
$(this).addClass("current");
$(".page1 .rank1bp,.page1 .rank2bp,.page1 .rank3bp,.page1 .rank4bp,.page1 .rank5bp,.page1 .rank6bp,.page1 .rank7bp,.page1 .rank8bp,.page1 .rank9bp").hide();
$(".page1 .rank2bp").fadeIn(f);
	})

$(".page1 .rank3bpnav").click(function(){
$(".page1 .rank1bpnav,.page1 .rank2bpnav,.page1 .rank3bpnav,.page1 .rank4bpnav,.page1 .rank5bpnav,.page1 .rank6bpnav,.page1 .rank7bpnav,.page1 .rank8bpnav,.page1 .rank9bpnav").removeClass("current");
$(this).addClass("current");
$(".page1 .rank1bp,.page1 .rank2bp,.page1 .rank3bp,.page1 .rank4bp,.page1 .rank5bp,.page1 .rank6bp,.page1 .rank7bp,.page1 .rank8bp,.page1 .rank9bp").hide();
$(".page1 .rank3bp").fadeIn(f);
	})

$(".page1 .rank4bpnav").click(function(){
$(".page1 .rank1bpnav,.page1 .rank2bpnav,.page1 .rank3bpnav,.page1 .rank4bpnav,.page1 .rank5bpnav,.page1 .rank6bpnav,.page1 .rank7bpnav,.page1 .rank8bpnav,.page1 .rank9bpnav").removeClass("current");
$(this).addClass("current");
$(".page1 .rank1bp,.page1 .rank2bp,.page1 .rank3bp,.page1 .rank4bp,.page1 .rank5bp,.page1 .rank6bp,.page1 .rank7bp,.page1 .rank8bp,.page1 .rank9bp").hide();
$(".page1 .rank4bp").fadeIn(f);
	})

$(".page1 .rank5bpnav").click(function(){
$(".page1 .rank1bpnav,.page1 .rank2bpnav,.page1 .rank3bpnav,.page1 .rank4bpnav,.page1 .rank5bpnav,.page1 .rank6bpnav,.page1 .rank7bpnav,.page1 .rank8bpnav,.page1 .rank9bpnav").removeClass("current");
$(this).addClass("current");
$(".page1 .rank1bp,.page1 .rank2bp,.page1 .rank3bp,.page1 .rank4bp,.page1 .rank5bp,.page1 .rank6bp,.page1 .rank7bp,.page1 .rank8bp,.page1 .rank9bp").hide();
$(".page1 .rank5bp").fadeIn(f);
	})

$(".page1 .rank6bpnav").click(function(){
$(".page1 .rank1bpnav,.page1 .rank2bpnav,.page1 .rank3bpnav,.page1 .rank4bpnav,.page1 .rank5bpnav,.page1 .rank6bpnav,.page1 .rank7bpnav,.page1 .rank8bpnav,.page1 .rank9bpnav").removeClass("current");
$(this).addClass("current");
$(".page1 .rank1bp,.page1 .rank2bp,.page1 .rank3bp,.page1 .rank4bp,.page1 .rank5bp,.page1 .rank6bp,.page1 .rank7bp,.page1 .rank8bp,.page1 .rank9bp").hide();
$(".page1 .rank6bp").fadeIn(f);
	})

$(".page1 .rank7bpnav").click(function(){
$(".page1 .rank1bpnav,.page1 .rank2bpnav,.page1 .rank3bpnav,.page1 .rank4bpnav,.page1 .rank5bpnav,.page1 .rank6bpnav,.page1 .rank7bpnav,.page1 .rank8bpnav,.page1 .rank9bpnav").removeClass("current");
$(this).addClass("current");
$(".page1 .rank1bp,.page1 .rank2bp,.page1 .rank3bp,.page1 .rank4bp,.page1 .rank5bp,.page1 .rank6bp,.page1 .rank7bp,.page1 .rank8bp,.page1 .rank9bp").hide();
$(".page1 .rank7bp").fadeIn(f);
	})

$(".page1 .rank8bpnav").click(function(){
$(".page1 .rank1bpnav,.page1 .rank2bpnav,.page1 .rank3bpnav,.page1 .rank4bpnav,.page1 .rank5bpnav,.page1 .rank6bpnav,.page1 .rank7bpnav,.page1 .rank8bpnav,.page1 .rank9bpnav").removeClass("current");
$(this).addClass("current");
$(".page1 .rank1bp,.page1 .rank2bp,.page1 .rank3bp,.page1 .rank4bp,.page1 .rank5bp,.page1 .rank6bp,.page1 .rank7bp,.page1 .rank8bp,.page1 .rank9bp").hide();
$(".page1 .rank8bp").fadeIn(f);
	})

$(".page1 .rank9bpnav").click(function(){
$(".page1 .rank1bpnav,.page1 .rank2bpnav,.page1 .rank3bpnav,.page1 .rank4bpnav,.page1 .rank5bpnav,.page1 .rank6bpnav,.page1 .rank7bpnav,.page1 .rank8bpnav,.page1 .rank9bpnav").removeClass("current");
$(this).addClass("current");
$(".page1 .rank1bp,.page1 .rank2bp,.page1 .rank3bp,.page1 .rank4bp,.page1 .rank5bp,.page1 .rank6bp,.page1 .rank7bp,.page1 .rank8bp,.page1 .rank9bp").hide();
$(".page1 .rank9bp").fadeIn(f);
	})

/********************************/



});