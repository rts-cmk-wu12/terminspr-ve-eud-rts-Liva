import { NextResponse } from "next/server";

export default async function middleware(request) {
    const { pathname } = request.nextUrl;

    if (pathname.includes('/welcome') || pathname.includes('/onboarding')) {
        return;
    };

    if (!request.cookies.has('onboarding')) {
        return NextResponse.redirect(new URL('/welcome', request.url));
    };

    if (pathname.includes('/login')) {
        return;
    };

    if (!request.cookies.has('access_token')) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return;
}

export const config = {
    matcher: [
        '/',
        '/activity/:path*',
        '/search/:path*',
        '/calendar/:path*',
        '/login/:path*',
    ]
};