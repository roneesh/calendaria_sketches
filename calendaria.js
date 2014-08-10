
$(document).ready(function() {
	"use strict";

	// 5 july days, 31 August days, 6 September days
	var August = [5, 31, 6];

	for(var i = 0; i < August[0]; i++) {
		$('.calendar-area').append("<div class='day prior-month-day'></div>");

	}
	for (var i = 0; i < August[1]; i++) {
		var dateToString = (i+1).toString();
		var numericalDate = "<div class='numericalDate'>" + dateToString  + "</div>";
		var day = "<div class='day current-month-day'>" + numericalDate + "</div>";
		$('.calendar-area').append(day);
	}
	for (var i = 0; i < August[2]; i++) {
		$('.calendar-area').append('<div class="day post-month-day"></div>');
	}

	$.each($('.day'), function() {
		var numericalDate = $(this).data();
		// console.log(this);
		// console.log($(this));
	})
 

});