import {NextRequest} from "next/server";

export async function POST(req: NextRequest) {
    const {data} = await req.json()
    const res = await fetch(`${process.env.PWD_SERVICE}/api/auth/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    return Response.json({
        res: {
            status: res.status,
            statusText: res.statusText,
        }
    });

}