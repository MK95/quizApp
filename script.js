$(function(){

	var Qarray = [
	{
		question:"What show is this character from?",
		choices:["Seinfeld", "Freinds", "Everybody Loves Raymond", "Married With Children" ],
		correct:"Seinfeld"
	},
	{
		question:"Whose line is it anyway??",
		choices:["Jim Carrey", "John Krazinsky", "Drew Carey", "Drew Barymore" ],
		correct:"Drew Carey"
	},
	{
		question:"Whose dad is this?",
		choices:["Bart Simpson", "Andy Bernard", "Ross Geller", "Chris Angel" ],
		correct:"Ross Geller"
	},
	{
		question:"Who created The Office (US)?",
		choices:["Greg Daniels", "Ricky G", "Michael Scott", "Michael Cera" ],
		correct:"Greg Daniels"
	}]

	function populate(){
		$(".question h4").text(Qarray[0].question);
		var choices = Qarray[0].length;
		$("ol#chooseOne").append("Seinfeld", "Freinds", "Everybody Loves Raymond", "Married With Children" );
			for (var i=0; i<choices; i++) {
			//$.each(Qarray, function(index,value){
			//	console.log(choices);
			//	html = "<li><input type=radio>"+index.choices[i]+"</li>"
			//$("ol#chooseOne").append(html);
			$("span.qnum").text(Qarray[i]+"/5");
			};
		//}
		
	}
//for (var i=0; i<choices; i++) {
//$("ol#chooseOne").append();
//}	

//for (var i in myArray){}

	populate();

//var userChoice = $("#chooseOne").html

	function guess() {
		$("button.submit").on("click", function(){
			//if correct say this else say . 
			// if correct add to score variable (make one) else nothing
		populate()
	//	$("span.qnum").text(index[i]+"/5");
		});
	}


});

/*

array to populate the quiz 

advance on click to next piece of the array

	evaluate whether or not the answer is correct
		advance or not 

	click event
	counter

	grab users guses and check it against correct

	if correct add to score, 

	else if go to next question
	
		add to counter



*/