import { NextApiRequest, NextApiResponse } from 'next'
import { getIronSession, type IronSessionData } from 'iron-session';
import { ironOptions } from './iron-session';
import { SiweMessage } from 'siwe'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req
  switch (method) {
    case 'POST': {
      try {
        const { message, signature } = req.body
        const siweMessage = new SiweMessage(message)
        const fields = await siweMessage.verify({signature})
        const session = await getIronSession<IronSessionData>(req, res, ironOptions);

        if (fields.data.nonce !== session.nonce) {
          return res.status(422).json({ message: 'Invalid nonce.' })
        }

        session.siwe = fields.data
        await session.save()
        res.setHeader('Content-Type', 'application/json')
        res.json({ ok: true })
      } catch (_error) {
        res.json({ ok: false })
      }
      break
    }
    default: {
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
    }
  }
}
