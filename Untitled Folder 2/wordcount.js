var sentence=["India is my country ","Seventh largest coumtry" ];
var prev=sentence.join(" ").split(" ").reduce(function(prev,curr){
	prev[curr]=(prev[curr]||0)+1;
	return(prev);
},{});
console.log(prev);
