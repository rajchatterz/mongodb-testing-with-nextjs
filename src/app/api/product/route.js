import mongoose from "mongoose";
import { ConnectionStr } from "@/app/lib/db";
import { resturantSchema } from "@/app/lib/resturantModel";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await mongoose.connect(ConnectionStr);
    const data = await resturantSchema.find();
    console.log(data);

    return NextResponse.json({
      result: data,
      message: "Connected to MongoDB successfully!",
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);

    return NextResponse.json({
      result: "failure",
      message: "Failed to connect to MongoDB",
      error: error.message,
    });
  }
}

export async function POST(request) {
  try {
    await mongoose.connect(ConnectionStr);
    const body = await request.json();
    const newResturant = new resturantSchema(body); // Create a new instance of the schema
    await newResturant.save();

    return NextResponse.json({
      result: "success",
      message: "Data saved successfully!",
    });
  } catch (error) {
    console.error("Error saving data to MongoDB:", error.message);

    return NextResponse.json({
      result: "failure",
      message: "Failed to save data to MongoDB",
      error: error.message,
    });
  }
}
