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

})