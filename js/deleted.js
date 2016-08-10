
//CREATE INTERCHANGING THREE CHARTS UNDER ONE GRAPH

Chart.defaults.global.defaultFontFamily = "'Futura', 'Helvetica', 'Arial', sans-serif";
Chart.defaults.global.defaultFontColor = "#RRGGBB";


/*****************
LINE CHART HOURLY
******************/
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
            pointBorderWidth: 2,
            pointRadius: 6,
            pointHoverRadius: 8,
            data: [6, 7, 1, 5, 3, 6, 2]
        }]
    },
    options: {
        legend: true,
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
    display: true,
    ticks: {
        beginAtZero: true,
        steps: 2,
        stepValue:5,
        max:10
    }
}]
        }
    }
});





/*****************
LINE CHART DAILY
******************/
var lineChartDaily = document.getElementById("line-chart-daily");
var myChartD = new Chart(lineChartDaily, {

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
            pointBorderWidth: 2,
            pointRadius: 6,
            pointHoverRadius: 8,
            data: [30, 60, 50, 90, 20, 40, 10]
        }]
    },
   options: {
        legend: true,
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
    display: true,
    ticks: {
        beginAtZero: true,
        steps: 5,
        stepValue:10,
        max:100
    }
}]
        }
    }
});


/*****************
LINE CHART WEEKLY
******************/
var lineChartWeekly = document.getElementById("line-chart-weekly");
var myChartW = new Chart(lineChartWeekly, {

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
            pointRadius: 7,
            pointHoverRadius: 8,
            data: [0, 600, 1400, 1300, 1500, 2000, 1700, 1800, 1400, 1700, 2400]
        }]
    },
    options: {
        legend: true,
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
    display: true,
    ticks: {
        beginAtZero: false,
        steps: 1,
        stepValue:50,
        max:2500
    }
}]
        }
    }
});

/*****************
LINE CHART MONTHLY
******************/
var lineChartMonthly = document.getElementById("line-chart-monthly");
var myChartM = new Chart(lineChartMonthly, {

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
            pointBorderWidth: 2,
            pointRadius: 6,
            pointHoverRadius: 8,
            data: [134, 28, 290, 420, 139, 360, 383, 100, 150, 60, 90, 300]
        }]
    },
    options: {
        legend: true,
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
    display: true,
    ticks: {
        beginAtZero: true,
        steps:10,
        stepValue:5,
        max:500
    }
}]
        }
    }
});