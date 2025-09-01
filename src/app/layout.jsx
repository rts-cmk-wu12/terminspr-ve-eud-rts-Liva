export const metadata = {
  title: {
    template: "%s | Landrup Dans",
    default: "Landrup Dans"
  },
  description: "Landrup Dans er en lille danseskole. Her kan du finde og tilmelde dig til forskellige aktiviteter, der afvikles på skolen.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body>
        {children}
      </body>
    </html>
  );
}