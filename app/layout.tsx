import { ThemeProvider } from "./context/ThemeProvider";
import "../public/static/assets/styles/scss/globals.scss";
import Navbar from "./components/layout/nav/Navbar";
import Footer from "./components/layout/Footer";
import Background from "./components/layout/Background";
import { Suspense } from "react";

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
          <Suspense>
            {/* Add a fallback to a loading page afterwards */}
            <div style={{ marginTop: "4rem" }} className="page-container">
              {children}
              <Footer />
            </div>
          </Suspense>
        </ThemeProvider>
        <Background />
      </body>
    </html>
  );
}
