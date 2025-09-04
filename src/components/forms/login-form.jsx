'use client';

import { useActionState } from "react";
import loginAction from "@/actions/login-action";
import Loader from "@/components/loader";
import Link from "next/link";

function LoginForm() {
    const [formState, formAction, isPending] = useActionState(loginAction);

    return isPending ? <Loader />
        : (<form className="login" action={formAction}>
            <h1 className="login__heading">Log ind</h1>
            <div>
                <label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Brugernavn"
                        className="login__input" />
                    <p className="login__error">{formState?.properties?.username?.errors}</p>
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Adgangskode"
                        className="login__input" />
                    <p className="login__error">{formState?.properties?.password?.errors}</p>
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        name="checkbox"
                        className="login__input login__input--checkbox" />
                    <span>Husk mig</span>
                </label>
            </div>
            <p className="login__error">{formState?.errors}</p>
            <button type="submit" className="login__button">Log ind</button>
            <p className="login__text">Har du ikke en profil?</p>
            <Link href='/opret-bruger' className="login__link">Opret ny bruger</Link>
        </form>);
}

export default LoginForm;