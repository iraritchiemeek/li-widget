$(document).ready(function () {

	var userInfo = {
	    'gender': '',
	    'smoker': false,
	    'age': 20,
	    'cover-amount': 350000
	};

	setCurrentFieldData('start')
	showCurrentFormField()

	$('.next').click(function () {
		if ($('.li-form form').data('current') == 'start') {
			setCurrentFieldData('gender')
			showCurrentFormField()
			setProgress('25%')
		} else if ($('.li-form form').data('current') == 'gender') {
			setUseToggleData('gender', 'm', 'f')
			setCurrentFieldData('smoker')
			showCurrentFormField()
			setProgress('50%')
		} else if ($('.li-form form').data('current') == 'smoker') {
			setUseToggleData('smoker', true, false)
			setCurrentFieldData('age')
			showCurrentFormField()
			setProgress('75%')
		} else if ($('.li-form form').data('current') == 'age') {
			if (validAge()) {
				userInfo['age'] = $('.form-field--age input').val()
				setCurrentFieldData('cover-amount')
				showCurrentFormField()
				setProgress('100%')
			}
		} else if ($('.li-form form').data('current') == 'cover-amount') {
			// userInfo['cover-amount'] = parseInt($('.form-field--cover-amount span').text())
			userInfo['cover-amount'] = parseFloat(convertSliderValue().replace(/,/g, ''));
			console.log(userInfo)
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
			$('.form-field__selected').data('pos', 'right')
			$('.form-field__selected').animate({'right': '20px'})
			$('.form-field__selected').css({'left': 'initial'})
		} else {
			$('.form-field__selected').data('pos', 'left')
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
	    			$('.next span').text('Next')
	    			$('.li-form form').fadeIn(function () {
	    				$('input').focus()
	    			})
	        	})
	        	break;
            case 'cover-amount':
            	$('.li-form form').fadeOut(function () {
	    			$('.form-field--age span').css({'opacity': 0})
        			$('.form-field').hide()
        			$('.form-field--cover-amount').show()
        			$('.next span').text('Submit')
        			$('.li-form form').fadeIn()
            	})
            	break;
		}
	}

	function setUseToggleData(userProperty, option1, option2) {
		if ($('.form-field__selected').data('pos') == 'left') {
			userInfo[userProperty] = option1
		} else {
			userInfo[userProperty] = option2
		}
	}

	function setProgress(fillPercent) {
		$('.progress__fill').css({'width': fillPercent})
	}

	function validAge() {
		var age = $('.form-field--age input').val()
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