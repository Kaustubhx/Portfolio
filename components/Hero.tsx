import { urlFor } from '@/sanity'
import { PageInfo } from '@/typings'
import Image from 'next/image'
import { Link, ScrollLink } from "react-scroll"
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundClircles from './BackgroundClircles'

type Props = {
    pageInfo: PageInfo
};

function Hero({ pageInfo }: Props) {

    const [text] = useTypewriter({
        words: [
            `Hi, The Name's ${pageInfo?.name}`,
            "Guy-who-loves-Tea.jsx",
            "<ButLovesToCodeMore />",
        ],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundClircles />
            <div className='h-40 w-40 mx-auto relative'>
                <Image className='object-contain absolute border-[3px] border-neutral-900 animate-morph'
                    src={urlFor(pageInfo?.heroImage).url()}
                    alt=''
                    fill
                />
            </div>

            <div className='z-20'>
                <h2 className='text-sm uppercase tracking-[15px] text-gray-500 pb-2'>{pageInfo?.role}</h2>
                <h1 className='text-3xl lg:text-6xl font-semibold overflow-hidden'>
                    <span>{text}</span>
                    <Cursor cursorColor='#262626' />
                </h1>

                <div className='pt-5'>
                    <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        <button className="heroBtn">
                            About
                        </button>
                    </Link>
                    <Link
                        to="experience"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        <button className="heroBtn">
                            Experience
                        </button>
                    </Link>
                    <Link
                        to="skills"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        <button className="heroBtn">
                            Skills
                        </button>
                    </Link>
                    <Link
                        to="projects"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        <button className="heroBtn">
                            Projects
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero