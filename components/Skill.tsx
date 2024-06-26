'use client'

import { motion } from 'framer-motion'
import { Skill as typeSkill } from '@/typings'
import { urlFor } from '@/sanity'

type Props = {
    skill: typeSkill
    directionLeft: boolean
}

function Skill({ skill, directionLeft }: Props) {
    return (
        <div className='group relative flex cursor-pointer'>
            <motion.img
                initial={{
                    x: directionLeft ? -150 : 150,
                    opacity: 0,
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                src={urlFor(skill?.image).url()}
                className='rounded-full border border-neutral-500 object-contain h-16 w-16 md:h-24 md:w-24 xl:h-28 xl:w-28 filter group-hover:grayscale transition duration-300 ease-in-out'
            />
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-neutral-300 h-16 w-16 md:h-24 md:w-24 xl:h-28 xl:w-28 rounded-full'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-3xl font-bold text-black opacity-100'>{skill?.progress}%</p>
                </div>
            </div>
        </div>
    )
}

export default Skill