import React, { useState } from 'react';
import { Chart } from "react-google-charts";


const SalesCharts = (props) => {
    return ( 
        <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
     );
}
 
export default SalesCharts;