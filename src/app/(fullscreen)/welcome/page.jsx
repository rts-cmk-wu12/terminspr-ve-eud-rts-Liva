import Link from 'next/link';
import '@/scss/pages/welcome.scss';
import '@/scss/components/splash-image.scss';

async function WelcomePage() {
    return (
        <div className="wrapper">
            <section className="logo">
                <h1 className="logo__heading">landrup<span className="logo__heading logo__heading--bottom">dans</span></h1>
            </section>
            {/* Knappen går til aktiviteter siden, onboarding gør det automatisk */}
            <Link href='/onboarding' className='welcome-btn'>Kom i gang</Link>
        </div>
    );
}

export default WelcomePage;