$(document).ready(function(){
    $('.mobile-menu_button').click(function(event){
        $('.mobile-nav,.mobile-menu_button').addClass('active')
    })
    $('.menu-close_btn').click(function(event){
        $('.mobile-nav,.mobile-menu_button').removeClass('active')
    })


    $('.scrolltop').click(function(event) {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    })
})


window.addEventListener('scroll', function(){
    if (window.pageYOffset > 500){
        $('.scrolltop').addClass('active')
    }
    else{
        $('.scrolltop').removeClass('active')
    }

    if (window.pageYOffset > 100){
        $('.header-end').addClass('fixed');
    }
    else{
        $('.header-end').removeClass('fixed');
        
    }
})

$(function(){
	$('.slider').slick({
		slidesToShow:1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
	})
});

$(function(){
    $('.search_open').click(function(event){
        $('.search').addClass('active');
    })
    $('.search-close_btn').click(function(event){
        $('.search').removeClass('active');
    })
})

$(function(){
    const filter = document.querySelectorAll('.filter-products_item')
    $('.filter-categories_btn').click((e)=>{
        let filterClass = e.target.dataset['filter']
        filter.forEach(e => {
            e.classList.remove('hide')
            if (e.dataset['category'] != filterClass ) {
                e.classList.add('hide')
            }
        });
    })
})


const filter = document.querySelectorAll('.filter-products_item')
$('.filter-products_item').click((e)=>{
    $('.product-details_img').attr('src',`/img/products-img${e.currentTarget.id}.jpg`);
    $('.product-details_title').text(`${e.currentTarget.children[1].children[0].innerText}`);
    $('.product-details').addClass('active')
    });
$('.product-details_btn.menu-close_btn').click((e)=>{
    $('.product-details').removeClass('active')
})

lightbox.option({
    'disableScrolling':true,
    'alwaysShowNavOnTouchDevices':true,
    'resizeDuration': 200,
    'wrapAround': true
  })