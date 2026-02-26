import Skill from "@/app/models/Skill";
import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  await dbConnect();
  const { id } = await params;
  const { name } = await req.json();

  const updatedSkill = await Skill.findByIdAndUpdate(
    id,
    { name },
    { new: true }
  );

  return NextResponse.json(updatedSkill);
}

export async function DELETE(req, { params }) {
  await dbConnect();
  const { id } = await params;
  await Skill.findByIdAndDelete(id);

  return NextResponse.json({ message: "Skill deleted" });
}
