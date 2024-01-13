import { NextResponse } from "next/server";
import { BEST_SELLING } from "./data";

export async function GET(request: Request) {
   return NextResponse.json(BEST_SELLING)
}