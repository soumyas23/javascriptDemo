function  reduce(arr,fun,prev)
{
	for(var i=0;i<arr.length;i++)
	{
		prev=fun(prev,arr[i]);
	}
	return(prev);
}

sum=reduce([1,2,3],function(prev,current)
{
	return(prev+current);
},0)
console.log(sum);