function mail(mailid)
{
	var mailwords=[],word=[];
	mailwords=mailid.split("@");
	word = mailwords[0];
	word = word.substring(0,3);
	word = word+"..";
	mailid = word+mailwords[1];
	console.log("mailid after changing.."+mailid);


	
}
var mailid = "hr@experionglobal.com";
console.log("mailid before changing.."+mailid);
mail(mailid);