import { cookies } from "next/headers";
import authFetch from "@/utils/auth-fetch";
import Loader from "@/components/loader";
import CalendarCard from "@/components/cards/calendar-card";
import ActivityOverview from "@/components/activity-overview";
import '@/scss/pages/calendar.scss';

export const metadata = {
    title: 'Kalender'
};

async function CalendarPage() {
    const cookieStore = await cookies();
    const user_id = cookieStore.get('user_id');

    const user = await authFetch(`users/${user_id.value}`);

    const activities = await authFetch(`activities`);
    const instructorActivities = activities.filter(activity => activity.instructorId === user.id);

    return (
        <>
            {!Object.keys(user).length && <Loader />}
            {user.role === 'default' ? (
                user.activities.length ? (
                    <ul className="calendar">
                        {user.activities.map(activity => (
                            <CalendarCard
                                key={activity.id}
                                activity={activity}
                                linkUrl={`/aktivitet/${activity.id}`} />
                        ))}
                    </ul>
                ) : <p>Ingen aktiviteter fundet</p>
            ) : (
                <ul className="calendar">
                    {instructorActivities?.map(activity => (
                        <ActivityOverview
                            key={activity.id}
                            activity={activity} />
                    ))}
                </ul>
            )}
        </>
    );
}

export default CalendarPage;