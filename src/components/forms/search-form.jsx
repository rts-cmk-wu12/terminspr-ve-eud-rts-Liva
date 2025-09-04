'use client';

import { useActionState } from "react";
import { FiSearch } from "react-icons/fi";
import searchAction from "@/actions/search-action";
import Loader from "@/components/loader";
import ActivityCard from "@/components/cards/activity-card";

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
                </label>
                <button type="submit" className="search__icon"><FiSearch /></button>
            </form>
            <p className="login__error search__error">{formState?.properties?.query?.errors}</p>

            {isPending ? <Loader />
                : (formState?.data?.length ? <ActivityCard data={formState?.data} /> : (
                    <p>Der blev ikke fundet nogle aktiviteter.
                        <br /> Prøv at søge efter noget andet.
                    </p>
                ))}
        </>
    );
}

export default SearchForm;