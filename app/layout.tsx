import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Physics Work & Energy Explorer",
  description:
    "Interactive explainer covering work, energy, power, and simple machines with calculators and real-world examples.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="max-width">
            <h1>Physics Work & Energy Explorer</h1>
            <p className="tagline">
              Understand the fundamentals of work, force, energy, power, and simple machines through concise explanations and interactive tools.
            </p>
          </div>
        </header>
        <main className="max-width">{children}</main>
        <footer className="site-footer">
          <div className="max-width">
            <small>Built for learning physics concepts step by step.</small>
          </div>
        </footer>
      </body>
    </html>
  );
}
