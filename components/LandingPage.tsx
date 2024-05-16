import React from 'react'

type Props = {}

const LandingPage = (props: Props) => {
    return (
        <>
            <div className="flex w-11/12 mx-auto p-8">
                <img src="./MOVIEIT.png" alt="" />
            </div>
            <div className="flex md:flex-row gap-12 md:gap-0 flex-col px-8 justify-between w-full md:pt-10 pb-10 md:pb-20">
                <div className="flex gap-4 basis-3/5 flex-col justify-center">
                    <div className="relative">
                        <div className="before:absolute md:before:block before:hidden before:content-semicircle before:w-fit before:h-fit before:-top-28 before:-left-14">
                            <p className="md:text-5xl text-2xl font-black tracking-wider md:textShadow drop-shadow-xl w-full md:w-9/12 text-[#1BA4F1] font-[orelago-one] ">SEARCH, KNOW AND RENT MOVIES ALL IN ONE PLACE</p>
                        </div>
                    </div>
                    <p className="z-10 relative md:w-[65%] w-full font-medium text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore in cumque nisi sit quis.</p>
                    <a href='#movie' className="px-4 py-2 text-center md:w-[12%] relative z-10 bg-[#1BA4F1] rounded-lg text-white font-medium">CHECK</a>
                </div>

                <div className="relative">
                    <div className="before:absolute md:before:block before:hidden before:content-strip before:-left-8 before:top-0 before:z-10"></div>
                    <img className="mr-20 relative z-30" src="./land.png" alt="landing-pic" />
                </div>
            </div>
        </>
    )
}

export default LandingPage