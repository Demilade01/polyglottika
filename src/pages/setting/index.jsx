import { ConfigProvider } from "antd";
import { Progress } from "antd";
import { MdArrowBackIosNew } from "react-icons/md";
import summary from '../../assets/images/summary_list.png'
import { MyChart, PieChart } from "../../components/charts";
import { Link } from "react-router-dom";
import { HiMenuAlt1 } from 'react-icons/hi'


export default function () {
    const twoColors = {
        '0%': '#feac92',
        '25%': '#ffffff',
    };
    return (
        <ConfigProvider
            theme={{
                components: {
                    Progress: {
                        circleTextColor: '#fff',
                    },

                },
            }}
        >
            <div className="w-full h-full max-w-7xl my-8 overflow-x-hidden">
                <div className="w-full h-12 flex items-center gap-6">
                    <Link to='/home/flashcard' className='w-10 h-10 rounded-full bg-[#cc4229] flex items-center justify-center'>
                        <MdArrowBackIosNew color='white' />
                    </Link>
                    <p className="font-primary text-2xl font-medium dark:text-primary text-white">Flashcard Settings</p>
                </div>
                <div className="w-full h-full grid min-[1024px]:grid-cols-4 grid-cols-3 rounded-2xl my-6 overflow-hidden">

                    <div className="px-8 py-4 col-span-3 w-full h-full rounded-2xl min-[1024px]:rounded-s-2xl min-[1024px]:rounded-e-none dark:bg-[#1e1e1e] dark:text-primary bg-[#fee4df]">
                        <div className="flex min-[1024px]:hidden justify-end mb-4 items-center gap-2">
                            <p className="font-primary text-lg">Summary</p>
                            <HiMenuAlt1 className="rotate-180" size={24} />
                        </div>
                        <div className="w-full h-full ">
                            <div className="items-center py-6 justify-around flex flex-wrap rounded-lg border-2 border-[#f3c4b9]">
                                <div className="">
                                    <p className="mb-6 font-primary font-medium">Reviews Per Day (Average)</p>
                                    <div className="flex items-center gap-3 justify-center">
                                        <div className="w-fit h-fit dark:shadow-2xl dark:shadow-[#121212] shadow-2xl shadow-[#fe8155] p-1 bg-[#fe8155] rounded-full">
                                            <Progress size={[100]} strokeWidth={10} strokeLinecap='butt' strokeColor={twoColors} trailColor='#fc5527' className='bg-[#fe8155] text-white rounded-full' type="circle" percent={25} />
                                        </div>
                                        <div className="text-sm font-primary dark:text-primary dark:opacity-100 font-medium text-black opacity-40">
                                            <p>195/250</p>
                                            <p>Cards Learned</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <p className="mb-6 font-primary font-medium">Reviews Today</p>
                                    <div className="flex items-center gap-3 justify-center">
                                        <div className="w-fit h-fit dark:shadow-2xl dark:shadow-[#121212] shadow-2xl shadow-[#fe8155] p-1 bg-[#fe8155] rounded-full">
                                            <Progress size={[100]} strokeWidth={10} strokeLinecap='butt' strokeColor={twoColors} trailColor='#fc5527' className='bg-[#fe8155] text-white rounded-full' type="circle" percent={25} />
                                        </div>
                                        <div className="text-sm font-primary font-medium dark:text-primary dark:opacity-100 text-black opacity-40">
                                            <p>195/250</p>
                                            <p>Cards Learned</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <p className="mb-6 font-primary font-medium">Grade Change Today</p>
                                    <div className="flex items-center gap-3 justify-center">
                                        <div className="w-fit h-fit dark:shadow-2xl dark:shadow-[#121212] shadow-2xl shadow-[#fe8155] p-1 bg-[#fe8155] rounded-full">
                                            <Progress size={[100]} strokeWidth={10} strokeLinecap='butt' strokeColor={twoColors} trailColor='#fc5527' className='bg-[#fe8155] text-white rounded-full' type="circle" percent={25} />
                                        </div>
                                        <div className="text-sm font-primary font-medium dark:text-primary dark:opacity-100 text-black opacity-40">
                                            <p>195/250</p>
                                            <p>Cards Learned</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap justify-around items-center">
                                <MyChart direction={true} />
                                <div className="flex flex-col items-center">
                                    <PieChart />
                                    <p className="my-4 dark:text-primary text-[#5B5B5B] font-medium font-primary ">195/230</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 hidden min-[1024px]:block p-4 h-full rounded-tr-2xl rounded-br-2xl bg-[#312c2c]">
                        <div className="w-full flex justify-center gap-2">
                            <img src={summary} alt="ary" />
                            <p className="font-primary font-medium dark:text-primary text-white">Summary</p>
                        </div>
                        <div className="my-12">
                            <div className="flex items-center gap-4 justify-center">
                                <div className="w-fit h-fit dark:shadow-2xl dark:shadow-[#121212] shadow-2xl shadow-[#ff9a76] p-1 bg-[#fe8155] rounded-full">
                                    <Progress size={[100]} strokeWidth={10} strokeLinecap='butt' strokeColor={twoColors} trailColor='#fc5527' className='bg-[#fe8155] text-white rounded-full' type="circle" percent={25} />
                                </div>
                                <div className="text-sm font-primary font-medium dark:text-primary text-white">
                                    <p>195/250</p>
                                    <p>Cards Learned</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-primary dark:text-primary text-white">Information</p>
                            <hr className="bg-white opacity-50 my-2" />
                            <div className="w-full flex justify-between">
                                <p className="text-sm font-primary dark:text-primary text-white">Reviews Per Day (Average)</p>
                                <p className="text-sm font-primary dark:text-primary text-white">20</p>
                            </div>
                            <div className="w-full flex justify-between my-2">
                                <p className="text-sm font-primary dark:text-primary text-white">Reviews Today</p>
                                <p className="text-sm font-primary dark:text-primary text-white">90</p>
                            </div>
                            <div className="w-full flex justify-between">
                                <p className="text-sm font-primary dark:text-primary text-white">Grade Change Today</p>
                                <p className="text-sm font-primary text-[#FFC300]">90</p>
                            </div>
                        </div>
                        <div>
                            <MyChart direction={false} />
                        </div>
                    </div>
                </div>
            </div>
        </ConfigProvider>

    )
}