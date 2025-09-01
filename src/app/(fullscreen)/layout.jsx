export default function FullscreenLayout({ children }) {
    return (
        <>
            <main className="fullscreen">
                {children}
            </main>
        </>
    );
}