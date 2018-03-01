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
	 items: ['Rump Steak', 'French Fries', 'Lobster'],
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

	var $thirdOrderItems = $('.thirdOrderItems')

	var orderThreeItemOne = orders[2]["items"][0]
	var orderThreeItemTwo = orders[2]["items"][1]
	var orderThreeItemThree = orders[2]["items"][2]

	var thirdnewh6ElemOne = $('<h6>')
	thirdnewh6ElemOne.text(orderThreeItemOne)
	$thirdOrderItems.append(thirdnewh6ElemOne)

	var thirdnewh6ElemTwo = $('<h6>')
	thirdnewh6ElemTwo.text(orderThreeItemTwo)
	$thirdOrderItems.append(thirdnewh6ElemTwo)

	var thirdnewh6ElemThree = $('<h6>')
	thirdnewh6ElemThree.text(orderThreeItemThree)
	$thirdOrderItems.append(thirdnewh6ElemThree)

// //Cost

	var $thirdOrderCost = $('.thirdOrderCost')

	var orderThirdCostOne = orders[2]["cost"][0]
	var orderThirdCostTwo = orders[2]["cost"][1]
	var orderThirdCostThree = orders[2]["cost"][2]
	
	var thirdnewh6ElemFour = $('<h6>')
	thirdnewh6ElemFour.text(orderThirdCostOne)
	$thirdOrderCost.append(thirdnewh6ElemFour)

	var thirdnewh6ElemFive = $('<h6>')
	thirdnewh6ElemFive.text(orderThirdCostTwo)
	$thirdOrderCost.append(thirdnewh6ElemFive)

	var thirdnewh6ElemSix = $('<h6>')
	thirdnewh6ElemSix.text(orderThirdCostThree)
	$thirdOrderCost.append(thirdnewh6ElemSix)

// //Date

	var $thirdOrderDate = $('.thirdOrderDate')

	var orderThirdDateOne = orders[2]["date"]

	var thirdnewh6ElemFive = $('<h6>')
	thirdnewh6ElemFive.text(orderThirdDateOne)
	$thirdOrderDate.append(thirdnewh6ElemFive)


// // Type

	var $thirdOrderType = $('.thirdOrderType')

	var orderThirdTypeOne = orders[2]["type"]

	var thirdnewh6ElemSix = $('<h6>')
	thirdnewh6ElemSix.text(orderThirdTypeOne)
	$thirdOrderType.append(thirdnewh6ElemSix)


// // Transaction


	var $thirdOrderTransaction = $('.thirdOrderTransaction')

	var orderThirdTransactionOne = orders[2]["transaction"]

	var thirdnewh6ElemSeven = $('<h6>')
	thirdnewh6ElemSeven.text(orderThirdTransactionOne)
	$thirdOrderTransaction.append(thirdnewh6ElemSeven)

// // Quantitiy 

	var $thirdOrderQuantity = $('.thirdOrderQuantity')

	var orderThirdQuantityOne = orders[2]["quantity"][0]
	var orderThirdQuantityTwo = orders[2]["quantity"][1]
	var orderThirdQuantityThree = orders[2]["quantity"][2]
	
	var thirdnewh6ElemEight = $('<h6>')
	thirdnewh6ElemEight.text(orderThirdQuantityOne)
	$thirdOrderQuantity.append(thirdnewh6ElemEight)

	var thirdnewh6ElemNine = $('<h6>')
	thirdnewh6ElemNine.text(orderThirdQuantityTwo)
	$thirdOrderQuantity.append(thirdnewh6ElemNine)

	var thirdnewh6ElemTen = $('<h6>')
	thirdnewh6ElemTen.text(orderThirdQuantityThree)
	$thirdOrderQuantity.append(thirdnewh6ElemTen)


// Forth 

//Items

	var $forthOrderItems = $('.forthOrderItems')

	var orderForthItemOne = orders[3]["items"]

	var forthnewh6ElemOne = $('<h6>')
	forthnewh6ElemOne.text(orderForthItemOne)
	$forthOrderItems.append(forthnewh6ElemOne)

// //Cost

	var $forthOrderCost = $('.forthOrderCost')

	var orderForthCostOne = orders[3]["cost"]
	
	var forthnewh6ElemThree = $('<h6>')
	forthnewh6ElemThree.text(orderForthCostOne)
	$forthOrderCost.append(forthnewh6ElemThree)

// //Date

	var $forthOrderDate = $('.forthOrderDate')

	var orderForthDateOne = orders[3]["date"]

	var forthnewh6ElemFive = $('<h6>')
	forthnewh6ElemFive.text(orderForthDateOne)
	$forthOrderDate.append(forthnewh6ElemFive)


// // Type

	var $forthOrderType = $('.forthOrderType')

	var orderForthTypeOne = orders[3]["type"]

	var forthnewh6ElemSix = $('<h6>')
	forthnewh6ElemSix.text(orderForthTypeOne)
	$forthOrderType.append(forthnewh6ElemSix)


// // Transaction


	var $forthOrderTransaction = $('.forthOrderTransaction')

	var orderForthTransactionOne = orders[3]["transaction"]

	var forthnewh6ElemSeven = $('<h6>')
	forthnewh6ElemSeven.text(orderForthTransactionOne)
	$forthOrderTransaction.append(forthnewh6ElemSeven)

// // Quantitiy 

	var $forthOrderQuantity = $('.forthOrderQuantity')

	var orderForthQuantityOne = orders[3]["quantity"]
	
	var forthnewh6ElemEight = $('<h6>')
	forthnewh6ElemEight.text(orderForthQuantityOne)
	$forthOrderQuantity.append(forthnewh6ElemEight)




// Fifth

//Items

	var $fifthOrderItems = $('.fifthOrderItems')

	var orderfifthItemOne = orders[4]["items"]

	var fifthnewh6ElemOne = $('<h6>')
	fifthnewh6ElemOne.text(orderfifthItemOne)
	$fifthOrderItems.append(fifthnewh6ElemOne)

// //Cost

	var $fifthOrderCost = $('.fifthOrderCost')

	var orderfifthCostOne = orders[4]["cost"]
	
	var fifthnewh6ElemThree = $('<h6>')
	fifthnewh6ElemThree.text(orderfifthCostOne)
	$fifthOrderCost.append(fifthnewh6ElemThree)

// //Date

	var $fifthOrderDate = $('.fifthOrderDate')

	var orderfifthDateOne = orders[4]["date"]

	var fifthnewh6ElemFive = $('<h6>')
	fifthnewh6ElemFive.text(orderfifthDateOne)
	$fifthOrderDate.append(fifthnewh6ElemFive)


// // Type

	var $fifthOrderType = $('.fifthOrderType')

	var orderfifthTypeOne = orders[4]["type"]

	var fifthnewh6ElemSix = $('<h6>')
	fifthnewh6ElemSix.text(orderfifthTypeOne)
	$fifthOrderType.append(fifthnewh6ElemSix)


// // Transaction


	var $fifthOrderTransaction = $('.fifthOrderTransaction')

	var orderfifthTransactionOne = orders[4]["transaction"]

	var fifthnewh6ElemSeven = $('<h6>')
	fifthnewh6ElemSeven.text(orderfifthTransactionOne)
	$fifthOrderTransaction.append(fifthnewh6ElemSeven)

// // Quantitiy 

	var $fifthOrderQuantity = $('.fifthOrderQuantity')

	var orderfifthQuantityOne = orders[4]["quantity"]
	
	var fifthnewh6ElemEight = $('<h6>')
	fifthnewh6ElemEight.text(orderfifthQuantityOne)
	$fifthOrderQuantity.append(fifthnewh6ElemEight)






	
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
var thirdnewh6ElemTotalCostOne = $('<h6>')
	thirdnewh6ElemTotalCostOne.text("$" + thirdOrder)
	$thirdOrderCost.append(thirdnewh6ElemTotalCostOne)


//Forth 

var forthOrder = orders[3]["cost"] 

var forthOrder = (forthOrder * orders[3]["quantity"])

console.log("Forth Order = $" + forthOrder)
var forthnewh6ElemTotalCostOne = $('<h6>')
	forthnewh6ElemTotalCostOne.text("$" + forthOrder)
	$forthOrderCost.append(forthnewh6ElemTotalCostOne)


//Fifth 

var fifthOrder = orders[4]["cost"]

console.log("Fifth Order = $" + fifthOrder)
var fifthnewh6ElemTotalCostOne = $('<h6>')
	fifthnewh6ElemTotalCostOne.text("$" + fifthOrder)
	$fifthOrderCost.append(fifthnewh6ElemTotalCostOne)



// on click function for drop down menu option
// on click loop through all data and only show dentist name, or 
// leave dentist and set display none for the rest. 

// youtube video about filtering javascript. data. 

// get first which is everything in first order and on click set display: none

// on dentist click, set all other orders to display: none;
// solution: loop through data if not =! item = dentist then set display: none;




// for (i=0; i<orders.length; i++) {

// 	var allItems = orders[i]["type"]

// console.log(allItems)

// if (allItems != "Dentist") {

// 	document.getElementById('clothingFirst').style.display = "none";
// 	console.log("not dentist")
// } 

// 





//Event listeners. 

//SHOW ALL
var showAllClick = document.getElementById("showAllClick")

showAllClick.addEventListener("click", function(){ 
	reset()

});




function reset() {
	// document.getElementById('clothingFirst').style.display = "";
 //    document.getElementById('dentistSecond').style.display = "";
 //    document.getElementById('foodThird').style.display = "";
 //    document.getElementById('electronicForth').style.display = "";
 //    document.getElementById('travelFifth').style.display = "";
    $('tbody tr').show()
}

function setBothNone() {
	document.getElementById('clothingFirst').style.display = "none";
    document.getElementById('dentistSecond').style.display = "none";
    document.getElementById('foodThird').style.display = "none";
    document.getElementById('electronicForth').style.display = "none";
    document.getElementById('travelFifth').style.display = "none";
}



//Items

//Dentist
var dentistClick = document.getElementById("dentistClick")
dentistClick.addEventListener("click", function(){ 
	reset()
	// $('tbody tr').hide()
	// $('tbody tr(fire)').hide()
    document.getElementById('clothingFirst').style.display = "none" ;
    document.getElementById('foodThird').style.display = "none";
    document.getElementById('electronicForth').style.display = "none";
    document.getElementById('travelFifth').style.display = "none";
});


//Clothing
var clothingClick = document.getElementById("clothingClick")

clothingClick.addEventListener("click", function(){ 
	reset()
    document.getElementById('dentistSecond').style.display = "none";
    document.getElementById('foodThird').style.display = "none";
    document.getElementById('electronicForth').style.display = "none";
    document.getElementById('travelFifth').style.display = "none";
});

//diningClick
var diningClick = document.getElementById("diningClick")
diningClick.addEventListener("click", function(){ 
	reset()
    document.getElementById('dentistSecond').style.display = "none";
    document.getElementById('clothingFirst').style.display = "none";
    document.getElementById('electronicForth').style.display = "none";
    document.getElementById('travelFifth').style.display = "none";

});

//travelClick
var travelClick = document.getElementById("travelClick")

travelClick.addEventListener("click", function(){ 
	reset()
	document.getElementById('clothingFirst').style.display = "none";
    document.getElementById('dentistSecond').style.display = "none";
  document.getElementById('foodThird').style.display = "none";
    document.getElementById('electronicForth').style.display = "none";
});

//electronicsClick
var electronicsClick = document.getElementById("electronicsClick")

electronicsClick.addEventListener("click", function(){ 
	reset()
	document.getElementById('clothingFirst').style.display = "none";
    document.getElementById('dentistSecond').style.display = "none";
    document.getElementById('foodThird').style.display = "none";
    document.getElementById('travelFifth').style.display = "none";
});

//Other items with nothing



var equipmentClick = document.getElementById("equipmentClick")

equipmentClick.addEventListener("click", function(){ 
	reset()
	setBothNone()
});


var eventsClick = document.getElementById("eventsClick")

eventsClick.addEventListener("click", function(){ 
	reset()
	setBothNone()
});


var transportClick = document.getElementById("transportClick")

transportClick.addEventListener("click", function(){ 
	reset()
	setBothNone()
});


var homeClick = document.getElementById("homeClick")

homeClick.addEventListener("click", function(){ 
	reset()
	setBothNone()
});


var fitnessClick = document.getElementById("fitnessClick")

fitnessClick.addEventListener("click", function(){ 
	reset()
	setBothNone()
});

//Transaction

// var form = document.getElementById("myForm")

//Business
var businessClick = document.getElementById("businessClick")

businessClick.addEventListener("click", function(){ 
// window.location.reload()
reset()
    document.getElementById('clothingFirst').style.display = "none";
    document.getElementById('travelFifth').style.display = "none";
});


//Personal

var personalClick = document.getElementById("personalClick")

personalClick.addEventListener("click", function(){
reset() 
// window.location.reload()
 
    document.getElementById('dentistSecond').style.display = "none";
    document.getElementById('foodThird').style.display = "none";
    document.getElementById('electronicForth').style.display = "none";
});





//COST

//hundred

var hundredClick = document.getElementById("hundredClick")

hundredClick.addEventListener("click", function(){ 
	reset()
    document.getElementById('clothingFirst').style.display = "none";
    document.getElementById('foodThird').style.display = "none";
    document.getElementById('electronicForth').style.display = "none";
    document.getElementById('travelFifth').style.display = "none";
});


//thousand
var thousandClick = document.getElementById("thousandClick")

thousandClick.addEventListener("click", function(){ 
	reset()
    document.getElementById('dentistSecond').style.display = "none";
     document.getElementById('clothingFirst').style.display = "none";
    document.getElementById('electronicForth').style.display = "none";
});


//thousand - 10,000
var tenthousandClick = document.getElementById("tenthousandClick")

tenthousandClick.addEventListener("click", function(){ 
	reset()
    document.getElementById('dentistSecond').style.display = "none";
    document.getElementById('foodThird').style.display = "none";
    document.getElementById('travelFifth').style.display = "none";

});

//10,000+
var plustenthousandClick = document.getElementById("plustenthousandClick")

plustenthousandClick.addEventListener("click", function(){ 
	reset()
	setBothNone()
});


//Date
//today

var todayClick = document.getElementById("todayClick")

todayClick.addEventListener("click", function(){ 
	reset()
	setBothNone()

});

//weekly
var weeklyClick = document.getElementById("weeklyClick")

weeklyClick.addEventListener("click", function(){ 
	reset()
	document.getElementById('dentistSecond').style.display = "none";
    document.getElementById('foodThird').style.display = "none";
    document.getElementById('electronicForth').style.display = "none";
    document.getElementById('travelFifth').style.display = "none";
});

//monthly
var monthlyClick = document.getElementById("monthlyClick")

monthlyClick.addEventListener("click", function(){ 
	reset()
	document.getElementById('dentistSecond').style.display = "none";
    document.getElementById('foodThird').style.display = "none";
    document.getElementById('electronicForth').style.display = "none";
});

var sixmonthlyClick = document.getElementById("sixmonthlyClick")

sixmonthlyClick.addEventListener("click", function(){ 
	reset()
	document.getElementById('dentistSecond').style.display = "none";
    document.getElementById('electronicForth').style.display = "none";
});




//Yearly
var yearlyClick = document.getElementById("yearlyClick")

yearlyClick.addEventListener("click", function(){ 
	reset()
});




// EXTRA



