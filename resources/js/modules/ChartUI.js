import Chart from 'chart.js';

export default class ChartUI {
  constructor() {
    this.canvas = document.querySelector('#myChart');
    this.ctx = this.canvas.getContext('2d');

    this.chart = new Chart(this.ctx, {
      type: 'doughnut',

      // The data for our dataset
      data: {
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: [
              'rgb(255,0,0)',
              'rgb(0,255,0)',
              'rgb(0,0,255)',
              'rgb(0,0,0)',
            ],
            borderColor: '#fff',
            data: [40, 30, 20, 10],
          },
        ],
      },

      // Configuration options go here
      options: {
        tooltips: {
          enabled: false,
        },
        animation: {
          duration: 2000,
        },
      },
    });

    this.init();
  }

  init() {}
}
