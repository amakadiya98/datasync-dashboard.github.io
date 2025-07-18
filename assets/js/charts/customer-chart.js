$(document).ready(function () {
  const ctx = $('#customerChart')[0].getContext('2d');

  const data = {
    labels: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
    datasets: [
      {
        label: 'Yeni Müşteri',
        data: [1000, 900, 2200, 2100, 2000, 2200, 2000, 1100, 900, 950, 980, 990],
        backgroundColor: '#1B69C7',
        borderRadius: 10,
        barPercentage: 0.6,
        categoryPercentage: 0.6,
        stack: 'stack1',
        barThickness: 18,
      },
      {
        label: 'Tekrarlayan Müşteri',
        data: [2800, 900, 2100, 2200, 1800, 2000, 1800, 900, 950, 900, 950, 950],
        backgroundColor: '#FFC283',
        borderRadius: 10,
        barPercentage: 0.6,
        categoryPercentage: 0.6,
        stack: 'stack1',
        barThickness: 18,
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
          label: (ctx) => `${ctx.dataset.label}: ${ctx.raw.toLocaleString('tr-TR')}`
        }
      }
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
        ticks: {
          color: '#A3AED0',
          font: {
            weight: 600
          }
        }
      },
      y: {
        stacked: true,
        grid: {
          color: '#e0e6f1'
        },
        ticks: {
          color: '#A3AED0',
          callback: (val) => val.toLocaleString('tr-TR')
        }
      }
    }
  };

  new Chart(ctx, {
    type: 'bar',
    data,
    options
  });
});
