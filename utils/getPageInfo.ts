import { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity'
import { sanityClient } from '../sanity';
import { PageInfo } from '@/typings';
import { NextResponse } from 'next/server';

const query = groq`
    *[_type == 'pageInfo'] [0]
`

export default async function getPageInfo() {
    const pageInfo: PageInfo = await sanityClient.fetch(query)
    return pageInfo
}