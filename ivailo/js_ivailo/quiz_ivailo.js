var score = 0;
var total = 10;
var point = 1;
var highest = total + point;

function init(){
	sessionStorage.setItem('a1','b');
	sessionStorage.setItem('a2','d');
	sessionStorage.setItem('a3','b');
	sessionStorage.setItem('a4','c');
	sessionStorage.setItem('a5','c');
	sessionStorage.setItem('a6','b');
	sessionStorage.setItem('a7','d');
	sessionStorage.setItem('a8','b');
	sessionStorage.setItem('a9','b');
	sessionStorage.setItem('a10','d');
}

$(document).ready(function(){

	//hide all questions
	$('.questionForm').hide();
	
	//show first question
	$('#begin').show();
	
	$('#begin #begin').click(function(){
		$('.questionForm').hide();
		c = 300;
		$('#q1').fadeIn(300);
		return false;
	});
	
	$('#q1 #submit').click(function(){
		$('.questionForm').hide();	
		process('q1');
		$('#q2').fadeIn(300);
		return false;
	});

	$('#q2 #submit').click(function(){
		$('.questionForm').hide();	
		process('q2');
		$('#q3').fadeIn(300);
		return false;
	});
	
	$('#q3 #submit').click(function(){
		$('.questionForm').hide();	
		process('q3');
		$('#q4').fadeIn(300);
		return false;
	});
	
	$('#q4 #submit').click(function(){
		$('.questionForm').hide();	
		process('q4');
		$('#q5').fadeIn(300);
		return false;
	});
	
	$('#q5 #submit').click(function(){
		$('.questionForm').hide();	
		process('q5');
		$('#q6').fadeIn(300);
		return false;
	});
	
	$('#q6 #submit').click(function(){
		$('.questionForm').hide();	
		process('q6');
		$('#q7').fadeIn(300);
		return false;
	});
	
	$('#q7 #submit').click(function(){
		$('.questionForm').hide();	
		process('q7');
		$('#q8').fadeIn(300);
		return false;
	});
	
	$('#q8 #submit').click(function(){
		$('.questionForm').hide();	
		process('q8');
		$('#q9').fadeIn(300);
		return false;
	});
	
	$('#q9 #submit').click(function(){
		$('.questionForm').hide();	
		process('q9');
		$('#q10').fadeIn(300);
		return false;
	});
	
	$('#q10 #submit').click(function(){
		$('.questionForm').hide();	
		process('q10');
		$('#qresults').fadeIn(300);
		return false;
	});
	
});

function process (q){
	
	if(q == "q1"){
		var submitted = $('input[name=q1]:checked').val();
		if(submitted == sessionStorage.a1){
			score += 2;
			alert('Correct!');
		}
		else{score -= 1;
		alert('Wrong! The correct answer is ' + '"' + sessionStorage.a1 + '"');
		}
	}
	
	if(q == "q2"){
		var submitted = $('input[name=q2]:checked').val();
		if(submitted == sessionStorage.a2){
			score += 2;
			alert('Correct!');
		}
		else{score -= 1;
		alert('Wrong! The correct answer is ' + '"' + sessionStorage.a2 + '"');
		}
	}
	
	if(q == "q3"){
		var submitted = $('input[name=q3]:checked').val();
		if(submitted == sessionStorage.a3){
			score += 2;
			alert('Correct!');
		}
		else{score -= 1;
		alert('Wrong! The correct answer is ' + '"' + sessionStorage.a3 + '"');
		}
	}
	
	if(q == "q4"){
		var submitted = $('input[name=q4]:checked').val();
		if(submitted == sessionStorage.a4){
			score += 2;
			alert('Correct!');
		}
		else{score -= 1;
		alert('Wrong! The correct answer is ' + '"' + sessionStorage.a4 + '"');
		}
	}
	
	if(q == "q5"){
		var submitted = $('input[name=q5]:checked').val();
		if(submitted == sessionStorage.a5){
			score += 2;
			alert('Correct!');
		}
		else{score -= 1;
		alert('Wrong! The correct answer is ' + '"' + sessionStorage.a5 + '"');
		}
	}
	
	if(q == "q6"){
		var submitted = $('input[name=q6]:checked').val();
		if(submitted == sessionStorage.a6){
			score += 2;
			alert('Correct!');
		}
		else{score -= 1;
		alert('Wrong! The correct answer is ' + '"' + sessionStorage.a6 + '"');
		}
	}
	
	if(q == "q7"){
		var submitted = $('input[name=q7]:checked').val();
		if(submitted == sessionStorage.a7){
			score += 2;
			alert('Correct!');
		}
		else{score -= 1;
		alert('Wrong! The correct answer is ' + '"' + sessionStorage.a7 + '"');
		}
	}
	
	if(q == "q8"){
		var submitted = $('input[name=q8]:checked').val();
		if(submitted == sessionStorage.a8){
			score += 2;
			alert('Correct!');
		}
		else{score -= 1;
		alert('Wrong! The correct answer is ' + '"' + sessionStorage.a8 + '"');
		}
	}
	
	if(q == "q9"){
		var submitted = $('input[name=q9]:checked').val();
		if(submitted == sessionStorage.a9){
			score += 2;
			alert('Correct!');
		}
		else{score -= 1;
		alert('Wrong! The correct answer is ' + '"' + sessionStorage.a9 + '"');
		}
	}
		
	if(q == "q10"){
		var submitted = $('input[name=q10]:checked').val();
		if(submitted == sessionStorage.a10){
			score += 2;
		}
		else{score -= 1;
		alert('Wrong! The correct answer is ' + '"' + sessionStorage.a10 + '"');
		}
		window.clearInterval(update);
		c = "-"; //timer stops on end of quiz
		if (score > 0){
			document.body.style.backgroundColor="green";
		}
		else{document.body.style.backgroundColor="red";}
		$('#results').html('<h3>Your final score is: '+score+' out of 20</h3><a href="quiz.html">Retake Quiz</a>');
	}
	return false;
}

window.addEventListener('load',init,false);

function timer(){
	c = c - 1;
	if (c < 300){
		time.innerHTML = c;
	}
	if (c < 1){
		window.clearInterval(update);
		alert('Time is up! Press OK to retake the quiz.');
		location.href = 'quiz.html';
	}
}

update = setInterval("timer()", 1000);

