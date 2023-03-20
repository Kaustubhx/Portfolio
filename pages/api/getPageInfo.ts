import { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity';

const query = groq`
    *[_type == 'pageInfo'][0]
`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const pageInfo = await sanityClient.fetch(query)

    res.status(200).json({ pageInfo })
}