'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from '@/typings'
import { urlFor } from '@/sanity'

type Props = {
    pageInfo: PageInfo
}

function About({ pageInfo }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{ duration: 1.5 }}
            className='mt-12 flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <div className='mt-20 flex flex-col relative text-center md:text-left md:flex-row justify-evenly mx-auto items-center '>
                <h3 className='uppercase tracking-[20px] text-neutral-500 text-2xl absolute top-0'>
                    About
                </h3>

                <motion.img
                    initial={{
                        x: -200,
                        opacity: 0,
                    }}
                    transition={{
                        duration: 1.2,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    viewport={{ once: true }}
                    src={urlFor(pageInfo?.profilePic).url()}
                    className='mt-14 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:h-[500px] xl:w-[600px]'
                />

                <div className='space-y-10 px-0 md:px-10 pt-14'>
                    <h4 className='text-4xl font-semibold '>
                        Here is a <span className='underline decoration-neutral-900/50'>little</span> background
                    </h4>
                    <p className='text-neutral-500 tracking-wide'>
                        {pageInfo?.backgroundInformation}
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export default About