import React, { useState } from 'react';
import { Chart } from "react-google-charts";
 
const SalesCharts = ({videogames}) => {
  
  function generateDataFormChart(){
      
    console.log(videogames);

    let filteredGames = videogames.filter(game => game.year >= 2013);
    console.log('Filtered Games', filteredGames)

    let platforms = filteredGames.map(game => game.platform)
    console.log('Platforms', platforms)

    let distinctPlatform = [...new Set(platforms)]
    console.log('Distinct Platforms', distinctPlatform)
    
    let globalsales = filteredGames.map(game => game.globalsales)
    console.log("Global Sales", globalsales)

    let distinctGlobalSales = [...new Set(globalsales)]
    console.log("Distinct Global Sales", distinctGlobalSales)

    let platformArrays = distinctPlatform.map(platform => {
      
      let allGamesForPlatform = filteredGames.filter(game => game.platform == platform);
      // let allSalesForTotalSales = filteredGames.filter(game => game.globalSales == globalsales);
      return [platform, globalsales, "silver"]
    });
    console.log("Platform Arrays", platformArrays)

    const data = [
      // [
      //   "Platform",
      //   "Sales",
      //   { role: "style" },
      //   {
      //     sourceColumn: 0,
      //     role: "annotation",
      //     type: "string",
      //     data: "stringify"
      //   },
      // ],  
      // ...platformArrays
      
      
      
      ["Platform", "Sales", {role: "style"}],
        ...platformArrays
      ];
      console.log("Data", data)
        // ["PS3", 8175000, "Pink"],
        // ["XBox 360", 3792000, "Purple"],
        // ["Wii", 2695000, "silver"],
        // ["NES", 2099000, "Teal"],
        // ["PS2", 1526000, "Black"],
      
      return data;
  }

  const options = {
    title: "Since 2013",
    width: 600,
    height: 400,
    bar: { groupWidth: "95%" },
    legend: { position: "none" },
  };

  return ( 
        <div class="shadow p-3 mb-5 bg-white rounded">
          <h1>Global Sales for Each Platform</h1>
            <Chart
              background="transparent"
              chartType="BarChart"
              width="100%"
              height="400px"
              data={generateDataFormChart()}
              options={options}
              legendToggle
            />
        </div>
     );
}
 
export default SalesCharts;