$(function myfunction() {
    $('.snazzymenu').snazzyMenu({
        theme: "",
    });

    AOS.init({
        //list thiết lập in there
        once: true,
    });

    if ($('.flipdown').length > 0) {
        //Ngày kết thúc xác đinhk :(yyyy, mm, dd, hh, mm ,ss, ms)
        var endDate = new Date(2024, 6 - 1, 30, 12, 0, 0, 0);
        //Vì tháng trong js tính từ số 0 thay vì số 1 như thông thường, nên phải trừ 1

        //Tính thời gian còn lại
        var countdownDate = Math.floor(endDate.getTime() / 1000);

        // Set up FlipDown
        var flipdown = new FlipDown(countdownDate);

        flipdown.start();
    }
    


    $.backToTop();

    $('.testimonial-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            10000: {
                items: 1
            }
        }
    });

    //Gán số vào phần dots
    $('.testimonial-carousel .owl-dots span').each(function (index, elem) {
        $(elem).html(index+1);
    });

    //Xử lý nút btn btn-main-blog-ext
    $("#btn-main-blog-ext").on("click", function (e) {
        e.preventDefault();
        $(this).hide();

        $("#main-blog-ext").hide();
        $("#main-blog-ext").removeClass("d-none");
        $("#main-blog-ext").slideDown(1000);

        setTimeout(function () {
            $("#main-blog-ext").get(0).scrollIntoView();
        }, 1000);
    });
});