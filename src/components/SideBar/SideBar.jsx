import React, { useContext, useEffect } from 'react'
import './styles.css'
import { Link, NavLink } from 'react-router-dom'
import { } from "react-icons/si";
import Logo from '../../Assets/pictures/LoaderBanner.png'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { MdOutlineCancel } from "react-icons/md";
import { links } from '../../data/dummy'
import { useStateContext } from '../../contexts/MainContext';

const SideBar = () => {
  const { activeMenu, setActiveMenu, screenSize} = useStateContext()
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white bg-light-gray text-md m-2'
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'

  const LogoClick = () => {
    if(screenSize < 900){
      setActiveMenu(false)
    }
  }

  const HideSideBar = () => {
    setActiveMenu((prevActiveMenu) => !prevActiveMenu)
  }

  const LinkClick = () => {
    if(screenSize < 900){
      setActiveMenu(false)
    }
  }

  useEffect(() => {
    if(screenSize < 900){
      setActiveMenu(false)
    }
  }, [])

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link to='/' onClick={LogoClick} className='flex items-center p-3 gap-2 font-extrabold text-xl tracking-tight dark:text-white text-slate-900'>
              <img src={Logo} alt="CityKleta" className='logo-banner' /><span>CityKleta-Admin</span>
            </Link>
            <TooltipComponent content="Close Menu" position='BottomCenter'>
              <button type='button' onClick={HideSideBar} className="text-xl mt-1 mr-1 rounded-full p-1 hover:bg-light-gray block dark:text-white text-slate-900">
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((menu_item, index) => (
              <div key={index} className="">
                <p className='text-gray-400 m-3 mt-4 uppercase'>
                  {menu_item.title}
                </p>
                {menu_item.links.map((link_item, link_index) => (
                  <NavLink to={`/${link_item.name}`} key={link_index} onClick={LinkClick} className={({ isActive }) => isActive ? activeLink : normalLink}>
                    {link_item.icon}
                    <span className="capitalize">{link_item.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default SideBar
