import { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity'
import { sanityClient } from '../sanity';
import { Skill } from '@/typings';

const query = groq`
    *[_type == 'skill']
`

type Data = {
    skills: Skill[]
}

export default async function getSkills() {
    const skills: Skill[] = await sanityClient.fetch(query);
    return skills
}