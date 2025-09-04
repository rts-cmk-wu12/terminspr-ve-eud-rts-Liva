'use server';

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

async function authFetch(endpoint, pageUrl, revalidate = false, method = 'GET', baseUrl = `${process.env.BASE_URL}api/v1/`) {
    const cookieStore = await cookies();
    const access_token = cookieStore.get('access_token');

    const response = await fetch(baseUrl + endpoint, {
        method: method,
        headers: {
            Authorization: `Bearer ${access_token.value}`
        }
    });

    if (method !== 'DELETE') {
        const data = await response?.json();

        if (revalidate) {
            revalidatePath(`http://localhost:3000/${pageUrl}`);
        };

        return data;
    };

    if (revalidate) {
        revalidatePath(`http://localhost:3000/${pageUrl}`);
    };
}

export default authFetch;