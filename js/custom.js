$(function () {


    $('.visual_slide').slick({
        arrows: false,
    });


    $('.History_slide').slick({
        arrows: true,
        slidesToShow: 4,
        dots: false,
        autoplay: false,
    });

    $('.History_wrap .History_slide').on('afterChange', function (e, s, c) {
        console.log(e, s, c);

        const current = $('.History_wrap .History_slide .slick-current')
        current.addClass('on').siblings().removeClass('on')
    });

    $('.History_wrap .top_dots li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.History_wrap .History_slide').slick('slickGoTo', idx * 4)


        $('.History_wrap .top_dots li').removeClass('on')
        $('.History_wrap .top_dots li').eq(idx).addClass('on')
    });

    $('.news_wrap .left_tap .tab_tit li a').on('click', function (e) {
        //1. a를 클릭햇을떄 새로고침 되지않게 하기 = function에 (e)
        e.preventDefault();
        //2. 번호를 받아오기
        let idx = $(this).parent().index();
        //3. 번호에 부합하는 tab_con>li를 보여주기
        $('.news_wrap .left_tap .tab_con>li').removeClass('on');
        $('.news_wrap .left_tap .tab_con>li').eq(idx).addClass('on');
        //4. 메뉴에 스타일 붙이기
        $('.news_wrap .left_tap .tab_tit>li').removeClass('on')
        $('.news_wrap .left_tap .tab_tit>li').eq(idx).addClass('on')
    });
    $('.popup_slide').slick({
        arrows: true,
    });
})