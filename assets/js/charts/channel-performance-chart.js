$(document).ready(function () {
    const ctx = $('#channelPerformanceChart')[0].getContext('2d');

    const labels = [
        'Ücretli Arama', 'Ağlar Arası', 'Organik Arama', 'Doğrudan',
        'Organik Alışveriş', 'Organik Sosyal', 'Atanmamış',
        'Yönlendirme', 'Ücretli Video', 'Görüntülemek'
    ];

    const datasetsMap = {
        maliyet: {
            label: 'Maliyet',
            data: [95000, 90000, 85000, 80000, 78000, 76000, 74000, 72000, 70000, 68000],
            format: 'number'
        },
        goruntulenme: {
            label: 'Görüntülenme',
            data: [150000, 140000, 130000, 110000, 100000, 98000, 96000, 94000, 92000, 90000],
            format: 'number'
        },
        donusum: {
            label: 'Dönüşüm Oranı',
            data: [28000, 25000, 22000, 20000, 18000, 15000, 12000, 10000, 8000, 5000],
            format: 'number'
        },
        tiklama: {
            label: 'Tıklama',
            data: [60000, 58000, 55000, 52000, 50000, 47000, 44000, 42000, 41000, 40000],
            format: 'number'
        },
        oturumlar: {
            label: 'Oturumlar',
            data: [90000, 87000, 85000, 83000, 80000, 78000, 75000, 73000, 70000, 68000],
            format: 'number'
        },
        cpc: {
            label: 'CPC',
            data: [1.20, 1.10, 1.00, 0.90, 0.88, 0.85, 0.80, 0.75, 0.70, 0.60],
            format: 'float'
        }
    };

    const initialKey = 'maliyet';

    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: datasetsMap[initialKey].label,
                data: datasetsMap[initialKey].data,
                backgroundColor: '#023E7D',
                borderRadius: 6,
                barThickness: 20
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: (ctx) => formatTooltip(datasetsMap[initialKey].format, ctx.raw)
                    }
                },
                datalabels: {
                    anchor: 'end',
                    align: 'right',
                    color: '#023E7D',
                    font: { weight: 'bold', size: 12 },
                    formatter: (value, ctx) => {
                        const dataset = datasetsMap[initialKey];
                        const total = dataset.data.reduce((sum, val) => sum + val, 0);
                        const percent = (value / total) * 100;
                        return `%${percent.toFixed(1)}`;

                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    ticks: {
                        callback: (val) => val.toLocaleString('tr-TR'),
                        color: '#64748B'
                    },
                    grid: { color: '#E2E8F0' }
                },
                y: {
                    ticks: {
                        color: '#475569',
                        font: { weight: 500 }
                    },
                    grid: { color: '#E2E8F0' }
                }
            }
        },
        plugins: [ChartDataLabels]
    });

    function formatTooltip(type, value) {
        switch (type) {
            case 'percent':
                return `%${value.toLocaleString('tr-TR')}`;
            case 'currency':
                return `₺${value.toLocaleString('tr-TR')}`;
            case 'float':
                return `₺${value.toFixed(2).replace('.', ',')}`;
            default:
                return value.toLocaleString('tr-TR');
        }
    }

    $('.filter-tab').click(function () {
        $('.filter-tab').removeClass('active');
        $(this).addClass('active');

        const key = $(this).data('type');
        const dataset = datasetsMap[key];

        chart.data.datasets[0].label = dataset.label;
        chart.data.datasets[0].data = dataset.data;
        chart.update();
    });
});
