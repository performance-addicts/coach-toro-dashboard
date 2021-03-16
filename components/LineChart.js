
import React from 'react'
import Chart from "react-google-charts";

function LineChart ({ data }) {
  return (
    <Chart
    width={'320px'}
    height={'200px'}
    chartType="LineChart"
    loader={<div>Loading</div>}
    data={data}
    options={{
        series: {
        1: { curveType: 'function' },
        },
    }}
    />
  )
}


export default LineChart
