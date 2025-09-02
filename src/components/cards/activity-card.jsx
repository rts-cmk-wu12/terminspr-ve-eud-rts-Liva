'use client';

import useFetch from "@/hooks/use-fetch";
import Link from "next/link";
import Image from "next/image";
import '@/scss/components/activity-card.scss';

function ActivityCard() {
    const { data, error, loading } = useFetch('activities');

    return (
        <>
            {loading && <p>Indlæser...</p>}
            {error && <p>Kunne ikke finde nogle aktiviteter</p>}
            <ul className="activity">
                {data && data.map(activity => (
                    <li key={activity.id} className="activity-card">
                        <Link href={`/activity/${activity.id}`}>
                            <Image
                                src={activity.asset.url}
                                alt={`${activity.name} billede`}
                                width={350}
                                height={340}
                                className="activity-card__image" />
                            <section className="activity-card__info">
                                <h2 className="activity-card__text">{activity.name}</h2>
                                <span className="activity-card__text">{activity.minAge}-{activity.maxAge} år</span>
                            </section>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ActivityCard;