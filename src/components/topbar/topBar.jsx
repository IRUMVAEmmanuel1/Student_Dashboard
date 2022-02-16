import React from 'react'
import Namepage from '../common/namePage';
import SearchBar from '../common/searchBar';
import Profile from '../common/profile';
function topBar({title}) {
    return (
        <div className="flex items-align justify-between p-5 md:px-10">
            {/* left */}
            <Namepage title={title}/>
            {/* middle */}
            <SearchBar/>
            {/* right */}
            <Profile/>
        </div>
    )
}

export default topBar
