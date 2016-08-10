
// USER CLICKS ON LINE CHART LABELS TO MAKE ONE APPEAR AFTER THE OTHER


//LINE CHART-1
var lineChartHourly = document.getElementById("line-chart-hourly");
var myChartH = new Chart(lineChartHourly, {

    type: 'line',
    data: {
        labels: ["1am", "2am", "3am", "4am", "5am", "6am", "7am"],
        datasets: [{
            lineTension: 0,
            backgroundColor: 'rgba(171, 174, 215, 0.6)',
            borderCapStyle: 'square',
            borderColor: "#7479BD",
            label: 'Traffic',
            pointBorderColor: '#4D4D71',
            pointBackgroundColor: '#f1f1f8',
            pointBorderWidth: 1,
            pointRadius: 5,
            pointHoverRadius: 8,
            data: [6, 7, 4, 5, 3.5, 6, 5]
        }]
    },
    options: {
        legend: false,
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                }
            }]
        }
    }
});



   //DAILY CHART-2

var lineChartDaily = document.getElementById("line-chart-daily");
var myChart = new Chart(lineChartDaily, {

    type: 'line',
    data: {
        labels: ["5", "10", "15", "20", "25", "30", "35"],
        datasets: [{
            lineTension: 0,
            backgroundColor: 'rgba(171, 174, 215, 0.6)',
            borderCapStyle: 'square',
            borderColor: "#7479BD",
            label: 'Traffic',
            pointBorderColor: '#4D4D71',
            pointBackgroundColor: '#f1f1f8',
            pointBorderWidth: 1,
            pointRadius: 5,
            pointHoverRadius: 8,
            data: [30, 60, 50, 70, 20, 40, 10]
        }]
    },
    options: {
        legend: false,
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                }
            }]
        }
    }
});

//WEEKLY CHART-3
var lineChartWeekly = document.getElementById("line-chart-weekly");
var myChart = new Chart(lineChartWeekly, {

    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            lineTension: 0,
            backgroundColor: 'rgba(171, 174, 215, 0.6)',
            borderCapStyle: 'square',
            borderColor: "#7479BD",
            label: 'Traffic',
            pointBorderColor: '#4D4D71',
            pointBackgroundColor: '#f1f1f8',
            pointBorderWidth: 1,
            pointRadius: 5,
            pointHoverRadius: 8,
            data: [0, 600, 1400, 1300, 1500, 2000, 1700, 1800, 1400, 1700, 2400]
        }]
    },
    options: {
        legend: false,
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                }
            }]
        }
    }
});


//MONTHLY CHART-4
var lineChartMonthly = document.getElementById("line-chart-monthly");
var myChart = new Chart(lineChartMonthly, {

    type: 'line',
    data: {
        labels: ["J", "F", "M", "A", "M", "J", "J", "A","S", "O", "N", "D"],
        datasets: [{
            lineTension: 0,
            backgroundColor: 'rgba(171, 174, 215, 0.6)',
            borderCapStyle: 'square',
            borderColor: "#7479BD",
            label: 'Traffic',
            pointBorderColor: '#4D4D71',
            pointBackgroundColor: '#f1f1f8',
            pointBorderWidth: 1,
            pointRadius: 5,
            pointHoverRadius: 8,
            data: [700, 28, 290, 420, 139, 360, 383, 100, 150, 60, 90, 900]
        }]
    },
    options: {
        legend: false,
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                }
            }]
        }
    }
});



//BAR CHART
var barChart = document.getElementById("barChart");
var myChart = new Chart(barChart, {
    type: "bar",
    data: {
        labels: ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"],
        datasets: [
            {
                label: "[]",
                data: [5, 20, 40, 65, 60, 50, 30],
                backgroundColor: "#8585e0",
                borderWidth: 1,
                borderColor: "grey"

            },
           
        ]
    },
    options: {
    legend: {
        display: false
    },
    tooltips: {
        callbacks: {
           label: function(tooltipItem) {
                  return tooltipItem.yLabel;
           }
        }
    }
}

});







/************

 DONUT CHART
**************/




