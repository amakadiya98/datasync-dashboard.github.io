$(document).ready(function () {
    const ctx = $('#basketChart')[0].getContext('2d');

    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0.0065, 'rgba(27, 105, 199, 0.2)');
    gradient.addColorStop(1, 'rgba(27, 105, 199, 0)');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
            datasets: [{
                label: 'Değer',
                data: [2, 3, 5, 10, 15, 20, 25, 13, 6, 4, 3, 2],
                fill: true,
                borderColor: 'blue',
                backgroundColor: gradient,
                pointStyle: 'circle',
                pointRadius: 6,
                pointBorderColor: '#FFFFFF',
                pointBackgroundColor: '#1B69C7',
                pointBorderWidth: 3,
            }]
        },
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
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return ` ${context.parsed.y.toFixed(3)} Temmuz`;
                        }
                    }
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
                        color: '#E2E8F0',
                    },
                    ticks: {
                        color: '#A3AED0',
                        callback: (val) => val,
                        font: { size: 12, weight: 500 }
                    }
                }
            }
        }
    });
});