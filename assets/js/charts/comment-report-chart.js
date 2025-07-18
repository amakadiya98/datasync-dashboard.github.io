$(document).ready(function () {
    const ctx = $('#commentReportChart')[0].getContext('2d');

    const gradientOrange = ctx.createLinearGradient(0, 0, 0, 400);
    gradientOrange.addColorStop(0.066, 'rgba(255, 194, 131, 0.2)');
    gradientOrange.addColorStop(0.9967, 'rgba(255, 194, 131, 0)');

    const labels = Array(20).fill('31.05');

    const positiveData = [17000, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
    const negativeData = [16000, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
    const trendData = [0.2, 0.25, 0.15, 0.1, 0.3, 0.2, 0.18, 0.4, 0.22, 0.3, 0.7, 0.1, 0.35, 0.5, 0.6, 0.72, 0.9, 1.0, 0.8, 0.3];

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Toplam Pozitif Yorum Sayısı',
                    data: positiveData,
                    backgroundColor: '#1B69C7',
                    yAxisID: 'y',
                    barPercentage: 0.4,
                    barThickness: 15,
                    borderRadius: 7,
                },
                {
                    label: 'Toplam Negatif Yorum Sayısı',
                    data: negativeData,
                    backgroundColor: '#023E7D',
                    yAxisID: 'y',
                    barPercentage: 0.4,
                    barThickness: 15,
                    borderRadius: 7,
                },
                {
                    label: 'Trendler',
                    data: trendData,
                    type: 'line',
                    yAxisID: 'y1',
                    borderWidth: 2,
                    borderColor: '#F2B889',
                    backgroundColor: gradientOrange,
                    tension: 0.4,
                    fill: true,
                    pointRadius: 0,
                    pointBackgroundColor: '#F2B889',
                }
            ]
        },
        options: {
            responsive: true,
            interaction: {
                mode: 'index',
                intersect: false
            },
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
                    mode: 'index',
                    intersect: false
                }
            },
            scales: {
                y: {
                    position: 'left',
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Yorum Sayısı'
                    },
                    ticks: {
                        callback: function (value) {
                            return value.toLocaleString();
                        }
                    },
                    grid: {
                        drawOnChartArea: true
                    }
                },
                y1: {
                    position: 'right',
                    beginAtZero: true,
                    min: 0,
                    max: 1,
                    title: {
                        display: true,
                        text: 'Trend Skoru'
                    },
                    ticks: {
                        stepSize: 0.1
                    },
                    grid: {
                        drawOnChartArea: false
                    }
                },
                x: {
                    ticks: {
                        maxRotation: 0,
                        minRotation: 0
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
});