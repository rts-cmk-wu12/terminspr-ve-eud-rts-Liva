import SignUpForm from '@/components/forms/signup-form';
import '@/scss/pages/signup.scss';
import '@/scss/pages/login.scss';
import '@/scss/components/splash-image.scss';

export const metadata = {
    title: "Opret bruger"
};

function SignUpPage() {
    return (
        <>
            <div className="wrapper wrapper--overlay">
                <SignUpForm />
            </div>
        </>
    );
}

export default SignUpPage;