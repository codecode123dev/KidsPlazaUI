'use client'
import React, { ChangeEvent, useState } from 'react'
import '../assets/logo_google.png'
import logoGG from '../assets/img/logo_gg.png'
import logoApple from '../assets/img/logo_apple.png'
import Image, { StaticImageData } from 'next/image';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import logoKidsPlaza from '../assets/img/logo_kidsplaza.png'
import picturePhone from '../assets/img/phone.png'
import english from '../assets/language/english.png'
import vietnam from '../assets/language/vietnam.png'
import france from '../assets/language/france.png'
const Page = () => {

    const [selectedOptionLanguage, setSelectedOptionLanguage] = useState('english')

    const handleChangeLanguage = (event:ChangeEvent<HTMLSelectElement>) =>{
        setSelectedOptionLanguage(event.target.value)
    }

    const ImagePath = () =>{
        let imagePath : StaticImageData | string = ''
        if(selectedOptionLanguage === 'english'){
            imagePath = english
        } else if(selectedOptionLanguage === 'vietnam'){
            imagePath = vietnam
        } else if(selectedOptionLanguage === 'france'){
            imagePath = france
        }
        return imagePath
    }
  return (
    <div className='flex justify-center items-center bg-gray-100'>
        <div className="flex flex-col items-center justify-center w-full text-center ">
                <div className='bg-white flex font-sans w-full flex-col md:flex-row '>
                    <div className='bg-[#0668FC] md:hidden flex justify-center p-[10px] '><Image src={logoKidsPlaza} alt='logo kids'/></div>

                    <div  className='p-[10px] pt-[15px] w-full md:w-6/12 '>
                        <div className='md:p-[20px] '>
                            <div className='flex justify-center mb-[30px]' >
                                <Image className='' src={picturePhone} alt='phone' width={40} height={40}/>
                            </div>
                            <div>
                                <p className=' font-bold text-xl'>Two-Factor Verification</p>
                                <p className='text-[14px] leading-[2rem] text-[#A1A1AA]'>Enter the verification code we sent to</p>
                                <p className='text-[14px] leading-[2rem] text-[#A1A1AA]'>Number Phone</p>

                            </div>

                            <div className=" xl:px-[150px] flex flex-col h-full ">
                                <p className="px-[34px] md:px-[0] flex justify-start mt-3">Type your 6 digit security code</p>

                                <div className='hidden md:grid grid-cols-6 justify-items-stretch  mt-[10px]'>
                                        <input type="text"
                                        id=""
                                        name="" className=" w-[45px] h-[45px] border-[1px] rounded-[5px] border-[#DEDEDE] " placeholder=''/>
                                        <input type="text"
                                        id=""
                                        name="" className=" w-[45px] h-[45px] border-[1px] rounded-[5px] border-[#DEDEDE] " placeholder=''/>
                                        <input type="text"
                                        id=""
                                        name="" className=" w-[45px] h-[45px] border-[1px] rounded-[5px] border-[#DEDEDE] " placeholder=''/>
                                        <input type="text"
                                        id=""
                                        name="" className=" w-[45px] h-[45px] border-[1px] rounded-[5px] border-[#DEDEDE] " placeholder=''/>
                                        <input type="text"
                                        id=""
                                        name="" className=" w-[45px] h-[45px] border-[1px] rounded-[5px] border-[#DEDEDE] " placeholder=''/>
                                        <input type="text"
                                        id=""
                                        name="" className=" w-[45px] h-[45px] border-[1px] rounded-[5px] border-[#DEDEDE] " placeholder=''/>
                                </div>
                                <div className='px-[32px] md:hidden '>
                                    <div className="grid grid-cols-4 justify-items-center">
                                        <input type="text"
                                        id=""
                                        name="" className=" w-[68px] h-[68px] border-[1px] rounded-[5px] border-[#DEDEDE] " placeholder=''/>
                                        <input type="text"
                                        id=""
                                        name="" className=" w-[68px] h-[68px] border-[1px] rounded-[5px] border-[#DEDEDE] " placeholder=''/>
                                        <input type="text"
                                        id=""
                                        name="" className=" w-[68px] h-[68px] border-[1px] rounded-[5px] border-[#DEDEDE] " placeholder=''/>
                                        <input type="text"
                                        id=""
                                        name="" className=" w-[68px] h-[68px] border-[1px] rounded-[5px] border-[#DEDEDE] " placeholder=''/>
                                    </div>
                                    <div className='grid grid-cols-4 justify-items-center mt-[8px]'>
                                        <input type="text"
                                        id=""
                                        name="" className=" w-[68px] h-[68px] border-[1px] rounded-[5px] border-[#DEDEDE] " placeholder=''/>
                                        <input type="text"
                                        id=""
                                        name="" className=" col-start-4 col-end-4  w-[68px] h-[68px] border-[1px] rounded-[5px] border-[#DEDEDE] " placeholder=''/>
                                    </div>
                                </div>

                                <div className="flex justify-center h-full items-center">
                                    <button
                                    type="button"
                                    className="bg-[#009EF7] text-white mt-30px w-[90px] h-[40px] rounded-[6px] border-red my-[20px]"
                                    >
                                    Submit
                                    </button>
                                </div>
                                <p>
                                    Didn&apos;t get the code?{" "}
                                    <span className="text-[#009EF7]">Resend</span> or{" "}
                                    <span className="text-[#009EF7]">Call Us</span>
                                </p>
                                </div>

                        </div>
                        <div className=' justify-around flex  mt-[50px]'>
                            <div className='flex justify-start text-[12px]'>
                                <label className='rounded-[12px] '>
                                    <Image src={ImagePath()} alt='language' width={20} height={20}/>
                                </label>
                                <select value={selectedOptionLanguage} onChange={handleChangeLanguage} className='' >
                                    <option value='english'>English</option>
                                    <option value='vietnam'>VietNam</option>
                                    <option value='france'>France</option>
                                </select>
                            </div>
                            <div className='flex flex-row justify-between w-[150px] font-sans text-[#3B82F6] font-[500] text-[12px]'>
                                <p className='cursor-pointer'>Term</p>
                                <p className='cursor-pointer'>Plans</p>
                                <p className='cursor-pointer'>Contact Us</p>

                            </div>
                        </div>

                    </div>

                    <div  className=' hidden sm:block  bg-[#0668FC] w-6/12'>
                        <div className='flex justify-center items-center'>
                            <Image src={logoKidsPlaza} alt='Logo KidsPlaza' width={200} height={200}/>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Page