import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.redirect(
    "https://forms.gle/VSfmV6kpJSTcUXWh8",
    307
  );
}