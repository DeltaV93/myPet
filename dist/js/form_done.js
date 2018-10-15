// Event listener for form submission
$("#sendEmail").click( function(){

    // Save the first name as a variable
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var email = $("#email").val();
    var message = $("#message").val();
  
    // // Set HTML of .modal-body
    // $(".modal-body").html("Thank you, " + firstName + ". Your message has been sent!");
    // // Thank you, val. Your message has been sent!
  
    // // Clear all fields in form
    // $(".form-control").val("");

    // Check if all inputs have a value 
    if(firstName && lastName && email && message){
        $(".modal-body").html("Thank you, " + firstName + ". Your message has been sent!");
    }else{
        $(".modal-body").html("Sorry, " + firstName + "Your message was not sent. Please check you completed all inputs. ");
    }
  
  });  