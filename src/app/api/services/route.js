import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Service from "@/app/models/Service";

export async function GET() {
  await dbConnect();
  const services = await Service.find();
  return NextResponse.json(services);
}

export async function POST(req) {
  await dbConnect();
  const body = await req.json();
  const service = await Service.create(body);
  return NextResponse.json(service, { status: 201 });
}
