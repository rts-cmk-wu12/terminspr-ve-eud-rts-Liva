'use server';

import z from "zod";

async function searchAction(prevState, formData) {
    const query = formData.get('query');

    const schema = z.object({
        query: z.string().min(1, { message: 'Søgefelt skal være udfyldt' }),
    });

    const validated = schema.safeParse({
        query
    });

    if (!validated.success) return {
        ...validated,
        ...(z.treeifyError(validated.error))
    };

    const response = await fetch('http://localhost:4000/api/v1/activities');

    if (response.status !== 200) return {
        success: false,
        errors: ['Fejl på serveren. Prøv igen senere']
    };

    const data = await response.json();

    if (!data.length) return;

    function validateActivities(name) {
        const lowerCaseWords = name.toLowerCase().split(' ');
        const isValid = (string) => string === validated.data.query.toLowerCase();

        return lowerCaseWords.some(isValid);
    };

    return {
        query: validated.data.query,
        data: data.filter(activity => validateActivities(activity.name))
    };
}

export default searchAction;