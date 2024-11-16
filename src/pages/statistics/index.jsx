export default function () {

    const array = [1, 2, 3, 4, 5, 6, 7]


    return (
        <div className="w-full my-8 rounded-xl p-8 max-w-7xl dark:bg-[#2a2a2a] dark:text-primary bg-[#fff6f5] h-full text-secondary font-medium font-primary">
            <p className="text-2xl font-primary font-semibold dark:text-primary text-black">My Statistics</p>
            <div className='my-4 flex gap-8'>
                <div className='flex flex-col gap-2'>
                    <p className='font-primary text-base dark:text-primary text-black font-medium w-full'>Breakdown by Language and Term Status</p>
                    <p className='font-primary text-base font-medium w-full'>( Click on numbers to see the list of terms)</p>
                </div>
            </div>
            <div className='my-6 overflow-x-auto'>
                <div className='w-full min-w-[880px] grid grid-cols-12 border-t border-b border-[#e8e1e1] h-fit my-2'>
                    <div className='col-span-1 w-full h-12 flex items-center justify-center border-r border-[#e8e1e1]'>
                        <p className='font-primary text-sm'>Language</p>
                    </div>
                    <div className='col-span-1 w-full h-12 flex items-center justify-center border-r border-[#e8e1e1]'>
                        <p className='font-primary text-sm text-center'>Total</p>
                    </div>
                    <div className='col-span-1 w-full h-12 flex items-center justify-center border-r border-[#e8e1e1]'>
                        <p className='font-primary text-sm text-center'>Active <br />(1.5)</p>
                    </div>
                    <div className='col-span-1 w-full h-12 flex flex-col items-center justify-center border-r border-[#e8e1e1]'>
                        <p className='font-primary text-sm text-center flex items-center'>Learning <br />(1.4)</p>
                    </div>
                    <div className='col-span-1 w-full h-12 flex items-center justify-center border-r border-[#e8e1e1]'>
                        <p className='font-primary text-sm text-center'>Unknown <br />(1)</p>
                    </div>
                    <div className='col-span-1 w-full h-12 flex items-center justify-center border-r border-[#e8e1e1]'>
                        <p className='font-primary text-sm text-center'>Learning <br />(2)</p>
                    </div>
                    <div className='col-span-1 w-full h-12 flex items-center justify-center border-r border-[#e8e1e1]'>
                        <p className='font-primary text-sm text-center'>Learning <br />(3)</p>
                    </div>
                    <div className='col-span-1 w-full h-12 flex items-center justify-center border-r border-[#e8e1e1]'>
                        <p className='font-primary text-sm text-center'>Learning <br />(4)</p>
                    </div>
                    <div className='col-span-1 w-full h-12 flex items-center justify-center border-r border-[#e8e1e1]'>
                        <p className='font-primary text-sm text-center'>Learned <br />(5)</p>
                    </div>
                    <div className='col-span-1 w-full h-12 flex items-center justify-center border-r border-[#e8e1e1]'>
                        <p className='font-primary text-sm text-center'>Well Known <br />(99)</p>
                    </div>
                    <div className='col-span-1 w-full h-12 flex items-center justify-center border-r border-[#e8e1e1]'>
                        <p className='font-primary text-sm text-center'>Known <br />(5+99)</p>
                    </div>
                    <div className='col-span-1 w-full h-12 flex items-center justify-center'>
                        <p className='font-primary text-sm text-center'>lgn. <br />(98)</p>
                    </div>
                </div>
                {array?.map(item => {
                    return (
                        <div key={item} className='w-full min-w-[880px] rounded-lg bg-white dark:bg-[#121212] items-center grid grid-cols-12 h-fit my-2'>
                            <div className='col-span-1 w-full h-f10py-1 flex items-center justify-center border-r border-[#e8e1e1]'>
                                <p className='font-primary text-sm text-center'>Chinese</p>
                            </div>
                            <div className='col-span-1 w-full h-10 py-1 flex gap-2 items-center justify-center border-r border-[#e8e1e1]'>
                                <p className='font-primary text-sm text-center text-[#ff0000] dark:text-primary'>50</p>
                            </div>
                            <div className='col-span-1 w-full h-10 py-1 flex items-center justify-center border-r border-[#e8e1e1]'>
                                <p className='font-primary text-sm text-center text-[#ff0000] dark:text-primary'>50</p>
                            </div>
                            <div className='col-span-1 w-full h-10 py-1 flex flex-col items-center justify-center border-r border-[#e8e1e1]'>
                                <p className='font-primary text-sm text-center text-[#ff0000] dark:text-primary'>11</p>
                            </div>
                            <div className='col-span-1 w-full h-10 py-1 flex items-center justify-center border-r border-[#e8e1e1]'>
                                <p className='w-10 h-fit py-0.5 rounded-[4px] font-primary text-sm text-center bg-[#fbbaae]'>39</p>
                            </div>
                            <div className='col-span-1 w-full h-10 py-1 flex items-center justify-center border-r border-[#e8e1e1]'>
                                <p className='w-10 h-fit py-0.5 rounded-[4px] font-primary text-sm text-center bg-[#f3cba8]'>11</p>
                            </div>
                            <div className='col-span-1 w-full h-10 py-1 flex items-center justify-center border-r border-[#e8e1e1]'>
                                <p className='w-10 h-fit py-0.5 rounded-[4px] font-primary text-sm text-center bg-[#eddda1]'>0</p>
                            </div>
                            <div className='col-span-1 w-full h-10 py-1 flex items-center justify-center gap-2'>
                                <p className='w-10 h-fit py-0.5 rounded-[4px] font-primary text-sm text-center bg-[#f1f1ae]'>0</p>
                            </div>
                            <div className='col-span-1 w-full h-10 py-1 flex items-center justify-center gap-2'>
                                <p className='w-10 h-fit py-0.5 rounded-[4px] font-primary text-sm text-center bg-[#a5e0e8]'>0</p>
                            </div>
                            <div className='col-span-1 w-full h-10 py-1 flex items-center justify-center gap-2'>
                                <p className='w-10 h-fit rounded-[4px] font-primary text-sm text-center border-2 border-[#a5e0e8]'>0</p>
                            </div>
                            <div className='col-span-1 w-full h-10 py-1 flex items-center justify-center gap-2'>
                                <p className='w-10 h-fit py-0.5 rounded-[4px] font-primary text-sm text-center bg-[#bbffbb]'>0</p>
                            </div>
                            <div className='col-span-1 w-full h-10 py-1 flex items-center justify-center gap-2'>
                                <p className='w-10 h-fit rounded-[4px] font-primary text-sm text-center border-2 dark:border-[#ff5733] border-[#ff0000] border-dashed'>0</p>
                            </div>
                        </div>
                    )
                })}
                <div className='w-full min-w-[880px] grid grid-cols-12 border-t border-b border-[#e8e1e1] h-fit my-2'>
                    <div className='col-span-1 w-full h-12 flex items-center justify-center border-r border-[#e8e1e1]'>
                        <p className='font-primary text-sm'>Total</p>
                    </div>
                    <div className='col-span-1 w-full h-12 flex items-center justify-center border-r border-[#e8e1e1]'>
                        <p className='font-primary text-sm text-center'>207</p>
                    </div>
                    <div className='col-span-1 w-full h-12 flex items-center justify-center border-r border-[#e8e1e1]'>
                        <p className='font-primary text-sm text-center'>190</p>
                    </div>
                    <div className='col-span-1 w-full h-12 flex flex-col items-center justify-center border-r border-[#e8e1e1]'>
                        <p className='font-primary text-sm text-center flex items-center'>179</p>
                    </div>
                    <div className='col-span-1 w-full h-12 flex items-center justify-center border-r border-[#e8e1e1]'>
                        <p className='font-primary text-sm text-center'>230</p>
                    </div>
                    <div className='col-span-1 w-full h-12 flex items-center justify-center border-r border-[#e8e1e1]'>
                        <p className='font-primary text-sm text-center'>48</p>
                    </div>
                    <div className='col-span-1 w-full h-12 flex items-center justify-center border-r border-[#e8e1e1]'>
                        <p className='font-primary text-sm text-center'>107</p>
                    </div>
                    <div className='col-span-1 w-full h-12 flex items-center justify-center border-r border-[#e8e1e1]'>
                        <p className='font-primary text-sm text-center'>10</p>
                    </div>
                    <div className='col-span-1 w-full h-12 flex items-center justify-center border-r border-[#e8e1e1]'>
                        <p className='font-primary text-sm text-center'>9</p>
                    </div>
                    <div className='col-span-1 w-full h-12 flex items-center justify-center border-r border-[#e8e1e1]'>
                        <p className='font-primary text-sm text-center'>45</p>
                    </div>
                    <div className='col-span-1 w-full h-12 flex items-center justify-center border-r border-[#e8e1e1]'>
                        <p className='font-primary text-sm text-center'>88</p>
                    </div>
                    <div className='col-span-1 w-full h-12 flex items-center justify-center'>
                        <p className='font-primary text-sm text-center'>9</p>
                    </div>
                </div>
            </div>
            <div className='my-4 flex gap-8'>
                <div className='flex flex-col gap-2'>
                    <p className='font-primary text-base text-black dark:text-primary font-medium w-full'>Breakdown by Language and Term Range</p>
                    <p className='font-primary text-base font-medium w-full'>( Terms created (C), Terms changed status = Activity (A), Terms set to "Known" (K) )</p>
                </div>
            </div>
            <div className='my-6 overflow-x-auto'>
                <div className='grid min-w-[880px] grid-cols-12 grid-rows-2 border-t border-b  border-[#e8e1e1]'>
                    <div className='col-span-1 row-span-2 w-full flex items-center justify-center border-r border-[#e8e1e1]'>
                        <p className='font-primary text-sm text-center'>Language</p>
                    </div>
                    <div className='col-span-11 row-span-1 grid grid-cols-6'>
                        <div className='col-span-1 py-1 w-full flex items-center justify-center border-r border-b border-[#e8e1e1]'>
                            <p className='font-primary text-sm text-center'>Today</p>
                        </div>
                        <div className='col-span-1 py-1 w-full flex items-center justify-center border-r border-b border-[#e8e1e1]'>
                            <p className='font-primary text-sm text-center'>Yesterday</p>
                        </div>
                        <div className='col-span-1 py-1 w-full flex items-center justify-center border-r border-b border-[#e8e1e1]'>
                            <p className='font-primary text-sm text-center'>Last 7 D</p>
                        </div>
                        <div className='col-span-1 py-1 w-full flex items-center justify-center border-r border-b border-[#e8e1e1]'>
                            <p className='font-primary text-sm text-center'>Last 30 D</p>
                        </div>
                        <div className='col-span-1 py-1 w-full flex items-center justify-center border-r border-b border-[#e8e1e1]'>
                            <p className='font-primary text-sm text-center'>Last 365 D</p>
                        </div>
                        <div className='col-span-1 py-1 w-full flex items-center justify-center border-b border-[#e8e1e1]'>
                            <p className='font-primary text-sm text-center'>All Time</p>
                        </div>
                    </div>
                    <div className='col-span-11 row-span-1 grid grid-cols-6'>
                        <div className='col-span-1 w-full grid grid-cols-3 items-center justify-center border-r border-[#e8e1e1]'>
                            <div className='col-span-1 w-full flex items-center justify-center border-r border-[#e8e1e1]'>
                                <p className='font-primary text-sm text-center'>C</p>
                            </div>
                            <div className='col-span-1 w-full flex items-center justify-center border-r border-[#e8e1e1]'>
                                <p className='font-primary text-sm text-center'>A</p>
                            </div>
                            <div className='col-span-1 w-full flex items-center justify-center'>
                                <p className='font-primary text-sm text-center'>K</p>
                            </div>
                        </div>
                        <div className='col-span-1 w-full grid grid-cols-3 items-center justify-center border-r border-[#e8e1e1]'>
                            <div className='col-span-1 w-full flex items-center justify-center border-r border-[#e8e1e1]'>
                                <p className='font-primary text-sm text-center'>C</p>
                            </div>
                            <div className='col-span-1 w-full flex items-center justify-center border-r border-[#e8e1e1]'>
                                <p className='font-primary text-sm text-center'>A</p>
                            </div>
                            <div className='col-span-1 w-full flex items-center justify-center '>
                                <p className='font-primary text-sm text-center'>K</p>
                            </div>
                        </div>
                        <div className='col-span-1 w-full grid grid-cols-3 items-center justify-center border-r border-[#e8e1e1]'>
                            <div className='col-span-1 w-full flex items-center justify-center border-r border-[#e8e1e1]'>
                                <p className='font-primary text-sm text-center'>C</p>
                            </div>
                            <div className='col-span-1 w-full flex items-center justify-center border-r border-[#e8e1e1]'>
                                <p className='font-primary text-sm text-center'>A</p>
                            </div>
                            <div className='col-span-1 w-full flex items-center justify-center'>
                                <p className='font-primary text-sm text-center'>K</p>
                            </div>
                        </div>
                        <div className='col-span-1 w-full grid grid-cols-3 items-center justify-center border-r border-[#e8e1e1]'>
                            <div className='col-span-1 w-full flex items-center justify-center border-r border-[#e8e1e1]'>
                                <p className='font-primary text-sm text-center'>C</p>
                            </div>
                            <div className='col-span-1 w-full flex items-center justify-center border-r border-[#e8e1e1]'>
                                <p className='font-primary text-sm text-center'>A</p>
                            </div>
                            <div className='col-span-1 w-full flex items-center justify-center'>
                                <p className='font-primary text-sm text-center'>K</p>
                            </div>
                        </div>
                        <div className='col-span-1 w-full grid grid-cols-3 items-center justify-center border-r border-[#e8e1e1]'>
                            <div className='col-span-1 w-full flex items-center justify-center border-r border-[#e8e1e1]'>
                                <p className='font-primary text-sm text-center'>C</p>
                            </div>
                            <div className='col-span-1 w-full flex items-center justify-center border-r border-[#e8e1e1]'>
                                <p className='font-primary text-sm text-center'>A</p>
                            </div>
                            <div className='col-span-1 w-full flex items-center justify-center'>
                                <p className='font-primary text-sm text-center'>K</p>
                            </div>
                        </div>
                        <div className='col-span-1 w-full grid grid-cols-3 items-center justify-center border-r border-[#e8e1e1]'>
                            <div className='col-span-1 w-full flex items-center justify-center border-r border-[#e8e1e1]'>
                                <p className='font-primary text-sm text-center'>C</p>
                            </div>
                            <div className='col-span-1 w-full flex items-center justify-center border-r border-[#e8e1e1]'>
                                <p className='font-primary text-sm text-center'>A</p>
                            </div>
                            <div className='col-span-1 w-full flex items-center justify-center'>
                                <p className='font-primary text-sm text-center'>K</p>
                            </div>
                        </div>
                    </div>
                </div>

                {array?.map(item => {
                    return (
                        <div key={item} className='w-full min-w-[880px] rounded-lg dark:bg-[#121212] bg-white items-center grid grid-cols-12 h-fit my-2'>
                            <div className='col-span-1 w-full h-10 py-1 flex items-center justify-center border-r border-[#e8e1e1]'>
                                <p className='font-primary text-sm text-center'>Chinese</p>
                            </div>
                            <div className='grid col-span-11 grid-cols-6'>
                                <div className='grid col-span-1 grid-cols-3'>
                                    <div className='col-span-1 w-full h-10 py-1 flex items-center justify-center border-r border-[#e8e1e1]'>
                                        <p className='w-10 h-fit py-0.5 rounded-[4px] font-primary text-sm text-center bg-[#fbbaae]'>39</p>
                                    </div>
                                    <div className='col-span-1 w-full h-10 py-1 flex items-center justify-center border-r border-[#e8e1e1]'>
                                        <p className='w-10 h-fit py-0.5 rounded-[4px] font-primary text-sm text-center bg-[#f1f1ae]'>39</p>
                                    </div>
                                    <div className='col-span-1 w-full h-10 py-1 flex items-center justify-center border-r border-[#e8e1e1]'>
                                        <p className='w-10 h-fit py-0.5 rounded-[4px] font-primary text-sm text-center bg-[#bbffbb]'>39</p>
                                    </div>
                                </div>
                                <div className='grid col-span-1 grid-cols-3'>
                                    <div className='col-span-1 w-full h-10 py-1 flex items-center justify-center border-r border-[#e8e1e1]'>
                                        <p className='w-10 h-fit py-0.5 rounded-[4px] font-primary text-sm text-center bg-[#fbbaae]'>39</p>
                                    </div>
                                    <div className='col-span-1 w-full h-10 py-1 flex items-center justify-center border-r border-[#e8e1e1]'>
                                        <p className='w-10 h-fit py-0.5 rounded-[4px] font-primary text-sm text-center bg-[#f1f1ae]'>39</p>
                                    </div>
                                    <div className='col-span-1 w-full h-10 py-1 flex items-center justify-center border-r border-[#e8e1e1]'>
                                        <p className='w-10 h-fit py-0.5 rounded-[4px] font-primary text-sm text-center bg-[#bbffbb]'>39</p>
                                    </div>
                                </div>
                                <div className='grid col-span-1 grid-cols-3'>
                                    <div className='col-span-1 w-full h-10 py-1 flex items-center justify-center border-r border-[#e8e1e1]'>
                                        <p className='w-10 h-fit py-0.5 rounded-[4px] font-primary text-sm text-center bg-[#fbbaae]'>39</p>
                                    </div>
                                    <div className='col-span-1 w-full h-10 py-1 flex items-center justify-center border-r border-[#e8e1e1]'>
                                        <p className='w-10 h-fit py-0.5 rounded-[4px] font-primary text-sm text-center bg-[#f1f1ae]'>39</p>
                                    </div>
                                    <div className='col-span-1 w-full h-10 py-1 flex items-center justify-center border-r border-[#e8e1e1]'>
                                        <p className='w-10 h-fit py-0.5 rounded-[4px] font-primary text-sm text-center bg-[#bbffbb]'>39</p>
                                    </div>
                                </div>
                                <div className='grid col-span-1 grid-cols-3'>
                                    <div className='col-span-1 w-full h-10 py-1 flex items-center justify-center border-r border-[#e8e1e1]'>
                                        <p className='w-10 h-fit py-0.5 rounded-[4px] font-primary text-sm text-center bg-[#fbbaae]'>39</p>
                                    </div>
                                    <div className='col-span-1 w-full h-10 py-1 flex items-center justify-center border-r border-[#e8e1e1]'>
                                        <p className='w-10 h-fit py-0.5 rounded-[4px] font-primary text-sm text-center bg-[#f1f1ae]'>39</p>
                                    </div>
                                    <div className='col-span-1 w-full h-10 py-1 flex items-center justify-center border-r border-[#e8e1e1]'>
                                        <p className='w-10 h-fit py-0.5 rounded-[4px] font-primary text-sm text-center bg-[#bbffbb]'>39</p>
                                    </div>
                                </div>
                                <div className='grid col-span-1 grid-cols-3'>
                                    <div className='col-span-1 w-full h-10 py-1 flex items-center justify-center border-r border-[#e8e1e1]'>
                                        <p className='w-10 h-fit py-0.5 rounded-[4px] font-primary text-sm text-center bg-[#fbbaae]'>39</p>
                                    </div>
                                    <div className='col-span-1 w-full h-10 py-1 flex items-center justify-center border-r border-[#e8e1e1]'>
                                        <p className='w-10 h-fit py-0.5 rounded-[4px] font-primary text-sm text-center bg-[#f1f1ae]'>39</p>
                                    </div>
                                    <div className='col-span-1 w-full h-10 py-1 flex items-center justify-center border-r border-[#e8e1e1]'>
                                        <p className='w-10 h-fit py-0.5 rounded-[4px] font-primary text-sm text-center bg-[#bbffbb]'>39</p>
                                    </div>
                                </div>
                                <div className='grid col-span-1 grid-cols-3'>
                                    <div className='col-span-1 w-full h-10 py-1 flex items-center justify-center border-r border-[#e8e1e1]'>
                                        <p className='w-10 h-fit py-0.5 rounded-[4px] font-primary text-sm text-center bg-[#fbbaae]'>39</p>
                                    </div>
                                    <div className='col-span-1 w-full h-10 py-1 flex items-center justify-center border-r border-[#e8e1e1]'>
                                        <p className='w-10 h-fit py-0.5 rounded-[4px] font-primary text-sm text-center bg-[#f1f1ae]'>39</p>
                                    </div>
                                    <div className='col-span-1 w-full h-10 py-1 flex items-center justify-center border-r border-[#e8e1e1]'>
                                        <p className='w-10 h-fit py-0.5 rounded-[4px] font-primary text-sm text-center bg-[#bbffbb]'>39</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div className='w-full min-w-[880px] grid grid-cols-12 border-t border-b border-[#e8e1e1] h-fit my-2'>
                    <div className='col-span-1 w-full h-12 flex items-center justify-center border-r border-[#e8e1e1]'>
                        <p className='font-primary text-sm'>Total</p>
                    </div>
                    <div className='col-span-11 grid grid-cols-6'>
                        <div className='col-span-1 grid grid-cols-3'>
                            <div className='col-span-1 w-full h-10 py-1 flex items-center justify-center border-r border-[#e8e1e1]'>
                                <p className='font-primary text-sm text-center'>237</p>
                            </div>
                            <div className='col-span-1 w-full h-10 py-1 flex items-center justify-center border-r border-[#e8e1e1]'>
                                <p className='font-primary text-sm text-center'>237</p>
                            </div>
                            <div className='col-span-1 w-full h-10 py-1 flex items-center justify-center border-r border-[#e8e1e1]'>
                                <p className='font-primary text-sm text-center'>237</p>
                            </div>

                        </div>
                        <div className='col-span-1 grid grid-cols-3'>
                            <div className='col-span-1 w-full h-10 py-1 flex items-center justify-center border-r border-[#e8e1e1]'>
                                <p className='font-primary text-sm text-center'>237</p>
                            </div>
                            <div className='col-span-1 w-full h-10 py-1 flex items-center justify-center border-r border-[#e8e1e1]'>
                                <p className='font-primary text-sm text-center'>237</p>
                            </div>
                            <div className='col-span-1 w-full h-10 py-1 flex items-center justify-center border-r border-[#e8e1e1]'>
                                <p className='font-primary text-sm text-center'>237</p>
                            </div>

                        </div>
                        <div className='col-span-1 grid grid-cols-3'>
                            <div className='col-span-1 w-full h-10 py-1 flex items-center justify-center border-r border-[#e8e1e1]'>
                                <p className='font-primary text-sm text-center'>237</p>
                            </div>
                            <div className='col-span-1 w-full h-10 py-1 flex items-center justify-center border-r border-[#e8e1e1]'>
                                <p className='font-primary text-sm text-center'>237</p>
                            </div>
                            <div className='col-span-1 w-full h-10 py-1 flex items-center justify-center border-r border-[#e8e1e1]'>
                                <p className='font-primary text-sm text-center'>237</p>
                            </div>

                        </div>
                        <div className='col-span-1 grid grid-cols-3'>
                            <div className='col-span-1 w-full h-10 py-1 flex items-center justify-center border-r border-[#e8e1e1]'>
                                <p className='font-primary text-sm text-center'>237</p>
                            </div>
                            <div className='col-span-1 w-full h-10 py-1 flex items-center justify-center border-r border-[#e8e1e1]'>
                                <p className='font-primary text-sm text-center'>237</p>
                            </div>
                            <div className='col-span-1 w-full h-10 py-1 flex items-center justify-center border-r border-[#e8e1e1]'>
                                <p className='font-primary text-sm text-center'>237</p>
                            </div>

                        </div>
                        <div className='col-span-1 grid grid-cols-3'>
                            <div className='col-span-1 w-full h-10 py-1 flex items-center justify-center border-r border-[#e8e1e1]'>
                                <p className='font-primary text-sm text-center'>237</p>
                            </div>
                            <div className='col-span-1 w-full h-10 py-1 flex items-center justify-center border-r border-[#e8e1e1]'>
                                <p className='font-primary text-sm text-center'>237</p>
                            </div>
                            <div className='col-span-1 w-full h-10 py-1 flex items-center justify-center border-r border-[#e8e1e1]'>
                                <p className='font-primary text-sm text-center'>237</p>
                            </div>

                        </div>
                        <div className='col-span-1 grid grid-cols-3'>
                            <div className='col-span-1 w-full h-10 py-1 flex items-center justify-center border-r border-[#e8e1e1]'>
                                <p className='font-primary text-sm text-center'>237</p>
                            </div>
                            <div className='col-span-1 w-full h-10 py-1 flex items-center justify-center border-r border-[#e8e1e1]'>
                                <p className='font-primary text-sm text-center'>237</p>
                            </div>
                            <div className='col-span-1 w-full h-10 py-1 flex items-center justify-center border-r border-[#e8e1e1]'>
                                <p className='font-primary text-sm text-center'>237</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full max-w-7xl'>
                <button className='bg-primary text-white font-primary px-8 py-1 text-sm rounded-lg'>Back</button>
            </div>
        </div >
    )
}