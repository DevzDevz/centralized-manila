import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom'; // Import useLocation from react-router-dom
import AdminSidebar from '../admin_partials/AdminSidebar';
import AdminHeader from '../admin_partials/AdminHeader';
import AdminFooter from '../admin_partials/AdminFooter';

import AdminBPView from '../admin_partials/admin_modals/AdminBPView';

import AdminBusinessProcessing from '../admin_partials/admin_cards/AdminBusinessProcessing';



const AdminBusinessForm2 =()=>{
  const Base_Url = process.env.Base_Url;
  const { admin_type, admin_uname } = useParams();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [Reload, setReload] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('Admin_token');
    
    const checkToken = async (token) => {

            const response = await axios.get(`${Base_Url}admintoken/protect-token-admin/${admin_type}/${admin_uname}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const adminType = response.data.admin_type;

            if (adminType === 'business_admin') {
                // Allow access to the audit page
                setReload(false);
            } else {
                window.location.href = '/indexadmin';
            }
    };

    if (token) {
        checkToken(token);
    } else {
        // Redirect to indexadmin if token is not present
        window.location.href = '/indexadmin';
    }
}, []);

  const [businessPermit, setBusinessPermit] = useState([]);
  const [businessData, setBusinessData] = useState([]);
  const [busOffice, setBusOffice] = useState(null);
  console.log("userrole", admin_type)

  const fetchUserTransaction = async () => {
    try {
        const res = await axios.get(`${Base_Url}adminbp/processing/`);
        console.log('Response:', res.data);

        const { businesspermit, businesspermit1 } = res.data;

        const busOfficeArray = [];
        const businessDataArray = [];

        Object.keys(businesspermit1).forEach(transactionId => {
            const busOffice = businesspermit1[transactionId].bus_office;
            const busActivity = businesspermit1[transactionId].bus_activity;

            busOfficeArray.push({ transaction_id: transactionId, bus_office: busOffice });
            businessDataArray.push({ transaction_id: transactionId, ...busActivity });
        });

        console.log('Bus Office:', busOfficeArray);
        console.log('Business Data:', businessDataArray);

        setBusinessPermit(businesspermit);
        setBusOffice(busOfficeArray);
        setBusinessData(businessDataArray);

        console.log('FETCHED DATA');
        setIsFetchedData(true);

    } catch (err) {
        console.log(err);
    }
};

  const handleUpdateData = () => {
    fetchUserTransaction();
  };

  const fetchExpiredTransaction = async () => {
    try {
      await axios.post(`${Base_Url}email/updateexpired`);
      console.log('Sent emails')
      
    } catch (err) {
      console.log(err);
    }
  };

    useEffect(() => {
      const fetchData = async () => {
          try {
              await fetchExpiredTransaction();
  
              await fetchUserTransaction();
          } catch (error) {
              console.error(error);
          }
      };
  
      fetchData();
    }, []);


    if(Reload){
      return;
    }
  

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
              <h1 className="font-medium text-center text-slate-700 dark:text-white">Business Permit</h1>
              <h1 className="mb-7 text-sm italic text-center text-slate-700 dark:text-gray-300">Transactions</h1>

              <div className="flex items-center justify-center space-x-6 text-xs">
                <div className="flex items-center">
                  <div className="w-4 h-1 mr-2 bg-[#d62d20]"></div>
                  <p className="text-slate-700 dark:text-white">Business Permit</p>
                </div>
              </div>
            </div>
          </div>

          {/*  Two Sections */}
          <div className="grid grid-cols-1 gap-4 mx-4 my-4">
            
            <AdminBusinessProcessing
            busOffice={busOffice}
            businessData={businessData}
            businessPermit = {businessPermit}
            handleUpdateData={handleUpdateData}
            />

          </div>

          <AdminFooter />
        </main>

      </div>
    </div>
  );
}

export default AdminBusinessForm2;