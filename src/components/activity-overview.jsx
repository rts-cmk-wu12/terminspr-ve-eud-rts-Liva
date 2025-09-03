import authFetch from "@/utils/auth-fetch";
import CalendarCard from "./cards/calendar-card";

async function ActivityOverview({ id, userId }) {
    const roster = await authFetch(`users/${userId}/roster/${id}`, 'kalender');

    if (!roster.length) return;

    return (
        <ul className="calendar">
            {roster?.map(activity => (
                <CalendarCard
                    key={`instructor ${activity.id}`}
                    activity={activity}
                    linkUrl={`/hold-oversigt/${activity.id}`} />
            ))}
        </ul>
    );
}

export default ActivityOverview;