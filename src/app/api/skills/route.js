import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Skill from "@/app/models/Skill";

export async function GET() {
  await dbConnect();
  const skills = await Skill.find().sort({ createdAt: -1 });
  return NextResponse.json(skills);
}

export async function POST(req) {
  try {
    await dbConnect();
    const { name } = await req.json();

    if (!name) {
      return NextResponse.json(
        { message: "Skill name is required" },
        { status: 400 }
      );
    }

    const skill = await Skill.create({ name });

    return NextResponse.json(skill, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating skill" },
      { status: 500 }
    );
  }
}
