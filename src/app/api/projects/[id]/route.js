import { NextResponse } from "next/server";

import dbConnect from "@/lib/dbConnect";
import Project from "@/app/models/Project";
import cloudinary from "@/lib/cloudinary";

export async function GET(req, { params }) {
  await dbConnect();
  const { id } = await params;

  const project = await Project.findById(id);

  if (!project) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }

  return NextResponse.json(project, { status: 200 });
}

export async function PUT(req, { params }) {
  await dbConnect();
  const { id } = await params;
  const formData = await req.formData();

  const existingProject = await Project.findById(id);
  if (!existingProject) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }

  let updateData = {
    title: formData.get("title"),
    description: formData.get("description"),
    github: formData.get("github"),
    demo: formData.get("demo"),
    category: formData.get("category"),
    designedBy: formData.get("designedBy"),
    projectDate: formData.get("projectDate"),
    keywords:
      formData
        .get("keywords")
        ?.split(",")
        .map((k) => k.trim()) || [],
  };

  const file = formData.get("image");

  if (file && file.name) {
    // 🔥 Delete old image from Cloudinary
    if (existingProject.imagePublicId) {
      await cloudinary.uploader.destroy(existingProject.imagePublicId);
    }

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

    updateData.image = uploadResult.secure_url;
    updateData.imagePublicId = uploadResult.public_id;
  }

  const updatedProject = await Project.findByIdAndUpdate(id, updateData, {
    new: true,
  });

  return NextResponse.json(updatedProject);
}

export async function DELETE(req, { params }) {
  await dbConnect();
  const { id } = await params;

  const project = await Project.findById(id);
  if (!project) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }

  // 🔥 Delete image from Cloudinary
  if (project.imagePublicId) {
    await cloudinary.uploader.destroy(project.imagePublicId);
  }

  await Project.findByIdAndDelete(id);

  return NextResponse.json({ success: true });
}
