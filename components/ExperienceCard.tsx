'use client'

import { urlFor } from '@/sanity'
import { Experience } from '@/typings'
import Image from 'next/image'

type Props = {
    experience: Experience
}

function ExperienceCard({ experience }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[295px] md:w-[600px] xl:w-[900px] bg-neutral-200 snap-center pt-5 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <div className='relative w-32 h-32 xl:w-[200px] xl:h-[200px] object-cover object-center'>
                <Image
                    className='rounded-full object-cover'
                    src={urlFor(experience?.companyImage).url()}
                    alt=''
                    fill
                    sizes='(height: 8rem), (width: 8rem)'
                />
            </div>

            <div className='px-2 md:px-10'>
                <h4 className='text-3xl md:text-4xl font-light'>{experience?.jobTitle}</h4>
                <p className='font-bold text-xl md:text-2xl mt-1'>{experience?.company}</p>
                <div className='flex space-x-2 my-2 px-5'>
                    {experience?.technologies.map((technology) => (
                        <div key={technology?._id} className='h-10 w-10 relative'>
                            <Image src={urlFor(technology?.image).url()} alt="" fill />
                        </div>
                    ))}
                </div>
                <p className='uppercase py-5 text-neutral-500'>
                    {new Date(experience?.dateStarted).toDateString()} -{" "}
                    {experience?.isCurrentlyWorkingHere ? 'Present' : new Date(experience?.dateEnded).toDateString()}
                </p>

                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    {experience?.points.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard