import { cookies } from "next/headers";
import authFetch from "@/utils/auth-fetch";
import ActivityDetails from "@/components/cards/activity-details";
import '@/scss/pages/details.scss';

export async function generateMetadata({ params }) {
    const { id } = await params;

    const response = await fetch(`${process.env.BASE_URL}api/v1/activities/${id}`);
    const activity = await response.json();

    return {
        title: activity.name
    };
};

async function ActivityDetailsPage({ params }) {
    const { id } = await params;
    const cookieStore = await cookies();
    const user_id = cookieStore.get('user_id');

    const user = await authFetch(`users/${user_id.value}`);

    return (
        <>
            <ActivityDetails id={id} user={user} />
        </>
    );
}

export default ActivityDetailsPage;