import { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity'
import { sanityClient } from '../sanity';

const query = groq`
    *[_type == 'project'] {
        ...,
        technologies[] ->
    }
`;

export default async function getProjects() {
    const projects = await sanityClient.fetch(query)
    return projects
    
}