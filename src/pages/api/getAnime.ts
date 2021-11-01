import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // const data = await fetch(`${apiPath}/username/request/argument`)
    const { user } = req.query
    console.log(user)
    const data = await fetch(`https://api.jikan.moe/v3/user/${user}/animelist/completed`)
    res.status(200).json({ data: await data.json() })
}
