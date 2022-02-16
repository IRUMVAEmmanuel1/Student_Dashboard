import React from 'react'

function namePage({title}) {
    return (
            <div className="relative flex items-center cursor-pointer my-auto">
                <h2 className="text-3xl font-bold text-blue-500">{title}</h2>
            </div>
    )
}

export default namePage
