import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Service from "@/app/models/Service";

export async function PUT(req, { params }) {
  await dbConnect();
  const { id } = await params;
  const body = await req.json();

  const updated = await Service.findByIdAndUpdate(id, body, { new: true });

  return NextResponse.json(updated);
}

export async function DELETE(req, { params }) {
  await dbConnect();
  const { id } = await params;
  await Service.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}
