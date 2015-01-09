function order(word)
{
	//var len=word.length;
	//console.log(len);
	var dummy=[];
	
	for(var i=0; i<word.length; i++){
		var character_index=word.charAt(i);
		dummy[i]=character_index;
		

	}
	for(var i=0; i<dummy.length;i++){
		for(j=0;j<dummy.length;j++){
			if(dummy[j]>dummy[j+1]){
				temp=dummy[j];
				dummy[j]=dummy[j+1];
				dummy[j+1]=temp;
			}
		}
	}

	
	var result=dummy.join("");
	console.log(result);
}

var word="soumya";
console.log("Before   ordering:::"+word);
console.log("After ordering");
order(word);
