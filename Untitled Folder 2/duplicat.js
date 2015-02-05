// to  find the duplicate values in  a array
function duplicate(number){
	for(var i=0;i<number.length;i++)
	{
		for(var j=i+1;j<number.length;j++)
		{
			
			if(number[i]==number[j])
			{
				console.log(number[i]);
			}

		}
	}

}

var  number=[1,2,3,1,4,9,3,9];
duplicate(number);