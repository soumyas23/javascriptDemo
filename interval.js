
setInterval(function(){ 
	var currentTime = new Date()
	var hours =  currentTime.getHours()
	var minutes = currentTime.getMinutes()	
	var second  = currentTime.getSeconds();
	if(hours>12)
	{
	hours=hours-12;
}
	if (minutes < 10)
	minutes = "0" + minutes

	console.log(hours+":"+minutes+":"+second);
}, 1000);