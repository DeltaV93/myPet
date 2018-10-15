$(document).ready(function(){
    var projectCard = $("#project-display--card");
    // project card is hidden on load
    projectCard.hide();
    // anytime I click on a project btn, the card will show 
    $('button').on('click', function(){
        projectCard.show();
        var cardHeader = $(this).attr('data-header');
        var cardClass = $(this).attr('data-class');
        // the text in the card will be related to the btn I clicked
        $("#project-display--card .card-header").html(cardHeader);
        // change the background color of the card 
        $("#project-display--card .card").removeClass().addClass(cardClass + " card mb-3 text-white");
    });
});
