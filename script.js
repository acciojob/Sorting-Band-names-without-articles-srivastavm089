//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let updatedList = arr.map((element)=>{
	let words = element.split(' ');
	let updateString = words.reduce((prev,current,index)=>{
		if(current !="The" && current !='an' && current !='a'){
			return prev + ' '+current
		}
		return prev;
	},'')
	return updateString
});
let mp ={};
updatedList.forEach((element,index)=>{
	mp[element] = arr[i];
})
updatedList.sort();
let finalAns = updatedList.map((element)=>{
	return mp[element]
})
console.log(finalAns)

