function swapLowerUpper(word)
{
var  character=word.split("");
for(var i=0;i<character.length;i++)
{
	if(character[i]===character[i].toLowerCase())
	{
		character[i]=character[i].toUpperCase();
	}
	else
	{
		character[i]=character[i].toLowerCase();
	}		

}
console.log("After changing the  case :: "+character);
}

var word="iAm";
console.log("  The word is  :: "+word)
swapLowerUpper(word);