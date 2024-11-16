import { Col, Pagination, Row } from 'antd';
import add from '../../assets/images/add_button.png';
import filter from '../../assets/images/filter.png'
import CustomeDropdown from '../../components/dropdown'
import action from '../../assets/images/action.png'
import { Checkbox } from 'antd';
import create from '../../assets/images/create.png'
import minus from '../../assets/images/minus.png'
import ScoreGreen from '../../assets/images/score_green.png'
import ScoreRed from '../../assets/images/score_red.png'
import { useState } from 'react';

export default function () {

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18];
    const [current, setCurrent] = useState(1);
    const itemsPerPage = 7
    const startIndex = (current - 1) * itemsPerPage;
    const endIndex = current * itemsPerPage;
    const itemToDisplay = array.slice(startIndex, endIndex);

    return (
        <div className='w-full max-w-7xl'>
            <div className="w-full my-8 rounded-xl p-1 sm:p-4 md:p-8 max-w-7xl dark:bg-[#2a2a2a] dark:text-primary bg-[#fff6f5] h-full text-secondary font-medium font-primary">
                <p className="text-2xl font-primary font-semibold text-black dark:text-primary">My Terms( Words And Expression )</p>
                <div className='my-4 flex gap-8'>
                    <div className='flex gap-2'>
                        <img src={add} alt="add" />
                        <p className='font-primary text-sm font-medium w-full'>New Term? Set Language Filter First</p>
                    </div>
                </div>
                <Row align='middle' justify='space-between'>
                    <Col>
                        <Row align='middle' className='my-2' gutter={8}>
                            <Col><img className='w-5 h-5' src={filter} alt="filter" /></Col>
                            <Col><p className='font-primary font-semibold text-lg text-black dark:text-primary'>Filter</p></Col>
                        </Row>
                    </Col>
                    <Col>
                        <button className='border-none px-8 py-1 w-fir h-fit bg-black dark:bg-[#121212] text-white font-primary rounded-3xl'>Reset All</button>
                    </Col>
                </Row>
                <div className='my-2 grid grid-cols-1 min-[790px]:grid-cols-3'>
                    <div className='col-span-1 flex items-center gap-6'>
                        <p className='font-primary text-sm font-medium'>Language</p>
                        <CustomeDropdown bgColor='bg-primary' textColor='text-white' title={'[ Filter ]'} />
                    </div>
                    <div className='col-span-2 flex items-center gap-2 min-[790px]:mt-0 mt-2'>
                        <p className='w-full max-w-[40px]'>Text</p>
                        <input placeholder='text' className='outline-none dark:bg-[#121212] border-none py-2 px-4 w-full h-8 font-primary bg-[#EFEFEF] rounded-3xl' type="text" />
                    </div>
                </div>
                <div className='my-2 grid grid-cols-1 min-[940px]:grid-cols-3'>
                    <div className='col-span-1 flex items-center justify-between my-2 min-[940px]:my-0'>
                        <div className='flex items-center gap-3 min-[474px]:gap-12'>
                            <p className='font-primary text-sm font-medium'>Status</p>
                            <CustomeDropdown bgColor='bg-primary' textColor='text-white' title={'[ Filter ]'} />
                        </div>
                        <div className='flex min-[940px]:hidden items-center gap-2'>
                            <button className='w-fit h-fit py-[6px] px-3 text-white text-sm font-primary rounded-3xl bg-primary'>Filter</button>
                            <button className='w-fit h-fit py-[6px] px-3 text-black text-sm font-primary rounded-3xl bg-secondary'>Clear</button>
                        </div>
                    </div>
                    <div className='col-span-2 flex items-center gap-2'>
                        <p className='w-full min-w-[240px] max-w-[240px]'>Term, Rom, Transl.( Wildc,=*)</p>
                        <input placeholder='text' className='outline-none dark:text-primary dark:bg-[#121212] border-none py-2 px-4 w-full h-8 font-primary text-gray-500 bg-[#EFEFEF] rounded-3xl' type="text" />
                        <button className='w-fit hidden min-[940px]:flex h-fit py-[6px] px-3 text-white text-sm font-primary rounded-3xl bg-primary'>Filter</button>
                        <button className='w-fit hidden min-[940px]:flex h-fit py-[6px] px-3 text-black text-sm font-primary rounded-3xl bg-secondary'>Clear</button>
                    </div>
                </div>
                <div className='grid grid-cols-2 items-center min-[940px]:grid-cols-3'>
                    <div className='col-span-1 flex gap-2 min-[474px]:gap-[45px] items-center'>
                        <p className='font-primary text-sm font-medium'>Tag #1</p>
                        <CustomeDropdown bgColor='bg-primary' textColor='text-white' title={'[ Filter ]'} />
                    </div>
                    <div className='col-span-1 min-[940px]:flex hidden items-center gap-4'>
                        <p className='font-primary'>Tag #1</p>
                        <button className='px-12 py-1 w-fit text-white h-fit bg-primary rounded-3xl'>..OR..</button>
                        <p className='font-primary'>Tag #2</p>
                    </div>
                    <div className='col-span-1 flex items-center gap-2 justify-end'>
                        <p className='font-primary'>Tag #2</p>
                        <CustomeDropdown bgColor='bg-primary' textColor='text-white' title={'[ Filter ]'} />
                    </div>
                    <div className='col-span-2 min-[940px]:hidden flex my-2 items-center gap-4'>
                        <p className='font-primary'>Tag #1</p>
                        <button className='px-12 py-1 w-fit text-white h-fit bg-primary rounded-3xl'>..OR..</button>
                        <p className='font-primary'>Tag #2</p>
                    </div>
                </div>
                <div className='grid grid-cols-2 min-[564px]:grid-cols-4 mt-8 gap-2 items-center'>
                    <p className='col-span-1'>9 Texts</p>
                    <p className='col-span-1 text-end'>Page 1 of 1</p>
                    <div className='col-span-2 flex items-center gap-6 min-[564px]:justify-end justify-start'>
                        <p>Sort Order</p>
                        <CustomeDropdown bgColor='bg-secondary' textColor='text-black' title={'Title A-Z'} />
                    </div>
                </div>
                <div className='w-full flex -ml-1 items-center gap-2 my-4'>
                    <img className='w-6 h-6' src={action} alt="action" />
                    <p className='text-lg font-bold font-primary dark:text-primary text-black'>Multi Action</p>
                </div>
                <div className='w-full flex justify-between gap-2 items-center flex-wrap'>
                    <div className='flex gap-6'>
                        <Checkbox className='dark:text-primary'>Mark All</Checkbox>
                        <Checkbox className='dark:text-primary'>Mark None</Checkbox>
                    </div>
                    <div className='flex gap-6 items-center'>
                        <p>All 207 Terms</p>
                        <CustomeDropdown title='[ Choose ]' bgColor='bg-primary' textColor='text-white' />
                    </div>
                    <div className='flex items-center gap-6'>
                        <p>Marked Texts</p>
                        <CustomeDropdown title='[ Choose ]' bgColor='bg-primary' textColor='text-white' />
                    </div>
                </div>
                <div className='my-6 w-full overflow-x-auto'>
                    <div className='w-full min-w-[930px] grid grid-cols-12 border-t border-b border-[#e8e1e1] h-fit my-2'>
                        <div className='col-span-1 w-full h-12 flex items-center justify-center border-r border-[#e8e1e1]'>
                            <p className='font-primary text-sm'>Mark</p>
                        </div>
                        <div className='col-span-1 w-full h-12 flex items-center justify-center border-r border-[#e8e1e1]'>
                            <p className='font-primary text-sm text-center'>Action</p>
                        </div>
                        <div className='col-span-1 w-full h-12 flex items-center justify-center border-r border-[#e8e1e1]'>
                            <p className='font-primary text-sm text-center'>Language</p>
                        </div>
                        <div className='col-span-3 w-full h-12 flex flex-col items-center justify-center border-r border-[#e8e1e1]'>
                            <p className='font-primary text-sm text-center flex items-center'>Term / Romanization</p>
                        </div>
                        <div className='col-span-3 w-full h-12 flex items-center justify-center border-r border-[#e8e1e1]'>
                            <p className='font-primary text-sm text-center'>Translation [ Tags ]</p>
                        </div>
                        <div className='col-span-1 w-full h-12 flex items-center justify-center border-r border-[#e8e1e1]'>
                            <p className='font-primary text-sm text-center'>Se? </p>
                        </div>
                        <div className='col-span-1 w-full h-12 flex items-center justify-center border-r border-[#e8e1e1]'>
                            <p className='font-primary text-sm text-center'>Stat./ Days</p>
                        </div>
                        <div className='col-span-1 w-full h-12 flex items-center justify-center'>
                            <p className='font-primary text-sm text-center'>Score %</p>
                        </div>
                    </div>
                    {itemToDisplay?.map(item => {
                        return (
                            <div key={item} className='w-full min-w-[930px] rounded-lg bg-white dark:bg-[#121212] items-center grid grid-cols-12 h-fit my-2'>
                                <div className='col-span-1 w-full h-fit py-1 flex items-center justify-center border-r border-[#e8e1e1]'>
                                    <Checkbox />
                                </div>
                                <div className='col-span-1 w-full h-fit py-1 flex gap-2 items-center justify-center border-r border-[#e8e1e1]'>
                                    <img className='w-4 h-4' src={create} alt="study" />
                                    <img className='w-4 h-4' src={minus} alt="study" />
                                </div>
                                <div className='col-span-1 w-full h-fit py-1 flex items-center justify-center border-r border-[#e8e1e1]'>
                                    <p className='font-primary text-sm text-center'>French</p>
                                </div>
                                <div className='col-span-3 w-full h-fit py-1 flex flex-col items-start px-6 justify-center border-r border-[#e8e1e1]'>
                                    <p className='text-sm'>action / *</p>
                                </div>
                                <div className='col-span-3 w-full h-fit py-1 flex items-center justify-start px-6 border-r border-[#e8e1e1]'>
                                    <p className='font-primary text-sm text-center'>has / have</p>
                                </div>
                                <div className='col-span-1 w-full h-fit py-1 flex items-center justify-center border-r border-[#e8e1e1]'>
                                    <img className='w-4 h-4' src={ScoreGreen} alt="ScoreGreen" />
                                </div>
                                <div className='col-span-1 w-full h-fit py-1 flex items-center justify-center border-r border-[#e8e1e1]'>
                                    <p className='font-primary text-sm'>2/1014</p>
                                </div>
                                <div className='col-span-1 w-full h-fit py-1 flex items-center justify-center gap-2'>
                                    <p className='font-primary text-[#ff0000] dark:text-primary text-sm text-center'>0</p>
                                    <img className='w-4 h-4' src={ScoreRed} alt="ScoreGreen" />
                                </div>
                            </div>
                        )
                    })}
                </div>
                <Pagination
                    onChange={value => setCurrent(value)}
                    pageSize={itemsPerPage}
                    defaultCurrent={1}
                    total={array.length}
                />
            </div>
            <div className='w-full max-w-7xl flex justify-between'>
                <p className='font-primary dark:text-primary text-white font-medium text-lg'>207 Terms</p>
                <p className='font-primary dark:text-primary text-white font-medium text-lg'>Page 1 of 3</p>
            </div>
        </div>

    )
}