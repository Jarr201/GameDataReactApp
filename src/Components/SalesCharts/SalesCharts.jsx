import React, { useState } from "react";
import { Chart } from "react-google-charts";

const SalesCharts = ({ videogames }) => {
  function generateDataFormChart() {
    console.log(videogames);

    let filteredGames = videogames.filter((game) => game.year >= 2013);
    console.log("Filtered Games", filteredGames);

    // let sumGlobalsales = filteredGames.reduce(function(sum, item) {return sum + item.globalsales}, 0);
    //   console.log("Test Global Sales", sumGlobalsales)

    let platforms = filteredGames.map((game) => game.platform);
    console.log("Platforms", platforms);

    let distinctPlatform = [...new Set(platforms)];
    console.log("Distinct Platforms", distinctPlatform);

    // let allPS3 = filteredGames.filter((p) => p.platform == "PS3");
    // console.log("PS3", allPS3);

    // let sumOfPS3Sales = allPS3.reduce((sum, sales) => {
    //   return sum + sales.globalsales;
    // }, 0);
    // console.log("All PS3 sales", sumOfPS3Sales);

    // let globalsales = filteredGames.map((game) => game.globalsales);
    // console.log("Global Sales", globalsales);

    // let distinctGlobalSales = [...new Set(globalsales)];
    // console.log("Distinct Global Sales", distinctGlobalSales);

    let platformArrays = distinctPlatform.map((platform, element) => {
      let allGamesForPlatform = filteredGames.filter(
        (game) => game.platform == platform
      );
      console.log("What does it look like", allGamesForPlatform);

      let sumOfGlobalSales = allGamesForPlatform.map(
        ((element) => element.globalsales)).reduce((a, b) => a + b, 0);
      console.log("How about dees", sumOfGlobalSales);
      // let sum = 0;
      // let sumofGlobalsales = allGamesForPlatform.forEach(myFunction);
      //   function myFunction(item) {
      //     sum += item;
      //   }

      // let allSalesForTotalSales = filteredGames.filter(game => game.globalSales == globalsales);
      return [platform, sumOfGlobalSales, "silver"];
    });
    console.log("Platform Arrays", platformArrays);

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

      ["Platform", "Sales", { role: "style" }],
      ...platformArrays,
    ];
    console.log("Data", data);
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
};

export default SalesCharts;
