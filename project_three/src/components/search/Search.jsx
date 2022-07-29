import React, { Component } from 'react';

import style from './Search.module.css';

import SearchIcon from './SearchIcon';

class Search extends Component {
    state = {  } 
    render() { 
        return ( 
            <div className={style.search}>
                <a href="/"><SearchIcon/></a>
            </div>
         );
    }
}
 
export default Search;