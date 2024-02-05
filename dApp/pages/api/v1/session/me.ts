
import { NextApiRequest, NextApiResponse } from 'next';
import { getIronSession, type IronSessionData } from 'iron-session';
import { ironOptions } from './iron-session';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  switch (method) {
    case 'GET': {
      try {
        const session = await getIronSession<IronSessionData>(req, res, ironOptions);
        console.log({ session })

        res.setHeader('Content-Type', 'application/json')
        res.send({ address: session.siwe?.address })
      } catch (_error) {
        res.json({ ok: false })
      }
      break
    }
    default: {
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
    }
  }
}
