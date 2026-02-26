import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Testimonial from "@/app/models/Testimonial";

export async function GET() {
  await dbConnect();
  const testimonials = await Testimonial.find().sort({ createdAt: -1 });
  return NextResponse.json(testimonials);
}

export async function POST(req) {
  await dbConnect();
  const body = await req.json();

  const testimonial = await Testimonial.create(body);
  return NextResponse.json(testimonial, { status: 201 });
}
