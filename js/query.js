



var $lineChartNav = $("#select-graph-list").children("li").children("h3");



// line chart nav

$lineChartNav.click(function () {
    $lineChartNav.removeClass("graph-selected");
    $(this).addClass("graph-selected");
});

// changing the graphs

$("#select-graph-list li h3").on("click", function () {
    $(".line-chart-div").children("canvas").addClass("hidden");
    var childIndex = $(this).parent().index();
    var $canvasDetails = $(".line-chart-div").children("canvas")[childIndex];
    $canvasDetails.removeAttribute("class");
});


