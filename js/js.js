// slider
jQuery(function($){

		$(document).ready(function(){
		$('.main-top').slick({
			autoplay: true,
			autoplaySpeed: 2500,
			dots: true,
			arrows: false,
			fade: true
		});
	});

});

// Select main
let select = function () {
	let selectHeader = document.querySelectorAll('.select__header');
	let selectItem = document.querySelectorAll('.select__item');

	selectHeader.forEach( item=> {
		item.addEventListener('click', selectToggle)
	});

	selectItem.forEach( item=> {
		item.addEventListener('click', selectChoose)
	});

	function selectToggle() {
		this.parentElement.classList.toggle('is-active');
	}

	$(".select__item").click(function(e) {
		e.preventDefault();
		$(".select__item").removeClass('hidden');
		$(this).addClass('hidden');
})

	function selectChoose() {
		let text = this.innerText,
			 select = this.closest('.select'),
			 currentText = this.closest('.select').querySelector('.select__current');
		currentText.innerText = text;
		select.classList.remove('is-active');
	}
};

select();

// Position select

let positionsel = function () {
	let positionselHeader = document.querySelectorAll('.positionsel__header');
	let positionselItem = document.querySelectorAll('.positionsel__item');

	positionselHeader.forEach( item=> {
		item.addEventListener('click', selectToggle)
	});

	positionselItem.forEach( item=> {
		item.addEventListener('click', positionselChoose)
	});

	function selectToggle() {
		this.parentElement.classList.toggle('is-active');
	}

	$(".positionsel__item").click(function(e) {
		e.preventDefault();
		$(".positionsel__item").removeClass('hidden');
		$(this).addClass('hidden');
})

	function positionselChoose() {
		let text = this.innerText,
			 positionsel = this.closest('.positionsel'),
			 currentText = this.closest('.positionsel').querySelector('.positionsel__current');
		currentText.innerText = text;
		positionsel.classList.remove('is-active');
	}
};

positionsel();

// Schedule select

let schedulesel = function () {
	let scheduleselHeader = document.querySelectorAll('.schedulesel__header');
	let scheduleselItem = document.querySelectorAll('.schedulesel__item');

	scheduleselHeader.forEach( item=> {
		item.addEventListener('click', selectToggle)
	});

	scheduleselItem.forEach( item=> {
		item.addEventListener('click', scheduleselChoose)
	});

	function selectToggle() {
		this.parentElement.classList.toggle('is-active');
	}

	$(".schedulesel__item").click(function(e) {
		e.preventDefault();
		$(".schedulesel__item").removeClass('hidden');
		$(this).addClass('hidden');
})

	function scheduleselChoose() {
		let text = this.innerText,
			 schedulesel = this.closest('.schedulesel'),
			 currentText = this.closest('.schedulesel').querySelector('.schedulesel__current');
		currentText.innerText = text;
		schedulesel.classList.remove('is-active');
	}
};

schedulesel();

// Resume select

let resumesel = function () {
	let resumeselHeader = document.querySelectorAll('.resumesel__header');
	let resumeselItem = document.querySelectorAll('.resumesel__item');

	resumeselHeader.forEach( item=> {
		item.addEventListener('click', selectToggle)
	});

	resumeselItem.forEach( item=> {
		item.addEventListener('click', resumeselChoose)
	});

	function selectToggle() {
		this.parentElement.classList.toggle('is-active');
	}

	$(".resumesel__item").click(function(e) {
		e.preventDefault();
		$(".resumesel__item").removeClass('hidden');
		$(this).addClass('hidden');
})

	function resumeselChoose() {
		let text = this.innerText,
			 resumesel = this.closest('.resumesel'),
			 currentText = this.closest('.resumesel').querySelector('.resumesel__current');
		currentText.innerText = text;
		resumesel.classList.remove('is-active');
	}
};

resumesel();

// Open forms on click

$('.application').on('click', function(){
	$('.form__application').toggle("swing");
});
$('.resume').on('click', function(){
	$('.form__resume').toggle("swing");
});

// Hiding the form by clicking on the screen

jQuery(function($){
	$(document).mouseup(function (e){ 
		let div = $(".application,.form__application"); 
		if (!div.is(e.target) 
			&& div.has(e.target).length === 0) {
			$('.form__application').hide("swing");
		}
	});
});

jQuery(function($){
	$(document).mouseup(function (e){ 
		let div = $(".resume,.form__resume"); 
		if (!div.is(e.target) 
		    && div.has(e.target).length === 0) {
			$('.form__resume').hide("swing");
		}
	});
});

// Give current value

let current = $('.select__current').text();
	$('#current_worker').val(current);

let poscurrent = $('.positionsel__current').text();
	$('#current_posworker').val(current);

let schedcurrent = $('.schedulesel__current').text();
	$('#current_schedworker').val(current);

let rescurrent = $('.resumesel__current').text();
	$('#current_resworker').val(current);
