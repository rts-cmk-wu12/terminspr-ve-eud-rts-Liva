'use client';

import useFetch from "@/hooks/use-fetch";
import Image from "next/image";

function ActivityDetails({ id }) {
    const { data, error, loading } = useFetch(`activities/${id}`);

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
                            width={411}
                            height={490}
                            className="details-cover__image" />
                        <button type="button" className="details-cover__button">Tilmeld</button>
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