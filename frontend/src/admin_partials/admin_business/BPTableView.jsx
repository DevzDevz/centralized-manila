import React from 'react';

const BPTableView = ({ }) => (
    <div className="relative overflow-x-auto shadow-md rounded-sm">
    <table className="w-full text-left text-xs md:text-sm rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-gray-700 border-l-4 dark:border-l-[#212121] uppercase bg-slate-200 dark:bg-[#212121] dark:text-slate-400">
          <tr>
              <th scope="col" className="px-1 py-3 text-left text-xs font-bold dark:text-gray-300 uppercase">
                  <div className="flex items-center pl-3">
                    Transaction ID
                  </div>
              </th>
              <th scope="col" className="px-1 py-3 text-left text-xs font-bold dark:text-gray-300 uppercase">
                  <div className="flex items-center">
                    Date
                  </div>
              </th>
              <th scope="col" className="px-1 py-3 text-left text-xs font-bold dark:text-gray-300 uppercase">
                  <div className="flex items-center">
                    Tax Declaration Number
                  </div>
              </th>
              <th scope="col" className="px-1 py-3 text-left text-xs font-bold dark:text-gray-300 uppercase">
                  <div className="flex items-center">
                    Property Identification Number
                  </div>
              </th>
              <th>
                {/* Actions */}
              </th>
          </tr>
      </thead>
      <tbody> 
        <tr className='bg-white border-b dark:bg-[#333333] dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-[#3d3d3d]'>
          <td className="px-1 py-2 border-l-4 border-l-[#d62d20] whitespace-nowrap text-xs md:text-sm text-slate-500 dark:text-slate-400">
            <div className="font-medium text-slate-600 whitespace-nowrap dark:text-white pl-3">
              17059267-DBB7F8193 
            </div>
          </td>
          <td className="px-1 py-2 whitespace-nowrap text-xs md:text-sm text-slate-500 dark:text-slate-400">
            January 22, 2024
          </td>
          <td className="px-1 py-2 whitespace-nowrap text-xs md:text-sm text-slate-500 dark:text-slate-400">
            AA-10088-00003
          </td>
          <td className="px-1 py-2 whitespace-nowrap text-xs md:text-sm text-slate-500 dark:text-slate-400">
            678-92-121-212-122
          </td>
          <td className="py-1 whitespace-nowrap">
            <div className="flex justify-center gap-4 px-2">
              <div className="group cursor-pointer flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-500 hover:text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
            </div>
          </td>
        </tr>


        
      </tbody>
    </table>
  </div>
);

export default BPTableView;