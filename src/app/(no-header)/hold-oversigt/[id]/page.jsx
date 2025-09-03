import TeamCard from "@/components/cards/team-card";
import '@/scss/pages/team-overview.scss';

export async function generateMetadata({ params }) {
    const { id } = await params;

    const response = await fetch(`http://localhost:4000/api/v1/activities/${id}`);
    const activity = await response.json();

    return {
        title: activity.name
    };
};

async function TeamOverviewPage({ params }) {
    const { id } = await params;

    return (
        <>
            <TeamCard id={id} />
        </>
    );
}

export default TeamOverviewPage;