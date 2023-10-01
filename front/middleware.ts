import { NextRequest, NextResponse } from "next/server";
import postAuthMiddleware from "./app/post/[id]/_middleware";

const MIDDLEWARE_MAP={
    '/post/[0-9]+':postAuthMiddleware,
}

export async function middleware(request: NextRequest) {
    const responseByPath:NextResponse | undefined = await Object.entries(MIDDLEWARE_MAP)
    .map(([path,pathMiddleware])=>{
        if(request.url.match((path+'\/?$').replace(/\/\//,'/'))){
            return pathMiddleware(request);
        }
    })
    .find(i=>i);
    
    return responseByPath ?? NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/post/:path*',
    ],
}