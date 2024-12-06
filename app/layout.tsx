import { ThemeProvider } from "./context/ThemeProvider";
import "../public/static/assets/styles/scss/globals.scss";
import Navbar from "./components/layout/nav/Navbar";
import Footer from "./components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div style={{ marginTop: "4rem" }} className="page-container">
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
