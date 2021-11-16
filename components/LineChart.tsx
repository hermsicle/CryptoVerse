import React from 'react'
import { Line } from 'react-chartjs-2'

const LineChart = () => {

  const coinPrice = []
  const coinTimeStamp = []

  const data = {
    labels: ['', '', '', '', ''],
    datasets: [
      {
        label: "Price in USD",
        data: [1,2,3,4,5,6],
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd'
      }
    ]
  }

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true 
          }
        }
      ]
    }
  }

  return (
    <div>
      {/* <Line data={data} options={options} className="line-chart"/> */}
    </div>
  )
}

export default LineChart
