import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";
import "./GenreChart.css";

const genreCharts = ({videogames}) => {  
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
  title: "Global Sales by Genre\nWhich Genres are the most popular?",
  is3D: true,
  colors: ['#11151C', '#212D40', '#364156', '#7D4E57', '#D66853', '#F2542D', '#CA2E55', '#FF715B', '#D0CCD0', '#BF1A2F', '#D5CFE1', '#B8336A']
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

export default genreCharts;