import type { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../lib/db';
import { FarmInfoData } from '../types/types';



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<FarmInfoData[] | { error: string }>
) {
  try {
    const result = await query('SELECT * FROM farmInfo');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
