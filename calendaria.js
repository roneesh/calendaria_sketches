
$(document).ready(function() {
	"use strict";

	// 5 july days, 31 August days, 6 September days
	var August = [[5,31], 31, 6];

	for(var i = (August[0][0]-1); i >= 0; i--) {
		// console.log(i);
		var date = August[0][1] - (i);
		var dateToString = date.toString();
		var numericalDate = "<div class='numericalDate'>" + dateToString  + "</div>";
		var day = "<div class='day prior-month-day'>" + numericalDate + "</div>";
		$('.calendar-area').append(day);

	}
	for (var i = 0; i < August[1]; i++) {
		var dateToString = (i+1).toString();
		var numericalDate = "<div class='numericalDate'>" + dateToString  + "</div>";
		var day = "<div class='day current-month-day'>" + numericalDate + "</div>";
		$('.calendar-area').append(day);
	}
	for (var i = 0; i < August[2]; i++) {
		var dateToString = (i+1).toString();
		var numericalDate = "<div class='numericalDate'>" + dateToString  + "</div>";
		var day = "<div class='day post-month-day'>" + numericalDate + "</div>";
		$('.calendar-area').append(day);
	}

	var count = 0;
	$.each($('.day'), function() {
		var btn = "<button class='addEventBtn btn btn-primary' data-toggle='modal' data-target='.addEventModal'> Add Event </button>";
		$(this).append(btn);
	});


 

});