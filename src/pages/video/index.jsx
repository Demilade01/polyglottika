import { MdArrowBackIosNew } from 'react-icons/md'
import script from '../../assets/images/property_script.png'
import play from '../../assets/images/play_button_circled.png'
import { useState } from 'react'
import { HiMenuAlt1 } from 'react-icons/hi'

export default function () {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full h-full max-w-7xl my-8 overflow-x-hidden">
            <div className="w-full h-12 flex items-center gap-6 justify-between">
                <div className='flex items-center gap-6'>
                    <div className='w-10 h-10 rounded-full  bg-[#cc4229] flex items-center justify-center'>
                        <MdArrowBackIosNew color='white' />
                    </div>
                    <p className="font-primary text-2xl dark:text-primary text-white">Oswaldo Ep1</p>
                </div>
                <div className='flex items-center gap-2'>
                    <p className='font-primary text-2xl dark:text-primary text-white'>Script</p>
                    <p><HiMenuAlt1 onClick={() => setOpen(prev => !prev)} size={24} className='dark:text-primary text-white rotate-180' /></p>
                </div>
            </div>
            <div className='w-full h-[660px] relative rounded-2xl dark:bg-[#2a2a2a] dark:text-primary bg-[#ffd0ce] my-4 flex'>
                <iframe className={`${open ? 'lg:mr-80' : 'mr-0'} ease-in-out rounded-xl w-full transition-all duration-300`} height="660px"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe>
                <div className={`${open ? 'translate-x-0' : 'translate-x-full'} w-80 ease-in-out transition-all duration-300 absolute h-[660px] right-0 rounded-e-2xl dark:bg-[#2a2a2a] bg-[#ffd0ce]`}>
                    <div className='flex m-4 items-center gap-4'>
                        <img src={script} alt="" />
                        <p className='font-primary'>Script</p>
                    </div>
                    <p className='text-sm text-center my-3 opacity-60'>-A serio? -Um abraco antes de ir.</p>
                    <p className='text-sm text-center my-3 opacity-60'>-A serio? -Um abraco antes de ir.</p>
                    <p className='text-sm text-center my-3 opacity-60'>-A serio? -Um abraco antes de ir.</p>
                    <p className='text-sm text-center my-3 opacity-60'>-A serio? -Um abraco antes de ir.</p>
                    <p className='text-sm text-center my-3 opacity-60'>-A serio? -Um abraco antes de ir.</p>
                    <p className='text-sm text-center my-3 opacity-60'>-A serio? -Um abraco antes de ir.</p>
                    <div className='flex m-4 items-center gap-5'>
                        <img src={play} alt="" />
                        <p className='text-sm text-black dark:text-primary font-medium text-center'>-A serio? -Um abraco antes de ir</p>
                    </div>
                    <p className='text-sm text-center my-3 opacity-60'>-A serio? -Um abraco antes de ir.</p>
                    <p className='text-sm text-center my-3 opacity-60'>-A serio? -Um abraco antes de ir.</p>
                    <p className='text-sm text-center my-3 opacity-60'>-A serio? -Um abraco antes de ir.</p>
                    <p className='text-sm text-center my-3 opacity-60'>-A serio? -Um abraco antes de ir.</p>
                    <p className='text-sm text-center my-3 opacity-60'>-A serio? -Um abraco antes de ir.</p>
                    <p className='text-sm text-center my-3 opacity-60'>-A serio? -Um abraco antes de ir.</p>
                    <p className='text-sm text-center my-3 opacity-60'>-A serio? -Um abraco antes de ir.</p>
                    <p className='text-sm text-center my-3 opacity-60'>-A serio? -Um abraco antes de ir.</p>
                </div>
            </div>
        </div>

    )
}