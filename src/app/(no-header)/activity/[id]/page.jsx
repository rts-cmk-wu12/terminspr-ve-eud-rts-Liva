import { cookies } from "next/headers";
import ActivityDetails from "@/components/cards/activity-details";
import '@/scss/pages/details.scss';

export async function generateMetadata({ params }) {
    const { id } = await params;

    const response = await fetch(`http://localhost:4000/api/v1/activities/${id}`);
    const activity = await response.json();

    return {
        title: activity.name
    };
};

async function ActivityDetailsPage({ params }) {
    const { id } = await params;
    const cookieStore = await cookies();
    const access_token = cookieStore.get('access_token');
    const user_id = cookieStore.get('user_id');

    const response = await fetch(`http://localhost:4000/api/v1/users/${user_id?.value}`, {
        headers: {
            Authorization: `Bearer ${access_token?.value}`
        }
    });

    const user = await response.json();

    return (
        <>
            <ActivityDetails id={id} user={user} />
        </>
    );
}

export default ActivityDetailsPage;