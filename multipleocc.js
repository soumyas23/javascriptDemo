var numbers=[1,2,3,1,2];
var prev=numbers.join(" ").split(" ").reduce(function(prev,curr){
	prev[curr]=(prev[curr]||0)+1;

	return(prev);
},{});
var repeated=[],i=0;
console.log(prev);
for (var key in prev) {
 	if( prev[key]!=1){
	repeated[i]=key;
	i++;
	}
}
console.log(repeated);

