
import { NextApiRequest, NextApiResponse } from 'next'
import { getIronSession, type IronSessionData } from 'iron-session';
import { ironOptions } from './iron-session';
import { generateNonce } from 'siwe'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req
  switch (method) {
    case 'GET': {
      try {
        const session = await getIronSession<IronSessionData>(req, res, ironOptions);
        session.nonce = generateNonce();
        await session.save()

        res.setHeader('Content-Type', 'application/json')
        res.send({ nonce: session.nonce })
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
