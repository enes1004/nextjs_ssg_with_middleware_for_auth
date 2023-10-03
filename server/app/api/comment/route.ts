import { NextResponse } from "next/server";
import data from "./data.json";

export async function GET() {
  return NextResponse.json(data.reverse());
}

export type CommentData = {
  id: number;
  content: string;
  user_id: number;
  post_id: number;
  created_at: string;
  updated_at: string;
  user: {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
    created_at: string;
    updated_at: string;
  };
};
