import { useState } from 'react'
import { BsEyeSlash, BsEye } from 'react-icons/bs'

const Input = ({ image, placeholder }) => {
    return (
        <div className="w-full h-10 flex items-center  px-6 my-2 dark:bg-[#2a2a2a] bg-[#f6f6f7] rounded-2xl">
            <img className='w-4 h-4' src={image} alt="user" />
            <input placeholder={placeholder} className="w-full p-4 h-10 font-primary dark:bg-[#2a2a2a] dark:text-primary bg-[#f6f6f7] outline-none rounded-2xl" type="text" />
        </div>
    )
}

const Password = ({ image, placeholder }) => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div className="w-full h-10 flex items-center px-6 my-2 bg-[#f6f6f7] dark:bg-[#2a2a2a] rounded-2xl">
            <img className='w-4 h-4' src={image} alt="user" />
            <input placeholder={placeholder} className="w-full p-4 h-10 font-primary dark:bg-[#2a2a2a] dark:text-primary bg-[#f6f6f7] outline-none rounded-2xl" type={!showPassword ? 'password' : 'text'} />
            {!showPassword ? <BsEyeSlash onClick={() => setShowPassword(prev => !prev)} /> : <BsEye onClick={() => setShowPassword(prev => !prev)} />}
        </div>
    )
}

export { Input, Password }