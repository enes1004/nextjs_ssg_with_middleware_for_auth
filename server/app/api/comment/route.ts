import { NextRequest, NextResponse } from "next/server";
import data from "./data.json";

export async function GET(request:NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const commentIds = searchParams.get('commentIds')

  if(commentIds){
    const commentIdsParsed = commentIds.split(',');
    return NextResponse.json(data.filter((i)=>commentIdsParsed.includes(i.id.toString())).reverse())
  }
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
