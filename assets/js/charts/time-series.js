$(document).ready(function () {
    const ctx = $('#timeSeriesChart')[0].getContext('2d');

    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0.066, 'rgba(255, 194, 131, 0.2)');
    gradient.addColorStop(0.9967, 'rgba(255, 194, 131, 0)');

    $('input[name="chartView"]').on('change', function () {
        const selected = $(this).val();
        salesChart.data.datasets[0].hidden = selected === 'line';
        salesChart.data.datasets[1].hidden = selected === 'bar';
        salesChart.update();
    });
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
            datasets: [
                {
                    type: 'bar',
                    label: 'Satış Dönüş Oranı',
                    data: [100000, 85000, 90000, 91000, 92000, 80000, 87000, 110000, 95000, 89000, 70000, 76000],
                    backgroundColor: '#1B69C7',
                    borderRadius: 8,
                    barThickness: 16,
                    yAxisID: 'y',
                },
                {
                    type: 'line',
                    label: 'Toplam Görüntüleme',
                    data: [120000, 110000, 108000, 106000, 107000, 95000, 98000, 120000, 115000, 109000, 92000, 97000],
                    borderColor: '#F2B889',
                    backgroundColor: gradient,
                    fill: true,
                    yAxisID: 'y1',
                    pointStyle: 'circle',
                    pointRadius: 6,
                    pointBorderColor: '#FFFFFF',
                    pointBackgroundColor: '#F2B889',
                    pointBorderWidth: 3,
                    borderWidth: 1,
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
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
                    callbacks: {
                        label: function (ctx) {
                            return `${ctx.dataset.label}: ${ctx.raw.toLocaleString('tr-TR')}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    position: 'left',
                    grid: {
                        color: '#e5e7eb'
                    },
                    ticks: {
                        color: '#A3AED0',
                        callback: (val) => val.toLocaleString('tr-TR')
                    }
                },
                y1: {
                    position: 'right',
                    grid: {
                        drawOnChartArea: false
                    },
                    ticks: {
                        color: '#737C98',
                        callback: (val) => val.toLocaleString('tr-TR')
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#A3AED0'
                    }
                }
            }
        }
    });
});
