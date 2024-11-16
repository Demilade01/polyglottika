import { NavLink, useLocation } from "react-router-dom"
import chat from '../../assets/images/chat.png'
import setting from '../../assets/images/settings.png'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'
import { AiOutlineMenuFold } from 'react-icons/ai'
import { useState } from "react";
import { useEffect } from "react";
import { Drawer } from "antd"
import { RxCross2 } from 'react-icons/rx'
import logo from '../../assets/images/logo.png'

export default function ({ handleTheme }) {
    const { pathname } = useLocation();
    const [theme, setTheme] = useState(localStorage.getItem('theme'));
    const [open, setOpen] = useState(false);
    useEffect(() => {
        if (theme === 'dark') {
            localStorage.setItem('theme', 'dark')
            document.documentElement.classList.add('dark')
            handleTheme('dark');
        }
        else {
            localStorage.setItem('theme', 'light')
            document.documentElement.classList.remove('dark')
            handleTheme('light');
        }
    }, [theme])


    const NAV_ITEM = [
        { title: 'Home', url: '/home' },
        { title: 'Reading', url: '/home/reading' },
        { title: 'Vocabulary Vault', url: '/home/vocabulary' },
        { title: 'Statistics', url: '/home/statistics' },
        { title: 'Add articles', url: '/home/articles' },
        { title: 'Upgrade', url: '/home/upgrade' },
        { title: 'Video Player', url: '/home/video' }
    ]

    return (
        <div className="w-full h-full max-w-7xl">
            <Drawer
                closeIcon={false}
                style={{ backgroundColor: '#FFA899' }}
                placement="left"
                open={open}
                onClose={() => setOpen(false)}
                width={320}

            >
                <div className="flex items-center justify-between mb-4">
                    <p className="font-primary text-3xl font-bold text-white">Logo</p>
                    <RxCross2 color="white" onClick={() => setOpen(false)} size={24} />
                </div>
                <ul className="custom w-full flex min-[1074px]:hidden flex-col items-start rounded-3xl">
                    {NAV_ITEM?.map(item => {
                        return (
                            <NavLink onClick={() => setOpen(false)} to={item?.url} className={`${item?.url === pathname ? 'text-white font-medium text-xl' : (pathname === '/home/flashcard/setting' && item?.title === 'Flashcard') ? 'text-white font-medium text-xl' : 'text-lg'} font-primary my-[2px]`} key={item?.url}>{item?.title}</NavLink>
                        )
                    })}
                </ul>
            </Drawer>
            <nav className="w-full h-16 flex items-center justify-between">
                <div className='flex items-center gap-4'>
                    <p onClick={() => setOpen(prev => !prev)} className='text-white flex min-[1074px]:hidden'><AiOutlineMenuFold size={24} /></p>
                    {/* <p className="font-primary text-2xl font-bold text-white">Logo</p> */}
                    <img className="h-28" src={logo} alt={logo} />
                </div>
                <ul className="custom w-full h-10 hidden min-[1074px]:flex justify-around items-center rounded-3xl px-4 mx-2 dark:bg-[#2a2a2a] dark:text-primary bg-[#FFA899]">
                    {NAV_ITEM?.map(item => {
                        return (
                            <NavLink to={item?.url} className={`${item?.url === pathname ? 'text-white font-medium text-base' : (pathname === '/home/flashcard/setting' && item?.title === 'Flashcard') ? 'text-white font-medium text-base' : 'text-sm'} font-primary`} key={item?.url}>{item?.title}</NavLink>
                        )
                    })}
                </ul>
                <div className='flex items-center'>
                    <div className="w-fit p-2 h-fit mx-1 rounded-full flex items-center justify-center dark:bg-[#2a2a2a] bg-[#E6412E]">
                        <img className="" src={chat} alt="chat" />
                    </div>
                    <div className="w-fit p-2 h-fit mx-1 rounded-full flex items-center justify-center dark:bg-[#2a2a2a] bg-[#E6412E]">
                        <img className="w-4" src={setting} alt="chat" />
                    </div>
                    <div onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="w-fit p-2 h-fit mx-1 rounded-full flex items-center justify-center dark:bg-[#2a2a2a] bg-[#E6412E]">
                        <BsFillMoonStarsFill className={`${theme !== 'dark' ? 'hidden' : 'block'}`} color="white" />
                        <BsFillSunFill className={`${theme === 'dark' ? 'hidden' : 'block'}`} color="white" />
                    </div>
                    <button className="w-28 h-10 ml-2 rounded-xl font-primary dark:text-primary dark:bg-[#2a2a2a] bg-[#FFA899]">Log In</button>
                </div>
            </nav>
        </div>
    )
}