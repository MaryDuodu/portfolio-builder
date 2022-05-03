// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Hash } from 'crypto'
import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../lib/mongodb'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // switch the methods
  switch (req.method) {

    case 'POST': {
      console.log(req.body)
      const { db } = await connectToDatabase()
      const user = await db.collection('users').findOne(req.body)

      // @ts-ignore
      if (user) {
        res.status(200).json({
          success: true,
          message: "Logged in successfully",
          data: user,
          loggedIn: true
        } as any)
      }
      else {
        res.status(400).json({
          success: false,
          message: "Invalid email or password"
        } as any)
      }
    }
  }

}
