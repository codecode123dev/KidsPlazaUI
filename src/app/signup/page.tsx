'use client'
import React from 'react'
import '../assets/logo_google.png'
import logoGG from '../assets/img/logo_gg.png'
import logoApple from '../assets/img/logo_apple.png'
import Image from 'next/image';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import Link from 'next/link'
import PasswordStrengthBar from "react-password-strength-bar";
import logoKidsPlaza from '../assets/img/logo_kidsplaza.png'

interface FormInputs {
    email: string,
    password: string,
    repeatPassword: string
}

const schema = Yup.object().shape({
email: Yup.string().email('Invalid email').required('Email is required !'),
password: Yup.string().required('Password is required !').max(190,'Maximum length is 190 characters')

})
const SignUp  = () => {
    const { register, handleSubmit, formState } = useForm<FormInputs>({
        resolver: yupResolver(schema),
    })
    // const password = watch("password");

    const onSubmit = (data: FormInputs) => 
    {
        console.log(data)
    }
    // const handleBlur = () => {
    //     if (FormInputs.password !== FormInputs.repeatPassword) {
    //       setError("Passwords do not match");
    //     } else {
    //       setError("");
    //     }
    //   };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100  ">
        <div className="flex items-center justify-center w-full flex-1 text-center">
                        <div className='bg-white flex font-sans '>
                            <div  className='px-[48px] pt-[40px]'>
                                <div>
                                    <p className=' font-bold text-xl'>Sign Up</p>
                                    <p className='text-[12px] leading-[2rem] text-[#A1A1AA]'>Your Social Campaigns</p>
                                </div>
                                <div className='flex flex-row justify-between mt-[15px]'>
                                            <button className='flex flex-row border-solid border-2 border-[#E7E5E4] rounded w-[220px] pl-[35px] '>
                                                <Image
                                                src={logoGG}
                                                width={30}
                                                height={30}
                                                alt="Picture Google"
                                                /> <p className='text-[12px] py-[5px] font-[400]'>Sign in with Google</p></button>

                                            <button className='flex flex-row border-solid border-2 border-[#E7E5E4] p-[4px] rounded w-[220px] pl-[35px]'>
                                                <Image
                                                src={logoApple}
                                                width={18}
                                                height={18}
                                                alt="Picture Apple"
                                                /> <p className='text-[12px] py-[1px] font-[400] p-[10px]'>Sign in with Apple</p></button>

                                </div>
                                <div className='my-[30px]'>
                                    <div className='border-[#E7E5E4] border-[1px] w-[180px] inline-block mb-[4px] '></div>
                                    <span className='mx-[8px] text-[#A1A1AA] text-[12px]'>Or with email</span>
                                    <div className='border-[#E7E5E4] border-[1px] w-[180px] inline-block mb-[4px] '></div>
                                </div>

                                <div className='flex flex-col  '>
                                    <div className='flex justify-around'>
                                        <form className='flex flex-col ' onSubmit={handleSubmit(onSubmit)}> 
                                            <input {...register('email')}  id='email' className='w-[450px] border-2 border-[#E7E5E4] rounded-[4px] p-[6px] placeholder:text-[12px] placeholder:font-400'  name='email' placeholder='Email ' type='text'/>
                                                {formState.errors.email && (
                                                    <span className='flex justify-end text-red-500'>{formState.errors.email.message}</span>
                                                    )}
                                            <input {...register('password')}  id='password' className='w-[450px] border-2 border-[#E7E5E4] mt-[15px] rounded-[4px] p-[6px] placeholder:text-[12px] placeholder:font-400' name='password' placeholder='Password' type='text'/>
                                                {formState.errors.password && (
                                                    <span className='flex justify-end text-red-500 ' >{formState.errors.password.message}</span>
                                                )}
                                            <div>
                                                <label>Password Strength:</label>
                                                {/* <PasswordStrengthBar password={password} /> */}
                                            </div>
                                                {/* <PasswordStrengthBar password={('password')} /> */}
                                            <input className='w-[450px] border-2 border-[#E7E5E4] mt-[15px] rounded-[4px] p-[6px] placeholder:text-[12px] placeholder:font-400' name='repeatPassword' placeholder='Repeat Password' type='text'/>

                                            <div className='flex justify-start leading-[40px] font-400 text-[13px] mt-[5px]'> 
                                                    <input type='checkbox' className='w-[18px] accent-[#3B82F6]' id="checked-checkbox"/>
                                                    <label className='ml-[6px]'>I Accept the <span className='text-[#3B82F6] ml-[3px] font-700'> Terms</span></label>
                                            </div>

                                            <button className='border-[#3B82F6] border-2 mt-[20px] rounded-[4px] bg-[#3B82F6] text-white p-[5px] ' type='submit' disabled={formState.isSubmitting}>Sign Up</button>
                                            <div className='font-400 text-[12px] mt-[15px]'><p className=''>Already have an Account? <span className='text-[#3B82F6] cursor-pointer'>Sign in</span></p></div>

                                        </form>
                                    </div>
                                </div>
                                <div className='flex justify-between my-[25px] text-[12px]'>
                                    <div className='flex justify-start'>
                                        <label className='border-2 rounded-[10px] border-[#E7E5E4]'>test</label>
                                        <select>
                                            <option>English</option>
                                            <option>abc</option>
                                            <option>abc</option>
                                            <option>abc</option>
                                        </select>
                                    </div>
                                    <div className='flex flex-row justify-between w-[150px] font-sans text-[#3B82F6] font-[500]'>
                                        <p className='cursor-pointer'>Term</p>
                                        <p className='cursor-pointer'>Plans</p>
                                        <p className='cursor-pointer'>Contact Us</p>

                                    </div>
                                </div>

                            </div>

                            <div  className='  w-[500px] bg-[#0668FC] hidden sm:block '>
                                <div className='flex justify-center items-center'>
                                    <Image src={logoKidsPlaza} alt='Logo KidsPlaza' width={200} height={200}/>
                                </div>
                            </div>


                        </div>

                </div>
    </div>
  )
}

export default SignUp