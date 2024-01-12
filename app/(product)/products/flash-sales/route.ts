import { NextResponse } from 'next/server';
import { FLASH_SALES } from './data';

export async function GET(request: Request) {
  return NextResponse.json(FLASH_SALES);
}
