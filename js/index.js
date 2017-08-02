$(document).ready(function () {

	// $('.start__button').click(function () {
	// 	$('.start').fadeOut(function () {
	// 		setCurrentFieldData('gender')
	// 		showCurrentFormField()
	// 		setProgress('25%')
	// 	})
	// })

	setCurrentFieldData('start')
	showCurrentFormField()

	$('.next').click(function () {
		if ($('.li-form form').data('current') == 'start') {
			setCurrentFieldData('gender')
			showCurrentFormField()
			setProgress('25%')
		} else if ($('.li-form form').data('current') == 'gender') {
			setCurrentFieldData('smoker')
			showCurrentFormField()
			setProgress('50%')
		} else if ($('.li-form form').data('current') == 'smoker') {
			setCurrentFieldData('age')
			showCurrentFormField()
			setProgress('75%')
		} else if ($('.li-form form').data('current') == 'age') {
			if (validAge()) {
				setCurrentFieldData('cover-amount')
				showCurrentFormField()
				setProgress('100%')
			}
			
		}
	})

	$('.back').click(function () {
		if ($('.li-form form').data('current') == 'gender') {
			setCurrentFieldData('start')
			showCurrentFormField()
			setProgress('0%')
		} else if ($('.li-form form').data('current') == 'smoker') {
			setCurrentFieldData('gender')
			showCurrentFormField()
			setProgress('25%')
		} else if ($('.li-form form').data('current') == 'age') {
			setCurrentFieldData('smoker')
			showCurrentFormField()
			setProgress('50%')			
		} else if ($('.li-form form').data('current') == 'cover-amount') {
			setCurrentFieldData('age')
			showCurrentFormField()
			setProgress('75%')			
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
		$('.form-field--cover-amount span').text('$' + convertSliderValue())
	})

	function setCurrentFieldData(fieldName) {
		$('.li-form form').data('current', fieldName)
	}

	function showCurrentFormField() {
		switch($('.li-form form').data('current')) {
		    case 'start':
		    	$('.next span').text('Get Started')
		    	$('.next').css({'width': '150px'})
		    	$('.form-field').hide()
		    	$('.form-field--start').show()
		    	$('.back').hide()
				$('.li-form form').show()
		        break;
		    case 'gender':
		    	$('.next span').text('Next')
		    	$('.next').removeAttr('style')
		    	$('.back').show()
		    	$('.li-form form').fadeOut(function () {
			    	$('.form-field').hide()
			        $('.form-field--gender').show()
					$('.li-form form').fadeIn()
				})
		        break;
		    case 'smoker':
		    	$('.li-form form').fadeOut(function () {
					$('.form-field').hide()
					$('.form-field--smoker').show()
					$('.li-form form').fadeIn()
		    	})
		    	break;
	        case 'age':
	        	$('.li-form form').fadeOut(function () {
	    			$('.form-field').hide()
	    			$('.form-field--age').show()
	    			$('.li-form form').fadeIn(function () {
	    				$('input').focus()
	    			})
	        	})
	        	break;
            case 'cover-amount':
            	$('.li-form form').fadeOut(function () {
        			$('.form-field').hide()
        			$('.form-field--cover-amount').show()
        			$('.next span').text('Submit')
        			$('.li-form form').fadeIn()
            	})
            	break;
		}
	}

	function setProgress(fillPercent) {
		$('.progress__fill').css({'width': fillPercent})
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
		return(amounts[$('input[type=range]').val() - 1])
	}

})