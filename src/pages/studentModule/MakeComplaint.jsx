import React from 'react'

import TopBar from '../../components/topbar/topBar';
const MakeComplaint = () => {
    return (

        <div>
        <TopBar title="Complaints"/>

        <div className="m-10">
        <form className="w-full">

          {/* First Section */}

        <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
         <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2" for="grid-state">
         Year of Study
        </label>
        <div className="relative">
        <select className="block appearance-none w-full bg-gray-100 border border-gray-100 text-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-100" id="grid-state">
          <option>Year 1</option>
          <option>Year 2</option>
          <option>Year 3</option>
          <option>Year 4</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
        </div>

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
         <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2" for="grid-state">
         Trimester
         </label>
         <div className="relative">
          <select className="block appearance-none w-full bg-gray-100 border border-gray-100 text-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-100" id="grid-state">
           <option>Trimester 1</option>
           <option>Trimester 2</option>
           <option>Trimester 3</option>
         </select>
         <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
         </div>
         </div>
         </div>

        </div>

        {/* Second Section */}

        <div className="flex flex-wrap -mx-3 mt-10 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
         <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2" for="grid-state">
         School
        </label>
        <div className="relative">
        <select className="block appearance-none w-full bg-gray-100 border border-gray-100 text-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-100" id="grid-state">
          <option>School of ICT</option>
          <option>School of Science</option>
          <option>School of Architecture</option>
          <option>School of Enginnering</option>
          <option>School of Mining</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
        </div>

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
         <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2" for="grid-state">
         Programme of Study
         </label>
         <div className="relative">
          <select className="block appearance-none w-full bg-gray-100 border border-gray-100 text-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-100" id="grid-state">
           <option>Computer Science</option>
           <option>Information Technology</option>
           <option>Computer Enginnering</option>
           <option>Information Security</option>
         </select>
         <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
         </div>
         </div>
         </div>

        </div>

        {/* Third Section */}


        <div className="flex flex-wrap -mx-3 mt-10 mb-2">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2" for="grid-city">
        Module Code
       </label>
      <input className="appearance-none block w-full bg-gray-100 text-gray-500 border border-gray-100 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-100" id="grid-city" type="text" placeholder="Eg: CSC4261"/>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2" for="grid-state">
        Module Name
      </label>
      <input className="appearance-none block w-full bg-gray-100 text-gray-500 border border-gray-100 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-100" id="grid-city" type="text" placeholder="Eg: Networking"/>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2" for="grid-zip">
        Examination Date
      </label>
      <input className="appearance-none block w-full bg-gray-100 text-gray-500 border border-gray-100 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-100" id="grid-zip" type="date" placeholder="Choose Date"/>
    </div>
  </div>

        {/* Fouth Section */}

        <div className="flex flex-wrap -mx-3 mt-10 mb-6">
        <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2" for="grid-password">
        Name of the Staff
        </label>
        <input className="appearance-none block w-full bg-gray-100 text-gray-500 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-100" id="grid-password" type="text"/>
        <p className="text-gray-400 text-xs italic">Type the name of the lecturer of that course</p>
        </div>
        </div>

        {/* Fifth Section */}

        <div className="mt-10 mb-6">
        <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2" for="grid-password">
        Reason for Appeal
        </label>
        <div className="mt-1">
        <textarea id="about" name="about" className="appearance-none block w-full bg-gray-100 text-gray-500 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-100" placeholder="Type something..." rows="8"/>
        </div>
        <p className="text-gray-400 text-xs italic">Brief description for your appeal(max 2000 words)</p>
        </div>

        {/* Sixth Section */}

        <div className="mt-10 mb-6">
        <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2">Complaint Related Doc(if any)</label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
        <div className="space-y-1 text-center">
          <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
            <path
            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            />
          </svg>

          <div className="flex text-sm text-gray-600">
          <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-500 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
           <span>Upload a file</span>
           <input id="file-upload" name="file-upload" type="file" className="sr-only" />
          </label>
          <p className="pl-1">or drag and drop</p>
           </div>
           <div>
           <p className="text-xs text-gray-500">PNG, JPG, PDF up to 1MB</p>
           </div>
        </div>
        </div>
        <p className="text-gray-400 text-xs mt-3 italic">Make sure you ulpoad the bank slip of appeal fees, if not your appeal will not be considered</p>
        </div>

        {/* Seventh Section */}

        <div className="px-4 py-3  text-right sm:px-6">
          <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Submit</button>
        </div>

      </form>
    </div>
  </div>
    )
}

export default MakeComplaint
