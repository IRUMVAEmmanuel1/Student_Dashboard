import React from 'react'

function searchBar() {
    return (
        <div className="hidden md:flex items-center w-4/12 rounded-lg bg-gray-100">
                <input className=" pl-5 pr-5 bg-gray-100 outline-none w-full text-gray-600 placeholder-gray-300" type="text" placeholder="Start your search..."/>
        </div>
    )
}

export default searchBar
