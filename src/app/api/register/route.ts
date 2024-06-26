import User from "@/models/User";
import connect from "@/lib/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const POST = async (request : any) => {
  const { email, password } = await request.json();

  await connect();

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return new NextResponse("Email is already in use", { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 5);
  const newUser = new User({
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse("user is registered", { status: 200 });
  } catch (err) {
    return new NextResponse(err as string, {
      status: 500,
    });
  }
};
