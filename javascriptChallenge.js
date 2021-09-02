var arr1 = [
	["id","name","sex"],
	["1","John","M"],
	["2","Boby","M"],
	["3","Doe","M"]
]

var arr2 = [
	["id","age"],
	["3","15"],
	["2","22"],
	["1","33"]
]

//storing columns of arrays
var arr1Column = arr1[0] 
var arr2Column = arr2[0] 



//processing arr1
var outputArr1 = []
arr1.forEach((ele, index) => {
	if (index != 0){
		const obj1 = {}
		ele.forEach((item, count) => {
			obj1[arr1Column[count]] = item			
		})
		outputArr1.push(obj1)	
	}	
})

//processing arr2
var outputArr2 = []
arr2.forEach((ele, index) => {
	if (index != 0){
		const obj2 = {}
		ele.forEach((item, count) => {
			obj2[arr2Column[count]] = item	
		})
		outputArr2.push(obj2)	
	}
})

console.log(outputArr1)
console.log('*********************************************')
console.log(outputArr2)

//merging both arrays
const finalOutput = []
var data;
outputArr1.forEach((ele, index) => {
	outputArr2.forEach((item) => {
		if(item['id'] == ele['id']){
			data = item['age']
		}
	})
	ele['age'] = data
	finalOutput.push(ele)
})

//output
console.log(finalOutput)