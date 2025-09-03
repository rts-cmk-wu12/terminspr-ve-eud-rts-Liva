import { NextResponse } from "next/server";

export default async function middleware(request) {
    const { pathname } = request.nextUrl;

    if (pathname.includes('/welcome') || pathname.includes('/onboarding')) {
        return;
    };

    if (!request.cookies.has('onboarding')) {
        return NextResponse.redirect(new URL('/welcome', request.url));
    };

    if (pathname.includes('/login' || pathname.includes('/opret-bruger'))) {
        return;
    };

    if (!request.cookies.has('access_token')) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    if (pathname.includes('/hold-oversigt')) {
        const user_id = request.cookies.get('user_id');
        const access_token = request.cookies.get('access_token');
        const response = await fetch(`http://localhost:4000/api/v1/users/${user_id?.value}`, {
            headers: {
                Authorization: `Bearer ${access_token?.value}`
            }
        });

        const user = await response.json();

        if (user.role !== 'instructor') {
            return NextResponse.redirect(new URL('/', request.url));
        };

        return;
    };

    return;
}

export const config = {
    matcher: [
        '/',
        '/aktivitet/:path*',
        '/soeg/:path*',
        '/kalender/:path*',
        '/hold-oversigt/:path*',
        '/login/:path*',
        '/opret-bruger/:path*',
    ]
};