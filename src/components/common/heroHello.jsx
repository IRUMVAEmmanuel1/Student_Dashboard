import React from 'react'
import Profile from '../../assets/charles.jpg'
const heroHello = () => {
    return (
        <div className="flex items-center justify-around mb-10 bg-blue-100 w-full h-44 rounded-xl">
                    <div className="">
                    <h1 className="text-xl text-blue-600 pb-2">Good Morning John!</h1>
                    <p className=" text-sm text-blue-400">Last Login: Tuesday, December 22, 2021</p>
                    </div>
                    <img src={Profile} className="w-32 h-32 object-cover rounded-full" alt="Profile"/>
        </div>
    )
}

export default heroHello
