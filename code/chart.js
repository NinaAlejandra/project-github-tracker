//DOM-selector for the canvas 👇
const ctx = document.getElementById('chart').getContext('2d')

//"Draw" the chart here 👇
const drawChart = (amount) => {
    const config = {
        type: 'doughnut',
        data: {
        labels: [
        'Finished Projects',
        'Projects Left'
        ],
        datasets: [{
        label: 'My First Dataset',
        data: [amount, 20-amount],
        backgroundColor: [
            '#AD5D4E',
            '#218380'
        ],
        hoverOffset: 4
      }]
    }, 
  }

  const myChart = new Chart(ctx, config)
}