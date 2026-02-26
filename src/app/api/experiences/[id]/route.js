import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Experience from "@/app/models/Experience";

export async function PUT(req, { params }) {
  await dbConnect();
  const { id } = await params;
  const body = await req.json();

  const updatedExperience = await Experience.findByIdAndUpdate(id, body, {
    new: true,
  });

  return NextResponse.json(updatedExperience);
}

export async function DELETE(req, { params }) {
  await dbConnect();
  const { id } = await params;
  await Experience.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}
