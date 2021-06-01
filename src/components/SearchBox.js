import React from 'react';

const SearchBox =({ searchChange}) =>{
    return(
        <div className="pa2">
            <input className="pa3 b3 b--green bg-lightest-blue"type="search" placeholder="Search Robots" 
            onChange={searchChange}/*any time searchbox changes it calls this searchChange function. */
            /*searchChange is a prop and event will be triggered by onChangeSearch function of app.js function*/
            /*now app.js (parent) has value of search so it can directly communicate with CardList.js which is another child of app.js */
            />
        </div>
    );
}
export default SearchBox;