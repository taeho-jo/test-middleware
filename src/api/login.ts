import type { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'cookie';
type Data = {
  message: string;
};

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const token = req.body.token;

  const serialised = serialize('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'strict',
    maxAge: 3600,
    path: '/',
  });

  res.setHeader('Set-Cookie', serialised);

  res.status(200).json({ message: 'Success!' });
}
