'use server';

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

async function authFetch(endpoint, pageId, method = 'GET', baseUrl = 'http://localhost:4000/api/v1/') {
    const cookieStore = await cookies();
    const access_token = cookieStore.get('access_token');

    await fetch(baseUrl + endpoint, {
        method: method,
        headers: {
            Authorization: `Bearer ${access_token.value}`
        }
    });

    revalidatePath(`http://localhost:3000/activity/${pageId}`);
}

export default authFetch;