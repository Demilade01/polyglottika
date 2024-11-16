import { IoIosArrowBack } from 'react-icons/io'
import firstImage from '../../assets/images/image1.png';
import secondImage from '../../assets/images/image2.png';
import thirdImage from '../../assets/images/image3.png';
import forthImage from '../../assets/images/image4.png';
import india from '../../assets/images/IN.png'
import ES from '../../assets/images/ES.png'
import MC from '../../assets/images/MC.png'
import RE from '../../assets/images/RE.png'
import UM from '../../assets/images/UM.png'
import box1 from '../../assets/images/box1.png'
import box2 from '../../assets/images/box2.png'
import box3 from '../../assets/images/box3.png'
import box4 from '../../assets/images/box4.png'
import box5 from '../../assets/images/box5.png'
import group from '../../assets/images/Group 7.png'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';


export default function () {


    const theme = localStorage.getItem('theme')
    const [step, setStep] = useState(1);
    const navigate = useNavigate();

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
    console.log(step)

    return (
        <div className='scroll-smooth w-full h-full min-h-screen dark:bg-[#121212] bg-primary flex p-2 justify-center items-center'>
            <div className='w-full custom_blur max-w-xl flex justify-center items-center flex-col opacity-90 bg-white dark:bg-[#2a2a2a] h-full rounded-3xl'>
                <div className='w-full my-10 flex justify-center items-center gap-8'>
                    <p onClick={() => step !== 1 && setStep(prev => prev - 1)} className='text-black dark:text-slate-200'><IoIosArrowBack size={24} /></p>
                    <div className='flex items-center gap-2'>
                        <div className={`${(step === 1 || step > 1) ? 'bg-primary' : 'bg-slate-200'} w-12 min-[440px]:w-16 h-1  rounded-full`} />
                        <div className={`${(step === 2 || step > 2) ? 'bg-primary' : 'bg-slate-200'} w-12 min-[440px]:w-16 h-1 rounded-full`} />
                        <div className={`${(step === 3 || step > 3) ? 'bg-primary' : 'bg-slate-200'} w-12 min-[440px]:w-16 h-1 rounded-full`} />
                        <div className={`${(step === 4 || step > 4) ? 'bg-primary' : 'bg-slate-200'} w-12 min-[440px]:w-16 h-1 rounded-full`} />
                        <div className={`${(step === 5 || step > 5) ? 'bg-primary' : 'bg-slate-200'} w-12 min-[440px]:w-16 h-1 rounded-full`} />
                    </div>
                </div>
                {step === 1 ?
                    <>
                        <div className='w-full max-w-[340px] flex items-center gap-6 mb-12'>
                            <img className='h-20' src={forthImage} alt="" />
                            <p className='font-primary dark:text-slate-200 text-black text-center'>What language do you want to use fo Lingoverse ?</p>
                        </div>
                        <div className='w-full max-w-[340px] flex justify-start'>
                            <p className='font-primary dark:text-slate-200 text-black text-center'>Your Native Language</p>
                        </div>
                        <div className='w-full my-6 max-w-[340px] h-fit py-2 bg-[#FFEEEC] border-[1.5px] rounded-xl border-primary flex justify-around items-center'>
                            <div className='flex gap-4'>
                                <img className='h-6' src={india} alt={india} />
                                <p className='font-primary text-black text-center'>Hindi</p>
                            </div>
                            <p className='font-primary text-primary text-center text-sm'>Change</p>
                        </div>
                        <div className='w-full mb-8 max-w-[340px] flex justify-start'>
                            <p className='font-primary dark:text-slate-200 text-black text-center'>Languages To Learn</p>
                        </div>
                        <div className='w-full max-w-[340px] grid grid-cols-2 gap-2 mb-12'>
                            <div className='col-span-1 bg-slate-200 py-3 w-full h-full rounded-xl flex justify-center gap-4'>
                                <img className='w-8' src={UM} alt={UM} />
                                <p className='font-primary text-black text-center'>English</p>
                            </div>
                            <div className='col-span-1 bg-slate-200 py-3 w-full h-full rounded-xl flex justify-center gap-4'>
                                <img className='w-8' src={ES} alt={ES} />
                                <p className='font-primary text-black text-center'>Spanish </p>
                            </div>
                            <div className='col-span-1 bg-slate-200 py-3 w-full h-full rounded-xl flex justify-center gap-4'>
                                <img className='w-8' src={MC} alt={UM} />
                                <p className='font-primary text-black text-center'>Indonesia</p>
                            </div>
                            <div className='col-span-1 bg-slate-200 py-3 w-full h-full rounded-xl flex justify-center gap-4'>
                                <img className='w-8' src={RE} alt={UM} />
                                <p className='font-primary text-black text-center'>French</p>
                            </div>
                        </div>
                    </> : step === 2 ?
                        <>
                            <div className='w-full max-w-[340px] flex items-center gap-6 mb-12'>
                                <img className='h-20' src={thirdImage} alt={firstImage} />
                                <p className='font-primary dark:text-slate-200 text-black text-center'>How much english
                                    do you know ?</p>
                            </div>
                            <div className='w-full my-2 max-w-[340px] h-fit py-3 bg-[#FFEEEC] border-[1.5px] rounded-lg border-primary flex justify-around items-center'>
                                <div className='flex gap-4 items-center'>
                                    <img className='h-6' src={group} alt={india} />
                                    <p className='font-primary text-black text-sm font-medium text-center'>I just started learning english</p>
                                </div>
                            </div>
                            <div className='w-full my-2 max-w-[340px] h-fit py-3 bg-slate-200 rounded-lg flex justify-around items-center'>
                                <div className='flex gap-4 items-center'>
                                    <img className='h-6' src={group} alt={india} />
                                    <p className='font-primary text-black text-sm font-medium text-center'>I just started learning english</p>
                                </div>
                            </div>
                            <div className='w-full my-2 max-w-[340px] h-fit py-3 bg-slate-200 rounded-lg flex justify-around items-center'>
                                <div className='flex gap-4 items-center'>
                                    <img className='h-6' src={group} alt={india} />
                                    <p className='font-primary text-black text-sm font-medium text-center'>I just started learning english</p>
                                </div>
                            </div>
                            <div className='w-full mb-8 my-2 max-w-[340px] h-fit py-3 bg-slate-200 rounded-lg flex justify-around items-center'>
                                <div className='flex gap-4 items-center'>
                                    <img className='h-6' src={group} alt={india} />
                                    <p className='font-primary text-black text-sm font-medium text-center'>I just started learning english</p>
                                </div>
                            </div>
                        </> : step === 3 ?
                            <>
                                <div className='w-full max-w-[340px] flex items-center gap-6 mb-12'>
                                    <img className='h-20' src={secondImage} alt={firstImage} />
                                    <p className='font-primary dark:text-slate-200 text-black text-center'>How much english
                                        do you know ?</p>
                                </div>
                                <div className='w-full my-2 max-w-[340px] h-fit py-3 bg-[#FFEEEC] border-[1.5px] rounded-lg border-primary flex pl-8 items-center'>
                                    <div className='flex gap-4 items-center'>
                                        <img className='h-6' src={box5} alt={india} />
                                        <p className='font-primary text-black text-sm font-medium text-center'>Just for fun</p>
                                    </div>
                                </div>
                                <div className='w-full my-2 max-w-[340px] h-fit py-3 bg-slate-200 rounded-lg flex pl-8 items-center'>
                                    <div className='flex gap-4 items-center'>
                                        <img className='h-6' src={box1} alt={india} />
                                        <p className='font-primary text-black text-sm font-medium text-center'>Improve my career</p>
                                    </div>
                                </div>
                                <div className='w-full my-2 max-w-[340px] h-fit py-3 bg-slate-200 rounded-lg flex pl-8 items-center'>
                                    <div className='flex gap-4 items-center'>
                                        <img className='h-6' src={box2} alt={india} />
                                        <p className='font-primary text-black text-sm font-medium text-center'>Support my education</p>
                                    </div>
                                </div>
                                <div className='w-full my-2 max-w-[340px] h-fit py-3 bg-slate-200 rounded-lg flex pl-8 items-center'>
                                    <div className='flex gap-4 items-center'>
                                        <img className='h-6' src={box4} alt={india} />
                                        <p className='font-primary text-black text-sm font-medium text-center'>Vacation preparation</p>
                                    </div>
                                </div>
                                <div className='w-full mb-8 my-2 max-w-[340px] h-fit py-3 bg-slate-200 rounded-lg flex pl-8 items-center'>
                                    <div className='flex gap-4 items-center'>
                                        <img className='h-6' src={box3} alt={india} />
                                        <p className='font-primary text-black text-sm font-medium text-center'>Other reasons</p>
                                    </div>
                                </div>
                            </> :
                            <>
                                <div className='w-full max-w-[340px] flex items-center gap-6 mb-12'>
                                    <img className='h-20' src={firstImage} alt={firstImage} />
                                    <p className='font-primary dark:text-slate-200 text-black text-center'>This is what you
                                        will get inside! ?</p>
                                </div>
                                <div className='w-full max-w-[340px] mb-8 bg-slate-200 rounded-xl'>
                                    <p className='font-primary mt-8 text-sm font-medium text-black pl-8'>This is what you
                                        will get inside! ?
                                    </p>
                                    <p className='font-primary text-xs font-normal text-black pl-8'>
                                        100+ interactive exercies</p>
                                    <div className='w-[220px] h-1 bg-white rounded-full ml-8 mt-4' />
                                    <p className='font-primary mt-4 text-sm font-medium text-black pl-8'>This is what you
                                        will get inside! ?</p>
                                    <p className='font-primary text-xs font-normal text-black pl-8'>
                                        100+ interactive exercies</p>
                                    <div className='w-[220px] h-1 bg-white rounded-full ml-8 mt-4' />
                                    <p className='font-primary mt-4 text-sm font-medium text-black pl-8'>This is what you
                                        will get inside! ?</p>
                                    <p className='font-primary text-xs mb-8 font-normal text-black pl-8'>
                                        100+ interactive exercies</p>
                                </div>
                            </>
                }
                <button onClick={() => step === 4 ? navigate('/home') : setStep(prev => prev + 1)} className='border-none outline-none bg-primary rounded-[10px] mb-12 text-white font-primary
                 font-medium px-6 py-2'>Continue</button>
            </div>
        </div>
    )
}