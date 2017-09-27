(function($){

	$(window).on("load",function(){

		$(".scroll").mCustomScrollbar();

	});

})(jQuery);


$(document).ready(function() {

	$(".gallery-slider").not(".slick-initialized").slick({
			dots: false,
			arrows: true,
			autoplay: true,
			autoplaySpeed: 10000,
			speed: 1200,
			centerMode : true,
			slidesToShow: 3,
			slidesToScroll : 1,
			responsive: [
		    {
		      breakpoint: 1120,
		      settings: {
		        slidesToShow: 2
		      }
		    },
		    {
		     breakpoint: 900,
		      settings: {
		        slidesToShow: 2,
		        centerMode : false
		      }
		    },
		    {
		     breakpoint: 630,
		      settings: {
		      	arrows: false,
		        slidesToShow: 1,
		        centerMode : false
		      }
		    }
		  ]
		});

	if( $("#range_slider").length > 0 ) {


		var ramgeSlider = document.getElementById("range_slider");

		noUiSlider.create(ramgeSlider, {
			start: 5.5,
			step: .5,
			connect: [true, false],
			tooltips: true,
			range: {
				min: 0,
				max: 17
			},
			pips: {
				mode: 'values',
				values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
				density: 1
			}
		});

		ramgeSlider.noUiSlider.on('update', function( values, handle ) {

			$(".noUi-tooltip").html(Math.ceil(values * 10) / 10);

		});

	}

});

$("select").select2({
	allowClear: true,
    placeholder: function(){
        $(this).data('placeholder');
    }
});
