import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";
import "./PlatformChart.css";

const PlatformCharts = ({videogames}) => {  
    function generateDataFormChart(){
      console.log(videogames);
      
    //   let filteredGames = videogames.filter((game) => game.globalsales >= 2013);
    //   console.log('Filtered Games', filteredGames);

    //   let orderedGames = filteredGames.sort((a, b) => b.globalsales - a.globalsales) 
    //   console.log('Order', orderedGames);

    //   let distinctGameNames = orderedGames.map((game) => {
    //     return game.platform;
    //   });
    //   console.log("Games ordered by Platform Sales", distinctGameNames);

    //   let globalGames = orderedGames.map((game) => game.globalsales * 1000000);
    //   console.log("Global", globalGames);

    //   let globalGameArrays = distinctGameNames.map((gamePlatforms) => {
    //     return [gamePlatforms, globalGames];
    //   });
    //   console.log("Arrays to be charted", globalGameArrays)

      const data = [
        ["Publisher", "Sales"],
        // [distinctGameNames[0], globalGames[0],],
        // [distinctGameNames[1], globalGames[1],],
        // [distinctGameNames[2], globalGames[2],],
        // [distinctGameNames[3], globalGames[3],],
        // [distinctGameNames[4], globalGames[4],],
        ["PlayStation 2", 1220000000],
        ["Xbox 360", 960000000],
        ["PlayStation 3", 938000000],
        ["Nintendo Wii", 900000000],
        ["Nintendo DS", 761000000],
        ["PlayStation", 709000000],
        ["Game Boy Advance", 301000000],
        ];
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

export default PlatformCharts;