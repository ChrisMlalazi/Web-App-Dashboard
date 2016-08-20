
//TOGGLE BELL

$('.bell').on('click', function(e) {
  // Prevent link from jumping to the top of the page
  e.preventDefault();
  // If menu is already showing, slide it up. Otherwise, slide it down.
  $('.toggled').toggleClass('slide-down');
  //hide green dot
   $('.dot').hide();
});





//USER SELECTS INDIVIDUAL  CHARTS AND MAKE THEM APPEAR AND DISAPPEAR

var $lineChartNav = $("#lineChartNav").children("li").children("h3");


$lineChartNav.click(function () {
    $lineChartNav.removeClass("lineChart-selected");
    $(this).addClass("lineChart-selected");
});

//MANIPULATING BACKGROUND LINE CHARTS

$("#lineChartNav li h3").on("click", function () {
    $("#lineChart").children("canvas").addClass("background");
    var childIndex = $(this).parent().index();
    var $canvasDetails = $("#lineChart").children("canvas")[childIndex];
    $canvasDetails.removeAttribute("class");
});


/*** Hamburger Menu*****/

$('.hamburger').on('click', function(e) {
  // Prevent link from jumping to the top of the page
  e.preventDefault();

  // If menu is already showing, slide it up. Otherwise, slide it down.
  $('.highlight').toggleClass('slide-down');
});



var $submitMessage = $(document.getElementById("send"));

$submitMessage.click(function () {
    if (document.getElementById("comments").value === "") {
        $("#warning").text("Please enter a message");
    } else if ($("#searched2").val() === "") {
        $("#warning").text("Please select a user");
    } else {
        $("#warning").text("Your message has been sent");
    }
});



//autocomplete
$(function () {
    var availableTags = [
        "Nonhlalo Dube",
        "Ishmael Singo",
        "Simon Phiri",
        "Charles Nkomo",
        "Litshe Muvingi"
    ];
    $(".searched3").autocomplete({
        source: availableTags
    });
});




