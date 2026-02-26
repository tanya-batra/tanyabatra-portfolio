import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Experience from "@/app/models/Experience";

export async function GET() {
  await dbConnect();
  const experiences = await Experience.find().sort({ createdAt: -1 });
  return NextResponse.json(experiences);
}

export async function POST(req) {
  await dbConnect();
  const body = await req.json();

  const experience = await Experience.create(body);
  return NextResponse.json(experience, { status: 201 });
}
