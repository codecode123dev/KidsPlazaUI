'use client'
import '../assets/logo_google.png'
import logoGG from '../assets/img/logo_gg.png'
import logoApple from '../assets/img/logo_apple.png'
import Image from 'next/image';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import logoKidsPlaza from '../assets/img/logo_kidsplaza.png'
import Link from 'next/link';

interface FormInputs {
    email: string,
    password: string
}

const schema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required !'),
    password: Yup.string().required('Password is required !'),

})
const Login = () => {
    const { register, handleSubmit, formState } = useForm<FormInputs>({
        resolver: yupResolver(schema),
    })
    const onSubmit = (data: FormInputs) => {
        // event.preventDefault();
        console.log(data)
    }
    return (
        <div className="flex items-center justify-center bg-gray-100  ">
            <div className="flex flex-col items-center justify-center w-full text-center ">
                <div className='bg-white flex font-sans w-full flex-col md:flex-row'>
                    <div className='bg-[#0668FC] md:hidden flex justify-center p-[10px] '><Image src={logoKidsPlaza} alt='logo kids' /></div>
                    <div className='p-[10px] pt-[15px] w-full md:w-6/12'>
                        <div className='md:p-[20px]'>
                            <div>
                                <p className=' font-bold text-xl'>Sign In</p>
                                <p className='text-[14px] leading-[2rem] text-[#A1A1AA]'>Your Social Campaigns</p>
                            </div>
                            <div className='flex flex-col items-center md:flex-row md:justify-center mt-[15px] '>
                                <button className='flex flex-row pl-[45px] md:pl-[0]  border-solid border-2 border-[#E7E5E4] rounded md:w-[185px] w-[230px] '>
                                    <Image
                                        src={logoGG}
                                        width={28}
                                        height={28}
                                        alt="Picture Google"
                                        className='md:ml-[20px]'
                                    />
                                    <p className='text-[12px] font-[400] pt-[4px] md:pl-[5px]'>Sign in with Google</p>
                                </button>
                                <button className='flex flex-row pl-[50px]  md:pl-[0]  border-solid border-2 border-[#E7E5E4] p-[4px] rounded md:w-[185px] w-[230px] md:mt-[0] mt-[10px] md:ml-[30px] '>
                                    <Image
                                        src={logoApple}
                                        width={17}
                                        height={17}
                                        alt="Picture Apple"
                                        className='md:ml-[28px]'
                                    /> <p className='text-[12px] font-[400] pl-[5px] md:pl-[7px]'>Sign in with Apple</p></button>
                            </div>

                            <div className='my-[40px]'>
                                <div className='border-[#E7E5E4] border-[1px] w-[70px] md:w-[155px] inline-block mb-[4px] '></div>
                                <span className='mx-[8px] text-[#A1A1AA] text-[12px]'>Or with email</span>
                                <div className='border-[#E7E5E4] border-[1px] w-[70px] md:w-[155px] inline-block mb-[4px] '></div>
                            </div>

                            <div className='flex flex-col  '>
                                <div className='flex justify-around'>
                                    <form className='flex flex-col ' onSubmit={handleSubmit(onSubmit)}>
                                        <input {...register('email')} id='email' className='w-[235px] md:w-[400px] border-2 border-[#E7E5E4] rounded-[4px] p-[6px] placeholder:text-[12px] placeholder:font-400' name='email' placeholder='Email ' type='text' />
                                        {formState.errors.email && (
                                            <span className='flex justify-end text-red-500'>{formState.errors.email.message}</span>
                                        )}
                                        <input {...register('password')} id='password' className='w-[235px] md:w-[400px] border-2 border-[#E7E5E4] mt-[15px] rounded-[4px] p-[6px] placeholder:text-[12px] placeholder:font-400' name='password' placeholder='Password' type='text' />
                                        {formState.errors.password && (
                                            <span className='flex justify-end text-red-500'>{formState.errors.password.message}</span>
                                        )}
                                        <div className='flex justify-end  text-[#3B82F6] font-medium leading-[40px] text-[12px] '> <span className='cursor-pointer'>Forgot Password ?</span> </div>
                                        <button className='border-[#3B82F6] border-2 mt-[20px] rounded-[4px] bg-[#3B82F6] text-white p-[5px] ' type='submit' disabled={formState.isSubmitting}>Sign In</button>
                                        <p className='text-[#A1A1AA]  font-medium leading-[60px] text-[12px]'>Not a Member yet? <Link href='/signup' className='text-[#3B82F6] cursor-pointer text-[12px]'>Sign up</Link></p>

                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-around my-[25px]'>
                            <div className='flex justify-start text-[12px]'>
                                <label className='border-2 rounded-[12px] border-[#E7E5E4]'>test</label>
                                <select>
                                    <option>English</option>
                                    <option>abc</option>
                                    <option>abc</option>
                                    <option>abc</option>
                                </select>
                            </div>
                            <div className='flex flex-row justify-between w-[150px] font-sans text-[#3B82F6] font-[500] text-[12px]'>
                                <p className='cursor-pointer'>Term</p>
                                <p className='cursor-pointer'>Plans</p>
                                <p className='cursor-pointer'>Contact Us</p>

                            </div>
                        </div>

                    </div>

                    <div className=' hidden sm:block  bg-[#0668FC] w-6/12'>
                        <div className='flex justify-center items-center'>
                            <Image src={logoKidsPlaza} alt='Logo KidsPlaza' width={200} height={200} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login