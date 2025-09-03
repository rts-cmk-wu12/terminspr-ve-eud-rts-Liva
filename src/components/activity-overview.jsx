import CalendarCard from "./cards/calendar-card";

async function ActivityOverview({ activity }) {
    return (
        <CalendarCard
            key={activity.id}
            activity={activity}
            linkUrl={`/hold-oversigt/${activity.id}`} />
    );
}

export default ActivityOverview;