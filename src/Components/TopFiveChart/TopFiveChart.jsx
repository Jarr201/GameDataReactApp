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

    const data = [
      ["Game Name", "Japan", "Europe", "North America"],

    ];

    orderedGames.map((e) => {
      data.push([e.name, e.japansales * 1000000, e.europesales * 1000000, e.northamericasales*1000000]);
    });

    return data;
  }

  return (
    <div class="shadow p-3 mb-5 bg-white rounded">
      <h1> Global Top Five and Region with Highest Sales </h1>
      <Chart
        chartType="Bar"
        width="100%"
        height="400px"
        data={generateDataFormChart()}
        options={options}
      />
    </div>
  );
};

export default TopFiveChart;