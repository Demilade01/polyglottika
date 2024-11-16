import twitter from '../../assets/images/Twitter.png'
import youtube from '../../assets/images/Youtube.png'
import dribble from '../../assets/images/Dribbble.png'
import instagram from '../../assets/images/Instagram.png'
export default function () {
    return (
        <div className="w-full flex flex-col items-center bg-white h-24 my-4 justify-around">
            <p className='font-primary leading-4 text-lg text-[#A9A9A9] font-medium'>LWT</p>
            <p className='text-[#A9A9A9] text-sm leading-4'>Copyright © 2023 NAME All rights reserved</p>
            <div className='flex gap-2'>
                <img src={twitter} alt="tte" />
                <img src={youtube} alt="tte" />
                <img src={dribble} alt="tte" />
                <img src={instagram} alt="tte" />
            </div>
        </div>
    )
}