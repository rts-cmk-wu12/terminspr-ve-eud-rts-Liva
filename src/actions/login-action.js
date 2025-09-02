'use server';

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import z from "zod";

async function loginAction(prevState, formData) {
    const username = formData.get('username');
    const password = formData.get('password');
    const checkbox = formData.get('checkbox');

    const schema = z.object({
        username: z.string().min(1, { message: 'Brugernavn skal være udfyldt' }),
        password: z.string().min(1, { message: 'Adgangskode skal være udfyldt' })
    });

    const validated = schema.safeParse({
        username, password
    });

    if (!validated.success) return {
        ...validated,
        ...(z.treeifyError(validated.error))
    };

    const response = await fetch('http://localhost:4000/auth/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: validated.data.username,
            password: validated.data.password
        })
    });

    if (response.status !== 200) return {
        success: false,
        errors: ['Brugernavn eller adgangskode er forkert']
    };

    const data = await response.json();

    if (!Object.keys(data).length) return;

    const cookieStore = await cookies();
    cookieStore.set({
        name: 'access_token',
        value: data.token,
        expires: data.validUntil
    });

    if (checkbox === 'on') {
        cookieStore.set({
            name: 'user_id',
            value: data.userId,
            maxAge: 60 * 60 * 24 * 30
        });

        redirect('/');
    };

    cookieStore.set({
        name: 'user_id',
        value: data.userId,
    });

    redirect('/');
}

export default loginAction;