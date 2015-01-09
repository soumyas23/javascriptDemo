function filter(arr,fun)
{
	var a=[],k=0;
	for(i=0;i<arr.length;i++)
	{
			if(fun(arr[i]))
			{
					a[k]=arr[i];
						k++;
			}
	}
	return(a);
}


var leap=filter([2000,1997,2004,1900,2016],function(element)
{
	if(element%400==0)
	{
	return(true)
	}
	else if(element%4==0&&element%100!=0)
	{
		return(true)
	}




});
console.log("Leap years are::"+leap);