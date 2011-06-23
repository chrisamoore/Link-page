 $(document).ready(function() {
    
    $('ul').hide();
    $('h2').css('cursor', 'pointer');

    $('h2').click(function() {
  	  $(this).next().slideToggle("normal");
    });
    // Zclip
   $('#link').click(function(){
   		console.log('linky');
   });
	 
 });//End Doc Ready