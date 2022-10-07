import React, { useState } from 'react';
import { Chart } from "react-google-charts";
 
const SalesCharts = ({videogames}) => {
  
  function generateDataFormChart(){
    console.log(videogames);

    let filteredGames = videogames.filter((game) => game.globalsales);
    console.log('Filtered Games', filteredGames);

    let orderedGames = filteredGames.sort((a, b) => b.globalsales - a.globalsales)
    console.log('Order', orderedGames);
    
    let distinctGameNames = orderedGames.map((game) => {
      return game.genre;
    });
    console.log("Games ordered by Global Sales", distinctGameNames);

    let globalGames = orderedGames.map((game) => game.globalsales * 1000000);
    console.log("Global", globalGames);

    let globalGameArrays = distinctGameNames.map((gameGenres) => {
      return [gameGenres, globalGames];
    });
    console.log("Arrays to be charted", globalGameArrays);
    // let distinctPlatform = [...new Set(platforms)]
    // console.log('Distinct Platforms', distinctPlatform)
    
    // let globalsales = filteredGames.map((game) => game.globalsales)
    // console.log("Global Sales", globalsales)

    // let distinctGlobalSales = [...new Set(globalsales)]
    // console.log("Distinct Global Sales", distinctGlobalSales)

    // let platformArrays = distinctPlatform.map(platform => {
      
    //   let allGamesForPlatform = filteredGames.filter(game => game.platform == platform);
    //   // let allSalesForTotalSales = filteredGames.filter(game => game.globalSales == globalsales);
    //   return [platform, globalsales, "silver"]
    // });
    // console.log("Platform Arrays", platformArrays)

    const data = [
      ["Genre Names", "Global Sales"],
      [distinctGameNames[0], globalGames[0],],
      [distinctGameNames[1], globalGames[1],],
      [distinctGameNames[2], globalGames[2],],
      [distinctGameNames[3], globalGames[3],],
      [distinctGameNames[4], globalGames[4],],
      // [distinctPlatformNames[5], platformSales[5],],
      // [distinctPlatformNames[6], platformSales[6],],
      // [distinctPlatformNames[7], platformSales[7],],
      // [distinctPlatformNames[8], platformSales[8],],
      // [distinctPlatformNames[9], platformSales[9],],
      // [distinctPlatformNames[10], platformSales[10],],
    ]
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
      
      
      
      // ["Platform", "Sales", {role: "style"}],
      //   ...platformArrays
      // ];
      // console.log("Data", data)
        // ["PS3", 8175000, "Pink"],
        // ["XBox 360", 3792000, "Purple"],
        // ["Wii", 2695000, "silver"],
        // ["NES", 2099000, "Teal"],
        // ["PS2", 1526000, "Black"],
      
      return data;
  }

  const options = {
    chart: {
      title: "Global Sales for Top 5 Game Genres",
      subtitle: "as of 2016",
      legend: { position: "none" }
    },
  };

  return ( 
        <div class="shadow p-3 mb-5 bg-white rounded">
          <h1></h1>
            <Chart
              // background="transparent"
              chartType="Bar"
              width="100%"
              height="400px"
              data={generateDataFormChart()}
              options={options}
            />
        </div>
     );
}
 
export default SalesCharts;