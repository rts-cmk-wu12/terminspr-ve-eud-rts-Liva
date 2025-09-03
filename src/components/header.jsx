'use client';

import { usePathname } from "next/navigation";
import '@/scss/components/header.scss';

function Header() {
    const pathname = usePathname();
    const title = pathname === '/' ? 'aktiviteter' : pathname === '/soeg' ? 'søg' : pathname.slice(1);

    return (
        <header className="header">
            <h1 className="header__heading">{title}</h1>
        </header>
    );
}

export default Header;