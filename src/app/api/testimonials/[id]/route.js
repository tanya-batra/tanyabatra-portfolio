import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Testimonial from "@/app/models/Testimonial";

export async function PUT(req, { params }) {
  await dbConnect();
  const { id } = await params;
  const body = await req.json();

  const updated = await Testimonial.findByIdAndUpdate(id, body, { new: true });

  return NextResponse.json(updated);
}

export async function DELETE(req, { params }) {
  await dbConnect();
  const { id } = await params;
  await Testimonial.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}
