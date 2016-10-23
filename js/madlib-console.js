var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
var arr = [];

var random1 = Math.floor((Math.random() * startupX.length));
var random2 = Math.floor((Math.random() * startupY.length));

$("#create").click(function() {
	$("#xForY").html('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
});

$("#save").click(function() {
	if (startupX != "" && startupY != "") {
		arr.push('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
		console.log(arr);
	}
});

$("#print").click(function() {
	$("#favorites").append("Favourite start up names <br>" + arr);
})