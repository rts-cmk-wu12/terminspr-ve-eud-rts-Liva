'use client';

import useFetch from "@/hooks/use-fetch";
import Loader from "../loader";

function TeamCard({ id }) {
    const { data, error, loading } = useFetch(`activities/${id}`);

    return (
        <section className="team">
            {loading && <Loader />}
            {error && <p>Aktivitet kunne ikke findes</p>}
            {data && (
                <>
                    <h1 className="team__heading">{data.name}</h1>
                    <ul>
                        {data.users.length ? (
                            data.users.map(user => (
                                <li key={user.id}>{user.firstname} {user.lastname}</li>
                            ))
                        ) : <p>Ingen tilmeldte fundet</p>}
                    </ul>
                </>
            )}
        </section>
    );
}

export default TeamCard;