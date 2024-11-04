// File: app/api/login/route.ts
import { NextResponse } from "next/server";

interface User {
  email: string;
  password: string;
}

// Retrieve user credentials from environment variables
const users: User[] = [
  {
    email: process.env.USER_EMAIL || "",
    password: process.env.USER_PASSWORD || "", // This should be plain text now
  },
];

export async function POST(request: Request) {
  console.log("Received request:", request.method);

  const { email, password } = await request.json();
  console.log("Request Body:", { email, password }); // Log request body

  // Validate input
  if (!email || !password) {
    return NextResponse.json(
      { message: "Email and password are required." },
      { status: 400 }
    );
  }

  // Simulate user authentication
  const user = users.find((user) => user.email === email);
  console.log("User found:", user); // Log found user

  // Compare passwords directly
  if (user && user.password === password) {
    return NextResponse.json({ message: "Login successful!" }, { status: 200 });
  } else {
    return NextResponse.json(
      { message: "Invalid email or password." },
      { status: 401 }
    );
  }
}

export function OPTIONS() {
  // Handle pre-flight requests for CORS if needed
  return NextResponse.json({}, { status: 204 });
}
