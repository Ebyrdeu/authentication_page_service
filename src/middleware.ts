import {NextRequest, NextResponse} from "next/server";

export function middleware(request: NextRequest) {
    const cookie = request.cookies.has('token');
    if (cookie) {
        return NextResponse.redirect(`${process.env.APP_SERVICE_URL}`);
    }

}

export const config ={
    matcher: ['/signin']
}