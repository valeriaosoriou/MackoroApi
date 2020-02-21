console.log('json & ajax');// testing script.js

//to test jquery
	$(document).ready(function(){
		$('body').click(function(){
			$(this).css('color', 'blue');
		});
	

// //JS DATA - array of objects

// 	var jsData = [
// 	{
// 		name : "Peter",
// 		age: 50
// 	},
// 	{
// 		name : "John",
// 		age : 25
// 	}
// 	];

// 	console.log(jsData);

// //displaying js objects in the browser window

// 	var i;
// 	for (i = 0; i < jsData.length; i++){
// 		document.getElementById('result').innerHTML += 
// 		'<h1>' + jsData[i].name + ' is ' +
// 		jsData[i].age + ' years old</h1>';
// 	};
	

// //JSON DATA

// var jsonData = [
// 	{
// 		"name" : "Lucy",
// 		"age" : 12
// 	},
// 	{
// 		"name" : "Mark",
// 		"age" : 77
// 	}
// ];
// console.log(jsonData);

// //displaying json objects in the browser window
// var j;
// 	for (j = 0; j < jsonData.length; j++){
// 		document.getElementById('result').innerHTML += 
// 		'<h1>' + jsonData[j].name + ' is ' +
// 		jsonData[j].age + ' years old</h1>';
// 	};

// //rtrieving json data from an external file
// var person = JSON.parse(myData);
// console.log(person);

// //displaying json objects in the browser window
// var k;
// 	for(k =0; k < person.length; k++) {
// 		document.getElementById('result').innerHTML +=
//     	'<h1>' + person[k].name +' is ' +
//      	person[k].age + ' years old</h1>';
// };


//ajax method
$.ajax({
  url:'https://my.api.mockaroo.com/plants.json?key=ce0dec30',
  type:'GET',
  data:'json',
  success: function(data){
    console.log(data);
    console.log(data[0].scientific_name);
    var i;
    for (i=0; i<data.length; i++){
      document.getElementById('result').innerHTML +=
      '<div class="col">' +
        '<div class="card" style="width: 18rem;">' +
          '<img src="'+ data[i].image +'" class="card-img-top" alt="Plant Image">' + 
          '<div class="card-body">' +
          '<h5 class="card-title">' + data[i].plant_name + '</h5>' +
          '<p class="card-text">Scientific Name: ' + data[i].scientific_name + '</p>' +
          '<p class="card-text">Plant Family: ' + data[i].plant_family + '</p>' +
          '<a href="#" class="btn btn-primary">More Info</a>' +
          '</div>' +
        '</div>'
      '</div>';
    }

  },//success
  error:function(){
    console.log('error');
  }//error

});//ajax

});//document.ready
