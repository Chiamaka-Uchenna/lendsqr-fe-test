import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://run.mocky.io/v3/533da3a4-96a9-45ee-bbdf-3008f00296c2"
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
