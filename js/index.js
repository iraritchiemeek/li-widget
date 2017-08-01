$(document).ready(function () {

	$('.start__button').click(function () {
		$('.start').fadeOut(function () {
			$('.li-form form').fadeIn()
			setCurrentFieldData('gender')
			showCurrentFormField()
		})
	})

	$('.li-form__action').click(function () {
		if ($('.li-form form').data('current') == 'gender') {
			$('.li-form form').fadeIn(function () {
				setCurrentFieldData('smoker')
				showCurrentFormField()
			})
		}
	})

	$('.form-field__button').click(function(e) {
		if (e.target.dataset.pos == 'right') {
			$('.form-field__selected').animate({'right': '10px'})
			$('.form-field__selected').css({'left': 'initial'})
		} else {
			$('.form-field__selected').animate({'left': '10px'})
			$('.form-field__selected').css({'right': 'initial'})
		}
	})

	function setCurrentFieldData(fieldName) {
		$('.li-form form').data('current', fieldName)
	}

	function showCurrentFormField() {
		switch($('.li-form form').data('current')) {
		    case 'gender':
		    	$('.form-field').css({'display': 'none'})
		        $('.form-field--gender').show()
		        break;
		    case 'smoker':
		    	$('.form-field').css({'display': 'none'})
				$('.form-field--smoker').fadeIn()
		    	break;
		}
	}

})