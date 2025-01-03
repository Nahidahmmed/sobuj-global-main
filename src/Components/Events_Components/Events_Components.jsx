import { useEffect, useState } from 'react';

import large from '../../assets/Dhaka-Expo-11-may-2024--Rectangle 1.png'
import small from '../../assets/Dhaka-Event-1s 1.png'
import bg from '../../assets/Blue Background.png'
import Chattogram from '../../assets/CTG-Multi-Destination-Expo-18-May-Banner 2.png'
import Sylhet from '../../assets/Sylhet-Expo-12-February-2024 1.png'
import Dhaka from '../../assets/Dhaka-Event--ad-2 1.png'

import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaRegCalendarDays } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

import '../../App.css'
import CountDown from './CountDown';
import { Link } from 'react-router-dom';
const Events_Components = () => {
    const [active, setActive] = useState(1)
    const [width, setWidth] = useState(null)

    

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [])
    return (
        <div className='poppins'>
            
                <div>
                    <div className='text-center space-y-10 font-bold '>
                        <div className='  '>
                            <div style={{ background: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
                                <div className=' mx-10 lg:mx-auto space-y-10 h-[400px] lg:h-[500px] flex flex-col pt-[100px]'>
                                    <h1 className='text-4xl lg:text-5xl   '>Ongoing Event</h1>
                                    <h2 className='text-[#00399F] text-2xl   lg:text-3xl   '>Multi-Destination Education Expo - Dhaka</h2>
                                </div>
                            </div>
                            <div className='-mt-28 lg:-mt-48 max-w-5xl mx-auto border-b-2 px-10  border-[#CACACA] pb-20'>
                                {width < 768 ?
                                    <img className='  lg:mx-auto rounded-3xl mb-10 shadow-lg' src={small} alt="" /> :
                                    <img className='  lg:mx-auto rounded-3xl mb-10 shadow-lg' src={large} alt="" />
                                }
                                <div className='max-w-3xl mx-auto flex gap-2'>
                                    <button onMouseEnter={() => setActive(1)} className={`${active == 1 ? 'bg-[#2563EB] text-white' : ' bg-white text-[#2563EB]'} rounded-3xl h-10 w-full`}>Join Now</button>
                                    <button onMouseEnter={() => setActive(2)} className={`${active == 2 ? 'bg-[#2563EB] text-white' : ' bg-white text-[#2563EB]'} rounded-3xl h-10  w-full flex items-center justify-center gap-2`}><HiOutlineLocationMarker />Event Location</button>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Upcoming Events Section */}
                    <div className='mx-5'>
                        <div className='max-w-5xl mx-auto  text-center my-10 px-10 lg:px-0'>
                            <h1 className='text-4xl lg:text-5xl font-bold'>Upcoming Events</h1>
                            {/* counter */}
                            <div className=''>
                                
                                <CountDown date='2024-07-22 10:00' />
                            </div>
                            <div className='lg:grid grid-cols-2 flex flex-col gap-5 justify-center my-10 '>

                                {/* first event */}
                                {/* event card */}
                                <div className='flex flex-col justify-between col-span-1 rounded-2xl text-start space-y-2 shadow-2xl p-5 pt-0'>
                                    <img src={Chattogram} alt="" />
                                    <h2 className='font-bold text-lg mt-5'>International Education Fair - Chattogram</h2>
                                    <p>Attend Shabuj Global Education International Education Fair - Chattogram and apply for September 2024 and January 2024 intakes.</p>
                                    <ul className='text-[#F25025]'>
                                        <li className='flex items-center  gap-2'><HiOutlineLocationMarker />The Peninsula Chittagong</li>
                                        <li className='flex items-center justify-between '><span className='flex'><span className='flex items-center gap-2'><FaRegCalendarDays />22nd July, 2024 </span><span className='flex items-center gap-2'><GoDotFill />10:00 am - 05:00 pm</span></span><Link to={'/SingleEvent'}> <span className='rounded-2xl text-white bg-[#2563EB] p-2 font-light text-xs px-4 cursor-pointer' >Register Now</span></Link></li>
                                    </ul>
                                </div>

                                {/* other two */}
                                <div className='col-span-1 flex flex-col justify-between gap-10 lg:gap-0'>
                                    <div  >

                                        {/* event card */}
                                        <div className='flex flex-col lg:flex-row items-center justify-center rounded-2xl text-start space-y-2 shadow-2xl p-2  '>
                                            <img className='w-2/3 pt-5 lg:pt-0 lg:w-full ' src={Sylhet} alt="" />
                                            <div className=' px-2 space-y-1'>
                                                <h2 className='font-bold  mt-5'>Multi-Destination Education <br /> Expo - Sylhet</h2>
                                                <p className='text-sm'>Attend our Multi-Destination Education Expo - Sylhet and apply for September 2024 and January 2024 intakes.</p>
                                                <ul className='text-[#F25025]  space-y-1 text-xs'>
                                                    <li className='flex items-center  gap-2'><HiOutlineLocationMarker />The Peninsula Chittagong</li>
                                                    <li className='flex items-center justify-between '><span><span className='flex gap-2'><FaRegCalendarDays />24 th July, 2024 </span><span className='flex gap-2'><GoDotFill />10:00 am - 05:00 pm</span></span> <Link to={'/SingleEvent'}> <span className='rounded-2xl text-white bg-[#2563EB] p-2 font-light text-xs px-4 cursor-pointer' >Register Now</span></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div>

                                        {/* event card */}
                                        <div className='flex flex-col lg:flex-row items-center justify-center rounded-2xl text-start space-y-2 shadow-2xl p-2 '>
                                            <img className='w-2/3 pt-5 lg:pt-0 lg:w-full  ' src={Dhaka} alt="" />
                                            <div className='px-2  space-y-1'>
                                                <h2 className='font-bold  mt-5'>Education Expo - UK, USA, Canada, Australia</h2>
                                                <p className='text-sm'>Attend our Multi-Destination Education Expo - Sylhet and apply for September 2024 and January 2024 intakes.</p>
                                                <ul className='text-[#F25025] space-y-1 text-xs'>
                                                    <li className='flex items-center  gap-2'><HiOutlineLocationMarker />The Peninsula Chittagong</li>
                                                    <li className='flex items-center justify-between '><span><span className='flex gap-2'><FaRegCalendarDays />26 th July, 2024 </span><span className='flex gap-2'><GoDotFill />10:00 am - 05:00 pm</span></span> <Link to={'/SingleEvent'}> <span className='rounded-2xl text-white bg-[#2563EB] p-2 font-light text-xs px-4 cursor-pointer' >Register Now</span></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                


        </div>
    );
};

export default Events_Components;