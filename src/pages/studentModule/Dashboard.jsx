import React from 'react'

import TopBar from '../../components/topbar/topBar';
import Hero from '../../components/common/heroHello';
import Stats from '../../components/common/stats';
import Table from '../../components/common/table';

function Dashboard() {
    return (

        <div>
        <TopBar title="Dashboard"/>

        <div className="grid grid-cols-12 gap-x-10 m-10">

            {/* Left */}
            <div className="grid col-span-7">
                {/* Hero */}
                <Hero/>
                
                {/* Process Cards */}

                <div className="grid grid-cols-12 gap-x-7">

                    {/* leftInner */}

                    <div className="grid col-span-6 gap-y-10">

                        {/* first card */}
                        <div className="flex p-2  bg-gray-200 rounded-lg">
                            <div>
                                <svg className="w-7 h-7 mt-1" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="28" cy="28" r="28" fill="#E8CED3"/>
                                <path d="M39.0834 19.1492L36.8509 16.9167L28 25.7675L19.1492 16.9167L16.9167 19.1492L25.7675 28L16.9167 36.8508L19.1492 39.0833L28 30.2325L36.8509 39.0833L39.0834 36.8508L30.2325 28L39.0834 19.1492Z" fill="#FF2D55"/>
                                </svg>
                            </div>
                            <div className="m-2">
                                <p className="text-sm">Complaints not Process yet</p>
                                <h1 className="text-3xl mt-2 text-red-500 font-bold">78</h1>
                            </div>
                        </div>
                        {/* Second card */}

                        <div className="flex p-2  bg-gray-200 rounded-lg">
                            <div>
                                <svg className="w-7 h-7 mt-1" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="28" cy="28" r="28" fill="#E8DAC9"/>
                                <path d="M23.25 34.65L16.6 28L14.3834 30.2167L23.25 39.0833L42.25 20.0833L40.0334 17.8667L23.25 34.65Z" fill="#FF8C00"/>
                                </svg>

                            </div>
                            <div className="m-2">
                                <p className="text-sm">Complaints in Process</p>
                                <h1 className="text-3xl mt-2 text-yellow-500 font-bold">18</h1>
                            </div>
                        </div>
                    </div>

                    {/* rightInner */}
                    <div className="grid col-span-6  rounded-xl">

                        {/* first card */}

                        <div className="flex p-2  bg-gray-200 rounded-lg">
                            <div>
                            <svg className="w-7 h-7 mt-1"width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="28" cy="28" r="28" fill="#E2F5F4"/>
                            <path d="M37.5 20.0833L35.2675 17.8508L25.2292 27.8892L27.4617 30.1217L37.5 20.0833ZM44.2133 17.8508L27.4617 34.6025L20.8433 28L18.6108 30.2325L27.4617 39.0833L46.4617 20.0833L44.2133 17.8508ZM9.64917 30.2325L18.5 39.0833L20.7325 36.8508L11.8975 28L9.64917 30.2325Z" fill="#57E4C4"/>
                            </svg>


                            </div>
                            <div className="m-2">
                                <p className="text-sm">Complaints in Process</p>
                                <h1 className="text-3xl mt-2 text-green-500 font-bold">208</h1>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Right */}
            <div className="grid col-span-5 bg-blue-100 w-full  rounded-xl">
            
            <Stats/>

            </div>
        </div>


        {/* Complaint Tables */}

        <div className="m-10 ">
            <h1 className="text-xl font-bold text-blue-400 mb-7">Latest Complaints</h1>
            <Table/>
        </div>

        </div>
    )
}

export default Dashboard
