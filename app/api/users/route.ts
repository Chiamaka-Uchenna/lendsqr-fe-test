import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://run.mocky.io/v3/a17eedb2-93a9-4550-be85-42c48e0862d2"
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
