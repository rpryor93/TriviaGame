$(document).ready(function(){
	$("#results").hide();
    $("#actionArea").hide();
    console.log(document);  });

var correctTotal = 0;
var wrongTotal = 0;
var timeLeft = 61;
    
$("#start").click(function(){
        $("#start").hide();
		begin ();
		countDown();
		$("#actionArea").show();
		$("#results").show();
		
	});


$("#results").on("click",stop)


function begin (){
		counter = setInterval(countDown, 1000);
}

function countDown(){

		timeLeft--;
		$("#time").html(timeLeft + " seconds remaining");
		if(timeLeft==0){
        stop();
        }
}

function stop(){

		clearInterval(counter);
		timeLeft=60;
		correctTotal =0;
		wrongTotal =0;

		if($("input[name = q2]:checked").val() == $("#q1d").val()){
			correctTotal++;
		} else {
			wrongTotal++;
		}

		if($("input[name = q2]:checked").val() == $("#q2c").val()){
			correctTotal++;
		} else {
			wrongTotal++;
		}

		if($("input[name = q3]:checked").val() == $("#q3d").val()){
			correctTotal++;
		} else {
			wrongTotal++;
		}
		if($("input[name = q4]:checked").val() == $("#q4c").val()){
			correctTotal++;
		} else {
			wrongTotal++;
		}

		if($("input[name = q5]:checked").val() == $("#q5b").val()){
			correctTotal++;
		} else {
			wrongTotal++;
		}
		if($("input[name = q6]:checked").val() == $("#q6d").val()){
			correctTotal++;
		} else {
			wrongTotal++;
		}
		if($("input[name = q7]:checked").val() == $("#q7d").val()){
			correctTotal++;
		} else {
			wrongTotal++;
		}
		if($("input[name = q8]:checked").val() == $("#q8c").val()){
			correctTotal++;
		} else {
			wrongTotal++;
		}
		if($("input[name = q9]:checked").val() == $("#q9a").val()){
			correctTotal++;
		} else {
			wrongTotal++;
		}
		if($("input[name = q10]:checked").val() == $("#q10a").val()){
			correctTotal++;
		} else {
			wrongTotal++;
		}

        window.scrollTo(0,0);
	   $("#results").show();
	   $(".answer").empty();
	   $(".question").empty();
	   $("#time").hide();
	   $("#resultsGo").hide();
	   $("#score").html("Correct Ansewrs: " + correct + "<br>" + "Incorrect Answers: " + incorrect + "<br>");
        
        console.log(stop);
}
                   
