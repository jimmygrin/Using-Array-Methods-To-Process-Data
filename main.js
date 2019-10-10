/* <h4>1. What is the average price of all items?</h4>
      <pre id="answer1">Answer 1 Goes Here</pre> */

var sum = items.reduce((a, b) => a + b.price, 0)
var avg = sum / items.length

document.querySelector("#answer1").innerHTML = `The avg of all prices is ${avg.toFixed(2)}`


/* <h4>2. Show me an array of items that cost between $14.00 and $18.00 USD?</h4>
<pre id="answer2">Answer 2 Goes Here</pre> */ 




var newfiltered = items.filter(function(a) {

    return a.price > 14 && a.price < 18
       
})

var newarr = newfiltered.map(function(a) {
    return a.listing_id
})


document.querySelector("#answer2").innerHTML = `The items between $14 and $18 have the list id numbers ${newarr}`
   


    //   <h4>3. Which item has a "GBP" currency code? Display it's name and price.</h4>
    //   <pre id="answer3">Answer 3 Goes Here</pre>
 

var hasgbp = items.filter(function(a){
    return a.currency_code == "GBP"
})[0]




// var newarr = hasgbp.map(function(a){
//     return a.title
// })

// var price = hasgbp.map(function(a){
//     return a.price
// })


document.querySelector("#answer3").innerHTML = `The item ${hasgbp.title} has a GBP price of $${hasgbp.price}`


/* <h4>4. Display a list of all items who are made of wood.</h4>
<pre id="answer4">Answer 4 Goes Here</pre> */

var wood = items.filter(function(a){

    return a.materials.includes('wood') 

})

var newwood = wood.map(function(a){
    return a.listing_id
})

document.querySelector("#answer4").innerHTML = `The items made of wood have the following listing id numbers ${newwood}`


/* <h4>5. Which items are made of eight or more materials? Display the name, number of items and the items it is made of.</h4>
      <pre id="answer5">Answer 5 Goes Here</pre> */

var materialcount = items.filter(function(a){

    return a.materials.length >= 8

})

var newmaterial = materialcount.map(function(a){

    return a.listing_id

})

document.querySelector("#answer5").innerHTML = `The items with 8 or more materials are ${newmaterial}`

/* <h4>6. How many items were made by their sellers?</h4>
      <pre id="answer6">Answer 6 Goes Here</pre> */

      var made = items.filter(function(a){

        return a.who_made == "i_did"
      })

    var newmade = made.length

      
      document.querySelector("#answer6").innerHTML = `The sellers are selling ${newmade} items.`
      