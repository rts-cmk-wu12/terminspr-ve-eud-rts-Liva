import LoginForm from '@/components/forms/login-form';
import '@/scss/pages/login.scss';
import '@/scss/components/splash-image.scss';

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