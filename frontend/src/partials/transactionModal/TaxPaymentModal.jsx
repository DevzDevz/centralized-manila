import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment/moment.js';
import Paymongo from 'paymongo';
import QRCode from 'react-qr-code';
import StatusBadgeModal from '../StatusBadgeModal';
import CancelTransactionModal from '../CancelTransactionModal';
import Loading from '../../partials/Loading';

console.log("API Key:", process.env.SECRET_KEY);
const paymongo = new Paymongo(process.env.SECRET_KEY);

const TaxPaymentModal = ({ user_id, selectedTransaction, onClose, onSubmit, handleOpenModal }) => {
  const { transaction_id, status_type, date_processed } = selectedTransaction;

  const trans_type = 'Real Property Tax Payment';

  const date = moment(date_processed).format('MMMM D, YYYY');
  const time = moment(date_processed).format('h:mm A');

  const [taxPaymentTransaction, setTaxPaymentTransaction] = useState({});
  const [isScanned, setIsScanned] = useState(true);

  const [isCancelConfirmed, setIsCancelConfirmed] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const makePayment = async () => {
    try {
        if (!transaction_id) {
            console.error("Transaction ID is not defined.");
            alert("Error creating checkout session. Please try again later.");
            return;
        }

        const body = {
            data: taxPaymentTransaction,
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


  const cancelTrans = async (e) => {
    e.preventDefault();
  
    try {
 
      const response = await axios.post(`http://localhost:8800/transachistory/canceltrans/${transaction_id}`, selectedTransaction);
  
      if (response.status === 200) {
        // Fetch user_email after successful payment
        try {
          const res = await axios.get(`http://localhost:8800/email/${user_id}`);
          
          if (res.data.user_email) {
            const updatedUserEmail = res.data.user_email;
            const f_name = res.data.f_name;
            const l_name = res.data.l_name;
            console.log('FETCHED USER EMAIL:', updatedUserEmail);

            const user_email = updatedUserEmail;

            const trans_type = 'Real Property Tax Payment';

            const rowData = { ...selectedTransaction, trans_type};

            const status_type = 'C A N C E L E D';

            const body = {
              data: rowData,
              status_type: status_type,
              f_name: f_name,
              l_name: l_name
            };
  
            try {
              const emailResponse = await axios.post(`http://localhost:8800/email/send-email/${user_email}`, body);
  
              if (emailResponse.data && emailResponse.data.message) {
                console.log('SENT EMAIL');
              } else {
                console.log("Failed to send email.");
              }
            } catch (emailError) {
              // alert(emailError);
            }
          } else {
            console.error('Transaction error:', res.statusText);
          }
        } catch (fetchError) {
          console.log('NOT FETCHING EMAIL');
          console.error(fetchError);
        }

        setIsCancelConfirmed(false);
        setIsSuccess(true);
        console.log('Transaction canceled');
  
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
        }, 2100);
        
      } else {
        console.error('Transaction error:', response.statusText);
      }
    } catch (transactionError) {
      console.error('Transaction error:', transactionError);
    }
  };


 
  useEffect(() => {
    const fetchTaxPaymentTransaction = async () => {
      if (transaction_id) {
        try {
          const res = await axios.get(`http://localhost:8800/transachistory/taxpayment/${transaction_id}`);
          setTaxPaymentTransaction(res.data);
        } catch (err) {
          console.error(err);
        }
      } else {
        setTaxPaymentTransaction(selectedTransaction)
      }
    };
    fetchTaxPaymentTransaction();
  }, [transaction_id]);


  const handleOpenConfirm = () => {
    setIsCancelConfirmed(true);
  };

  const handleCloseConfirm = () => {
    setIsCancelConfirmed(false);
  };

  const generateDownloadLink = (data) => {
    console.log('Generating download link:', data.transaction_id);
    return `http://localhost:8800/transachistory/taxpayment/${data.transaction_id}`;
  };

  const downloadLink = isScanned ? generateDownloadLink(taxPaymentTransaction) : null;
  console.log('Download link:', downloadLink);

  return (
    <div className="fixed z-50 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center text-xs md:text-sm sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                &#8203;
              </span>
              <div className="inline-block align-bottom rounded-lg text-center overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:w-full max-w-2xl">
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
                  <div className="mx-auto mt-2">
                    <div className="sm:mt-0" id="modal-headline">   
                      <div className="mx-auto">
                        <div className="mb-6">
                          <span className="font-bold md:text-lg text-sm">Real Property Tax Transaction Details</span>
                        </div>

                        {isSuccess && (                
                          <div className="my-5 text-center">
                            <div className='text-emerald-500 bg-emerald-100 md:text-sm text-xs text-center rounded-full py-1.5'>Transaction Canceled!</div> 
                          </div>
                        )}

                      <div className="mb-6">
                        {transaction_id ? (
                          <div className="flex flex-col sm:flex-row items-start justify-between mb-1">
                                <span className="font-medium whitespace-nowrap">Transaction ID</span>
                            <span className="whitespace-nowrap md:mb-0 mb-1">{transaction_id}</span>
                          </div>
                        ) : null}
                          <div className="flex flex-col sm:flex-row items-start justify-between mb-1">
                                <span className="font-medium whitespace-nowrap">Account Name</span>
                             <span className="whitespace-nowrap md:mb-0 mb-1">{taxPaymentTransaction.acc_name || taxPaymentTransaction.tp_acc_name || '-'}</span>
                          </div>
                          <div className="flex flex-col sm:flex-row items-start justify-between mb-1">
                                <span className="font-medium whitespace-nowrap">Tax Declaration Number (TDN)</span>
                             <span className="whitespace-nowrap md:mb-0 mb-1">{taxPaymentTransaction.rp_tdn || taxPaymentTransaction.tp_rp_tdn || '-'}</span>
                           </div>
                          <div className="flex flex-col sm:flex-row items-start justify-between mb-1">
                                <span className="font-medium whitespace-nowrap">Property Identification Number (PIN)</span>
                             <span className="whitespace-nowrap md:mb-0 mb-1">{taxPaymentTransaction.rp_pin || taxPaymentTransaction.tp_rp_pin || '-'}</span>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row items-start justify-between mb-1">
                                <span className="font-medium whitespace-nowrap">From</span>
                             <span className="whitespace-nowrap md:mb-0 mb-1">{taxPaymentTransaction.year_label? `${taxPaymentTransaction.year_label} - 1st Quarter`: taxPaymentTransaction.tp_year? `${taxPaymentTransaction.tp_year} - 1st Quarter`: '-'}
                             </span>
                           </div>

                          <div className="flex flex-col sm:flex-row items-start justify-between mb-1">
                                <span className="font-medium whitespace-nowrap">To</span>
                             <span className="whitespace-nowrap md:mb-0 mb-1">{taxPaymentTransaction.year_label? `${taxPaymentTransaction.year_label} - ${taxPaymentTransaction.period}`: taxPaymentTransaction.tp_year? `${taxPaymentTransaction.tp_year} - ${taxPaymentTransaction.tp_period}`: '-'}
                             </span>
                           </div>
                          {/* <div className="flex flex-col sm:flex-row items-start justify-between mb-1">
                                <span className="font-medium whitespace-nowrap">Valid ID to Present Upon Claiming</span>
                            <span className="whitespace-nowrap md:mb-0 mb-1">AUTHORIZATION LETTER</span>
                          </div> */}
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
                          {/* {taxPaymentTransaction.status_type ? (
                          <div className="flex flex-col sm:flex-row items-start justify-between mb-1">
                                <span className="font-medium whitespace-nowrap">Reference Number</span>
                            <span className="whitespace-nowrap md:mb-0 mb-1">-</span>
                          </div>
                          ) : null} */}

                          {status_type ? (
                          <div className="flex flex-col sm:flex-row items-start justify-between mb-1">
                                <span className="font-medium whitespace-nowrap">Status</span>
                            <StatusBadgeModal statusType={status_type} />
                          </div>
                          ) : null}

                          <hr className='mt-7 mb-1'/>
                          <div className="flex justify-between">
                            <span className="font-semibold whitespace-nowrap">Amount to Pay</span>
                            <span className="font-semibold whitespace-nowrap ml-4">P {taxPaymentTransaction.amount ? taxPaymentTransaction.amount + '.00': '-'} </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-[#212121] px-4 pt-3 pb-5 gap-3 sm:px-6 flex items-center justify-between">
                  {/* <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Sample_EPC_QR_code.png" alt="QR Code" className="w-20 h-20 mr-3"/> */}

                  {status_type === 'Pending' && transaction_id ? (
                    <button
                      onClick={makePayment}
      
                      type="button"
                      className="text-slate-500 text-xs text-center px-5 py-2 mb-0 md:text-sm ms-2 hover:text-white border border-slate-500 hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal rounded-full dark:border-slate-500 dark:text-white dark:hover:text-white dark:hover:bg-slate-500 dark:focus:ring-slate-800"
                    >
                      <span className="font-semibold whitespace-nowrap ml-2"> PAY: {taxPaymentTransaction.amount ? taxPaymentTransaction.amount + '.00' : '-'}</span>
                    </button>
                  ): null}


            {/* QR Code Section */}
            <div className="bg-white dark:bg-[#212121] text-slate-700 dark:text-white px-4 pt-3 pb-5 gap-3 sm:px-6 flex items-center justify-between rounded-b-lg">
                  <div className="whitespace-nowrap md:mb-0 mb-1">
                      {taxPaymentTransaction ? (
                          <QRCode value={downloadLink || ''} size={100} />
                      ) : (
                          <Loading />
                      )}
                  </div>
              </div>
                  
                  <div className="flex items-center space-x-2 ml-auto">
                    {status_type === 'Pending' && transaction_id ? (
                    <button
                        onClick={handleOpenConfirm}
                        type="button"
                        className="text-red-500 text-xs text-center px-5 py-2 mb-0 md:text-sm ms-2 hover:text-white border border-red-500 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-normal rounded-full dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-500 dark:focus:ring-red-800">
                        <p>Cancel Transaction</p>
                    </button>
                    ): null}

                    <button
                      onClick={onClose}
                      type="button"
                      className="text-slate-500 text-xs text-center px-5 py-2 mb-0 md:text-sm ms-2 hover:text-white border border-slate-500 hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal rounded-full dark:border-slate-500 dark:text-white dark:hover:text-white dark:hover:bg-slate-500 dark:focus:ring-slate-800"
                    >
                      <p>Close</p>
                    </button>

                    {transaction_id ? null : (
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
                {/* LOADING ANIMATION */}
                <div className="bg-white dark:bg-[#212121] text-slate-700 dark:text-white px-1 pb-1 rounded-b-lg mt-[-10px]">
                  <Loading/>
                </div>
                {/* LOADING ANIMATION */}
              </div>

              {isCancelConfirmed && (
                <CancelTransactionModal onClose={handleCloseConfirm} onCancel={cancelTrans} />
              )}

            </div>
          </div>
  );
};

export default TaxPaymentModal;
