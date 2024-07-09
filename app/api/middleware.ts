import { NextApiRequest, NextApiResponse } from 'next';
import { Readable } from 'stream';

export function rawBody(req: NextApiRequest, res: NextApiResponse, next: Function) {
  if (req.headers['content-type'] === 'application/json') {
    let data = '';

    req.on('data', (chunk) => {
      data += chunk;
    });

    req.on('end', () => {
      req.body = data;
      next();
    });
  } else {
    next();
  }
}
