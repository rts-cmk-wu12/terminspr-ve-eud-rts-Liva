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

    return (
        <>
            <ActivityDetails id={id} />
        </>
    );
}

export default ActivityDetailsPage;