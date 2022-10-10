import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";
import "./GenreChart.css";

const PlatformCharts = ({videogames}) => {  
    function generateDataFormChart(){
      console.log(videogames);
      
      let genres = videogames.map((game) => game.genre);
      console.log("Genre", genres);
  
      let distinctGenre = [...new Set(genres)];
      console.log("Distinct Genres", distinctGenre);
      
      let genreArrays = distinctGenre.map((genre) => {
        let allGamesPerGenre = videogames.filter(
          (game) => game.genre == genre
        );
      console.log("All games per Genre", allGamesPerGenre);

        let sumOfGenreSales = allGamesPerGenre.map(
          ((e) => e.globalsales)). reduce((a,b) => a+b, 0);
          console.log("Sum of Genre Sales", sumOfGenreSales);

        return [genre, sumOfGenreSales * 1000000, "silver"]; 
      });
      console.log("Genre Arrays", genreArrays);

      const data = [
        ["Genre", "Sales", { role: "style" }],
        ...genreArrays,
      ];
      console.log("Data", data);

      return data;
    }

const options = {
  title: "Global Sales by Genre",
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