

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


