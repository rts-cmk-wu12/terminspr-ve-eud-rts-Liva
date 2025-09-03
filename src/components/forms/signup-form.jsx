'use client';

import { useActionState } from "react";
import signupAction from "@/actions/signup-action";
import Loader from "../loader";
import Link from "next/link";

function SignUpForm() {
    const [formState, formAction, isPending] = useActionState(signupAction);

    return isPending ? <Loader />
        : (<form className="signup" action={formAction}>
            <h1 className="login__heading">Opret bruger</h1>
            <div className="signup-wide">
                <label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Brugernavn"
                        className="signup__input" />
                    <p className="login__error">{formState?.properties?.username?.errors}</p>
                </label>
                <label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Adgangskode"
                        className="signup__input" />
                    <p className="login__error">{formState?.properties?.password?.errors}</p>
                </label>
            </div>
            <div className="signup-wide">
                <label>
                    <input
                        type="text"
                        name="firstname"
                        placeholder="Fornavn"
                        className="signup__input" />
                    <p className="login__error">{formState?.properties?.firstname?.errors}</p>
                </label>
                <label>
                    <input
                        type="text"
                        name="lastname"
                        placeholder="Efternavn"
                        className="signup__input" />
                    <p className="login__error">{formState?.properties?.lastname?.errors}</p>
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="number"
                        name="age"
                        placeholder="Alder"
                        className="signup__input" />
                    <p className="login__error">{formState?.properties?.age?.errors}</p>
                </label>
            </div>
            <p className="login__error">{formState?.errors}</p>
            <button type="submit" className="login__button">Opret</button>
            <p className="login__text">Har du allerede en profil?</p>
            <Link href='/login' className="login__link">Log ind</Link>
        </form>);
}

export default SignUpForm;