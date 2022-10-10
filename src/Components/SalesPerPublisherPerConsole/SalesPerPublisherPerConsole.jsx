import { Chart } from "react-google-charts";

const options = {
  chart: {
    title: "Publisher Sales by Console ",
    subtitle: "something subtitle",
  },
  bars: "horizontal",
  hAxis: { title: "sales", minValue: 0 },
  vAxis: { title: "gametitle" },
  axes: { y: { 0: { side: "right" } } },
  colors: [
    "#000000",
    "#FFBF46",
  ],
};

const salesPerPublisherPerConsole = ({ videogames }) => {
  function generateDataFormChart() {
    console.log("SalesPPPC", videogames);

    let topSellers = videogames.filter((g) => g.globalsales >=10);
    console.log("Over Ten Million in Sales", topSellers);

    let publishers = topSellers.map((g) => g.publisher);
    console.log("Publishers", publishers);

    let distinctPublisher = [...new Set(publishers)];
    console.log("Distinct Publishers", distinctPublisher);

    let publisherArrays = distinctPublisher.map((publisher) => {
      let allGamesPerPlatform = videogames.filter(
        (game) => game.publisher == publisher
      );
      console.log("All games per Platform", allGamesPerPlatform);

      let sumOfPlatformSales = allGamesPerPlatform
        .map((e) => e.globalsales)
        .reduce((a, b) => a + b, 0);
      console.log("Sum of Platform Sales", sumOfPlatformSales);

      return [publisher, sumOfPlatformSales];
    });
    console.log("Publisher arrays", publisherArrays);

    const data = [
      [
        "Publisher",
        "Console",
      ],
      ...publisherArrays,
    ];
    console.log("Data", data);
    // publishers.map((e) => {
    //   data.push([e.publisher, e.globalsales]);
    // });

    return data;
  }
  return (
    <div class="shadow p-3 mb-5 bg-white rounded">
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

export default salesPerPublisherPerConsole;