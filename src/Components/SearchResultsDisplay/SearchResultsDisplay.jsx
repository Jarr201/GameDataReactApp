import "./SearchResultsDisplay.css"
const SearchResultsDisplay = (props) => {
    
    // console.log(props.videogames)

    return (
        
        <div class="table-responsive" className="form-grid" >
            <div class="overflow-scroll">
            <table className='table table-hover' border='2px' style={{borderCollapse:'collapse'}} class="text-white bg-dark" >
                <thead>
                    <tr>
                        <th style={{color: '#FFBF46'}}>NAME</th>
                        <th>RANK</th>
                        <th>PLATFORM</th>
                        <th>YEAR</th>
                        <th>GENRE</th>
                        <th>PUBLISHER</th>
                    </tr>
                </thead>

                <tbody>
                {props.filteredVideogames.length > 0 && props.filteredVideogames.map((videogames, index) => {
                    return (
                        <tr key={index}>
                            <td>{videogames.name}</td>
                            <td>{videogames.game_rank}</td>
                            <td>{videogames.platform}</td>
                            <td>{videogames.year}</td>
                            <td>{videogames.genre}</td>
                            <td>{videogames.publisher}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default SearchResultsDisplay;