$(document).ready(function () {
    const ctx = $('#commentCategoriseReportChart')[0].getContext('2d');

    const labels = ['1. Hafta'];

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Negatif Yorum Sayısı (hb)',
                data: [12000],
                stack: 'hb',
                backgroundColor: '#023E7D',
                borderRadius: 15,
                barThickness: 40,
                datalabels: {
                    align: 'bottom',
                    anchor: 'start',
                    offset: -30,
                    backgroundColor: '#F28B02',
                    borderRadius: 4,
                    color: '#fff',
                    font: {
                        weight: 'bold',
                        size: 16
                    },
                    formatter: () => 'hb',
                    clip: false
                }
            },
            {
                label: 'Pozitif Yorum Sayısı (hb)',
                data: [16000],
                stack: 'hb',
                backgroundColor: '#1B69C7',
                borderRadius: 15,
                datalabels: {
                    display: false
                },
                barThickness: 40
            },
            {
                label: 'Negatif Yorum Sayısı (ty)',
                data: [7000],
                stack: 'ty',
                backgroundColor: '#023E7D',
                borderRadius: 15,
                barThickness: 40,
                datalabels: {
                    align: 'bottom',
                    anchor: 'start',
                    offset: -30,
                    backgroundColor: '#FF6621',
                    borderRadius: 4,
                    color: '#fff',
                    font: {
                        weight: 'bold',
                        size: 16
                    },
                    formatter: () => 'ty',
                    clip: false
                }
            },
            {
                label: 'Pozitif Yorum Sayısı (ty)',
                data: [6000],
                stack: 'ty',
                backgroundColor: '#1B69C7',
                borderRadius: 15,
                datalabels: {
                    display: false
                },
                barThickness: 40
            }
        ]
    };

    new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
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
                datalabels: {
                    display: true
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return `${context.dataset.label}: ${context.formattedValue.toLocaleString()}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    stacked: true,
                    grid: {
                        display: false
                    }
                },
                y: {
                    stacked: true,
                    beginAtZero: true,
                    ticks: {
                        stepSize: 5000,
                        callback: function (value) {
                            return value.toLocaleString();
                        }
                    },
                    grid: {
                        color: '#e0e7ff'
                    }
                }
            }
        },
        plugins: [ChartDataLabels]
    });
});
