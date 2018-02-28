console.log("Receiptify app")

// Dummy data
var orders = [

	{
	 items: ['Vans Old Skool', 'Yeezy Boost 500'],
	 cost: [120, 1000],
	 date: "2018-02-25",
	 type: 'Clothing', 
	 transaction: 'Personal', 
	 quantity: [1, 1]
	},

	{
	 items: 'Fixed Chip Tooth',
	 cost: 80,
	 date: "2017-10-03",
	 type: 'Dentist', 
	 transaction: 'Business', 
	 quantity: 1
	},


	{
	 items: ['500g Rump Steak', 'French Fries', 'Lobster'],
	 cost: [50, 20, 80],
	 date: "2018-01-20",
	 type: 'Food', 
	 transaction: 'Business', 
	 quantity: [3, 2, 2]
	},

	{
	 items: 'Apple Laptop',
	 cost: 1000,
	 date: "2017-08-01",
	 type: 'Electronic', 
	 transaction: 'Business', 
	 quantity: 2
	},

	{
	 items: 'Flight Ticket To Dubai',
	 cost: 800,
	 date: "2018-02-12",
	 type: 'Travel', 
	 transaction: 'Personal', 
	 quantity: 1
	}

]

//append orders data to the page
//Items

	var $firstOrderItems = $('.firstOrderItems')

	var orderOneItemOne = orders[0]["items"][0]
	var orderOneItemTwo = orders[0]["items"][1]

	var newh6ElemOne = $('<h6>')
	newh6ElemOne.text(orderOneItemOne)
	$firstOrderItems.append(newh6ElemOne)

	var newh6ElemTwo = $('<h6>')
	newh6ElemTwo.text(orderOneItemTwo)
	$firstOrderItems.append(newh6ElemTwo)
	
//Cost

	var $firstOrderCost = $('.firstOrderCost')

	var orderOneCostOne = orders[0]["cost"][0]
	var orderOneCostTwo = orders[0]["cost"][1]

var newh6ElemThree = $('<h6>')
	newh6ElemThree.text(orderOneCostOne)
	$firstOrderCost.append(newh6ElemThree)

	var newh6ElemFour = $('<h6>')
	newh6ElemFour.text(orderOneCostTwo)
	$firstOrderCost.append(newh6ElemFour)

//Append total cost of first
	var newh6ElemTotalCostOne = $('<h6>')
	newh6ElemTotalCostOne.text(firstOrder)
	$firstOrderCost.append(newh6ElemTotalCostOne)


//Date

	var $firstOrderDate = $('.firstOrderDate')

	var orderOneDateOne = orders[0]["date"]

	var newh6ElemFive = $('<h6>')
	newh6ElemFive.text(orderOneDateOne)
	$firstOrderDate.append(newh6ElemFive)


// Type

	var $firstOrderType = $('.firstOrderType')

	var orderOneTypeOne = orders[0]["type"]

	var newh6ElemSix = $('<h6>')
	newh6ElemSix.text(orderOneTypeOne)
	$firstOrderType.append(newh6ElemSix)


// Transaction


	var $firstOrderTransaction = $('.firstOrderTransaction')

	var orderOneTransactionOne = orders[0]["transaction"]

	var newh6ElemSeven = $('<h6>')
	newh6ElemSeven.text(orderOneTransactionOne)
	$firstOrderTransaction.append(newh6ElemSeven)

// Quantitiy 

	var $firstOrderQuantity = $('.firstOrderQuantity')

	var orderOneQuantityOne = orders[0]["quantity"][0]
	var orderOneQuantityTwo = orders[0]["quantity"][1]

	var newh6ElemEight = $('<h6>')
	newh6ElemEight.text(orderOneQuantityOne)
	$firstOrderQuantity.append(newh6ElemEight)

	var newh6ElemNine = $('<h6>')
	newh6ElemNine.text(orderOneQuantityTwo)
	$firstOrderQuantity.append(newh6ElemNine)






// Second display data




//Items

	var $secondOrderItems = $('.secondOrderItems')

	var orderTwoItemOne = orders[1]["items"]

	var secondnewh6ElemOne = $('<h6>')
	secondnewh6ElemOne.text(orderTwoItemOne)
	$secondOrderItems.append(secondnewh6ElemOne)

//Cost

	var $secondOrderCost = $('.secondOrderCost')

	var orderTwoCostOne = orders[1]["cost"]
	
	var secondnewh6ElemThree = $('<h6>')
	secondnewh6ElemThree.text(orderTwoCostOne)
	$secondOrderCost.append(secondnewh6ElemThree)

//Date

	var $secondOrderDate = $('.secondOrderDate')
	var orderTwoDateOne = orders[1]["date"]
	var secondnewh6ElemFive = $('<h6>')
	secondnewh6ElemFive.text(orderTwoDateOne)
	$secondOrderDate.append(secondnewh6ElemFive)


// Type

	var $secondOrderType = $('.secondOrderType')

	var orderTwoTypeOne = orders[1]["type"]

	var secondnewh6ElemSix = $('<h6>')
	secondnewh6ElemSix.text(orderTwoTypeOne)
	$secondOrderType.append(secondnewh6ElemSix)


// Transaction


	var $secondOrderTransaction = $('.secondOrderTransaction')

	var orderTwoTransactionOne = orders[1]["transaction"]

	var secondnewh6ElemSeven = $('<h6>')
	secondnewh6ElemSeven.text(orderTwoTransactionOne)
	$secondOrderTransaction.append(secondnewh6ElemSeven)

// Quantitiy 

	var $secondOrderQuantity = $('.secondOrderQuantity')

	var orderTwoQuantityOne = orders[1]["quantity"]
	
	var secondnewh6ElemEight = $('<h6>')
	secondnewh6ElemEight.text(orderTwoQuantityOne)
	$secondOrderQuantity.append(secondnewh6ElemEight)



// Third display data


// //Items

// 	var $thirdOrderItems = $('.thirdOrderItems')

// 	var orderThreeItemOne = orders[2]["items"]

// 	var thirdnewh6ElemOne = $('<h6>')
// 	thirdnewh6ElemOne.text(orderThreeItemOne)
// 	$thirdOrderItems.append(thirdnewh6ElemOne)

// //Cost

// 	var $thirdOrderCost = $('.thirdOrderCost')

// 	var orderThirdCostOne = orders[2]["cost"]
	
// 	var thirdnewh6ElemThree = $('<h6>')
// 	thirdnewh6ElemThree.text(orderThirdCostOne)
// 	$thirdOrderCost.append(thirdnewh6ElemThree)

// //Date

// 	var $thirdOrderDate = $('.thirdOrderDate')
// 	var orderThirdDateOne = orders[2]["date"]
// 	var thirdnewh6ElemFive = $('<h6>')
// 	thirdnewh6ElemFive.text(orderThirdDateOne)
// 	$thirdOrderDate.append(thirdnewh6ElemFive)


// // Type

// 	var $thirdOrderType = $('.thirdOrderType')

// 	var orderThirdTypeOne = orders[2]["type"]

// 	var thirdnewh6ElemSix = $('<h6>')
// 	thirdnewh6ElemSix.text(orderThirdTypeOne)
// 	$thirdOrderType.append(thirdnewh6ElemSix)


// // Transaction


// 	var $thirdOrderTransaction = $('.thirdOrderTransaction')

// 	var orderThirdTransactionOne = orders[2]["transaction"]

// 	var thirdnewh6ElemSeven = $('<h6>')
// 	thirdnewh6ElemSeven.text(orderThirdTransactionOne)
// 	$thirdOrderTransaction.append(thirdnewh6ElemSeven)

// // Quantitiy 

// 	var $thirdOrderQuantity = $('.thirdOrderQuantity')

// 	var orderThirdQuantityOne = orders[2]["quantity"]
	
// 	var thirdnewh6ElemEight = $('<h6>')
// 	thirdnewh6ElemEight.text(orderThirdQuantityOne)
// 	$secondOrderQuantity.append(secondnewh6ElemEight)







	
// First one
totalOrdersOne = orders[0]["cost"]
// console.log(totalOrdersOne) 

var total = 0

for (i=0; i<totalOrdersOne.length; i++) {
	var firstOrder = total += totalOrdersOne[i]

}

console.log("First Order = $" + firstOrder)

var newh6ElemTotalCostOne = $('<h6>')
	newh6ElemTotalCostOne.text("$" + firstOrder)
	$firstOrderCost.append(newh6ElemTotalCostOne)

//Second

var secondOrder = orders[1]["cost"]
console.log("Second Order = $" + secondOrder)

var secondnewh6ElemTotalCostOne = $('<h6>')
	secondnewh6ElemTotalCostOne.text("$" + secondOrder)
	$secondOrderCost.append(secondnewh6ElemTotalCostOne)


//Third 

var totalOrdersTwo = orders[2]["cost"]
// console.log(totalOrdersTwo) 

var totalQuanitiyOne = orders[2]["cost"][0] * orders[2]["quantity"][0]
var totalQuanitiyTwo = orders[2]["cost"][1] * orders[2]["quantity"][1]
var totalQuanitiyThree = orders[2]["cost"][2] * orders[2]["quantity"][2]

var thirdOrder = (totalQuanitiyOne + totalQuanitiyTwo + totalQuanitiyThree)
// TOTAL of third order
console.log("Third Order = $" + thirdOrder)


//Forth 

var forthOrder = orders[3]["cost"] 

var forthOrder = (forthOrder * orders[3]["quantity"])

console.log("Forth Order = $" + forthOrder)


//Fifth 

var fifthOrder = orders[4]["cost"]

console.log("Fifth Order = $" + fifthOrder)



// on click function for drop down menu option
// on click loop through all data and only show dentist name, or 
// leave dentist and set display none for the rest. 

// youtube video about filtering javascript. data. 

// get first which is everything in first order and on click set display: none

// on dentist click, set all other orders to display: none;
// solution: loop through data if not =! item = dentist then set display: none;











