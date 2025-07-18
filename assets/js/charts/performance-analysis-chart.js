$(document).ready(function () {
    const ctx = $('#performanceChart')[0].getContext('2d');

    const gradientOrange = ctx.createLinearGradient(0, 0, 0, 400);
    gradientOrange.addColorStop(0.066, 'rgba(255, 194, 131, 0.2)');
    gradientOrange.addColorStop(0.9967, 'rgba(255, 194, 131, 0)');

    const gradientBlue = ctx.createLinearGradient(0, 0, 0, 400);
    gradientBlue.addColorStop(0.0065, 'rgba(27, 105, 199, 0.2)');
    gradientBlue.addColorStop(1, 'rgba(27, 105, 199, 0)');


    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['01 05', '02 05', '03 05', '04 05', '05 05', '06 05', '07 05', '08 05', '09 05', '10 05', '11 05', '12 05', '13 05', '14 05', '15 05', '16 05', '17 05', '18 05', '19 05', '20 05', '21 05', '22 05', '23 05', '24 05', '25 05', '26 05', '27 05', '28 05', '29 05', '30 05', '31 05'],
            datasets: [
                {
                    label: 'Gelir',
                    data: [15000, 16000, 14000, 18000, 13000, 17000, 20000, 30000, 25000, 45000, 60000, 50000, 40000, 20000, 30000, 35000, 40000, 45000, 50000, 55000, 30000, 65000, 70000, 75000, 50000, 85000, 60000, 45000, 100000, 105000, 110000],
                    borderColor: '#FFC283',
                    backgroundColor: gradientOrange,
                    yAxisID: 'y',
                    fill: true,
                    tension: 0.4,
                    pointRadius: 0,
                    pointBackgroundColor: '#FFC283',
                },
                {
                    label: 'Reklam Geliri',
                    data: [0.1, 0.11, 0.09, 0.12, 0.13, 0.15, 0.16, 0.18, 0.17, 0.19, 0.2, 0.22, 0.21, 0.1, 0.12, 0.14, 0.15, 0.16, 0.18, 0.19, 0.2, 0.21, 0.12, 0.23, 0.14, 0.25, 0.26, 0.17, 0.28, 0.19, 0.3],
                    borderColor: '#1B69C7',
                    backgroundColor: gradientBlue,
                    yAxisID: 'y1',
                    fill: true,
                    tension: 0.4,
                    pointRadius: 0,
                    pointBackgroundColor: '#1B69C7',
                }
            ]
        },
        options: {
            responsive: true,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            stacked: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        usePointStyle: true,
                        pointStyle: 'rectRounded',
                        color: '#003367',
                        font: {
                            size: 14,
                            weight: '500'
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            if (context.dataset.label === 'Gelir') {
                                return `Gelir: ${context.formattedValue} ₺`;
                            } else {
                                return `Reklam Geliri: ${context.formattedValue}`;
                            }
                        }
                    }
                }
            },
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    beginAtZero: true,
                    max: 110000,
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    beginAtZero: true,
                    max: 1,
                    grid: {
                        drawOnChartArea: false
                    }
                },
                x: {
                    grid: {
                        display: false,
                    },
                }
            }
        }
    });
});