import React from 'react';

const UserListMobile = ({handleOpenModal}) => {

    return (
        <>
        <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-[#2b2b2b] dark:border-[#3d3d3d] shadow-lg rounded-sm border border-slate-200">
          <div className="px-5 py-5">
            <h1 className='font-medium text-center text-slate-700 dark:text-white'>Registry</h1>
            <h1 className='text-sm italic text-center text-slate-700 dark:text-gray-300 mb-6'>User List</h1> 
            <div className="flex justify-center items-center mb-3 md:px-0 md:pr-0.5 px-0.5 text-xs">
              <div className="relative w-full mb-4">
                <span className="absolute inset-y-0 left-0 pl-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path className='stroke-slate-400 dark:stroke-white' strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </span>
                <input
                  id="searchInput"
                  type="text"
                  placeholder="Search ID..."
                  className="bg-transparent text-xs md:text-sm border border-slate-300 text-slate-700 dark:text-white pl-8 py-1 md:py-0.5 rounded-sm w-full"
                />
              </div>            
              
            </div>

              <div className="bg-white dark:bg-[#333333] shadow-md rounded-sm mb-4">
                <div className=" text-xs font-semibold text-slate-60 bg-slate-200 dark:bg-[#212121] dark:text-white rounded-t-sm px-4 py-1.5">
                  Name:
                </div>
                <div className="px-4 py-5">
                  <div className="text-xs text-slate-600 dark:text-slate-300 my-1">Sex: </div>
                  <div className="text-xs text-slate-600 dark:text-slate-300 my-1">Place of Birth: </div>
                  <div className="text-xs text-slate-600 dark:text-slate-300 my-1">Date of Birth: </div>
                  <div className="text-xs text-slate-600 dark:text-slate-300 my-1">Mobile Number: </div>
                  <div className="text-xs text-slate-600 dark:text-slate-300 my-1">Email: </div>
                  <div className="text-xs text-slate-600 dark:text-slate-300 my-1">Verification Status: </div>
                  <div className="mt-5 flex space-x-3 justify-center">
                    <div onClick={handleOpenModal} className="flex group justify-center items-center w-full text-center px-2 py-1 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-sm mt-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-xs font-normal">&nbsp;View Full Information</span>
                    </div>
                  </div>
                </div>  
              </div>
          </div>
        </div>
        </>

    );
}
     

export default UserListMobile;