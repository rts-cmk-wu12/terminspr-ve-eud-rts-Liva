'use client';

import { usePathname } from "next/navigation";
import Link from "next/link";

function NavLink({ children, defaultClass, path }) {
    const pathname = usePathname();

    return (
        <Link
            href={path}
            className={`${defaultClass} ${pathname === path ? 'active' : ''}`}
        >
            {children}
        </Link>
    );
}

export default NavLink;