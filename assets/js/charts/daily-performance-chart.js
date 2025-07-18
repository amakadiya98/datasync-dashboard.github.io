$(document).ready(function () {
    const ctx = $('#dailyPerformanceChart')[0].getContext('2d');

    const labels = Array.from({ length: 31 }, (_, i) => {
        const date = new Date(2025, 4, i + 1);
        return date.toLocaleDateString('tr-TR', {
            day: '2-digit',
            month: 'short'
        });
    });


    const randomData = () =>
        Array.from({ length: 31 }, () => Math.floor(Math.random() * 5000 + 1000));


    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Gösterim',
                data: randomData(),
                backgroundColor: '#FFC283',
                stack: 'stack1',
                barThickness: 15,
                borderRadius: 7,
            },
            {
                label: 'Tıklamalar',
                data: randomData(),
                backgroundColor: '#1B69C7',
                stack: 'stack1',
                barThickness: 15,
                borderRadius: 7,
            },
            {
                label: 'CTR',
                data: randomData(),
                backgroundColor: '#023E7D',
                stack: 'stack1',
                barThickness: 15,
                borderRadius: 7,
            },
            {
                label: 'CPC',
                data: randomData(),
                backgroundColor: '#CCD8E5',
                stack: 'stack1',
                barThickness: 15,
                borderRadius: 7,
            },
            {
                label: 'Maliyet',
                data: randomData(),
                backgroundColor: '#8970BD',
                stack: 'stack1',
                barThickness: 15,
                borderRadius: 7,
            },
            {
                label: 'Dönüşüm Oranı',
                data: randomData(),
                backgroundColor: '#F4705D',
                stack: 'stack1',
                barThickness: 15,
                borderRadius: 7,
            },
            {
                label: 'ROAS',
                data: randomData(),
                backgroundColor: '#EB749E',
                stack: 'stack1',
                barThickness: 15,
                borderRadius: 7,
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
                    font: { weight: 600 },
                    maxRotation: 45,
                    minRotation: 45,
                    autoSkip: true,
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
