import { Outlet } from 'react-router'
import Navbar from '../layout/navbar'
import { ConfigProvider } from 'antd'
import { useState } from 'react';

export default function () {

    const [theme, setTheme] = useState(localStorage.getItem('theme'));
    const handleTheme = (value) => {
        setTheme(value);
    }



    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#ff5733',
                    colorTextDisabled: '#ff5733',
                    colorText: '#ff5733',
                    colorBgElevated: theme === 'dark' ? '#ff5733' : 'white'
                },
                components: {
                    Pagination: {
                        itemActiveColorDisabled: '#ff5733'
                    }
                }
            }}
        >
            <div className='scroll-smooth'>
                <main className="w-full min-h-[100vh] dark:bg-[#121212] h-full pt-12 pb-6 flex flex-col items-center px-1 sm:px-4 bg-primary">
                    <Navbar handleTheme={handleTheme} />
                    <Outlet />
                </main>
            </div>
        </ConfigProvider>
    )
}