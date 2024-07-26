import { NextRequest, NextResponse } from 'next/server';
import { query } from '../../../lib/db'; // Adjust the path as necessary

export async function POST(req: NextRequest) {
  const { userId } = await req.json();

  try {
    // Check if the user has a farm associated with their userId
    const getFarmInfoQuery = `
      SELECT 1 FROM farmInfo
      WHERE userId = $1
    `;
    const result = await query(getFarmInfoQuery, [userId]);

    // Check if `result.rowCount` is not null
    const farmExists =result.rowCount && result.rowCount > 0;
    
    // Return true if a farm exists, otherwise false
    return NextResponse.json({ farmExists }, { status: 200 });
  } catch (error) {
    console.error('Error checking farm info:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
