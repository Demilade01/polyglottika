import CustomDropdown from '../../components/dropdown'



export default function () {
    return (
        <div className='w-full max-w-7xl overflow-x-hidden'>
            <div className="w-full h-full max-w-7xl dark:bg-[#2a2a2a] dark:text-primary bg-[#f8d2cc] rounded-2xl p-8">
                <p className="text-2xl font-primary font-semibold text-black dark:text-primary">Add Articles</p>
                <div className="grid grid-cols-1 min-[740px]:grid-cols-2 items-center gap-4 my-4">
                    <div className="col-span-1 grid grid-cols-4 items-center">
                        <div className="col-span-1">
                            <p className="font-primary text-sm text-black dark:text-primary font-medium w-ful">Language</p>
                        </div>
                        <div className="col-span-3">
                            <CustomDropdown title='Chinese' textColor='text-black' bgColor='bg-primary' />
                        </div>
                    </div>
                    <div className='col-span-1 grid grid-cols-4 items-center'>
                        <p className="font-primary col-span-1 text-sm text-black dark:text-primary font-medium w-fulf">Title</p>
                        <input className='outline-none col-span-3 dark:bg-[#121212] px-4 py-1 rounded-3xl' placeholder='Text' type="text" name="" id="" />
                    </div>
                </div>
                <div className="grid grid-cols-1 min-[740px]:grid-cols-2 items-start gap-4 my-4">
                    <div className='col-span-1 grid grid-cols-4 items-start'>
                        <p className="font-primary col-span-1 text-sm text-black dark:text-primary font-medium w-full">Title<span className='text-[10px]'>(Max.6500 Bytes)</span></p>
                        <textarea rows={7} className='outline-none dark:bg-[#121212] col-span-3 px-4 py-1 rounded-xl' placeholder='Text' type="text" name="" id="">
                        </textarea>
                    </div>
                    <div className='col-span-1 grid grid-cols-4 items-center'>
                        <p className="font-primary col-span-1 text-sm text-black dark:text-primary font-medium w-full">Source URL</p>
                        <input className='outline-none col-span-3 px-4 py-1 dark:bg-[#121212] rounded-3xl' placeholder='Text' type="text" name="" id="" />
                        <p className="font-primary col-span-1 text-sm text-black dark:text-primary font-medium w-fulf">Tags</p>
                        <input className='my-4 outline-none col-span-3 px-4 dark:bg-[#121212] py-1 rounded-3xl' placeholder='Text' type="text" name="" id="" />
                        <p className="font-primary col-span-1 text-sm text-black dark:text-primary font-medium w-fulf">Audio URL</p>
                        <input className='col-span-3 outline-none px-4 py-1 dark:bg-[#121212] rounded-3xl' placeholder='Text' type="text" name="" id="" />
                        <p className="font-primary col-span-1 text-sm text-black dark:text-primary font-medium w-full"></p>
                        <p className="my-2 font-primary col-span-3 text-xs text-black dark:text-primary font-medium w-full">or choose a file in ".../public_html/media" (only mp3, ogg, wav files shown):[Directory ".../public_html/media" does not yet exist.]</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 min-[740px]:grid-cols-2 items-center gap-4 my-4">
                    <div className="col-span-1 grid grid-cols-5 items-center">
                        <div className="col-span-3">
                            <p className="font-primary text-sm text-black dark:text-primary font-medium w-full max-w-xs">Import of a long text, without audio, with splitting it up into smaller texts</p>
                        </div>
                        <div className='col-span-2 flex justify-end'>
                            <button className='font-primary text-sm bg-[#868788] text-white px-6 py-1 rounded-2xl'>Long Text Import</button>
                        </div>
                    </div>
                    <div className='col-span-1 flex flex-wrap gap-2'>
                        <button className='w-32 py-[6px] bg-[#393838] font-primary text-white text-xs rounded-2xl'>Cancel</button>
                        <button className='w-32 py-[6px] bg-[#ff0000] font-primary text-white text-xs rounded-2xl'>Check</button>
                        <button className='w-32 py-[6px] bg-[#003C95] font-primary text-white text-xs rounded-2xl'>Save</button>
                        <button className='w-32 py-[6px] bg-[#FFC300] font-primary text-black text-sm rounded-2xl'>Save & Open</button>
                    </div>
                </div>
            </div>
        </div>

    )
}