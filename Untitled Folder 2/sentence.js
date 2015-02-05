function  largestString(sentence){
var word=sentence.split(" ");
var length=0,largest_word="";
for(var i=0;i<word.length;i++){

if(length<word[i].length)
{
length=word[i].length;
largest_word=word[i];
}

}
console.log("The  largest  word is :: "+largest_word);

}
var  sentence="good afternoon world ";
console.log("The   sentence is :: "+sentence);
largestString(sentence);