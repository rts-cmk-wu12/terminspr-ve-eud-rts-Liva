'use client';

import Link from "next/link";
import Image from "next/image";
import '@/scss/components/activity-card.scss';

function ActivityCard({ data }) {
    return (
        <ul className="activity">
            {data && data.map(activity => (
                <li key={activity.id} className="activity-card">
                    <Link href={`/aktivitet/${activity.id}`}>
                        <Image
                            src={activity.asset.url}
                            alt={`${activity.name} billede`}
                            width={500}
                            height={500}
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEW2tLLDbwZkAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
                            className="activity-card__image" />
                        <section className="activity-card__info">
                            <h2 className="activity-card__text">{activity.name}</h2>
                            <span className="activity-card__text">{activity.minAge}-{activity.maxAge} år</span>
                        </section>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default ActivityCard;