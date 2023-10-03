import { NextResponse } from "next/server";
import data from "../data.json";

export async function GET(
  request: Request,
  { params: { postId } }: { params: { postId: number } },
) {
  return NextResponse.json(data.filter((i) => i.post_id == postId));
}
