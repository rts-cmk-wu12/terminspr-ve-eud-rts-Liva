'use client';

import { useActionState } from "react";
import { FiSearch } from "react-icons/fi";
import { BarLoader } from "react-spinners";
import searchAction from "@/actions/search-action";
import ActivityCard from "../cards/activity-card";

const override = {
    alignSelf: 'center',
    marginInline: 'auto'
};

function SearchForm() {
    const [formState, formAction, isPending] = useActionState(searchAction);

    return (
        <>
            <form className="search" action={formAction}>
                <label>
                    <input
                        type="search"
                        name="query"
                        defaultValue={formState?.query}
                        autoComplete="off"
                        placeholder="Søg..."
                        className="search__input" />
                    <p className="login__error">{formState?.properties?.query?.errors}</p>
                </label>
                <button type="submit" className="search__icon"><FiSearch /></button>
            </form>

            {isPending ? (
                <BarLoader
                    color="#EAEAEA"
                    loading={true}
                    cssOverride={override}
                    size={55}
                />
            ) : (
                <ActivityCard data={formState?.data} />
            )}
        </>
    );
}

export default SearchForm;