import image from '../../assets/images/login_image.png';
import { Input, Password } from '../../components/input';
import user from '../../assets/images/user.png';
import password from '../../assets/images/Password.png';
import { Checkbox, Row } from 'antd';
import { FcGoogle } from 'react-icons/fc'
import { BsApple } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import logo from '../../assets/images/logo.png'


export default function () {

    const theme = localStorage.getItem('theme')

    useEffect(() => {
        if (theme === 'dark') {
            localStorage.setItem('theme', 'dark')
            document.documentElement.classList.add('dark')
        }
        else {
            localStorage.setItem('theme', 'light')
            document.documentElement.classList.remove('dark')
        }
    }, [theme])


    return (
        <div className='w-full bg-[#FFA899] dark:bg-[#121212] h-screen overflow-hidden grid grid-cols-1 md:grid-cols-2'>
            <div className='col-span-1 overflow-hidden w-0 hidden h-0 md:w-full md:block md:h-screen'>
                <img className='w-full h-full object-fill' src={image} alt="image" />
            </div>
            <div className='col-span-1 w-full h-full overflow-y-auto '>
                <div className='w-full flex justify-center'>
                    <div className='w-full  max-w-lg h-full flex flex-col justify-center p-4'>
                        <img src={logo} alt={logo} />
                        <p className='font-primary -mt-24 text-primary text-2xl font-semibold my-2'>Welcome</p>
                        <Input placeholder='Email or Phone Number' image={user} />
                        <Password placeholder='Password' image={password} />
                        <Row className='my-4' justify='space-between'>
                            <Checkbox>Remember Me</Checkbox>
                            <p className='text-primary font-primary text-sm'>Forget Password?</p>
                        </Row>
                        <Link to='/onboard' className='bg-primary flex justify-center h-fit py-4 border-none rounded-2xl font-primary font-semibold text-white my-4'>Log in</Link>
                        <p className='text-gray-400 text-center my-4 font-primary'>OR</p>
                        <Row justify='center'>
                            <div className='w-12 h-12 m-3 dark:bg-[#2a2a2a] bg-light flex justify-center items-center rounded-full'>
                                <FcGoogle size={24} />
                            </div>
                            <div className='w-12 h-12 m-3 dark:bg-[#2a2a2a] bg-light flex justify-center items-center rounded-full'>
                                <BsApple size={24} />
                            </div>
                        </Row>
                        <p className='font-primary text-gray-500 text-sm text-center my-4'>Dont have an account? <span className='text-primary'>Sign Up</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}