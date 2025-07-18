$(document).ready(function () {
    const ctx = $('#priceQuantityChart')[0].getContext('2d');

    const labels = [
        'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
        'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
    ];

    const stackedBarColors = {
        Hepsiburada: '#F28B02',
        Trendyol: '#FF6621',
        N11: '#5D3EBC',
        Pazarama: '#0136F4',
        Amazon: '#FF9900',
        B2B: '#747C98',
        Beymen: '#000000',
        Ideasoft: '#A1CF5F',
        Boyner: '#EC008C'
    };

    const datasets = [
        {
            label: 'Hepsiburada',
            data: [100, 120, 110, 90, 100, 130, 110, 10, 0, 0, 0, 0],
            backgroundColor: stackedBarColors.Hepsiburada,
            stack: 'stack1',
            barThickness: 20,
            borderRadius: 10,
        },
        {
            label: 'Trendyol',
            data: [40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            backgroundColor: stackedBarColors.Trendyol,
            stack: 'stack1',
            barThickness: 20,
            borderRadius: 10,
        },
        {
            label: 'N11',
            data: [90, 85, 80, 70, 80, 110, 95, 0, 0, 0, 0, 0],
            backgroundColor: stackedBarColors.N11,
            stack: 'stack1',
            barThickness: 20,
            borderRadius: 10,
        },
        {
            label: 'Pazarama',
            data: [60, 0, 0, 65, 0, 120, 0, 0, 0, 0, 0, 0],
            backgroundColor: stackedBarColors.Pazarama,
            stack: 'stack1',
            barThickness: 20,
            borderRadius: 10,
        },
        {
            label: 'Amazon',
            data: [30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            backgroundColor: stackedBarColors.Amazon,
            stack: 'stack1',
            barThickness: 20,
            borderRadius: 10,
        },
        {
            label: 'B2B',
            data: [20, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5],
            backgroundColor: stackedBarColors.B2B,
            stack: 'stack1',
            barThickness: 20,
            borderRadius: 10,
        },
        {
            label: 'Beymen',
            data: [10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            backgroundColor: stackedBarColors.Beymen,
            stack: 'stack1',
            barThickness: 20,
            borderRadius: 10,
        },
        {
            label: 'Ideasoft',
            data: [120, 180, 160, 0, 150, 0, 160, 0, 0, 0, 0, 0],
            backgroundColor: stackedBarColors.Ideasoft,
            stack: 'stack1',
            barThickness: 20,
            borderRadius: 10,
        },
        {
            label: 'Boyner',
            data: [20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            backgroundColor: stackedBarColors.Boyner,
            stack: 'stack1',
            barThickness: 20,
            borderRadius: 10,
        },
        {
            label: 'Ort. Fiyat',
            data: [200, 190, 170, 120, 180, 200, 170, 30, 30, 30, 30, 30],
            type: 'line',
            borderColor: '#F2B889',
            fill: false,
            yAxisID: 'y1',
            pointStyle: 'circle',
            pointRadius: 6,
            pointBorderColor: '#FFFFFF',
            pointBackgroundColor: '#F2B889',
            pointBorderWidth: 3,
            borderWidth: 2,
        }
    ];

    datasets.forEach(dataset => {
        if (dataset.type !== 'line') {
            dataset.data = dataset.data.map(val => val === 0 ? null : val);
        }
    });

    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: datasets
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
                        label: ctx => `${ctx.dataset.label}: ${ctx.raw?.toLocaleString('tr-TR')}`
                    }
                }
            },
            scales: {
                x: {
                    stacked: true,
                    grid: { display: false },
                    ticks: {
                        color: '#A3AED0',
                        font: { size: 12, weight: 500 }
                    }
                },
                y: {
                    stacked: true,
                    position: 'left',
                    grid: { color: '#e5e7eb' },
                    ticks: {
                        color: '#A3AED0',
                        callback: val => val.toLocaleString('tr-TR')
                    },
                    title: {
                        display: true,
                        text: 'Ort. Fiyat',
                        color: '#A3AED0',
                        font: { size: 12, weight: 600 }
                    }
                },
                y1: {
                    position: 'right',
                    grid: { drawOnChartArea: false },
                    ticks: {
                        color: '#A3AED0',
                        callback: val => val.toLocaleString('tr-TR')
                    },
                    title: {
                        display: true,
                        text: 'Miktar',
                        color: '#A3AED0',
                        font: { size: 12, weight: 600 }
                    }
                }
            }
        }
    });
});
