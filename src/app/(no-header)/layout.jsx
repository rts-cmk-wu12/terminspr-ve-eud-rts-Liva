import Footer from "@/components/footer";

export default function NoHeaderLayout({ children }) {
    return (
        <>
            <main className="fullscreen">
                {children}
            </main>
            <Footer />
        </>
    );
}