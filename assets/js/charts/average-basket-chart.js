$(document).ready(function () {
  const ctx = $('#averageBasketChart')[0].getContext('2d');

  const chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
      datasets: [
        {
          label: 'Aylık',
          data: [780, 420, 530, 790, 710, 600, 150, 820, 500, 740, 800, 120],
          backgroundColor: '#377DFF',
          borderRadius: 8,
          barThickness: 20
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
            label: ctx => `${ctx.dataset.label}: ${ctx.raw?.toLocaleString('tr-TR')} ₺`
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: {
            color: '#A3AED0',
            font: { size: 12, weight: 500 }
          }
        },
        y: {
          grid: { color: '#E5E7EB' },
          ticks: {
            color: '#A3AED0',
            callback: value => value.toLocaleString('tr-TR')
          }
        }
      }
    }
  });
});
