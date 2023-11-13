'use client'

import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { Experience } from '@/typings'

type Props = {
    experiences: Experience[]
}

function WorkExperience({ experiences }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{ duration: 1.5 }}
            className='mt-12 flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-8 justify-evenly mx-auto items-center'>
            <div className='mt-20 flex flex-col relative text-center md:text-left md:flex-row justify-evenly max-w-full w-full lg:w-auto lg:mx-auto items-center overflow-x-hidden'>
                <h3 className='uppercase tracking-[16px] lg:tracking-[20px] text-neutral-500 text-2xl absolute top-0'>
                    experience
                </h3>

                <div className='mt-12 flex space-x-5 w-full overflow-y-scroll snap-x snap-mandatory scrollbar-thin scrollbar-track-neutral-900/20 scrollbar-thumb-neutral-900/80'>
                    {experiences?.map((experience) => (
                        <ExperienceCard key={experience?._id} experience={experience} />
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default WorkExperience