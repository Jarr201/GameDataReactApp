
const SearchResultsDisplay = (props) => {
    
    // console.log(props.videogames)

    return (
        
        <div class="table-responsive">
            <table className='table table-hover' border='2px' style={{'borderCollapse':'collapse'}}>
                <thead>
                    <tr>
                        <th>NAME</th>
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
    )
}

export default SearchResultsDisplay;