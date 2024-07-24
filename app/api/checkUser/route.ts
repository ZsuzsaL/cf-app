import { query } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';


export async function POST(req: NextRequest) {
  const { email } = await req.json();

  try {
    // Check if the user already exists
    const checkUserQuery = 'SELECT * FROM users WHERE email = $1';
    const userResult = await query(checkUserQuery, [email]);

    if (userResult.rows.length > 0) {
      // User already exists
      return NextResponse.json({ message: 'User already exists' }, { status: 200 });
    } else {
      // Insert the new user
      const insertUserQuery = 'INSERT INTO users (email, creationDate) VALUES ($1, NOW()) RETURNING userId';
      const newUserResult = await query(insertUserQuery, [email]);
      const newUserId = newUserResult.rows[0].userid;

      return NextResponse.json({ message: 'User added', userId: newUserId }, { status: 200 });
    }
  } catch (error) {
    console.error('Error checking or adding user:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
