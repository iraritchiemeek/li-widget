$(document).ready(function () {

	$('.start__button').click(function () {
		$('.start').fadeOut(function () {
			$('.li-form form').fadeIn()
		})
	})


	$('.form-field__button').click(function (e) {
		if (e.target.dataset.gender) {
			if (e.target.dataset.gender == 'f') {
				$('.form-field__selected').animate({'right': '10px'})
				$('.form-field__selected').css({'left': 'initial'})
			} else {
				$('.form-field__selected').animate({'left': '10px'})
				$('.form-field__selected').css({'right': 'initial'})
			}
		}
	})


})