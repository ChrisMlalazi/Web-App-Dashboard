
Chart.defaults.global.defaultFontFamily = "'Futura', 'Helvetica', 'Arial', sans-serif";
Chart.defaults.global.defaultFontColor = "#ffff";


// HOURLY
var lineChartHourly = document.getElementById("line-chart-hourly");
var myChartH = new Chart(lineChartHourly, {

    type: 'line',
    data: {
        labels: ["00-02", "03-05", "06-08", "09-11", "12-14", "15-17", "18-20", "21-23"],
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
            data: [0, 2, 3, 5, 14, 12, 10, 4]
        }]
    },
    options: {
        legend: false,
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});



//DAILY
var lineChartDaily = document.getElementById("line-chart-daily");
var myChartD = new Chart(lineChartDaily, {

    type: 'line',
    data: {
        labels: ["25", "26", "27", "28", "29", "30", "31"],
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
            data: [78, 90, 120, 190, 230, 472, 50]
        }]
    },
    options: {
        legend: false,
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


//WEEKLY
var lineChartWeekly = document.getElementById("line-chart-weekly");
var myChartW = new Chart(lineChartWeekly, {

    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
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
            data: [600, 1400, 1700, 1340, 560, 720, 1250, 590, 340, 1230]
        }]
    },
    options: {
        legend: false,
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
// line chart weekly end

// line chart monthly start
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
        legend: false,
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










