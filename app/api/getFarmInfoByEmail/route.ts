import { NextRequest, NextResponse } from 'next/server';
import { query } from '../../../lib/db'; // Adjust the path as necessary

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  try {
    // Check if the user has a farm associated with their email
    const getFarmInfoQuery = `
      SELECT 1 FROM farmInfo
      JOIN users ON farmInfo.userId = users.userId
      WHERE users.email = $1
    `;
    const result = await query(getFarmInfoQuery, [email]);

    // Check if `result.rowCount` is not null
    const farmExists = result.rowCount  && result.rowCount > 0;
    
    // Return true if a farm exists, otherwise false
    return NextResponse.json({ farmExists }, { status: 200 });
  } catch (error) {
    console.error('Error checking farm info:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

