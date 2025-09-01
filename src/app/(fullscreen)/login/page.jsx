import LoginForm from '@/components/login-form';
import '@/scss/components/splash-image.scss';
import '@/scss/pages/login.scss';

export const metadata = {
    title: "Log ind"
};

function LoginPage() {
    return (
        <>
            <div className="wrapper wrapper--overlay">
                <LoginForm />
            </div>
        </>
    );
}

export default LoginPage;