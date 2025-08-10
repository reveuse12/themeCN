/*
import { NextResponse } from 'next/server';
import { predefinedThemes } from '@/lib/themes';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const theme = predefinedThemes.find((t) => t.id === params.id);

    if (theme) {
      return NextResponse.json(theme);
    } else {
      return NextResponse.json({ error: 'Theme not found' }, { status: 404 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'An error occurred while fetching the theme.' }, { status: 500 });
  }
}
*/

import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
   return NextResponse.json({ error: 'An error occurred while fetching the theme.' }, { status: 500 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'An error occurred while fetching the theme.' }, { status: 500 });
  }
}
  