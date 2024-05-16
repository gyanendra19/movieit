import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <footer className='w-full relative bottom-0 px-6 bg-[#FCB7B7] mt-8 pt-10'>
            <div className='flex gap-20'>

                <div className='basis-2/5'>
                    <Image src='/MOVIEIT.png' alt='logo' width={100} height={100} />
                    <p className='mt-4 w-[80%] text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, veniam perferendis iure!</p>
                </div>

                <div className='flex basis-3/5 justify-evenly text-white'>
                    <div className='flex flex-col gap-3'>
                        <h3 className='font-bold'>ABOUT</h3>
                        <p>How it works</p>
                        <p>Our vision</p>
                        <p>Featured</p>
                        <p>Our past</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h3 className='font-bold'>COMPANY</h3>
                        <p>Events</p>
                        <p>Podcast</p>
                        <p>Invite a friend</p>
                        <p>Blog</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h3 className='font-bold'>SOCIALS</h3>
                        <p>DISCORD</p>
                        <p>INSTAGRAM</p>
                        <p>TWITTER</p>
                        <p>FACEBOOK</p>

                    </div>
                </div>
            </div>

            <p className='w-full pt-8 pb-3 text-center text-white'>ALL RIGHTS RESERVED | GYANENDRA VERMA 💝</p>
        </footer>
    )
}

export default Footer