import Link from "next/link";

function CalendarCard({ activity, linkUrl }) {
    return (
        <li className="calendar__card">
            <Link href={linkUrl}>
                <h2 className="calendar__card__heading">{activity.name}</h2>
                <p className="calendar__card__text">{activity.weekday} {activity.time}</p>
            </Link>
        </li>
    );
}

export default CalendarCard;