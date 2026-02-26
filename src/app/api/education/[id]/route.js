import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Education from "@/app/models/Education";

/* UPDATE */
export async function PUT(req, { params }) {
  await dbConnect();
  const { id } = await params;
  const body = await req.json();

  const updated = await Education.findByIdAndUpdate(id, body, {
    new: true,
  });

  return NextResponse.json(updated);
}

/* DELETE */
export async function DELETE(req, { params }) {
  await dbConnect();
  const { id } = await params;

  await Education.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}
