import {NextRequest} from "next/server";
import {cookies} from "next/headers";

export async function POST(req: NextRequest) {
    const {data} = await req.json()
    const res = await fetch(`${process.env.PWD_SERVICE}/api/auth/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });


    if (res.ok) {
        const token = await res.text();
        cookies().set("token", token)
    }

    return Response.json({
        res: {
            status: res.status,
            statusText: res.statusText,
        }
    });
}