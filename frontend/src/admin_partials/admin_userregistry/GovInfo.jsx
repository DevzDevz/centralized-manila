import React from 'react';

const GovInfo = ({ selectedTransaction, userInfo, handleChangeData, editMode }) => {
  return (  
    selectedTransaction && (editMode === undefined || editMode === false) ? (
    <div className="my-10">
                  <span className='font-bold text-lg text-gray-700 dark:text-white'>Government Information</span>
                  <form>
                    {selectedTransaction.user_tin_id ? 
                    <div className="mt-5 md:px-32 px-12">
                      <label htmlFor="user_tin_id" className="block font-medium md:text-sm text-xs text-gray-700 dark:text-white text-left py-1 px-0.5">Tax Identification Number (TIN)</label>
                      <input value={selectedTransaction.user_tin_id} readOnly type="text" name="user_tin_id" id="user_tin_id" className="block w-full md:text-sm text-xs rounded border-0 py-1.5 text-gray-900 dark:text-white dark:bg-[#3d3d3d] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:md:text-sm text-xs sm:leading-6" />
                    </div>
                    : null}
                    {selectedTransaction.user_pgb_id ? 
                    <div className="mt-2 md:px-32 px-12">
                      <label htmlFor="user_pgb_id" className="block font-medium md:text-sm text-xs text-gray-700 dark:text-white text-left py-1 px-0.5">PAG-IBIG Number</label>
                      <input value={selectedTransaction.user_pgb_id} readOnly type="text" name="user_pgb_id" id="user_pgb_id" className="block w-full md:text-sm text-xs rounded border-0 py-1.5 text-gray-900 dark:text-white dark:bg-[#3d3d3d] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:md:text-sm text-xs sm:leading-6" />
                    </div>
                    : null}
                    {selectedTransaction.user_philh_id ? 
                    <div className="mt-2 md:px-32 px-12">
                      <label htmlFor="user_philh_id" className="block font-medium md:text-sm text-xs text-gray-700 dark:text-white text-left py-1 px-0.5">Philhealth Number</label>
                      <input value={selectedTransaction.user_philh_id} readOnly type="text" name="user_philh_id" id="user_philh_id" className="block w-full md:text-sm text-xs rounded border-0 py-1.5 text-gray-900 dark:text-white dark:bg-[#3d3d3d] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:md:text-sm text-xs sm:leading-6" />
                    </div>
                    : null}
                    {selectedTransaction.user_sss_id ? 
                    <div className="mt-2 md:px-32 px-12">
                      <label htmlFor="user_sss_id" className="block font-medium md:text-sm text-xs text-gray-700 dark:text-white text-left py-1 px-0.5">SSS Number</label>
                      <input value={selectedTransaction.user_sss_id} readOnly type="text" name="user_sss_id" id="user_sss_id" className="block w-full md:text-sm text-xs rounded border-0 py-1.5 text-gray-900 dark:text-white dark:bg-[#3d3d3d] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:md:text-sm text-xs sm:leading-6" />
                    </div>
                    : null}
                    {selectedTransaction.user_gsis_id ? 
                    <div className="mt-2 md:px-32 px-12">
                      <label htmlFor="user_gsis_id" className="block font-medium md:text-sm text-xs text-gray-700 dark:text-white text-left py-1 px-0.5">GSIS Number</label>
                      <input value={selectedTransaction.user_gsis_id} readOnly type="text" name="user_gsis_id" id="user_gsis_id" className="block w-full md:text-sm text-xs rounded border-0 py-1.5 text-gray-900 dark:text-white dark:bg-[#3d3d3d] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:md:text-sm text-xs sm:leading-6" />
                    </div>
                    : null}
                    {selectedTransaction.user_natl_id ? 
                    <div className="mt-2 md:px-32 px-12">
                      <label htmlFor="user_natl_id" className="block font-medium md:text-sm text-xs text-gray-700 dark:text-white text-left py-1 px-0.5">National ID</label>
                      <input value={selectedTransaction.user_natl_id} readOnly type="text" name="user_natl_id" id="user_natl_id" className="block w-full md:text-sm text-xs rounded border-0 py-1.5 text-gray-900 dark:text-white dark:bg-[#3d3d3d] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:md:text-sm text-xs sm:leading-6" />
                    </div>
                    : null}
                  </form>
                </div>
      ) : (
        <div className="my-10">
                  <span className='font-bold text-lg text-gray-700 dark:text-white'>Government Information</span>
                  <form>
                    <div className="mt-5 md:px-32 px-12">
                      <label htmlFor="user_tin_id" className="block font-medium md:text-sm text-xs text-gray-700 dark:text-white text-left py-1 px-0.5">Tax Identification Number (TIN)</label>
                      <input value={userInfo.user_tin_id} onChange={handleChangeData} type="text" name="user_tin_id" id="user_tin_id" className="block w-full md:text-sm text-xs rounded border-0 py-1.5 text-gray-900 dark:text-white dark:bg-[#3d3d3d] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:md:text-sm text-xs sm:leading-6" />
                    </div>
                    <div className="mt-2 md:px-32 px-12">
                      <label htmlFor="user_pgb_id" className="block font-medium md:text-sm text-xs text-gray-700 dark:text-white text-left py-1 px-0.5">PAG-IBIG Number</label>
                      <input value={userInfo.user_pgb_id} onChange={handleChangeData} type="text" name="user_pgb_id" id="user_pgb_id" className="block w-full md:text-sm text-xs rounded border-0 py-1.5 text-gray-900 dark:text-white dark:bg-[#3d3d3d] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:md:text-sm text-xs sm:leading-6" />
                    </div>
                    <div className="mt-2 md:px-32 px-12">
                      <label htmlFor="user_philh_id" className="block font-medium md:text-sm text-xs text-gray-700 dark:text-white text-left py-1 px-0.5">Philhealth Number</label>
                      <input value={userInfo.user_philh_id} onChange={handleChangeData} type="text" name="user_philh_id" id="user_philh_id" className="block w-full md:text-sm text-xs rounded border-0 py-1.5 text-gray-900 dark:text-white dark:bg-[#3d3d3d] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:md:text-sm text-xs sm:leading-6" />
                    </div>
                    <div className="mt-2 md:px-32 px-12">
                      <label htmlFor="user_sss_id" className="block font-medium md:text-sm text-xs text-gray-700 dark:text-white text-left py-1 px-0.5">SSS Number</label>
                      <input value={userInfo.user_sss_id} onChange={handleChangeData} type="text" name="user_sss_id" id="user_sss_id" className="block w-full md:text-sm text-xs rounded border-0 py-1.5 text-gray-900 dark:text-white dark:bg-[#3d3d3d] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:md:text-sm text-xs sm:leading-6" />
                    </div>
                    <div className="mt-2 md:px-32 px-12">
                      <label htmlFor="user_gsis_id" className="block font-medium md:text-sm text-xs text-gray-700 dark:text-white text-left py-1 px-0.5">GSIS Number</label>
                      <input value={userInfo.user_gsis_id} onChange={handleChangeData} type="text" name="user_gsis_id" id="user_gsis_id" className="block w-full md:text-sm text-xs rounded border-0 py-1.5 text-gray-900 dark:text-white dark:bg-[#3d3d3d] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:md:text-sm text-xs sm:leading-6" />
                    </div>
                    <div className="mt-2 md:px-32 px-12">
                      <label htmlFor="user_natl_id" className="block font-medium md:text-sm text-xs text-gray-700 dark:text-white text-left py-1 px-0.5">National ID</label>
                      <input value={userInfo.user_natl_id} onChange={handleChangeData} type="text" name="user_natl_id" id="user_natl_id" className="block w-full md:text-sm text-xs rounded border-0 py-1.5 text-gray-900 dark:text-white dark:bg-[#3d3d3d] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:md:text-sm text-xs sm:leading-6" />
                    </div>
                  </form>
                </div>
      )
  );
};

export default GovInfo;
