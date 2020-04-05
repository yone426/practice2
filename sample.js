function scrollToTop() {
  scrollTo(0, 0);
 }

//  $(function(){
// 	// #で始まるリンクをクリックしたら実行されます
// 	$('a[href^="#"]').click(function() {
// 		// スクロールの速度
// 		var speed = 400; // ミリ秒で記述
// 		var href= $(this).attr("href");
// 		var target = $(href == "#" || href == "" ? 'html' : href);
// 		var position = target.offset().top;
// 		$('body,html').animate({scrollTop:position}, speed, 'swing');
// 		return false;
//   });
// });

// $(function(){
//   $('a[href^=#]').click(function(){
//     var speed = 500;
//     var href= $(this).attr("href");
//     var target = $(href == "#" || href == "" ? 'html' : href);
//     var position = target.offset().top;
//     $("html, body").animate({scrollTop:position}, speed, "swing");
//     return false;
//   });
// });
  