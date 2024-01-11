import React, { useState } from 'react';

import { useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom
import AdminSidebar from '../admin_partials/AdminSidebar';
import AdminHeader from '../admin_partials/AdminHeader';
import AdminFooter from '../admin_partials/AdminFooter';
import AdminRPTaxClearanceModal from '../admin_partials/admin_modals/AdminRPTaxClearanceModal';
import AdminRPTaxPaymentModal from '../admin_partials/admin_modals/AdminRPTaxPaymentModal';
import AdminRPTaxRejectModal from '../admin_partials/admin_modals/AdminRPTaxRejectModal';

const AdminRPTaxForm =()=>{

  const location = useLocation();
  const { pathname, state } = location;
  console.log("pathname", pathname);
  const admin_type = pathname.split("/")[2];

  console.log("userrole", admin_type)

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const logoSrc = '../src/images/mnl_footer.svg';

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
      setIsModalOpen(true);
    }
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleProcessSubmit = () => {
    setIsModalOpen(false);
  };

  const handleProcessModal = (event) => {
    event.stopPropagation();
    console.log('Processing')
  };

  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const handleOpenModal2 = () => {
      setIsModalOpen2(true);
    }
  const handleCloseModal2 = () => {
    setIsModalOpen2(false);
  };
  const handleProcessSubmit2 = () => {
    setIsModalOpen2(false);
  };

  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const handleOpenModal3 = () => {
      setIsModalOpen3(true);
    }
  const handleCloseModal3 = () => {
    setIsModalOpen3(false);
  };
  const handleReject = () => {
    setIsModalOpen3(false);
  };
  

  return (
    <div className="flex h-screen overflow-hidden dark:bg-[#212121]">

      {/* AdminSidebar */}
      <AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <AdminHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/*  Contents Area */}
        <main className="overflow-y-auto">
          {/*  Banner */}
          <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-[#2b2b2b] dark:border-[#3d3d3d] shadow-sm rounded-sm border border-slate-200 mx-4 my-4">
            <div className="px-5 py-5">
              <h1 className="font-medium text-center text-slate-700 dark:text-white">Real Property Tax</h1>
              <h1 className="mb-7 text-sm italic text-center text-slate-700 dark:text-gray-300">Transactions</h1>

              <div className="flex items-center justify-center space-x-6 text-xs">
                <div className="flex items-center">
                  <div className="w-4 h-1 mr-2 bg-blue-500"></div>
                  <p className="text-slate-700 dark:text-white">Tax Clearance</p>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-1 mr-2 bg-[#0057e7]"></div>
                  <p className="text-slate-700 dark:text-white">Tax Payment</p>
                </div>
              </div>
            </div>
          </div>

          {/*  Two Sections */}
          <div className="grid grid-cols-12 gap-4 mx-4 my-4">
            {/*  Requests Area */}
            <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-[#2b2b2b] dark:border-[#3d3d3d] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2)] rounded-sm border border-slate-200">
              <div className="px-5 py-5">
                <h1 className='font-medium text-center text-slate-700 dark:text-white mb-4'>Requests</h1>

                {/* Search */}
                <div className="flex items-center text-xs mb-7">
                  <div className="relative w-full">
                    <span className="absolute inset-y-0 left-0 pl-2 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path className='stroke-slate-400 dark:stroke-white' strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                      </svg>
                    </span>
                    <input id="searchInput" type="text" placeholder="Search ID..." className="bg-transparent text-xs md:text-sm w-full border border-slate-300 text-slate-700 dark:text-white pl-8 py-1 md:py-0.5 rounded-sm"/>
                  </div>
                </div>

                {/* Contents */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-4">
                  {/* Tax Clearance Sample */}
                  <div onClick={handleOpenModal} className="cursor-pointer bg-white dark:bg-[#333333] shadow-[0_4px_10px_-1px_rgba(0,0,0,0.14)] dark:shadow-[0_4px_10px_-1px_rgba(0,0,0,0.2)] rounded-sm flex flex-col">
                    <div className="text-xs font-semibold border-t-4 border-blue-500 text-slate-60 bg-slate-200 dark:bg-[#212121] dark:text-white rounded-t-sm px-4 py-1.5">
                      Transaction ID:
                    </div>

                    <div className="flex-grow px-4 pt-5 pb-4">
                      <div className="text-xs text-slate-600 dark:text-slate-300 my-1">Type: Tax Clearance</div>
                      <div className="text-xs text-slate-600 dark:text-slate-300 my-1">TDN: </div>
                      <div className="text-xs text-slate-600 dark:text-slate-300 my-1">PIN:   </div>
                      <div className="text-xs text-slate-600 dark:text-slate-300 my-1">Date Processed:   </div>
                      <div className="text-xs text-slate-600 dark:text-slate-300 my-1">Time Processed:   </div>
                      <div className="flex justify-start items-center text-xs text-slate-600 dark:text-slate-300 my-1">
                        <span>Status:</span>
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-300 my-1">Amount Paid: P</div>
                    </div>

                    <div className="px-4 pb-5 space-x-4 flex justify-between items-center group">
                      <div onClick={handleProcessModal} className="flex justify-center items-center text-center cursor-pointer p-1 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white rounded-sm mt-2 flex-grow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                        <span className="text-xs font-normal">&nbsp;Expired</span>
                      </div>
                      <div onClick={handleProcessModal} className="flex justify-center items-center text-center cursor-pointer p-1 border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white rounded-sm mt-2 flex-grow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        <span className="text-xs font-normal">&nbsp;Process</span>
                      </div>
                    </div>
                  </div>
                  {/* Tax Payment Sample */}  
                  <div className="bg-white dark:bg-[#333333] shadow-[0_4px_10px_-1px_rgba(0,0,0,0.14)] dark:shadow-[0_4px_10px_-1px_rgba(0,0,0,0.2)] rounded-sm flex flex-col">
                    <div className="text-xs font-semibold text-slate-60 border-t-4 border-[#0057e7] bg-slate-200 dark:bg-[#212121] dark:text-white rounded-t-sm px-4 py-1.5">
                      Transaction ID:
                    </div>

                    <div className="flex-grow px-4 pt-5 pb-4">
                      <div className="text-xs text-slate-600 dark:text-slate-300 my-1">Type: Tax Payment</div>
                      <div className="text-xs text-slate-600 dark:text-slate-300 my-1">Account Name:   </div>
                      <div className="text-xs text-slate-600 dark:text-slate-300 my-1">TDN: </div>
                      <div className="text-xs text-slate-600 dark:text-slate-300 my-1">PIN:   </div>
                      <div className="text-xs text-slate-600 dark:text-slate-300 my-1">From:   </div>
                      <div className="text-xs text-slate-600 dark:text-slate-300 my-1">To:   </div>
                      <div className="text-xs text-slate-600 dark:text-slate-300 my-1">Date Processed:   </div>
                      <div className="text-xs text-slate-600 dark:text-slate-300 my-1">Time Processed:   </div>
                      <div className="flex justify-start items-center text-xs text-slate-600 dark:text-slate-300 my-1">
                        <span>Status:</span>
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-300 my-1">Amount Paid: P</div>
                    </div>

                    <div className="px-4 pb-5 space-x-4 flex justify-between items-center group">
                      <div className="flex justify-center items-center text-center cursor-pointer p-1 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white rounded-sm mt-2 flex-grow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                        <span className="text-xs font-normal">&nbsp;Expired</span>
                      </div>
                      <div onClick={handleOpenModal} className="flex justify-center items-center text-center cursor-pointer p-1 border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white rounded-sm mt-2 flex-grow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        <span className="text-xs font-normal">&nbsp;Process</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*  Processing Area */}
            <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-[#2b2b2b] dark:border-[#3d3d3d] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2)] rounded-sm border border-slate-200">
              <div className="px-5 py-5">
                <h1 className='font-medium text-center text-slate-700 dark:text-white mb-4'>Processing Section</h1>

                {/* Search */}
                <div className="flex items-center text-xs mb-7">
                  <div className="relative w-full">
                    <span className="absolute inset-y-0 left-0 pl-2 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path className='stroke-slate-400 dark:stroke-white' strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                      </svg>
                    </span>
                    <input id="searchInput" type="text" placeholder="Search ID..." className="bg-transparent text-xs md:text-sm w-full border border-slate-300 text-slate-700 dark:text-white pl-8 py-1 md:py-0.5 rounded-sm"/>
                  </div>
                </div>

                {/* Contents */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-4">
                  {/* Tax Clearance Sample */}
                  <div className="bg-white dark:bg-[#333333] shadow-[0_4px_10px_-1px_rgba(0,0,0,0.14)] dark:shadow-[0_4px_10px_-1px_rgba(0,0,0,0.2)] rounded-sm flex flex-col">
                    <div className="text-xs font-semibold border-t-4 border-blue-500 text-slate-60 bg-slate-200 dark:bg-[#212121] dark:text-white rounded-t-sm px-4 py-1.5">
                      Transaction ID:
                    </div>

                    <div className="flex-grow px-4 pt-5 pb-4">
                      <div className="text-xs text-slate-600 dark:text-slate-300 my-1">Type: Tax Clearance</div>
                      <div className="text-xs text-slate-600 dark:text-slate-300 my-1">TDN: </div>
                      <div className="text-xs text-slate-600 dark:text-slate-300 my-1">PIN:   </div>
                      <div className="text-xs text-slate-600 dark:text-slate-300 my-1">Date Processed:   </div>
                      <div className="text-xs text-slate-600 dark:text-slate-300 my-1">Time Processed:   </div>
                      <div className="flex justify-start items-center text-xs text-slate-600 dark:text-slate-300 my-1">
                        <span>Status:</span>
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-300 my-1">Amount Paid: P</div>
                    </div>

                    <div className="px-4 pb-5 space-x-4 flex justify-between items-center group">
                      <div onClick={handleOpenModal3} className="flex justify-center items-center text-center cursor-pointer p-1 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded-sm mt-2 flex-grow">
                        <span className="text-xs font-normal">Reject</span>
                      </div>
                      <div className="flex justify-center items-center text-center cursor-pointer p-1 border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white rounded-sm mt-2 flex-grow">
                        <span className="text-xs font-normal">Done</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Tax Payment Sample */}  
                  <div className="bg-white dark:bg-[#333333] shadow-[0_4px_10px_-1px_rgba(0,0,0,0.14)] dark:shadow-[0_4px_10px_-1px_rgba(0,0,0,0.2)] rounded-sm flex flex-col">
                    <div className="text-xs font-semibold text-slate-60 border-t-4 border-[#0057e7] bg-slate-200 dark:bg-[#212121] dark:text-white rounded-t-sm px-4 py-1.5">
                      Transaction ID:
                    </div>

                    <div className="flex-grow px-4 pt-5 pb-4">
                      <div className="text-xs text-slate-600 dark:text-slate-300 my-1">Type: Tax Payment</div>
                      <div className="text-xs text-slate-600 dark:text-slate-300 my-1">Account Name:   </div>
                      <div className="text-xs text-slate-600 dark:text-slate-300 my-1">TDN: </div>
                      <div className="text-xs text-slate-600 dark:text-slate-300 my-1">PIN:   </div>
                      <div className="text-xs text-slate-600 dark:text-slate-300 my-1">From:   </div>
                      <div className="text-xs text-slate-600 dark:text-slate-300 my-1">To:   </div>
                      <div className="text-xs text-slate-600 dark:text-slate-300 my-1">Date Processed:   </div>
                      <div className="text-xs text-slate-600 dark:text-slate-300 my-1">Time Processed:   </div>
                      <div className="flex justify-start items-center text-xs text-slate-600 dark:text-slate-300 my-1">
                        <span>Status:</span>
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-300 my-1">Amount Paid: P</div>
                    </div>

                    <div className="px-4 pb-5 space-x-4 flex justify-between items-center group">
                      <div onClick={handleOpenModal3} className="flex justify-center items-center text-center cursor-pointer p-1 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded-sm mt-2 flex-grow">
                        <span className="text-xs font-normal">Reject</span>
                      </div>
                      <div className="flex justify-center items-center text-center cursor-pointer p-1 border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white rounded-sm mt-2 flex-grow">
                        <span className="text-xs font-normal">Done</span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>

          <AdminFooter logo={logoSrc} />
        </main>

        <AdminRPTaxClearanceModal
          isOpen={isModalOpen}
          handleClose={handleCloseModal}
          handleProcess={handleProcessSubmit}
        />
        <AdminRPTaxPaymentModal
          isOpen2={isModalOpen2}
          handleClose2={handleCloseModal2}
          handleProcess2={handleProcessSubmit2}
        />
        <AdminRPTaxRejectModal
          isOpen3={isModalOpen3}
          handleClose3={handleCloseModal3}
          handleReject={handleReject}
        />

      </div>
    </div>
  );
}

export default AdminRPTaxForm;