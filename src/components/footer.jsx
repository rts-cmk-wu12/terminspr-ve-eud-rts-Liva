import { FiCalendar, FiHome, FiSearch } from "react-icons/fi";
import Link from "next/link";
import '@/scss/components/footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <nav>
                <ul className="footer__list">
                    <li><Link href='/' className="footer__list-item"><FiHome /></Link></li>
                    <li><Link href='/søg' className="footer__list-item"><FiSearch /></Link></li>
                    <li><Link href='/kalender' className="footer__list-item"><FiCalendar /></Link></li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;