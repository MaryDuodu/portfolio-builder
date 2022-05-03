// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Hash } from 'crypto'
import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../lib/mongodb'

type Data = {
  success: boolean,
  message: string,
  user: any
  loggedIn: boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // switch the methods
  switch (req.method) {

    case 'GET': {
    }

    case 'POST': {
      if (req.url?.indexOf("signup")! > -1) {
        const { db } = await connectToDatabase()
        const user = await db.collection('users').insertOne(req.body)

        // create account
        res.status(200).json({
          success: true,
          message: "Account created successfully",
          user: user,
          loggedIn: true
        })
      }
    }
  }

}
