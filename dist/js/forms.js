// Event listener for form submission
$("#sendEmail").click( function(){

    // Save the first name as a variable
    var firstName = $("#firstName").val();
    var email = $("#email").val();
    var message = $("#message").val();
  
    // if the user enters first name, email, and message 
    // show message has be sent 
    // if any input is missing 
    // show inputs need to be completed message
    if (firstName && email && message) {
        // Set HTML of .modal-body
        $(".modal-body").html("Thank you, " + firstName + ". Your message has been sent!");  
        
        // Clear all fields in form
        $(".form-control").val("");  
    } else {
        $(".modal-body").html("Sorry, Your message was not sent.");  
    }

  });  