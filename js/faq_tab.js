//탭메뉴
$('.tab_btn li').click(function(){
    var ind = $(this).index();//0 1 2 3
    console.log(ind);
    /*탭 영역 스크립트*/
    $('.tab_btn li').removeClass('on');
    $(this).addClass('on');
    
    /*탭내용 보이는 스크립트*/
    $('.tab_contents .list').stop().hide();
    $('.tab_contents .list').eq(ind).show();
});

$('.tab_contents .list .question').click(function(){
    if($(this).hasClass('active')){
       $(this).removeClass('active');
       //화살표 바꾸기
        $(this).children('dd').removeClass('up');
        $(this).children('dd').addClass('down');
        //해당 내용가리기
        $(this).siblings('.answer').stop().slideUp(500); 
    }else{
        $(this).addClass('active');
        //화살표 바꾸기
        $(this).children('dd').removeClass('down');
        $(this).children('dd').addClass('up');
        //해당 내용보여주기
        $(this).siblings('.answer').stop().slideDown(500);
    }
});