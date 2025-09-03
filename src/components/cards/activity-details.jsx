'use client';

import useFetch from "@/hooks/use-fetch";
import Image from "next/image";
import ActivityBtn from "../activity-btn";

function ActivityDetails({ id, user }) {
    const { data, error, loading } = useFetch(`activities/${id}`);

    const userIsParticipating = user?.activities.some(activity => activity?.id === data?.id);
    const userIsAvailable = !(user?.activities.some(activity => activity?.weekday === data?.weekday));
    const userTooYoung = user?.age < data?.minAge;
    const userTooOld = user?.age > data?.maxAge;

    return (
        <>
            {loading && <p>Indlæser...</p>}
            {error && <p>Aktivitet kunne ikke findes</p>}
            {data && (
                <>
                    <div className="details-cover">
                        <Image
                            src={data.asset.url}
                            alt={`${data.name} billede`}
                            width={600}
                            height={600}
                            className="details-cover__image" />
                        {user?.id && user?.role === 'default' && (
                            <ActivityBtn
                                userIsParticipating={userIsParticipating}
                                userIsAvailable={userIsAvailable}
                                userTooYoung={userTooYoung}
                                userTooOld={userTooOld}
                                userId={user?.id}
                                activityId={data?.id} />
                        )}
                    </div>
                    <section className="details-info">
                        <h1 className="details-info__heading">{data.name}</h1>
                        <table className="details-info__table">
                            <thead>
                                <tr>
                                    <th>Dag</th>
                                    <th>Tidspunkt</th>
                                    <th>Alder</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{data.weekday}</td>
                                    <td>{data.time}</td>
                                    <td>{data.minAge}-{data.maxAge} år</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>{data.description}</p>
                    </section>
                </>
            )}
        </>
    );
}

export default ActivityDetails;