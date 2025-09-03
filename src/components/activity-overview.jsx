import CalendarCard from "./cards/calendar-card";

async function ActivityOverview({ activity }) {
    if (!activity.users.length) return;

    return (
        <ul className="calendar">
            <CalendarCard
                key={activity.id}
                activity={activity}
                linkUrl={`/hold-oversigt/${activity.id}`} />
        </ul>
    );
}

export default ActivityOverview;