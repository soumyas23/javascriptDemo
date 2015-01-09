var sentence="good morning";

var word=[],i=0,word_count=0,name="";wrd="";
word[i]=sentence.split(" ");
console.log(word);
for(var i=0;i<word.length;i++)
{
	wrd=word[i];
	if(word_count<wrd.length)
	{
		word_count=wrd.length
		name=word[i];
	}
}

console.log(name);