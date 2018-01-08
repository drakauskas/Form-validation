
    		var badinputcolor = "#F7819F";
    		// formelements array is used to check if all form elements pass the validation function
		var formelements = [];
    			formelements['firstanme'] 	= false;
    			formelements['lastname'] 	= false;
    			formelements['email'] 		= false;
		
    		function all_form_elements_good(){
    			
    			if (formelements['firstname']&&formelements['lastname']&&formelements['email'])
    			{
    				return true;
    			}
    			else
    			{
    				return false;
    			}
    		}

    		

    		function check_email_string (textbox_string){

    			 if ((textbox_string.trim().length<4) || (/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(textbox_string) == false))
    			{
    				return false
    			}
    			else
    			{
    			   	return true;
    			}
    		}

    		function check_textbox_string (textbox_string){
		// Checks if textbox string length is lower than 4 character or has special characters
                if ((textbox_string.trim().length<4) || (/^[a-zA-Z0-9- ]*$/.test(textbox_string) == false))
    			{
    				return false
    			}
    			else
    			{
    			   	return true;
    			}
    		}


    		function check_textbox(formelementid) {
    		// Get the value from checkbox
    		string_for_check = document.getElementById(formelementid).value;
		// Data validation
    		if (check_textbox_string(string_for_check) == false) {
				    
					document.getElementById(formelementid).style.backgroundColor = badinputcolor;
					$("#submit").fadeOut("slow");
					$("#submitinput").fadeOut("slow");
					formelements[formelementid] = false;
						
				}
			else
				{
						formelements[formelementid] = true;
						document.getElementById(formelementid).style.backgroundColor = "white";
					if (all_form_elements_good()){
						$("#submit").fadeIn("slow");
						$("#submitinput").fadeIn("slow");
					}
				}
			}

			
			function check_email(formelementid) {
    		
    		string_for_check = document.getElementById(formelementid).value;

    		if (check_email_string(string_for_check) == false) {
				    
					document.getElementById(formelementid).style.backgroundColor = badinputcolor;
					$("#submit").fadeOut("slow");
					$("#submitinput").fadeOut("slow");
					formelements[formelementid] = false;
						
				}
			else
			{
					formelements[formelementid] = true;
					document.getElementById(formelementid).style.backgroundColor = "white";
				if (all_form_elements_good()){
					$("#submit").fadeIn("slow");
					$("#submitinput").fadeIn("slow");
				}
			}
    	}
    	$(document).ready(function(){
    		$("#submit").fadeOut("slow");
			$("#submitinput").fadeOut("slow");
    	});
