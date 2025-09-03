'use client';

import useFetch from "@/hooks/use-fetch";
import Loader from "./loader";
import ActivityCard from "./cards/activity-card";

function ActivitiesFetch() {
    const { data, error, loading } = useFetch('activities');

    return (
        <>
            {loading && <Loader />}
            {error && <p>Kunne ikke finde nogle aktiviteter</p>}
            <ActivityCard data={data} />
        </>
    );
}

export default ActivitiesFetch;