// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const apiPath = "https://api.jikan.moe/v3"


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // const data = await fetch(`${apiPath}/username/request/argument`)
    const { user } = req.query
    console.log(user)
    res.status(200).json({ user: 'John Doe' })
}
