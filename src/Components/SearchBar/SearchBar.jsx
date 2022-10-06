import React, {useState} from 'react';
import './SearchBar.css';

const SearchBar = (props) => {

    // console.log(props.videogames)

    const [search_term, setSearchTerm] = useState('');
   
    function handleSubmit(event) {
        event.preventDefault();
        console.log(search_term)
        props.submittedSearchTerm(search_term)
    };

    return (
        <form className='searchbar' onSubmit={handleSubmit}>
            <input type='text' value={search_term} placeholder="...title" onChange={(event) => setSearchTerm(event.target.value)}/>
            <input type='submit' value="Search"/>
        </form>
    );
}
 
export default SearchBar;