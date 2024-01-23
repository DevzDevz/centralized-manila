import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment/moment.js';
import StatusBadgeModal from '../StatusBadgeModal';

const CedulaModal = ({ user_id, selectedTransaction, onClose, onSubmit }) => {

  const { transaction_id, status_type, date_processed } = selectedTransaction;

  const trans_type = 'Community Tax Certificate';

  const date = moment(date_processed).format('MMMM D, YYYY');
  const time = moment(date_processed).format('h:mm A');
  
  const [cedulaTransaction, setCedulaTransaction] = useState({});

  console.log(cedulaTransaction)

  const makePayment = async () => {
    try {
        if (!transaction_id) {
            console.error("Transaction ID is not defined.");
            alert("Error creating checkout session. Please try again later.");
            return;
        }

        const body = {
          data: cedulaTransaction,
          trans_type: trans_type,
          user_id: user_id,
      };

        const response = await axios.post(`http://localhost:8800/payment/create-checkout-session/${transaction_id}`, body);

        if (response.data && response.data.checkoutSessionUrl) {
            const checkoutSessionUrl = response.data.checkoutSessionUrl;

            if (checkoutSessionUrl) {
                console.log('Checkout Session URL:', checkoutSessionUrl);

                // Open a new window or tab with the checkout session URL
                const newWindow = window.open(checkoutSessionUrl, '_self');
                
            }
        } else {
            console.error("Invalid checkout session - Response structure is unexpected:", response);
            alert("Error creating checkout session. Please try again later.");
        }
    } catch (error) {
        console.error("Error creating checkout session:", error);
        alert("Error creating checkout session. Please try again later.");
    }
};

  useEffect(() => {
    const fetchCedulaTransaction = async () => {
      if (transaction_id) {
        try {
          const res = await axios.get(`http://localhost:8800/transachistory/cedula/${transaction_id}`);
          setCedulaTransaction(res.data);
          console.log(res.data);
        } catch (err) {
          console.error(err);
        }
      }
      else {
        setCedulaTransaction(selectedTransaction);
      }
    };
  
    fetchCedulaTransaction(); 
  }, [transaction_id]);
  
 
  return (
    <div className="fixed z-50 inset-0 ">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center text-xs md:text-sm sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>
        <div className="inline-block align-bottom text-center overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:w-full max-w-2xl">
        {transaction_id ? (
          status_type === 'Pending' && (
            <div className='bg-white dark:bg-[#212121] mb-5 p-5 rounded-lg'>
              <div className="grid md:grid-cols-4 grid-cols-2 gap-3 items-center justify-center text-xs w-full">
                <div className="flex flex-col items-center text-center">
                  <span>Step 1</span>
                  <span>Fill the Form</span>
                  <div className="w-full h-1 bg-blue-200 dark:bg-slate-400" />
                </div>
                <div className="flex flex-col items-center text-center">
                  <span>Step 2</span>
                  <span>Review and Submit</span>
                  <div className="w-full h-1 bg-blue-200 dark:bg-slate-400" />
                </div>
                <div className="flex flex-col col-span-2 items-center text-center mt-2 sm:mt-0">
                  <span className='font-semibold text-blue-500'>Final Step</span>
                  <span className='font-normal text-blue-500'>Pay the transaction</span>
                  <div className="w-full h-1 bg-blue-500" />
                </div>
              </div>
            </div> ) 
            ) : (
            <div className='bg-white dark:bg-[#212121] mb-5 p-5 rounded-lg'>
              <div className="grid md:grid-cols-4 grid-cols-2 gap-3 items-center justify-center text-xs w-full">
                <div className="flex flex-col items-center text-center">
                  <span>Step 1</span>
                  <span>Fill the Form</span>
                  <div className="w-full h-1 bg-blue-200 dark:bg-slate-400" />
                </div>
                <div className="flex flex-col items-center text-center">
                  <span className='font-semibold text-blue-500'>Step 2</span>
                  <span className='font-normal text-blue-500'>Review and Submit</span>
                  <div className="w-full h-1 bg-blue-500" />
                </div>
                <div className="flex flex-col col-span-2 items-center text-center mt-2 sm:mt-0">
                  <span>Final Step</span>
                  <span>Pay the transaction</span>
                  <div className="w-full h-1 bg-blue-200 dark:bg-slate-400" />
                </div>
              </div>
            </div>
          )}
              
          
              <div className="bg-white dark:bg-[#212121] text-slate-700 dark:text-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 rounded-t-lg">
                <div className="mb-6">
                  <span className="font-bold md:text-lg text-sm">Cedula Transaction Details</span>
                </div>
              </div>

              <div className="max-h-[16rem] bg-white dark:bg-[#212121] dark:text-white pb-0 pl-4 pr-4 sm:pl-6 sm:pr-6 md:pl-6 md:pr-6 overflow-y-auto">
            <div className="mx-auto">
                  <div className="sm:mt-0" id="modal-headline">   
                    <div className="mx-auto">
                      <div className="mb-0">
                      {cedulaTransaction.transaction_id ? (
                        <div className="flex flex-col sm:flex-row items-start justify-between mb-1">
                          <span className="font-medium whitespace-nowrap">Transaction ID</span>
                          <span className="whitespace-nowrap md:mb-0 mb-1">{cedulaTransaction.transaction_id}</span>
                        </div>
                      ) : null}
                      <div className="flex flex-col sm:flex-row md:items-center md:justify-center items-start justify-between mb-1">
                          <span className="font-semibold whitespace-nowrap">Owner's Information</span>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start justify-between mb-1">
                          <span className="font-medium whitespace-nowrap">Last Name</span>
                          <span className="whitespace-nowrap md:mb-0 mb-1">{cedulaTransaction.ctc_lname || cedulaTransaction.l_name || '-'}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start justify-between mb-1">
                          <span className="font-medium whitespace-nowrap">First Name</span>
                          <span className="whitespace-nowrap md:mb-0 mb-1">{cedulaTransaction.ctc_fname || cedulaTransaction.f_name || '-'}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start justify-between mb-1">
                          <span className="font-medium whitespace-nowrap">Middle Name</span>
                          <span className="whitespace-nowrap md:mb-0 mb-1">{cedulaTransaction.ctc_mname || cedulaTransaction.m_name || '-'}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start justify-between mb-1">
                          <span className="font-medium whitespace-nowrap">Suffix</span>
                          <span className="whitespace-nowrap md:mb-0 mb-1">{cedulaTransaction.ctc_suffix || cedulaTransaction.suffix_type || '-'}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start justify-between mb-1">
                          <span className="font-medium whitespace-nowrap">Sex</span>
                          <span className="whitespace-nowrap md:mb-0 mb-1">{cedulaTransaction.ctc_sex || cedulaTransaction.sex_type || '-'}</span>
                        </div>

                        <br/>

                        <div className="flex flex-col sm:flex-row md:items-center md:justify-center items-start justify-between mb-1">
                          <span className="font-semibold whitespace-nowrap">Address</span>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start justify-between mb-1">
                          <span className="font-medium whitespace-nowrap">Region</span>
                          <span className="whitespace-nowrap md:mb-0 mb-1">{cedulaTransaction.ctc_region || cedulaTransaction.region || '-'}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start justify-between mb-1">
                          <span className="font-medium whitespace-nowrap">Province</span>
                          <span className="whitespace-nowrap md:mb-0 mb-1">{cedulaTransaction.ctc_province || cedulaTransaction.province || '-'}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start justify-between mb-1">
                          <span className="font-medium whitespace-nowrap">Municipal</span>
                          <span className="whitespace-nowrap md:mb-0 mb-1">{cedulaTransaction.ctc_municipal || cedulaTransaction.municipality || '-'}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start justify-between mb-1">
                          <span className="font-medium whitespace-nowrap">Barangay</span>
                          <span className="whitespace-nowrap md:mb-0 mb-1">{cedulaTransaction.ctc_reqbrgy || cedulaTransaction.brgy_dist || '-'}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start justify-between mb-1">
                          <span className="font-medium whitespace-nowrap">House No. / Unit Floor</span>
                          <span className="whitespace-nowrap md:mb-0 mb-1">{cedulaTransaction.ctc_reqhnum || cedulaTransaction.house_floor || '-'}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start justify-between mb-1">
                          <span className="font-medium whitespace-nowrap">Street / Building Name</span>
                          <span className="whitespace-nowrap md:mb-0 mb-1">{cedulaTransaction.ctc_reqstreet || cedulaTransaction.bldg_name || '-'}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start justify-between mb-1">
                          <span className="font-medium whitespace-nowrap">Zip Code</span>
                          <span className="whitespace-nowrap md:mb-0 mb-1">{cedulaTransaction.ctc_reqzip || cedulaTransaction.zip_code || '-'}</span>
                        </div>

                        <br/>

                        <div className="flex flex-col sm:flex-row md:items-center md:justify-center items-start justify-between mb-1">
                          <span className="font-semibold whitespace-nowrap">Other Information</span>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start justify-between mb-1">
                          <span className="font-medium whitespace-nowrap">Civil Status</span>
                          <span className="whitespace-nowrap md:mb-0 mb-1">{cedulaTransaction.ctc_civilstatus || cedulaTransaction.cvl_id || '-'}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start justify-between mb-1">
                          <span className="font-medium whitespace-nowrap">Country of Citizenship</span>
                          <span className="whitespace-nowrap md:mb-0 mb-1">{cedulaTransaction.ctc_cznstatus || cedulaTransaction.czn_id || '-'}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start justify-between mb-1">
                          <span className="font-medium whitespace-nowrap">Height (ft)</span>
                          <span className="whitespace-nowrap md:mb-0 mb-1">{cedulaTransaction.ctc_height || cedulaTransaction.height || '-'}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start justify-between mb-1">
                          <span className="font-medium whitespace-nowrap">Weight (kg)</span>
                          <span className="whitespace-nowrap md:mb-0 mb-1">{cedulaTransaction.ctc_weight || cedulaTransaction.weight || '-'}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start justify-between mb-1">
                          <span className="font-medium whitespace-nowrap">Alien Certificate of Registration No.</span>
                          <span className="whitespace-nowrap md:mb-0 mb-1">{cedulaTransaction.ctc_aliencor || cedulaTransaction.acr_no || '-'}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row md:items-center md:justify-center items-start justify-between mb-1">
                          <br/>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start justify-between mb-1">
                          <span className="font-medium whitespace-nowrap">Employment Status</span>
                          <span className="whitespace-nowrap md:mb-0 mb-1">{cedulaTransaction.ctc_employmentstatus || cedulaTransaction.emp_status || '-'}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start justify-between mb-1">
                          <span className="font-medium whitespace-nowrap">Tax Payer Account No.</span>
                          <span className="whitespace-nowrap md:mb-0 mb-1">{cedulaTransaction.ctc_taxpayeraccno || cedulaTransaction.acc_no || '-'}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start justify-between mb-1">
                          <span className="font-medium whitespace-nowrap">Residence Tax Due</span>
                          <span className="whitespace-nowrap md:mb-0 mb-1">{cedulaTransaction.ctc_residencetaxdue || cedulaTransaction.cedula_date || '-'}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start justify-between mb-1">
                          <span className="font-medium whitespace-nowrap">Valid ID to Present Upon Claiming</span>
                          <span className="whitespace-nowrap md:mb-0 mb-1">{cedulaTransaction.ctc_validid || cedulaTransaction.valid_id || '-'}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start justify-between mb-1">
                          <span className="font-medium whitespace-nowrap">Profession/Occupation/Business</span>
                          <span className="whitespace-nowrap md:mb-0 mb-1">{cedulaTransaction.ctc_profession || cedulaTransaction.pob_status || '-'}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start justify-between mb-1">
                          <span className="font-medium whitespace-nowrap">Income from Real Property</span>
                          <span className="whitespace-nowrap md:mb-0 mb-1">{cedulaTransaction.ctc_incomeca || cedulaTransaction.income_id || '-'}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start justify-between mb-1">
                          <span className="font-medium whitespace-nowrap">Earnings from Business</span>
                          <span className="whitespace-nowrap md:mb-0 mb-1">{cedulaTransaction.ctc_grossta || cedulaTransaction.gross_id || '-'}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start justify-between mb-1">
                          <span className="font-medium whitespace-nowrap">Earnings from Profession</span>
                          <span className="whitespace-nowrap md:mb-0 mb-1">{cedulaTransaction.ctc_salariesta || cedulaTransaction.salary_id || '-'}</span>
                        </div>
                      </div>
                        
                      </div>
                    </div>
                  </div>
              </div>

              <div className="mx-auto bg-white dark:bg-[#212121] text-slate-700 dark:text-white pb-4 pl-4 pr-4 sm:pl-6 sm:pr-6 md:pl-6 md:pr-6 lg:pr-10 ">
                {transaction_id ? (
                <div className="flex flex-col sm:flex-row items-start justify-between mb-1">
                  <span className="font-medium whitespace-nowrap">Date Processed</span>
                  <span className="whitespace-nowrap md:mb-0 mb-1">{date}</span>
                </div>
                ) : null}

                {transaction_id ? (
                <div className="flex flex-col sm:flex-row items-start justify-between mb-1">
                  <span className="font-medium whitespace-nowrap">Time Processed</span>
                  <span className="whitespace-nowrap md:mb-0 mb-1">{time}</span>
                </div>
                ) : null}
                {/* <div className="flex flex-col sm:flex-row items-start justify-between mb-1">
                  <span className="font-medium whitespace-nowrap">Remarks</span>
                  <span className="whitespace-nowrap md:mb-0 mb-1">WAITING FOR PAYMENT REFERENCE NUMBER</span>
                </div> */}
                {/* <div className="flex flex-col sm:flex-row items-start justify-between mb-1">
                  <span className="font-medium whitespace-nowrap">Reference Number</span>
                  <span className="whitespace-nowrap md:mb-0 mb-1">-</span>
                </div> */}
                {transaction_id ? (
                <div className="flex flex-col sm:flex-row items-start justify-between mb-1">
                  <span className="font-medium whitespace-nowrap">Status</span>
                  <StatusBadgeModal statusType={status_type} />
                </div>
                ) : null}

                <hr className='mt-7 mb-1'/>
                <div className="flex justify-between">
                  <span className="font-semibold whitespace-nowrap">Amount to Pay</span>
                  <span className="font-semibold whitespace-nowrap ml-4">  {cedulaTransaction && (
                    `P ${cedulaTransaction.ctc_amountpayable !== undefined ? cedulaTransaction.ctc_amountpayable + '.00' : 
                    cedulaTransaction.amount !== undefined ? cedulaTransaction.amount + '.00' : '-'}`
                  )}</span>
                </div>
              </div>

              <div className="bg-white dark:bg-[#212121] px-4 pt-3 pb-5 gap-3 sm:px-6 flex items-center justify-between rounded-b-lg">
                  {/* <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Sample_EPC_QR_code.png" alt="QR Code" className="w-20 h-20 mr-3"/> */}
                 
                  {status_type === 'Pending' && transaction_id ? (
                    <button
                      onClick={makePayment}
                      type="button"
                      className="text-slate-500 text-xs text-center px-5 py-2 mb-0 md:text-sm ms-2 hover:text-white border border-slate-500 hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal rounded-full dark:border-slate-500 dark:text-white dark:hover:text-white dark:hover:bg-slate-500 dark:focus:ring-slate-800"
                    >
                      <span className="font-semibold whitespace-nowrap ml-2"> PAY: {cedulaTransaction.amount ? cedulaTransaction.amount + '.00' : '-'}</span>
                    </button>
                  ): null}
                 
                 
                 
                  <div className="flex items-center space-x-2 ml-auto">
                      <button
                          onClick={onClose}
                          type="button"
                          className="text-slate-500 text-xs text-center px-5 py-2 mb-0 md:text-sm ms-2 hover:text-white border border-slate-500 hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal rounded-full dark:border-slate-500 dark:text-white dark:hover:text-white dark:hover:bg-slate-500 dark:focus:ring-slate-800"
                      >
                          <p>Close</p>
                      </button>
                      {cedulaTransaction.transaction_id ? null : (
                      <button
                          onClick={onSubmit}
                          type="button"
                          className="text-white text-xs md:text-sm bg-blue-500 border border-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal rounded-full px-5 py-2 text-center dark:border-blue-500 dark:text-white dark:hover:text-white dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                          <p>Submit</p>
                    </button>
                    )}
                  </div>
              </div>

              </div>
            </div>
          </div>
  );
};

export default CedulaModal;