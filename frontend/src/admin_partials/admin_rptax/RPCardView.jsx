import React from 'react';

const RPCardView = ({ filteredTaxClearance, filteredTaxPayment, date1, time1, date2, time2, handleExpiredModal, handleOpenProcessModal, handleOpenViewModal }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-4">
              
          {/* ITO NAMAN YUNG MAPPING, LAHAT NG LAMAN NG LINE 40, IDIDISPLAY NITO, SINCE ANG INITIAL AY WALA PA NAMANG VALUE ANG SEARCH QUERY, LAHAT IDIDISPLAY DITO AND MAG FIFILTER LANG KAPAG MAY NILAGAY NA SA SEARCH, AND MADIDISPLAY LANG YUNG MATCHED TRANSACTION */}
          {filteredTaxClearance.map((transaction) => (

          // ITO YUNG KAPAG PININDOT YUNG BUONG CARD, MAG OOPEN YUNG MODAL, IPAPASA YUNG DETAILS NG TRANSACTION NA PININDOT, AND ISESET SA PARAMETER NG LINE 19 NA ANG TYPE AY TAX CLEARANCE
          <div onClick={() => handleOpenViewModal(transaction, 'Real Property Tax Clearance')} key={transaction.transaction_id} className="cursor-pointer bg-white dark:bg-[#333333] shadow-[0_4px_10px_-1px_rgba(0,0,0,0.14)] dark:shadow-[0_4px_10px_-1px_rgba(0,0,0,0.2)] rounded-sm flex flex-col">
            <div className="text-xs font-semibold border-t-4 border-blue-500 text-slate-60 bg-slate-200 dark:bg-[#212121] dark:text-white rounded-t-sm px-4 py-1.5">
              Transaction ID: {transaction.transaction_id}
            </div>

            <div className="flex-grow px-4 pt-5 pb-4">
              <div className="text-xs text-slate-600 dark:text-slate-300 my-1">Type: {transaction.trans_type}</div>
              <div className="text-xs text-slate-600 dark:text-slate-300 my-1">TDN: {transaction.rp_tdn} </div>
              <div className="text-xs text-slate-600 dark:text-slate-300 my-1">PIN: {transaction.rp_pin}  </div>
              <div className="text-xs text-slate-600 dark:text-slate-300 my-1">Date Processed: {date2}  </div>
              <div className="text-xs text-slate-600 dark:text-slate-300 my-1">Time Processed: {time2} </div>
              <div className="flex justify-start items-center text-xs text-slate-600 dark:text-slate-300 my-1">
                <span>Status: {transaction.status_type}</span>
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-300 my-1">Amount Paid: P {transaction.amount}</div>
            </div>

            <div className="px-4 pb-5 space-x-4 flex justify-between items-center group">
              <div onClick={() => handleExpiredModal(transaction, 'Real Property Tax Clearance')} className="flex justify-center items-center text-center cursor-pointer p-1 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white rounded-sm mt-2 flex-grow">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                <span className="text-xs font-normal">&nbsp;Expired</span>
              </div>
              <div onClick={() => handleOpenProcessModal(transaction, 'Real Property Tax Clearance')} className="flex justify-center items-center text-center cursor-pointer p-1 border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white rounded-sm mt-2 flex-grow">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              <span className="text-xs font-normal">&nbsp;Process</span>
            </div>

            </div>
          </div>
          ))} 

          {/* SAME LANG TO SA TAAS */}
          {/* Tax Payment Sample */}
          {filteredTaxPayment.map((transaction) => (
          <div onClick={() => handleOpenViewModal (transaction, 'Real Property Tax Payment')} key={transaction.transaction_id} className="cursor-pointer bg-white dark:bg-[#333333] shadow-[0_4px_10px_-1px_rgba(0,0,0,0.14)] dark:shadow-[0_4px_10px_-1px_rgba(0,0,0,0.2)] rounded-sm flex flex-col">
            <div className="text-xs font-semibold text-slate-60 border-t-4 border-[#0057e7] bg-slate-200 dark:bg-[#212121] dark:text-white rounded-t-sm px-4 py-1.5">
              Transaction ID: {transaction.transaction_id}
            </div>

            <div className="flex-grow px-4 pt-5 pb-4">
              <div className="text-xs text-slate-600 dark:text-slate-300 my-1">Type:  {transaction.trans_type}</div>
              <div className="text-xs text-slate-600 dark:text-slate-300 my-1">Account Name: {transaction.acc_name} </div>
              <div className="text-xs text-slate-600 dark:text-slate-300 my-1">TDN: {transaction.rp_tdn}</div>
              <div className="text-xs text-slate-600 dark:text-slate-300 my-1">PIN: {transaction.rp_pin} </div>
              <div className="text-xs text-slate-600 dark:text-slate-300 my-1">From: 1st Quarter </div>
              <div className="text-xs text-slate-600 dark:text-slate-300 my-1">To: {transaction.period_id} </div>
              <div className="text-xs text-slate-600 dark:text-slate-300 my-1">Date Processed: {date1}  </div>
              <div className="text-xs text-slate-600 dark:text-slate-300 my-1">Time Processed: {time1} </div>
              <div className="flex justify-start items-center text-xs text-slate-600 dark:text-slate-300 my-1">
                <span>Status: {transaction.status_type}</span>
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-300 my-1">Amount Paid: P {transaction.amount}</div>
            </div>

            <div className="px-4 pb-5 space-x-4 flex justify-between items-center group">
              <div onClick={() => handleExpiredModal(transaction, 'Real Property Tax Payment')} className="flex justify-center items-center text-center cursor-pointer p-1 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white rounded-sm mt-2 flex-grow">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                <span className="text-xs font-normal">&nbsp;Expired</span>
              </div>
              <div  onClick={() => handleOpenProcessModal(transaction, 'Real Property Tax Payment')} className="flex justify-center items-center text-center cursor-pointer p-1 border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white rounded-sm mt-2 flex-grow">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <span className="text-xs font-normal">&nbsp;Process</span>
              </div>
            </div>
          </div>
          ))} 
      
        </div>
  );
};

export default RPCardView;