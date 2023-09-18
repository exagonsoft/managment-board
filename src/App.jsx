import React, { Suspense, useContext, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiSettings } from "react-icons/fi";
import LoaderScreen from './pages/Loader/LoaderScreen';
import ECommerce from './pages/Dashboard/ECommerce';
import SideBar from './components/SideBar/SideBar';
import NavBar from './components/NavBar/NavBar';
import Users from './pages/Users/Users';
import Renters from './pages/Renters/Renters';
import Business from './pages/Business/Business';
import Partners from './pages/Partners/Partners';
import Rents from './pages/Rents/Rents';
import Invoices from './pages/Invoices/Invoices';
import Subcides from './pages/Subsides/Subcides';
import { useStateContext } from './contexts/MainContext';
import Schedule from './pages/Shedule/Shedule';
import Events from './pages/Events/Events';
import Footer from './components/Footer/Footer';


const App = () => {
  const { activeMenu } = useStateContext()

  return (
    <>
      <Suspense fallback={<LoaderScreen />}>
        <BrowserRouter>
          <div className="flex relative dark:bg-main-dark-bg">
            {/* <div className="fixed right-4 bottom-4 z-[1000] cursor-pointer">
              <TooltipComponent content="Settings" position='Top'>
                <button type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white bg-blue-500 rounded-full transitions'>
                  <FiSettings />
                </button>
              </TooltipComponent>
            </div> */}
            {activeMenu ? <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'><SideBar /></div> : <div className='w-0 dark:bg-secondary-dark-bg'><SideBar /></div>}
            <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
              <div className=" sticky top-0 md:static bg-main-bg dark:bg-main-dark-bg navbar w-full"><NavBar /></div>

              <div className="">

                <Routes>
                  <Route path='/' element={<ECommerce />} />
                  <Route path='/ecommerce' element={<ECommerce />} />

                  <Route path='/users' element={<Users />} />
                  <Route path='/renters' element={<Renters />} />
                  <Route path='/business' element={<Business />} />
                  <Route path='/partners' element={<Partners />} />

                  <Route path='/rents' element={<Rents />} />
                  <Route path='/invoices' element={<Invoices />} />
                  <Route path='/subsides' element={<Subcides />} />

                  <Route path='/schedule' element={<Schedule />} />
                  <Route path='/events' element={<Events />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </div>
        </BrowserRouter>
      </Suspense>
    </>
  )
}

export default App
