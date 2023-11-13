import { groq } from 'next-sanity'
import { sanityClient } from '../sanity';
import { NextResponse } from 'next/server';

const query = groq`
    *[_type == 'experience'] {
        ...,
        technologies[] ->
    }
`;

export default async function getExperience() {
    const experiences = await sanityClient.fetch(query)
    return experiences
}