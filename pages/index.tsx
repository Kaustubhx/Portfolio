import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Link } from 'react-scroll'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import WorkExperience from '../components/WorkExperience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { ChevronUpIcon } from '@heroicons/react/24/solid'
import { GetServerSideProps } from 'next'
import { Experience, PageInfo, Project, Skill, Social } from '@/typings'
import { fetchPageInfo } from '@/utils/fetchPageInfo'
import { fetchExperience } from '@/utils/fetchExperiences'
import { fetchSkills } from '@/utils/fetchSkills'
import { fetchSocial } from '@/utils/fetchSocials'
import { fetchProject } from '@/utils/fetchProjects'

const inter = Inter({ subsets: ['latin'] })

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

export default function Home({ pageInfo, experiences, skills, projects, socials, }: Props) {
  return (
    <div className='h-screen z-0 snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar-thin lg:scrollbar scrollbar-track-neutral-900/20 scrollbar-thumb-neutral-900/80'>
      <Head>
        <title>Kaustubh&apos;s Portfolio</title>
      </Head>

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

      <Link
        to="hero"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        <footer className='sticky bottom-2 w-full cursor-pointer my-5'>
          <div className='flex items-center justify-center'>
            <ChevronUpIcon className='h-10 w-10 text-white bg-neutral-900 rounded-full' />
          </div>
        </footer>
      </Link>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperience();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProject();
  const socials: Social[] = await fetchSocial();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
  };
}

