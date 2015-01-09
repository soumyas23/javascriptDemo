function second_Largest_Lowest(numbers)
{
	var  secondLowest=0,secondLargest=0,length=0;
	numbers.sort();
	console.log("The numbers  after  sorting  ");
	console.log(numbers);
	secondLowest=numbers[1];
	console.log("The second lowest number  is :: "+secondLowest);
	//console.log(secondLowest);
	length=numbers.length;
	length-=2;
	console.log(length);
	secondLargest=numbers[length];
	console.log("The second largest number  is :: "+secondLargest);
	//console.log(secondLargest);
}
numbers=[12,13,45,10,98];
console.log("The numbers  are  ");
console.log(numbers);
second_Largest_Lowest(numbers);