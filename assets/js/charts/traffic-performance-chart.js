$(document).ready(function () {
    const ctx = $('#trafficPerformanceChart')[0].getContext('2d');

    const gradientPurple = ctx.createLinearGradient(0, 0, 0, 400);
    gradientPurple.addColorStop(0.3187, 'rgba(137, 112, 189, 0.2)');
    gradientPurple.addColorStop(1.0, 'rgba(137, 112, 189, 0)');

    const gradientRed = ctx.createLinearGradient(0, 0, 0, 400);
    gradientRed.addColorStop(0.3187, 'rgba(244, 112, 93, 0.2)');
    gradientRed.addColorStop(1.0, 'rgba(244, 112, 93, 0)');

    const gradientGreen = ctx.createLinearGradient(0, 0, 0, 400);
    gradientGreen.addColorStop(0.0065, 'rgba(58, 178, 58, 0.2)');
    gradientGreen.addColorStop(1.0, 'rgba(58, 178, 58, 0)');

    const data = {
        labels: [
            'Ağlar Arası',
            'Doğrudan',
            'Görüntüleme',
            'Organik Arama',
            'Organik Alışveriş',
            'Organik Sosyal',
            'Ücretli Arama',
            'Ücretli Video',
            'Yönlendirme',
            'Atanmamış'
        ],
        datasets: [
            {
                type: 'bar',
                label: 'Gösterim',
                data: [48000, 51000, 47000, 40000, 45000, 49000, 52000, 53000, 55000, 56000],
                backgroundColor: '#FFC283',
                borderRadius: 8,
                barPercentage: 0.5,
                categoryPercentage: 0.4,
                yAxisID: 'y'
            },
            {
                type: 'bar',
                label: 'Tıklama',
                data: [88000, 70000, 89000, 39000, 42000, 45000, 48000, 50000, 52000, 54000],
                backgroundColor: '#1B69C7',
                borderRadius: 8,
                barPercentage: 0.5,
                categoryPercentage: 0.4,
                yAxisID: 'y'
            },
            {
                type: 'line',
                label: 'Sipariş Adedi',
                data: [18000, 20000, 15000, 19000, 22000, 13000, 25000, 16000, 18000, 30000],
                borderColor: '#8970BD',
                backgroundColor: gradientPurple,
                borderWidth: 3,
                fill: true,
                yAxisID: 'y',
                tension: 0.4,
                pointRadius: 0,
                pointBackgroundColor: '#8970BD',
            },
            {
                type: 'line',
                label: 'Ortalama Sepet Tutarı',
                data: [2, 6, 4, 5, 3, 7, 6, 8, 5, 10],
                borderColor: '#F4705D',
                backgroundColor: gradientRed,
                borderWidth: 3,
                fill: true,
                yAxisID: 'y1',
                tension: 0.4,
                pointRadius: 0,
                pointBackgroundColor: '#F4705D',
            },
            {
                type: 'line',
                label: 'Dönüşüm Oranı',
                data: [5, 2, 8, 3, 6, 4, 7, 1, 9, 7],
                borderColor: '#7A9966',
                backgroundColor: gradientGreen,
                borderWidth: 3,
                fill: true,
                yAxisID: 'y1',
                tension: 0.4,
                pointRadius: 0,
                pointBackgroundColor: '#7A9966',
            }
        ]
    };

    const options = {
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
                callbacks: {
                    label: ctx => `${ctx.dataset.label}: ${ctx.raw.toLocaleString('tr-TR')}`
                }
            }
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: {
                    color: '#A3AED0',
                    font: {
                        weight: 600
                    }
                }
            },
            y: {
                position: 'left',
                grid: { color: '#e5e7eb' },
                ticks: {
                    color: '#A3AED0',
                    callback: val => val.toLocaleString('tr-TR')
                }
            },
            y1: {
                position: 'right',
                grid: { drawOnChartArea: false },
                ticks: {
                    color: '#A3AED0',
                    callback: val => val.toLocaleString('tr-TR')
                }
            }
        }
    };

    new Chart(ctx, {
        data,
        options
    });
});
