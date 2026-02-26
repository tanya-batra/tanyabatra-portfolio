import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Education from "@/app/models/Education";

/* GET ALL */
export async function GET() {
  await dbConnect();
  const education = await Education.find().sort({ createdAt: -1 });
  return NextResponse.json(education);
}

/* CREATE */
export async function POST(req) {
  await dbConnect();
  const body = await req.json();

  const education = await Education.create(body);
  return NextResponse.json(education, { status: 201 });
}
