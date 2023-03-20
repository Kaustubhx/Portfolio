import React from 'react'
import { motion } from 'framer-motion'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from '@/typings';

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
};

type Props = {
    pageInfo: PageInfo;
}

function ContactMe({ pageInfo }: Props) {

    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:kaustubhxganekar@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    };

    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{ duration: 1.5 }}
            className='my-12 flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <div className='mt-20 flex flex-col relative text-center md:text-left md:flex-row justify-evenly mx-auto items-center '>
                <h3 className='uppercase tracking-[20px] text-neutral-500 text-2xl absolute top-0'>
                    About
                </h3>

                <div className='mt-12 flex flex-col space-y-10'>
                    <h4 className='text-3xl md:text-4xl font-semibold text-center'>
                        I have got just what you need.{" "}
                        <span className='decoration-neutral-900/50 underline'>Lets Talk.</span>
                    </h4>

                    <div className='space-y-10'>
                        <div className='flex items-center space-x-5 justify-center'>
                            <PhoneIcon className='text-neutral-900 h-7 w-7 animate-pulse' />
                            <p className='text-xl md:text-2xl'>{pageInfo?.phoneNumber}</p>
                        </div>

                        <div className='flex items-center space-x-5 justify-center'>
                            <EnvelopeIcon className='text-neutral-900 h-7 w-7 animate-pulse' />
                            <p className='text-xl md:text-2xl'>{pageInfo?.email}</p>
                        </div>

                        <div className='flex items-center space-x-5 justify-center'>
                            <MapPinIcon className='text-neutral-900 h-7 w-7 animate-pulse' />
                            <p className='text-xl md:text-2xl'>{pageInfo?.address}</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                        <div className='flex space-x-2 w-full'>
                            <input
                                {...register('name')}
                                placeholder='Name'
                                className='contactInput w-36 md:w-full'
                                type="text"
                            />
                            <input
                                {...register('email')}
                                placeholder='Email'
                                className='contactInput w-36 md:w-full'
                                type="email"
                            />
                        </div>

                        <input
                            {...register('subject')}
                            className='contactInput'
                            placeholder='Subject'
                            type="text"
                        />

                        <textarea
                            {...register('message')}
                            className='contactInput'
                            placeholder='Message'
                        />
                        <button
                            type='submit'
                            className='bg-neutral-900 py-5 px-10 rounded-md text-white font-bold text-lg'>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </motion.div>
    )
}

export default ContactMe