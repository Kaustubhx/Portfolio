'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';
import { Project } from '@/typings';
import { urlFor } from '@/sanity';
import Link from 'next/link';

type Props = {
    projects: Project[];
}

function Projects({ projects }: Props) {

    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{ duration: 1.5 }}
            className='mt-12 flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] justify-center mx-auto items-center z-0'>
            <div className='mt-20 flex flex-col relative text-center md:text-left xl:flex-row w-full justify-center mx-auto items-center z-0'>
                <h3 className='uppercase tracking-[20px] text-neutral-500 text-2xl absolute top-0'>
                    Projects
                </h3>

                <div className='mt-12 relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 pb-20 scrollbar-thin scrollbar-track-neutral-900/20 scrollbar-thumb-neutral-900/80'>
                    {projects.map((project, i) => (
                        <div key={project?._id} className='w-screen flex-shrink-0 snap-center snap-mandatory flex flex-col space-y-5 items-center justify-center px-5'>
                            <Link
                                href={project?.linkToBuild}
                                target='_blank'
                                className='h-56 w-56 md:h-64 md:w-64 lg:h-[300px] lg:w-[500px] relative'
                            >
                                <Image className='object-contain' src={urlFor(project?.image).url()} alt='' fill />
                            </Link>

                            <div className='space-y-10 max-w-7xl'>
                                <h4 className='text-3xl md:text-4xl font-semibold text-center'>
                                    <span className='underline decoration-neutral-900/50'>
                                        Case Study {i + 1} of {projects?.length}:
                                    </span>{" "}
                                    {project?.title}
                                </h4>

                                <p className='text-lg text-center md:text-left'>
                                    {project?.summary}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='w-full absolute top-[20%] bg-neutral-900/10 left-0 h-[500px] -skew-y-12' />
            </div>
        </motion.div>
    )
}

export default Projects