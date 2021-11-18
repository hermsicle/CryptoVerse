import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

type History = {
  date: number,
  $: number
}

const LineChart = ({ history }: any) => {
  const chartData = history?.Data
  const data: [] = []
  // console.log(chartData)

  chartData.map((d: any) => {
    const historyObj: History = {date: d.time, $: d.open}
    return data.push(historyObj)
  })

  return (
    <div className="chart-container">
    <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
          >
          <XAxis dataKey="date" allowDecimals tickLine={false}/>
          <YAxis tickLine={false} tickCount={10}/>
          <Tooltip />
          <Area type="monotone" dataKey="$" stroke="#c9c8c8" fill="#100a7da9" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default LineChart
