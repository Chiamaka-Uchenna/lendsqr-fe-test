import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://run.mocky.io/v3/30ca8643-e3d1-4bf7-84b0-a421d8c97e64"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
