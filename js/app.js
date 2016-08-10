
//CREATE INTERCHANGING THREE CHARTS UNDER ONE GRAPH




/************

DAILY TRAFFIC
************/


var lineChartMonthly = document.getElementById("barChart");
var myChartM = new Chart(lineChartMonthly, {

    type: 'bar',
    data:{
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            backgroundColor: [
                'grey',
                'grey',
                'grey',
                'grey',
                'grey',
                'grey',
                'grey'
            ],
            borderColor: [
                'red',
                'red',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
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

/************

 DONUT CHART
**************/




