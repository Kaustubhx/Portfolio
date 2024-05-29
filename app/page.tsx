import Link from 'next/link'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import WorkExperience from '../components/WorkExperience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { ChevronUpIcon } from '@heroicons/react/24/solid'
import { Experience, PageInfo, Project, Skill, Social } from '@/typings'
import getPageInfo from '@/utils/getPageInfo'
import getExperience from '@/utils/getExperience'
import getSkills from '@/utils/getSkills'
import getProjects from '@/utils/getProjects'
import getSocials from '@/utils/getSocials'

export const revalidate = process.env.NODE_ENV === 'production' ? 3600 : 0

export default async function Home() {

    const pageInfo: PageInfo = await getPageInfo();
    const experiences: Experience[] = await getExperience();
    const skills: Skill[] = await getSkills();
    const projects: Project[] = await getProjects();
    const socials: Social[] = await getSocials();

    return (
        <main className='h-screen z-0 snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar-thin lg:scrollbar scrollbar-track-neutral-900/20 scrollbar-thumb-neutral-900/80'>
            <Header socials={socials} />

            <section id='hero' className='snap-center'>
                <Hero pageInfo={pageInfo} />
            </section>

            <section id='about' className='snap-start'>
                <About pageInfo={pageInfo} />
            </section>

            <section id='experience' className='snap-start'>
                <WorkExperience experiences={experiences} />
            </section>

            <section id='skills' className='snap-start'>
                <Skills skills={skills} />
            </section>

            <section id='projects' className="snap-start">
                <Projects projects={projects} />
            </section>

            <section id='contact' className='snap-start'>
                <ContactMe pageInfo={pageInfo} />
            </section>

            <Link href='#hero'>
                <footer className='sticky bottom-2 w-full cursor-pointer my-5'>
                    <div className='flex items-center justify-center'>
                        <ChevronUpIcon className='h-10 w-10 text-white bg-neutral-900 rounded-full' />
                    </div>
                </footer>
            </Link>
        </main>
    )
}

