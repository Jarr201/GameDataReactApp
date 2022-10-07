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
        // <form className='searchbar' onSubmit={handleSubmit}>
        //     <input type='text' value={search_term} placeholder="...title" onChange={(event) => setSearchTerm(event.target.value)}/>
        //     <input type='submit' value="Search"/>
        // </form>
        <form className='searchbar' onSubmit={handleSubmit} class="d-flex">
        <input class="form-control me-sm-2" value={search_term} type="text" placeholder="Title" onChange={(event) => setSearchTerm(event.target.value)} />
        <input class="btn btn-secondary my-2 my-sm-0" type='submit' value="Search" />
        {/* <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button> */}
      </form>
    );
}
 
export default SearchBar;