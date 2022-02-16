import React from 'react'
import{BellIcon,MailIcon} from '@heroicons/react/solid';
import Profile from '../../assets/charles.jpg'
function profile() {
    return (
        <div className="flex items-center space-x-7">
            
            <div className="p-2 bg-blue-100 text-gray-600 rounded-lg cursor-pointer">
                <BellIcon className="h-6"/>
            </div>

            <div className="p-2 bg-blue-100 text-gray-600 rounded-lg cursor-pointer">
                <MailIcon className="h-6"/>
            </div>

                <div className="flex items-center space-x-1  p-2 bg-blue-100 text-gray-600 rounded-lg cursor-pointer">
                    <img src={Profile} alt="" className=" w-6 h-6 object-cover rounded-full "/>
                    <h5>Uwimana</h5>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>       
                </div>
            </div>
    )
}

export default profile
