function map(arr,fun)
{

	var number=[];
	for(var i=0; i<arr.length; i++)
	{
			number[i]=fun(arr[i]);

	}
	return number;
}
var square=map([1,2,3],function(element)
{
	return element*element;
});
console.log(square);