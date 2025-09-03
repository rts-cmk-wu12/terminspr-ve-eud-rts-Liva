import Link from "next/link";

function CalendarCard({ activity }) {
    return (
        <li className="calendar__card">
            <Link href={`/aktivitet/${activity.id}`}>
                <h2 className="calendar__card__heading">{activity.name || activity.activity}</h2>
                <p className="calendar__card__text">{activity.weekday} {activity.time}</p>
            </Link>
        </li>
    );
}

export default CalendarCard;