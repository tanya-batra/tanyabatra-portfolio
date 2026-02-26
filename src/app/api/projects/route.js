import { NextResponse } from "next/server";

import fs from "fs";
import path from "path";
import dbConnect from "@/lib/dbConnect";
import Project from "@/app/models/Project";
import cloudinary from "@/lib/cloudinary";

export async function GET() {
  await dbConnect();
  const projects = await Project.find().sort({ createdAt: -1 });
  return NextResponse.json(projects);
}

export async function POST(req) {
  await dbConnect();
  const formData = await req.formData();

  const file = formData.get("image");

  let imageUrl = null;
  let publicId = null;

  if (file && file.name) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ folder: "tanya-portfolio" }, (error, result) => {
          if (error) reject(error);
          else resolve(result);
        })
        .end(buffer);
    });

    imageUrl = uploadResult.secure_url;
    publicId = uploadResult.public_id;
  }

  const keywords =
    formData
      .get("keywords")
      ?.split(",")
      .map((k) => k.trim()) || [];

  const project = await Project.create({
    title: formData.get("title"),
    description: formData.get("description"),
    github: formData.get("github"),
    demo: formData.get("demo"),
    category: formData.get("category"),
    designedBy: formData.get("designedBy"),
    projectDate: formData.get("projectDate"),
    keywords,
    image: imageUrl,
    imagePublicId: publicId,
  });

  return NextResponse.json(project, { status: 201 });
}
