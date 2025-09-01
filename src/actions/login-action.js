'use server';

import { cookies } from "next/headers";
import z from "zod";

async function loginAction(prevState, formData) {
    const username = formData.get('username');
    const password = formData.get('password');

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
        body: {
            username: validated.data.username,
            password: validated.data.password
        }
    });

    // console.log(response);

    // if (!user.length) return {
    //     success: false,
    //     errors: ['Brugernavn eller adgangskode er forkert']
    // };

    // if (user[0].password === validated.data.password) {
    //     const cookieStore = await cookies();
    //     cookieStore.set('status', 'Du er nu logget ind.', {
    //         maxAge: 60 * 30
    //     });
    // };

    return validated;
}

export default loginAction;