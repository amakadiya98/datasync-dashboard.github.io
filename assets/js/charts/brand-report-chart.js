document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('brandReportChart').getContext('2d');

  const labels = ['Munchkin', 'Google', 'Nilky', 'Playtex', 'Diğer'];

  const datasetColors = [
    '#1B69C7', '#FFC283', '#023E7D', '#CCD8E5', '#8970BD',
    '#F4705D', '#EB749E', '#7A9966', '#F68E52', '#BA0081'
  ];

  const brandData = [
    [50, 70, 40, 90, 110, 120, 80, 60, 100, 90],
    [40, 60, 50, 80, 100, 110, 70, 50, 90, 80],
    [30, 50, 30, 70, 90, 100, 60, 40, 80, 70],
    [20, 40, 20, 60, 80, 90, 50, 30, 70, 60],
    [10, 30, 10, 50, 70, 80, 40, 20, 60, 50],
  ];

  const datasets = datasetColors.map((color, i) => ({
    label: `10. Hafta ${i + 1}`,
    data: brandData.map(row => row[i]),
    backgroundColor: color,
    stack: 'combined',
    barThickness: 30,
    borderRadius: 4
  }));

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => `${ctx.dataset.label}: ${ctx.raw}M`
          }
        }
      },
      scales: {
        x: {
          stacked: true,
          beginAtZero: true,
          ticks: {
            callback: value => `${value}M`
          }
        },
        y: {
          stacked: true
        }
      }
    }
  });
});