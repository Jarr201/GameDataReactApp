import React, { useState } from "react";
import { Chart } from "react-google-charts";

const SalesCharts = ({ videogames }) => {
  function generateDataFormChart() {
    console.log(videogames);

    let filteredGames = videogames.filter((game) => game.year >= 2013);
    console.log("Filtered Games", filteredGames);

    let platforms = filteredGames.map((game) => game.platform);
    console.log("Platforms", platforms);

    let distinctPlatform = [...new Set(platforms)];
    console.log("Distinct Platforms", distinctPlatform);

    let platformArrays = distinctPlatform.map((platform) => {
      let allGamesForPlatform = filteredGames.filter(
        (game) => game.platform == platform
      );
      console.log("What does it look like", allGamesForPlatform);

      let sumOfGlobalSales = allGamesForPlatform.map(
        ((element) => element.globalsales)).reduce((a, b) => a + b, 0);
      console.log("How about dees", sumOfGlobalSales);

      return [platform, sumOfGlobalSales * 1000000, "silver"];
    });
    console.log("Platform Arrays", platformArrays);

    const data = [
      ["Platform", "Sales", { role: "style" }],
      ...platformArrays,
    ];
    console.log("Data", data);

    return data;
  }

  const options = {
    title: "Top Console Global Sales",
    is3D: true,
  };

  return ( 
    <Chart class="shadow p-3 mb-5 bg-white rounded" 
      chartType="PieChart"
      data={generateDataFormChart()}
      options={options}
      width={"100%"}
      height={"400px"}
    />
     );
}
 
export default SalesCharts;
