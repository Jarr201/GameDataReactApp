import { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

const options = {
  chart: {
    title: "Regional Sale Performance",
    subtitle: "Japan, Europe, North America",
  },
  bars: "horizontal",
  hAxis: { title: "sales", minValue: 0 },
  vAxis: { title: "gametitle" },
  axes: { y: { 0: { side: "right" } } },
};

const TopFiveChart = ({ videogames }) => {
  function generateDataFormChart() {
    console.log(videogames);

    //Filter the video games by Rank
    let filteredGames = videogames.filter((game) => game.game_rank <= 5);
    console.log("Ranked Games", filteredGames);

    let orderedGames = filteredGames.sort((a, b) => a.game_rank - b.game_rank);
    console.log("Ordered by Rank", orderedGames);

    let orderedGamesNames = orderedGames.map((game) => {
      return game.name;
    });
    console.log("Names of games ordered by rank", orderedGamesNames);

    //Filter by Region: Japan
    let japanGames = orderedGames.map((game) => game.japansales * 1000000);
    console.log("Japan", japanGames);

    //Filter by Region: Europe
    let europeGames = orderedGames.map((games) => games.europesales * 1000000);
    console.log("Europe", europeGames);

    //Fliter by Region: North America
    let northAmerGames = orderedGames.map((games) => games.northamericasales * 1000000);

    console.log("North America", northAmerGames);

    let rankedGameArrays = orderedGamesNames.map((gamesNames) => {
      return [gamesNames, japanGames, europeGames, northAmerGames];
    });
    console.log("Arrays to be charted", rankedGameArrays);

    const data =
    [
        ["Game Name", "Japan", "Europe", "North America"],
        [orderedGamesNames[0], japanGames[0], europeGames[0], northAmerGames[0],],
        [orderedGamesNames[1], japanGames[1], europeGames[1], northAmerGames[1],],
        [orderedGamesNames[2], japanGames[2], europeGames[2], northAmerGames[2],],
        [orderedGamesNames[3], japanGames[3], europeGames[3], northAmerGames[3],],
        [orderedGamesNames[4], japanGames[4], europeGames[4], northAmerGames[4],],
      ]
    
    
    
    
    // [
    //   ["Name", "Japan", "Europe", "North America"],
    //   ...rankedGameArrays,
    // ];

    return data;
  }

  return (
    <div>
      <h1> Global Top Five and Region with Highest Sales </h1>
      <Chart
        chartType="Bar"
        width="100%"
        height="600px"
        data={generateDataFormChart()}
        options={options}
      />
    </div>
  );
};

export default TopFiveChart;


let obj = {name: "Wii Sports", }