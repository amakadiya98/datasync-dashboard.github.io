$(document).ready(function () {
    const ctx = $('#agePerformanceChart')[0].getContext('2d');

    const labels = [
        '18–24',
        '25–34',
        '34–44',
        '45–54',
        '55–64',
        'Bilinmiyor'
    ];

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Gösterim',
                data: [7000, 8000, 7500, 7000, 6800, 7200],
                backgroundColor: '#FFC283',
                stack: 'stack1',
                barThickness: 20,
                borderRadius: 10,
            },
            {
                label: 'Tıklamalar',
                data: [5000, 6000, 5800, 5400, 5100, 5300],
                backgroundColor: '#1B69C7',
                stack: 'stack1',
                barThickness: 20,
                borderRadius: 10,
            },
            {
                label: 'CTR',
                data: [4000, 4200, 4100, 3900, 3700, 4000],
                backgroundColor: '#023E7D',
                stack: 'stack1',
                barThickness: 20,
                borderRadius: 10,
            },
            {
                label: 'CPC',
                data: [3000, 3200, 3100, 3000, 2800, 2900],
                backgroundColor: '#CCD8E5',
                stack: 'stack1',
                barThickness: 20,
                borderRadius: 10,
            },
            {
                label: 'Maliyet',
                data: [2500, 2600, 2550, 2400, 2300, 2200],
                backgroundColor: '#8970BD',
                stack: 'stack1',
                barThickness: 20,
                borderRadius: 10,
            },
            {
                label: 'Dönüşüm Oranı',
                data: [2000, 2100, 2000, 1900, 1800, 1700],
                backgroundColor: '#F4705D',
                stack: 'stack1',
                barThickness: 20,
                borderRadius: 10,
            },
            {
                label: 'ROAS',
                data: [1000, 1200, 1100, 1000, 950, 980],
                backgroundColor: '#EB749E',
                stack: 'stack1',
                barThickness: 20,
                borderRadius: 10,
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
                stacked: true,
                grid: { display: false },
                ticks: {
                    color: '#A3AED0',
                    font: { weight: 600 }
                }
            },
            y: {
                stacked: true,
                grid: { color: '#e5e7eb' },
                ticks: {
                    color: '#A3AED0',
                    callback: val => val.toLocaleString('tr-TR')
                }
            }
        }
    };

    new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
});
