'use client';

import { usePathname } from "next/navigation";
import { FiSearch } from "react-icons/fi";
import '@/scss/components/header.scss';

function Header({ search = false }) {
    const pathname = usePathname();
    const title = pathname === '/' ? 'aktiviteter' : pathname.slice(1);

    return (
        <header className="header">
            <h1 className="header__heading">{title}</h1>
            {search && (
                <form className="header__search">
                    <label>
                        <input type="search" name="query" className="header__search-input" />
                    </label>
                    <button type="submit" className="header__search-icon"><FiSearch /></button>
                </form>
            )}
        </header>
    );
}

export default Header;