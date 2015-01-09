
function  make()

{
	return{
		sum: function(ar)
		{
			var  sum=0;		

				for(var i= 0;i<ar.length;i++)				{

					sum+=ar[i];

				}
				return(sum);

		},
		insert:function(arr,value)
		{

			arr.push(value);

		},
        remove:function(arr)
        {
            arr.pop();

        },
        prepend(ar,item)
        {
                var array[0]=item;
                array=item+ar;
                console.log(array);
        }


	}
}
var  arr=[10,12,13];
var result=make().sum(arr);
console.log(result);
make().insert(arr,7);
for(var i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}
    make().remove(arr);
    console.log("after pop");
for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}

