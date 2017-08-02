$(document).ready(function () {

	$('.start__button').click(function () {
		$('.start').fadeOut(function () {
			setCurrentFieldData('gender')
			showCurrentFormField()
		})
	})

	$('.li-form__action').click(function () {
		if ($('.li-form form').data('current') == 'gender') {
			setCurrentFieldData('smoker')
			showCurrentFormField()
		} else if ($('.li-form form').data('current') == 'smoker') {
			setCurrentFieldData('age')
			showCurrentFormField()
		} else if ($('.li-form form').data('current') == 'age') {
			if (validAge()) {
				setCurrentFieldData('cover-amount')
				showCurrentFormField()
			}
			
		}
	})

	$('.form-field__button').click(function(e) {
		if (e.target.dataset.pos == 'right') {
			$('.form-field__selected').animate({'right': '20px'})
			$('.form-field__selected').css({'left': 'initial'})
		} else {
			$('.form-field__selected').animate({'left': '20px'})
			$('.form-field__selected').css({'right': 'initial'})
		}
	})

	$('input[type=range]').on('input', function () {
		convertSliderValue()
	})

	function setCurrentFieldData(fieldName) {
		$('.li-form form').data('current', fieldName)
	}

	function showCurrentFormField() {
		switch($('.li-form form').data('current')) {
		    case 'gender':
		    	$('.form-field').hide()
		        $('.form-field--gender').show()
				$('.li-form form').fadeIn()
		        break;
		    case 'smoker':
		    	$('.li-form form').fadeOut(function () {
					$('.form-field--gender').hide()
					$('.form-field--smoker').show()
					$('.li-form form').fadeIn()
		    	})
		    	break;
	        case 'age':
	        	$('.li-form form').fadeOut(function () {
	    			$('.form-field--smoker').hide()
	    			$('.form-field--age').show()
	    			$('.li-form form').fadeIn(function () {
	    				$('input').focus()
	    			})
	        	})
	        	break;
            case 'cover-amount':
            	$('.li-form form').fadeOut(function () {
        			$('.form-field--age').hide()
        			$('.form-field--cover-amount').show()
        			$('.li-form form').fadeIn()
            	})
            	break;
		}
	}

	function validAge() {
		var age = $('input').val()
		if (age < 20 || age >= 70 ) {
			$('.form-field--age span').css({'opacity': 1})
			return false
		} else {
			return true
		}
	}

	function convertSliderValue() {
		var amounts = ['100,000', '150,000', '200,000', '250,000', '300,000', '350,000', '400,000', '500,000', '750,000', '1,000,000']
		console.log(amounts[$('input[type=range]').val() - 1])
	}

})