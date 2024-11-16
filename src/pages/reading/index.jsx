import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import print from '../../assets/images/print 1.png'
import question from '../../assets/images/question.png'
import study from '../../assets/images/folder.png'
import create from '../../assets/images/create.png'
import vector from '../../assets/images/Vector.png'
import music from '../../assets/images/music.png'
import show from '../../assets/images/show_property.png'
import { Radio } from 'antd'
import { useState, Fragment } from 'react'
import { Popover } from 'antd'


export default function () {
    const [value, setValue] = useState(1);
    const [text, setText] = useState('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, voluptas repudiandae provident rem corporis soluta in animi veniam maxime tenetur, qui impedit consequatur laudantium voluptatem esse est autem suscipit minima.');
    const [splitText, setSplitText] = useState(text?.split(' ')?.map(item => false));


    const handleSpace = (index) => {
        const splitWord = [...splitText];
        if (splitWord[index]) {
            splitWord[index] = false;
        }
        else {
            splitWord[index] = true;
        }
        setSplitText(splitWord)
    }

    const para = () => {
        return text?.split(' ')?.map((word, index) => {
            return (
                <Fragment key={word}>
                    <Popover className='inline min-[820px]:hidden'
                        content={() =>
                            <div className='w-44'>
                                <span className='font-primary font-medium text-black'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, corrupti? Possimus deleni
                                </span>
                            </div>
                        }
                    >
                        <span className={`${index % 3 === 0 ? 'bg-[#a7bbc8]' : index % 5 === 0 && 'bg-[#f3cba8]'} w-fit pl-1.5 font-primary leading-8 text-sm`} style={{ letterSpacing: splitText[index] ? 12 : 0, cursor: 'pointer' }} onClick={() => handleSpace(index)}>{word}{'  '}</span>
                    </Popover>
                    <span
                        className={`${index % 3 === 0 ? 'bg-[#a7bbc8]' : index % 5 === 0 && 'bg-       [#f3cba8]'} w-fit pl-1.5 font-primary leading-8 text-sm hidden min-[820px]:inline`} style={{ letterSpacing: splitText[index] ? 12 : 0, cursor: 'pointer' }} onClick={() => handleSpace(index)}
                    >{word}{'  '}
                    </span>
                </Fragment>
            )
        })
    }

    const onChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div className="w-full max-w-7xl my-8">
            <div className='w-full flex flex-wrap gap-2 items-center justify-between'>
                <div className='flex gap-4 items-center'>
                    <div className='flex justify-center items-center w-8 h-8 bg-[#cc4329] rounded-full'>
                        <RiArrowLeftSLine color='white' size={24} />
                    </div>
                    <div className='flex justify-center items-center w-8 h-8 bg-[#cc4329] rounded-full'>
                        <RiArrowRightSLine color='white' size={24} />
                    </div>
                    <div className='flex mx-4 gap-2'>
                        <img className='w-6 h-6' src={question} alt="question" />
                        <img className='w-6 h-6' src={print} alt="question" />
                        <img className='w-6 h-6' src={create} alt="question" />
                        <img className='w-6 h-6' src={study} alt="question" />
                    </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <p className='text-white font-primary font-medium text-lg'>READ</p>
                    <img className='w-4 h-4' src={vector} alt="vector" />
                    <p className='text-white font-primary font-medium'>Mon premier don du sang</p>
                    <img className='w-6 h-6' src={music} alt="music" />
                </div>
            </div>
            <div className='grid grid-cols-1 min-[820px]:grid-cols-2 gap-8 my-8'>
                <div className='col-span-1 h-[720px] p-4 bg-white dark:bg-[#2a2a2a] dark:text-primary rounded-2xl'>
                    {para()}
                </div>
                <div className='col-span-1 flex flex-col items-end'>
                    <audio className='' controls>
                        <source src="https://www.computerhope.com/jargon/m/example.mp3" />
                    </audio>
                    <div className='w-full h-fit dark:bg-[#2a2a2a] dark:text-primary bg-white my-6 p-4 rounded-2xl'>
                        <div className=' grid grid-cols-4 items-center'>
                            <p className='col-span-1 font-primary'>New Term</p>
                            <input placeholder='Text' className='col-span-3 h-8 px-4 py-1 bg-[#f6f6f7] dark:bg-[#121212] outline-none rounded-2xl' type="text" />
                        </div>
                        <div className='my-4 grid grid-cols-4 items-start'>
                            <p className='col-span-1 font-primary'>New Term</p>
                            <textarea rows={2} placeholder='Text' className='col-span-3 px-4 py-1 bg-[#f6f6f7] dark:bg-[#121212] outline-none rounded-2xl'></textarea>
                        </div>
                        <div className='my-4 grid grid-cols-4 items-center'>
                            <p className='col-span-1 font-primary'>Tags</p>
                            <input placeholder='Text' className='col-span-3 h-8 px-4 py-1 bg-[#f6f6f7] dark:bg-[#121212] outline-none rounded-2xl' type="text" />
                        </div>
                        <div className='my-4 grid grid-cols-4 items-center'>
                            <p className='col-span-1 font-primary'>Romaniz</p>
                            <input placeholder='Text' className='col-span-3 h-8 px-4 py-1 bg-[#f6f6f7] dark:bg-[#121212] outline-none rounded-2xl' type="text" />
                        </div>
                        <div className='my-4 grid grid-cols-4 items-start'>
                            <p className='col-span-1 font-primary'>Sentence Term</p>
                            <textarea rows={3} placeholder='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate iste harum ratione cum. Quam totam non id consequatur recusandae,loremque?' className='col-span-3 px-4 py-1 bg-[#f6f6f7] dark:bg-[#121212] outline-none rounded-2xl'></textarea>
                        </div>
                        <div className='my-4 grid grid-cols-4 items-start'>
                            <p className='col-span-1 font-primary'>Status</p>
                            <div className='col-span-3'>
                                <Radio.Group onChange={onChange} value={value}>
                                    <Radio className='bg-[#fbbaae] p-1 dark:text-primary rounded-md' value={1}>1</Radio>
                                    <Radio className='bg-[#f3cba8] p-1 dark:text-primary rounded-md' value={2}>2</Radio>
                                    <Radio className='bg-[#eddda1] p-1 dark:text-primary rounded-md' value={3}>3</Radio>
                                    <Radio className='bg-[#f1f1ae] p-1 dark:text-primary rounded-md' value={4}>4</Radio>
                                    <Radio className='bg-[#a5e0e8] dark:text-primary p-1 rounded-md' value={5}>5</Radio>
                                    <Radio className='dark:text-primary' value={6}>WKN</Radio>
                                    <Radio className='dark:text-primary' value={7}>Lgn</Radio>
                                </Radio.Group>
                            </div>
                            <div className='my-4 flex justify-end col-span-4 gap-2 items-center'>
                                <p className='text-sm font-primary'>Look up Term - </p>
                                <p className='text-sm font-primary text-primary'> Dict2</p>
                                <p className='text-sm font-primary'> | Sent - </p>
                                <p className='text-sm font-primary text-primary'>Gtr</p>
                                <button className='bg-primary mx-2 rounded-lg font-primary text-sm px-6 text-white py-2'>Save</button>
                            </div>
                            <div className='flex col-span-4 gap-2 items-center'>
                                <img className='w-6 h-6' src={show} alt="show" />
                                <p className='font-primary text-primary'>Show Sentences</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full hidden min-[820px]:grid bg-white dark:bg-[#2a2a2a] dark:text-primary rounded-2xl p-4'>
                        <div className='flex w-full flex-col'>
                            <div className='flex items-center justify-between'>
                                <p className='font-primary text-lg'>prendre</p>
                                <div className='w-40 h-10 gap-2 rounded-md bg-[#ffe180] flex p-2 items-center'>
                                    <p className='font-primary text-sm'>ECOUNTER</p>
                                    <div className='w-0.5 h-full bg-gray-500' />
                                    <p className='font-primary text-sm'>FRANCE</p>
                                </div>
                            </div>
                            <p className='text-sm font-primary mt-4'>Lorem, ipsumluptas molesticiendis doloremque obcaecati fugiat vitae labgnam.</p>
                            <p className='text-sm font-primary'>Lorem, ipsumluptas molesticiendis doloremque obcaecati fugiat vitae labgnam.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}