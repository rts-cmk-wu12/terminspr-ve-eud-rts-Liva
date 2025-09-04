'use server';

import { redirect } from "next/navigation";
import z from "zod";

// Zod validering delen af følgende kode er udtaget fra et af mine tidligere opgaver
async function signupAction(prevState, formData) {
    const username = formData.get('username');
    const password = formData.get('password');
    const firstname = formData.get('firstname');
    const lastname = formData.get('lastname');
    const age = formData.get('age');

    const schema = z.object({
        username: z.string().min(1, { message: 'Brugernavn skal være udfyldt' }),
        password: z.string().min(1, { message: 'Adgangskode skal være udfyldt' }),
        firstname: z.string().min(1, { message: 'Fornavn skal være udfyldt' }),
        lastname: z.string().min(1, { message: 'Efternavn skal være udfyldt' }),
        age: z.string().min(1, { message: 'Alder skal være udfyldt' }),
    });

    const validated = schema.safeParse({
        username, password, firstname, lastname, age
    });

    if (!validated.success) return {
        ...validated,
        ...(z.treeifyError(validated.error)),
        data: {
            username,
            password,
            firstname,
            lastname,
            age
        }
    };

    const response = await fetch('http://localhost:4000/api/v1/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `username=${validated.data.username}&password=${validated.data.password}&firstname=${validated.data.firstname}&lastname=${validated.data.lastname}&age=${validated.data.age}&role=default`
    });

    if (response.status !== 200) return {
        success: false,
        errors: ['Bruger kunne ikke oprettes.'],
        data: validated.data
    };

    redirect('/login');
}

export default signupAction;