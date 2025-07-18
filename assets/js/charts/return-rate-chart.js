$(document).ready(function () {
    const ctx = $('#returnRateChart')[0].getContext('2d');

    const gradientOrange = ctx.createLinearGradient(0, 0, 0, 400);
    gradientOrange.addColorStop(0.066, 'rgba(255, 194, 131, 0.2)');
    gradientOrange.addColorStop(0.9967, 'rgba(255, 194, 131, 0)');

    const gradientBlue = ctx.createLinearGradient(0, 0, 0, 400);
    gradientBlue.addColorStop(0.0097, 'rgba(27, 105, 199, 0.2)');
    gradientBlue.addColorStop(0.3821, 'rgba(27, 105, 199, 0)');

    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
            datasets: [
                {
                    label: 'Bu Son Aylar',
                    data: [11, 16, 12, 17, 13, 15, 14, 18, 20, 19, 21, 22],
                    borderColor: '#F2B889',
                    backgroundColor: gradientOrange,
                    tension: 0.4,
                    fill: true,
                    pointRadius: 0,
                    pointBackgroundColor: '#F2B889',
                },
                {
                    label: 'Geçen Son Aylar',
                    data: [32, 38, 30, 35, 33, 36, 34, 40, 42, 41, 39, 37],
                    borderColor: '#1B69C7',
                    backgroundColor: gradientBlue,
                    tension: 0.4,
                    fill: true,
                    pointRadius: 0,
                    pointBackgroundColor: '#1B69C7',
                }
            ]
        },
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
                        display: false,
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
});