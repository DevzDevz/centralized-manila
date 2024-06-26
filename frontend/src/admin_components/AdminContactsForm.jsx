import React, { useState, useRef } from 'react';
import AdminSidebar from '../admin_partials/AdminSidebar';
import AdminHeader from '../admin_partials/AdminHeader';
import AdminFooter from '../admin_partials/AdminFooter';
import RealEstateImage from '../images/RealEstate.jpg';
import TaxPayerLoungeImage from '../images/TaxPayerLounge.jpg';
import LocalCivilRegistryImage from '../images/LocalCivilRegistry.jpg';
import ElectronicDataProcessingImage from '../images/ElectronicDataProcessing.jpg';
import SittingGirlImage from '../images/resources/contacts.png';
import CallingGirlImage from '../images/resources/contacts_02.png';
import CallingGuyImage from '../images/resources/contacts_03.png';

const AdminContactsForm = () => {
  const contentRef = useRef(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  

  return (
    <div className="flex h-screen overflow-hidden dark:bg-[#212121]">
      {/* AdminSidebar */}
      <AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <AdminHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="overflow-y-auto">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className="bg-white dark:bg-[#181818] p-6 mb-6 rounded-sm shadow-md flex flex-col md:flex-row items-center justify-center md:gap-12">
              {/* Left side with images */}
              <div className='flex items-baseline mb-4 md:mb-0 md:ml-10'>
                <img src={CallingGirlImage} alt="Banner Image" className='md:w-60 md:h-60 w-44 h-44 object-contain'/>
                <img src={SittingGirlImage} alt="Banner Image" className='md:w-32 md:h-32 w-20 h-20 object-contain'/>
                <img src={CallingGuyImage} alt="Banner Image" className='md:w-60 md:h-60 w-44 h-44 object-contain'/>
              </div>

              {/* Right side with text */}
              <div className='md:mr-20 text-center md:text-left'>
                <h1 className="text-xl md:text-5xl text-slate-800 dark:text-slate-100 font-medium mb-1">
                  Get in
                  <span className='text-blue-500'> t</span>
                  <span className='text-red-500'>o</span>
                  <span className='text-yellow-500'>u</span>
                  <span className='text-blue-500'>c</span>
                  <span className='text-emerald-500'>h</span>
                </h1>
                <p className="text-md dark:text-slate-400 font-thin">We'd love to hear from you!</p>
              </div>
            </div>


              <div className="grid grid-rows-3 grid-cols-8 gap-6">
              <div className="hidden md:flex flex-col col-span-full sm:col-span-3 bg-white dark:bg-[#181818] shadow-md rounded-sm">
                <div className="md:flex-1 px-5 py-4 md:flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="stroke-slate-800 dark:stroke-slate-200  w-20 h-20 object-contain my-5 mx-auto md:ml-5 md:mr-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                  <div className="pt-0 pr-0 text-center sm:pt-3 sm:pr-5 sm:text-left ">
                    <h2 className="font-semibold text-slate-800 dark:text-slate-100 mb-1">Location</h2>
                    <div className="text-sm md:text-base dark:text-slate-100">
                      <p className="font-semibold text-slate-600 dark:text-slate-100">Manila City Hall</p>
                      <p>Padre Burgos Ave, Ermita,</p>
                      <p> Manila, 1000 Metro Manila</p>
                    </div>
                  </div>
                </div> 
              </div>

              <div className="flex flex-col col-span-full sm:col-span-5 p-5 bg-white dark:bg-[#181818] shadow-md rounded-sm row-span-2 sm:row-span-3">
                <div className="relative z-0 w-full h-full overflow-hidden">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1931.7223286484173!2d120.9816112038786!3d14.589513683410111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca22039a1457%3A0xef880ce1e8275d72!2sManila%20City%20Hall%2C%20Padre%20Burgos%20Ave%2C%20Ermita%2C%20Manila%2C%201000%20Metro%20Manila!5e0!3m2!1sen!2s!4v1648546994325!5m2!1sen!2s"
                    frameBorder="0"
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                  />
                </div>
              </div>

              <div className="flex flex-col col-span-full sm:col-span-3 md:hidden bg-white dark:bg-[#181818] shadow-md rounded-sm">
                <div className="md:flex-1 px-5 py-4 md:flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="stroke-slate-800 dark:stroke-slate-200 w-20 h-20 object-contain my-5 mx-auto md:ml-5 md:mr-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                  <div className="pt-0 pr-0 text-center sm:pt-5 sm:pr-5 sm:text-left">
                    <h2 className="font-semibold text-slate-800 dark:text-slate-100 mb-1">Location</h2>
                    <div className="text-sm md:text-base dark:text-slate-100">
                      <p className="font-semibold text-slate-600 dark:text-slate-100">Manila City Hall</p>
                      <p>Padre Burgos Ave, Ermita,</p>
                      <p> Manila, 1000 Metro Manila</p>
                    </div>
                  </div>
                </div> 
              </div>




            <div className="flex flex-col col-span-full sm:col-span-3 bg-white dark:bg-[#181818] shadow-md rounded-sm">
                <div className="md:flex-1 px-5 py-4 md:flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="stroke-slate-800 dark:stroke-slate-200 w-20 h-20 object-contain my-5 mx-auto md:ml-5 md:mr-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                  <div className="pt-0 pr-0 text-center sm:pt-5 sm:pr-5 sm:text-left">
                    <h2 className="font-semibold text-slate-800 dark:text-slate-100 mb-1">Office Hours</h2>
                    <div className="text-sm md:text-base text-slate-600 dark:text-slate-100">
                      <p className="font-semibold">Monday to Friday</p>
                      <p className="">8:00 AM to 5:00 PM</p>
                    </div>
                  </div>
                </div> 
              </div>

              <div className="flex flex-col col-span-full sm:col-span-3 bg-white dark:bg-[#181818] shadow-md rounded-sm">
                <div className="md:flex-1 px-5 py-4 md:flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="stroke-slate-800 dark:stroke-slate-200 w-20 h-20 object-contain my-5 mx-auto md:ml-5 md:mr-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                </svg>
                  <div className="pt-0 pr-0 text-center sm:pt-5 sm:pr-5 sm:text-left">
                    <h2 className="font-semibold text-slate-800 dark:text-slate-100 mb-1">Official Public Email</h2>
                    <div className="text-sm md:text-base text-slate-600 dark:text-slate-100">
                      <p className="font-semibold">MPIO:</p>
                      <p className="break-all">manilapublicinfo@gmail.com</p>
                    </div>
                  </div>
                </div> 
              </div>
            </div>

            
            <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="flex flex-col col-span-full sm:col-span-1 bg-white dark:bg-[#181818] shadow-md rounded-sm">
              <div className="md:flex-1 md:flex px-5 py-4 ">
              <img src={RealEstateImage} alt="Office Image" className="w-40 h-40 object-contain my-5 mx-auto md:ml-5 md:mr-8 rounded-sm"/>
                <div className="pt-0 pr-0 sm:pt-5 sm:pr-5 text-center sm:text-left">
                    <div className='text-sm md:text-base dark:text-slate-200'>
                      <div className="flex items-center justify-center mb-0 sm:mb-5 mt-0 sm:mt-2 sm:justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="text-slate-800 dark:text-slate-200 w-6 h-6">
                          <path fill-rule="evenodd" d="M4.5 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5h-.75V3.75a.75.75 0 0 0 0-1.5h-15ZM9 6a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm-.75 3.75A.75.75 0 0 1 9 9h1.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm3.75-5.25A.75.75 0 0 1 13.5 6H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM13.5 9a.75.75 0 0 0 0 1.5H15A.75.75 0 0 0 15 9h-1.5Zm-.75 3.75a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM9 19.5v-2.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 9 19.5Z" clip-rule="evenodd" />
                        </svg>
                        <p className="font-semibold text-slate-800 dark:text-slate-200 ml-2">Real Estate Division</p>
                      </div>
                      <div className="flex items-center justify-center mt-3 sm:mt-0 sm:justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        <p className="ml-2">Cristy Arcedo</p>
                      </div>
                      <div className="flex items-center justify-center mt-3 sm:justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        <p className="ml-2">(02) 8527 - 0884</p>
                      </div>
                      <div className="flex items-center justify-center mt-3 sm:justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <p className="ml-2">Room 147</p>
                      </div>
                    </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col col-span-full sm:col-span-1 bg-white dark:bg-[#181818] shadow-md rounded-sm">
              <div className="md:flex-1 md:flex px-5 py-4 ">
              <img src={TaxPayerLoungeImage} alt="Office Image" className="w-40 h-40 object-contain my-5 mx-auto md:ml-5 md:mr-8 rounded-sm"/>
                <div className="pt-0 pr-0 sm:pt-5 sm:pr-5 text-center sm:text-left">
                    <div className='text-sm md:text-base dark:text-slate-200'>
                      <div className="flex items-center justify-center mb-0 sm:mb-5 mt-0 sm:mt-2  sm:justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="text-slate-800 dark:text-slate-200 w-6 h-6">
                          <path fill-rule="evenodd" d="M4.5 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5h-.75V3.75a.75.75 0 0 0 0-1.5h-15ZM9 6a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm-.75 3.75A.75.75 0 0 1 9 9h1.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm3.75-5.25A.75.75 0 0 1 13.5 6H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM13.5 9a.75.75 0 0 0 0 1.5H15A.75.75 0 0 0 15 9h-1.5Zm-.75 3.75a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM9 19.5v-2.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 9 19.5Z" clip-rule="evenodd" />
                        </svg>
                        <p className="font-semibold text-slate-800 dark:text-slate-200 ml-2">Tax Payer's Lounge</p>
                      </div>
                      <div className="flex items-center justify-center mt-3 sm:mt-0 sm:justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        <p className="ml-2">Jojo Renavidez & Eogenio Catanayo</p>
                      </div>
                      <div className="flex items-center justify-center mt-3 sm:justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        <p className="ml-2">(02) 8527 - 0871</p>
                      </div>
                      <div className="flex items-center justify-center mt-3 sm:justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <p className="ml-2">Ground Floor - West Wing</p>
                      </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col col-span-full sm:col-span-1 bg-white dark:bg-[#181818] shadow-md rounded-sm">
              <div className="md:flex-1 md:flex px-5 py-4 ">
              <img src={LocalCivilRegistryImage} alt="Office Image" className="w-40 h-40 object-contain my-5 mx-auto md:ml-5 md:mr-8 rounded-sm"/>
                <div className="pt-0 pr-0 sm:pt-5 sm:pr-5 text-center sm:text-left">
                    <div className='text-sm md:text-base dark:text-slate-200'>
                      <div className="flex items-center justify-center mb-0 sm:mb-5 mt-3 sm:mt-0 sm:justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="text-slate-800 dark:text-slate-200 w-6 h-6">
                          <path fill-rule="evenodd" d="M4.5 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5h-.75V3.75a.75.75 0 0 0 0-1.5h-15ZM9 6a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm-.75 3.75A.75.75 0 0 1 9 9h1.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm3.75-5.25A.75.75 0 0 1 13.5 6H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM13.5 9a.75.75 0 0 0 0 1.5H15A.75.75 0 0 0 15 9h-1.5Zm-.75 3.75a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM9 19.5v-2.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 9 19.5Z" clip-rule="evenodd" />
                        </svg>
                        <p className="font-semibold text-slate-800 dark:text-slate-200 ml-2">Local Civil Registry</p>
                      </div>
                      <div className="flex items-center justify-center mt-3 sm:mt-0 sm:justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        <p className="ml-2">Airene Viloria</p>
                      </div>
                      <div className="flex items-center justify-center mt-3 sm:justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        <p className="ml-2">(02) 8405 - 0081</p>
                      </div>
                      <div className="flex items-center justify-center mt-3 sm:justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <p className="ml-2">Room 117 - 119</p>
                      </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col col-span-full sm:col-span-1 bg-white dark:bg-[#181818] shadow-md rounded-sm">
              <div className="md:flex-1 md:flex px-5 py-4 ">
              <img src={ElectronicDataProcessingImage} alt="Office Image" className="w-40 h-40 object-contain my-5 mx-auto md:ml-5 md:mr-8 rounded-sm"/>
                <div className="pt-0 pr-0 sm:pt-5 sm:pr-5 text-center sm:text-left">
                    <div className='text-sm md:text-base dark:text-slate-200'>
                      <div className="flex items-center justify-center mb-0 sm:mb-5 mt-0 sm:mt-2  sm:justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="text-slate-800 dark:text-slate-200 w-6 h-6">
                          <path fill-rule="evenodd" d="M4.5 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5h-.75V3.75a.75.75 0 0 0 0-1.5h-15ZM9 6a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm-.75 3.75A.75.75 0 0 1 9 9h1.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm3.75-5.25A.75.75 0 0 1 13.5 6H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM13.5 9a.75.75 0 0 0 0 1.5H15A.75.75 0 0 0 15 9h-1.5Zm-.75 3.75a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM9 19.5v-2.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 9 19.5Z" clip-rule="evenodd" />
                        </svg>
                        <p className="font-semibold text-slate-800 dark:text-slate-200 ml-2">Electronic Data Processing (EDP)</p>
                      </div>
                      <div className="flex items-center justify-center mt-3 sm:mt-0 sm:justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        <p className="ml-2">Christopher Gurion</p>
                      </div>
                      <div className="flex items-center justify-center mt-3 sm:justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        <p className="ml-2">(02) 8527 - 7804</p>
                      </div>
                      <div className="flex items-center justify-center mt-3 sm:justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <p className="ml-2">Room 142</p>
                      </div>
                  </div>
                </div>
              </div>
            </div>


           

            </div>

            
          </div>
          
          <AdminFooter />
        </main>
      </div>
    </div>
  );
}

export default AdminContactsForm;
