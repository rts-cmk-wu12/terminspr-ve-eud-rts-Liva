import { FiCalendar, FiHome, FiSearch } from "react-icons/fi";
import NavLink from "./nav-link";
import '@/scss/components/footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <nav>
                <ul className="footer__list">
                    <li><NavLink defaultClass='footer__list-item' path='/'><FiHome /></NavLink></li>
                    <li><NavLink defaultClass='footer__list-item' path='/soeg'><FiSearch /></NavLink></li>
                    <li><NavLink defaultClass='footer__list-item' path='/kalender'><FiCalendar /></NavLink></li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;