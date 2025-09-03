'use client';

import { useEffect, useReducer } from "react";
import reducer from "@/utils/reducer";
import authFetch from "@/utils/auth-fetch";

function ActivityBtn({ userIsParticipating, userIsAvailable, userTooYoung, userTooOld, userId, activityId }) {
    const [state, dispatch] = useReducer(reducer, {
        title: 'Tilmeld dig til denne aktivitet',
        disabled: false,
        text: 'Tilmeld',
        method: 'POST',
    });

    async function manageUserActivity() {
        await authFetch(`users/${userId}/activities/${activityId}`, `activity/${activityId}`, true, state?.method);
    };

    useEffect(() => {
        if (userIsParticipating) {
            dispatch({ type: 'setTitle', newTitle: 'Forlad denne aktivitet' });
            dispatch({ type: 'setText', newText: 'Forlad' });
            dispatch({ type: 'methodDelete' });
        }

        else if (!userIsAvailable) {
            dispatch({ type: 'setTitle', newTitle: 'Du er allerede tilmeldt noget andet denne dag' });
            dispatch({ type: 'isDisabled' });
        }

        else if (userTooYoung) {
            dispatch({ type: 'setTitle', newTitle: 'Du er ikke gammel nok til denne aktivitet' });
            dispatch({ type: 'isDisabled' });
        }

        else if (userTooOld) {
            dispatch({ type: 'setTitle', newTitle: 'Du er for gammel til denne aktivitet' });
            dispatch({ type: 'isDisabled' });
        }

        else if (!userIsParticipating) {
            dispatch({ type: 'setTitle', newTitle: 'Tilmeld dig til denne aktivitet' });
            dispatch({ type: 'setText', newText: 'Tilmeld' });
            dispatch({ type: 'methodPost' });
        }

    }, [userIsParticipating]);

    return (
        <button
            type="button"
            onClick={manageUserActivity}
            title={state?.title}
            disabled={state?.disabled}
            className="details-cover__button"
        >{state?.text}</button>
    );
}

export default ActivityBtn;