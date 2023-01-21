	// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
	// for details on configuring this project to bundle and minify static web assets.

	// Write your JavaScript code.

	$(() => {
		if (window.scrollY > 100) {
			$("#upButton").show();
		}
	});

	$(".category-label").click(function (e) {
		$(e.target).toggleClass("text-orange");
	});



	$(".menu-button").click(() => {
		$(".menu-div").toggleClass("hide-menu-div");
	});

	function Scroll(e) {

		if (window.scrollY > 100) {
			$("#upButton").show();
		}
		else {
			$("#upButton").hide();
		};
	};





	$("#upButton").click(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});

		
	});

	$(".user").click(() => {

		if ($(".basket-div").hasClass("wide")) {
			$(".basket-div").removeClass("wide");
		}


		if ($(".basket").hasClass("active")) {
			$(".basket").removeClass("active");
		}
		$(".user").toggleClass("active");
		$(".user-div").toggleClass("wide");

	});

	$(".basket").click(() => {

		if ($(".user-div").hasClass("wide")) {
			$(".user-div").removeClass("wide");
		}


		if ($(".user").hasClass("active")) {
			$(".user").removeClass("active");
		}
		$(".basket").toggleClass("active");

		$(".basket-div").toggleClass("wide");
	});
