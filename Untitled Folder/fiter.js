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


var even=filter([1,2,3,4],function(element)
{
	return(element%2==0)


});
console.log(even);