$(document).ready(function () {	

  var passStrength = 0;	

//On change: whenever a user commits a change to a text field by:	  1. moving to another field	  2. hitting return




//-----------------------------User name------------------------------------------ 
	$('#username').on('change', function (ev) {		
		
		var username = $(this).val();   //Gets the user input from the form field		Force our users to have a username at least 3 characters long		
		if (username.length >= 3) {			//By putting our AJAX request in a variable we can listen for when it is done		 When the response is done, we can see the data PHP sent			
		
		var ajax = $.post('check-username.php', {				
			'username' : username			
		});	


		
		ajax.done(function (data) {				
			$('.status').removeClass('available unavailable');				
				if (data == 'available') {					 //If you wanted to use an image instead of text:					 
				
				//1. delete the `.html()` part					
				//2. use the class in your CSS to add a background-image					
				
					$('.status').html('✔').addClass(data);				
					} else {					
					$('.status').html('✖').addClass(data);				
					}			
				});		
			} else {			
				$('.status').html('✖').removeClass('available').addClass('unavailable');		
			}	
	});	

//-----------------------------password------------------------------------------ 

$('#password').on('keyup', function (ev) {		
var pass = $(this).val();		
passStrength = 0;		
if (pass.length > 5) {			
passStrength++;			
$('.req-length').addClass('met');		
} else {			
$('.req-length').removeClass('met');		}		
// Regular expressions (Regex) are a sub programming language for dealing with text		
// They allow us to manipulate and search text		
        if (pass.match(/[a-z]/)) {			
		passStrength++;			
		$('.req-low').addClass('met');		
		} else {
			$('.req-low').removeClass('met');		
			}		
		if (pass.match(/[A-Z]/)) {			
		  passStrength++;			
		  $('.req-up').addClass('met');		
		   } else {			
		     $('.req-up').removeClass('met');		
		   }		
		 if (pass.match(/[0-9]/)) {			
		   passStrength++;			
		   $('.req-num').addClass('met');		
		   } else {			
		     $('.req-num').removeClass('met');		
			 }		
		 if (pass.match(/[^a-zA-Z0-9]/)) {			
		    passStrength++;			
			$('.req-spec').addClass('met');		
		   } else {			
		     $('.req-spec').removeClass('met');		
		 }	
	});	
	
		$('form').on('submit', function (ev) {		
			if (passStrength < 5 || $('.status').hasClass('unavailable')) {			
			
				ev.preventDefault();		
			}	
	
});	


//-----------------------------Email------------------------------------------ 
	
	$('#email').on('change', function (ev) {		
		var email = $(this).val();   //Gets the user input from the form field		Force our users to have a username at least 3 characters long		
		if (email.length >= 3) {			//By putting our AJAX request in a variable we can listen for when it is done		 When the response is done, we can see the data PHP sent			
			var ajaxEmail = $.post('check-email.php', {				
				'email' : email	
			});	
		
		
				
			ajaxEmail.done(function (data) {				
			$('.status1').removeClass('available unavailable');				
				console.log(data);
				if (data == 'available') {					 //If you wanted to use an image instead of text:					 
				
					//1. delete the `.html()` part					
					//2. use the class in your CSS to add a background-image					
				
					$('.status1').html('✔').addClass(data);				
				} else {					
					$('.status1').html('✖').addClass(data);				
				}			
			});		
		} else {			
				$('.status1').html('✖').removeClass('available').addClass('unavailable');		
			}	
	});	


//-----------------------------city------------------------------------------ 

	$('#city').on('change', function (ev) {		
	   var cityname = $(this).val();
		console.log(cityname);
		  if(cityname.match(/[a-zA-Z]+/ )){
		  
			 $('.req-alpha').addClass('met');		
		   } else {			
					 $('.req-alpha').removeClass('met');		
				}	
						
		  
	
	});



//-----------------------------country-radio button------------------------------------------ 

	$('#country').on('click', function (btn) {	
	/*valButton = function(btn)*/ 
		var country = $(this).val();
	/*for (var i=btn.length-1; i > -1; i--) {*/
		if (btn[i].checked) {
			return btn[i].value;
			}else{
				alert("you need to checkone of these!");
				console.log(value);
			}
		}			
	
	);


 //-----------------------------list-states------------------------------------------       
	$('#us').on('click',function (e) {
		
		$('.dropdown').load('us.html');
			   
	}); 
 
 //-----------------------------validation-zipcode------------------------------------------ 
 
 $('#zipcode').on('change', function (e) {	
      ('.code').load('us.html');	
	   var zipcode = $(this).val();
	   
	  
	     /*if (zipcode.match(/[0-9]/)){*/
		 if (zipcode.match(/^\d{5}$|^\d{5}-\d{4}$/)){
		
			  $('.req-post').addClass('met');		
				   } else {			
			  $('.req-post').removeClass('met');	
		
		}
	});

//-----------------------------list-provinces------------------------------------------  
	 $('#canada').on('click',function (e) {
		  
				
			   $('.dropdown').load('canada.html');
		  
		
	});
//-----------------------------validation postal code------------------------------------------ 
$('#postalcode').on('change', function (e) {	
 ('.code').load('canada.html');	
	   var postalcode = $(this).val();
	   
	  
	     /*if (zipcode.match(/[0-9]/)){*/
		 if (postalcode.match( /^([a-zA-Z][0-9][a-zA-Z])\s*([0-9][a-zA-Z][0-9])$/)){
		
			  $('.req-post').addClass('met');		
				   } else {			
			  $('.req-post').removeClass('met');	
		
		}
	});


 	});