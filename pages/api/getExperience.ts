import { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity';

const query = groq`
    *[_type == 'experience'] {
        ...,
        technologies[] ->
    }
`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const experiences = await sanityClient.fetch(query)
    res.status(200).json({ experiences })
}