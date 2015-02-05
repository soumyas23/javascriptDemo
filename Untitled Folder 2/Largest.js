

var  sentence="hello goodmorning";
var word=sentence.split(" ").reduce(function(prev,curr)
{

	if(prev.length>curr.length){
		return prev;
	}
	else
	{
		return curr;
	}
},"");
console.log("Largest  word is :: "+word);