$(document).ready(function () {
    const ctx = $('#inventoryCostChartCategory')[0].getContext('2d');

    const labels = ['Badem Süt', 'Badem Süt', 'Badem Süt', 'Badem Süt', 'Badem Süt', 'Badem Süt', 'Badem Süt', 'Badem Süt', 'Badem Süt', 'Badem Süt' ];

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Maliyet',
                data: [18000000, 17900000, 17850000, 18100000, 18200000, 18000000, 19850000, 21100000, 22200000, 21000000],
                backgroundColor: '#FFC283',
                barThickness: 20,
                borderRadius: 8,
                yAxisID: 'y',
            },
            {
                label: 'Stok',
                data: [6000000, 5800000, 5700000, 5900000, 6100000, 6000000, 6700000, 6900000, 7100000, 5000000],
                backgroundColor: '#1B69C7',
                barThickness: 20,
                borderRadius: 8,
                yAxisID: 'y1',
            },
        ]
    };

    const options = {
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
                    font: { size: 12, weight: 600 },
                    usePointStyle: true,
                    pointStyle: 'rectRounded',
                    color: '#1B2559'
                }
            },
            tooltip: {
                callbacks: {
                    label: ctx => {
                        const value = ctx.raw.toLocaleString('tr-TR');
                        return `${ctx.dataset.label}: ${value}`;
                    }
                }
            }
        },
        scales: {
            x: {
                stacked: false,
                grid: { color: '#E2E8F0' },
                ticks: {
                    color: '#94A3B8',
                    font: { size: 12, weight: 500 }
                },
            },
            y: {
                type: 'linear',
                position: 'left',
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Stok',
                    color: '#B5B5B5',
                },
                ticks: {
                    color: '#B5B5B5',
                    callback: val => `${(val / 1000000).toFixed(0)}M`
                },
                grid: { color: '#F1F5F9' }
            },
            y1: {
                type: 'linear',
                position: 'right',
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Maliyet',
                    color: '#B5B5B5',
                },
                ticks: {
                    color: '#B5B5B5',
                    callback: val => `${(val / 1000).toFixed(0)}K`
                },
                grid: { drawOnChartArea: false }
            }
        }
    };

    new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });

    $('.inventory-cost-container-category .tab').click(function () {
        $('.inventory-cost-container-category .tab').removeClass('active');
        $(this).addClass('active');

        const type = $(this).data('type');
        if (type === 'graph') {
            $('#inventoryGraphViewCategory').show();
            $('#inventoryTableViewCategory').hide();
        } else {
            $('#inventoryGraphViewCategory').hide();
            $('#inventoryTableViewCategory').show();
        }
    });
});
