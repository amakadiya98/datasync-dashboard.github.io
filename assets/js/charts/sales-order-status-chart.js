$(document).ready(function () {
    const ctx = $('#orderChart')[0].getContext('2d');

    const gradientOrange = ctx.createLinearGradient(0, 0, 0, 400);
    gradientOrange.addColorStop(0.066, 'rgba(255, 194, 131, 0.2)');
    gradientOrange.addColorStop(0.9967, 'rgba(255, 194, 131, 0)');

    const gradientBlue = ctx.createLinearGradient(0, 0, 0, 400);
    gradientBlue.addColorStop(0.0065, 'rgba(27, 105, 199, 0.2)');
    gradientBlue.addColorStop(1, 'rgba(27, 105, 199, 0)');

    const labels = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];

    const datasetMap = {
        satis: [250000, 200000, 150000, 270000, 260000, 170000, 220000, 260000, 200000, 180000, 240000, 280000],
        siparis: [150000, 140000, 130000, 170000, 160000, 150000, 170000, 180000, 160000, 140000, 180000, 190000],
        gelir: [300000, 290000, 270000, 310000, 280000, 260000, 280000, 290000, 270000, 260000, 280000, 300000]
    };

    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Önceki',
                    data: [400000, 350000, 300000, 370000, 320000, 300000, 330000, 400000, 320000, 310000, 360000, 420000],
                    borderColor: '#1B69C7',
                    backgroundColor: gradientBlue,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 0,
                    pointBackgroundColor: '#1B69C7'
                },
                {
                    label: 'Güncel',
                    data: datasetMap['satis'],
                    borderColor: '#F2B889',
                    backgroundColor: gradientOrange,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 0,
                    pointBackgroundColor: '#F2B889'
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
                    callbacks: {
                        label: ctx => `${ctx.dataset.label}: ${Math.round(ctx.raw / 1000)}K`
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: value => `${value / 1000}K`
                    },
                    grid: { color: '#E2E8F0' }
                },
                x: {
                    grid: { display: false }
                }
            }
        }
    });


    $('.custom-dropdown').on('click', function (e) {
        e.stopPropagation();
        const wrapper = $(this).closest('.custom-dropdown-wrapper');
        const menu = wrapper.find('.dropdown-menu');
        $('.dropdown-menu').not(menu).hide(); 
        menu.toggle();
    });

    $('.dropdown-menu li').on('click', function () {
        const key = $(this).data('key');
        const label = $(this).text();
        const wrapper = $(this).closest('.custom-dropdown-wrapper');

        wrapper.find('.dropdown-label').text(label);

        if (key in datasetMap) {
            chart.data.datasets[1].label = label;
            chart.data.datasets[1].data = datasetMap[key];
            chart.update();
        }

        wrapper.find('.dropdown-menu').hide();
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.custom-dropdown-wrapper').length) {
            $('.dropdown-menu').hide();
        }
    });

    $('#exportExcel').click(function () {
        alert("Export to Notes/PDF coming soon.");
    });
});
