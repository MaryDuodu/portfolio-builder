import { Hash } from 'crypto'
import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../lib/mongodb'

type Data = {
  success: boolean,
  message: string,
  data: any
  loggedIn: boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // switch the methods
  switch (req.method) {

    case 'GET': {
      console.log(req.query)
      console.log(req.query)
      const { db } = await connectToDatabase()
      const data = await db.collection('portfolios').find({ user: req.query.user }).toArray()

      // create account
      res.status(200).json({
        success: true,
        message: "Portfolio created successfully",
        data: data,
        loggedIn: true
      })
      break;
    }

    case 'POST': {
      const { db } = await connectToDatabase()
      const portfolio = await db.collection('portfolios').insertOne(req.body)

      // create account
      res.status(200).json({
        success: true,
        message: "Portfolio created successfully",
        data: portfolio,
        loggedIn: true
      })
    }
  }

}
