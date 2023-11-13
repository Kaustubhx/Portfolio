'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import { Skill as SkillType } from '@/typings'

type Props = {
    skills: SkillType[]
}

function Skills({ skills }: Props) {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='mt-12 flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] justify-center mx-auto items-center'>
            <div className='mt-20 flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] w-full justify-center mx-auto items-center'>
                <h3 className='uppercase tracking-[20px] text-neutral-500 text-2xl absolute top-0'>
                    Skills
                </h3>

                <h3 className='uppercase tracking-[3px] text-neutral-500 text-sm absolute top-10'>
                    HOVER OVER A SKILL FOR CURRENT PROFIECIENCY
                </h3>

                <div className='mt-24 grid grid-cols-4 gap-4'>
                    {skills?.slice(0, skills.length / 2).map((skill) => (
                        <Skill key={skill?._id} skill={skill} directionLeft={false} />
                    ))}

                    {skills?.slice(skills.length / 2, skills.length).map((skill) => (
                        <Skill key={skill?._id} skill={skill} directionLeft={true} />
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default Skills