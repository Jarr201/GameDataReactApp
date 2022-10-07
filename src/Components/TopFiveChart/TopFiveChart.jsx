import { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';

const options = {
        chart: {
            title: "Regional Sale Performance",
            subtitle: "Japan, Europe, North America",
        },
    };


const TopFiveChart = ({videogames}) => {
    
    function generateDataFormChart(){

        console.log(videogames);

        //Filter the video games by Rank
        let filteredGames = videogames.filter(game => game.game_rank <= 5);
        console.log("Ranked Games", filteredGames)

        let orderedGames = filteredGames.sort((a, b) => a.game_rank - b.game_rank);
        console.log("Ordered by Rank", orderedGames);

        let orderedGamesNames = orderedGames.map(game => {
            return game.name
        });
        console.log("Names of games ordered by rank", orderedGamesNames)
        //Filter by Region: Japan
        let japanGames = orderedGames.filter(game => game.japansales);
        console.log("Japan", japanGames)

        //Filter by Region: Europe
        let europeGames = orderedGames.filter(games => games.europesales);
        console.log("Europe", europeGames)

        //Fliter by Region: North America
        let northAmerGames = orderedGames.filter(games => games.northamericasales);
        console.log("North America", northAmerGames)

        let rankedGameArrays = orderedGamesNames.map(gamesNames => {
            return [gamesNames, 100, 260, 87]
        });
        console.log("Arrays to be charted", rankedGameArrays)

        const data = [
            ["Name", "Japan", "Europe", "North America"],
            ...rankedGameArrays

          ];
        
        return data


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
}

export default TopFiveChart;