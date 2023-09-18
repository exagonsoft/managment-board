import React, { useEffect } from 'react'
import './styles.css'
import { useStateContext } from '../../contexts/MainContext'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { AiOutlineMenu } from 'react-icons/ai'
import { RiNotification3Line } from 'react-icons/ri'
import Avatar from '../../data/avatar2.jpg'
import { MdKeyboardArrowDown } from 'react-icons/md'
import Notifications from '../Notifications/Notifications'
import Profile from '../Profile/Profile'

const NavButton = (props) => {
  const { title, customFunc, icon, color, dotColor, hasIndicator } = props
  return (
    <TooltipComponent content={title} position='BottomCenter'>
      <button type='button' onClick={customFunc} style={{ color }} className="flex flex-col justify-center align-middle relative text-xl rounded-full p-1 hover:bg-light-gray">
        {hasIndicator ? (<span style={{ background: dotColor }} className="absolute text-2xl inline-flex rounded-full h-2 w-2 right-1 top-1" />) : <></>}
        {icon}
      </button>
    </TooltipComponent>
  )
}

const NavBar = () => {
  const { activeMenu, setActiveMenu, handleClick, isClicked, setIsClicked, screenSize, setScreenSize, } = useStateContext()

  const ToggleSideBar = () => {
    setActiveMenu((prevActiveMenu) =>
      !prevActiveMenu
    )
  }

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (screenSize < 900) {
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }
  }, [screenSize])

  return (
    <div className='flex align-middle items-center justify-between p-2 md:mx-6 relative'>
      <NavButton title="Menu" customFunc={ToggleSideBar} color="blue" icon={<AiOutlineMenu />} hasIndicator={false} />
      <div className="flex align-middle items-center gap-3 mr-5">
        <NavButton title="Notifications" customFunc={() => handleClick('not')} dotColor="#03C9D7" color="blue" icon={<RiNotification3Line />} hasIndicator={true} />
        <TooltipComponent content="Profile" position='BottomCenter'>
          <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg" onClick={() => { handleClick('prof') }}>
            <img src={Avatar} alt="" className="rounded-full w-8 h-8" />
            <p>
              <span className="text-gray-400 text-14">Hi, </span> {' '} <span className="text-gray-400 font-bold ml-1 text-14">Lisa</span>
            </p>
            <MdKeyboardArrowDown className='text-gray-400 text-14 ' />
          </div>
        </TooltipComponent>
        {isClicked.not && <Notifications />}
        {isClicked.prof && <Profile />}
      </div>
    </div>
  )
}

export default NavBar
