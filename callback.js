function foreEach(arr,fn)
{
	for(i=0; i<arr.length; i++)
	{
		fn(arr[i]);
	}

}
var arr=[1,2,3];
foreEach(arr,function(elemnt){
	console.log(elemnt);

});