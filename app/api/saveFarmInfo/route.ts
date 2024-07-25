import { NextRequest, NextResponse } from 'next/server';
import { query } from '../../../lib/db'; // Adjust the path as necessary

export async function POST(req: NextRequest) {
  const { farmName, region, farmSize, mainProduction } = await req.json();

  try {
    const insertFarmQuery = `
      INSERT INTO farmInfo (farmName, region, farmSize, mainProduction, creationDate)
      VALUES ($1, $2, $3, $4, NOW())
      RETURNING farmId
    `;
    const result = await query(insertFarmQuery, [farmName, region, farmSize, mainProduction]);

    const newFarmId = result.rows[0].farmid;

    return NextResponse.json({ message: 'Farm info saved', farmId: newFarmId }, { status: 200 });
  } catch (error) {
    console.error('Error saving farm info:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
