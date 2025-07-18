$(document).ready(function () {
    const ctx = $('#salesChart')[0].getContext('2d');

    const gradientOrange = ctx.createLinearGradient(0, 0, 0, 400);
    gradientOrange.addColorStop(0.066, 'rgba(255, 194, 131, 0.2)');
    gradientOrange.addColorStop(0.9967, 'rgba(255, 194, 131, 0)');

    const gradientBlue = ctx.createLinearGradient(0, 0, 0, 400);
    gradientBlue.addColorStop(0.0065, 'rgba(53, 40, 216, 0.2)');
    gradientBlue.addColorStop(1, 'rgba(53, 40, 216, 0)');

    const chartData = {
        sales: {
            labels: Array(30).fill("31.05"),
            datasets: [
                {
                    label: 'Son 30 Gün',
                    data: [120000, 180000, 90000, 200000, 150000, 110000, 90000, 130000, 120000, 300000, 250000, 600000, 850000, 700000, 500000, 350000, 250000, 300000, 450000, 600000, 750000, 800000, 850000, 500000, 200000, 100000, 120000, 300000, 400000, 100000],
                    borderColor: '#F2B889',
                    backgroundColor: gradientOrange,
                    tension: 0.4,
                    fill: true,
                    pointRadius: 0,
                    pointBackgroundColor: '#F2B889',
                },
                {
                    label: 'Geçen 30 Gün',
                    data: [90000, 95000, 180000, 97000, 93000, 94000, 95000, 96000, 91000, 93000, 95000, 98000, 96000, 94000, 92000, 93000, 91000, 93000, 95000, 97000, 99000, 93000, 91000, 95000, 92000, 91000, 95000, 98000, 94000, 90000],
                    borderColor: '#3528D8',
                    backgroundColor: gradientBlue,
                    tension: 0.4,
                    fill: true,
                    pointRadius: 0,
                    pointBackgroundColor: '#3528D8',
                }
            ]
        },

        count: {
            labels: Array(30).fill("31.05"),
            datasets: [
                {
                    label: 'Son 30 Gün',
                    data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 300)),
                    borderColor: 'rgba(0, 212, 132, 1)',
                    backgroundColor: 'rgba(0, 212, 132, 0.2)',
                    tension: 0.4,
                    fill: true,
                    pointRadius: 0,
                    pointBackgroundColor: 'rgba(0, 212, 132, 1)',
                }
            ]
        },

        profit: {
            labels: Array(30).fill("31.05"),
            datasets: [
                {
                    label: 'Son 30 Gün',
                    data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 100000)),
                    borderColor: 'rgba(153, 102, 255, 1)',
                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    tension: 0.4,
                    fill: true,
                    pointRadius: 0,
                    pointBackgroundColor: 'rgba(153, 102, 255, 1)',
                }
            ]
        }
    };

    const chart = new Chart(ctx, {
        type: 'line',
        data: chartData.sales,
        options: {
            responsive: true,
            maintainAspectRatio: false,
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
                    intersect: false,
                }
            },
            scales: {
                x: {
                    grid: {
                        color: '#e5e7eb'
                    },
                    ticks: {
                        color: '#A3AED0',
                    }
                },
                y: {
                    grid: {
                        color: '#e5e7eb'
                    },
                    ticks: {
                        color: '#A3AED0',
                        callback: function (value) {
                            return value.toLocaleString('tr-TR');
                        }
                    }
                }
            }
        }
    });

    $('.order-tabs-container .tab').click(function () {
        const container = $(this).closest('.order-tabs-container');
        container.find('.tab').removeClass('active');
        $(this).addClass('active');

        const type = $(this).data('type');
        if (type && chartData[type]) {
            chart.data = chartData[type];
            chart.update();
        }
    });

});