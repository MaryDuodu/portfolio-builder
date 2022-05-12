import { Hash } from "crypto";
import { ObjectId } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../lib/mongodb";

type Data = {
  success: boolean;
  message: string;
  data: any;
  loggedIn: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // switch the methods
  switch (req.method) {
    case "GET": {
      const { db } = await connectToDatabase();
      const data = await db
        .collection("portfolios")
        .find({ user: req.query.user })
        .toArray();

      // create account
      res.status(200).json({
        success: true,
        message: "Portfolio created successfully",
        data: data,
        loggedIn: true,
      });
      break;
    }
    case "DELETE": {
      const { db } = await connectToDatabase();
      await db.collection("portfolios").findOneAndDelete({ _id: new ObjectId(req.query.id as any) });

      return res.status(200).json({
        success: true,
        message: "Portfolio deleted successfully",
        data: [],
        loggedIn: true,
      });
    }

    case "POST": {
      const { db } = await connectToDatabase();
      const portfolio = await db.collection("portfolios").insertOne(req.body);

      // create account
      res.status(200).json({
        success: true,
        message: "Portfolio created successfully",
        data: portfolio,
        loggedIn: true,
      });
    }
  }
}
