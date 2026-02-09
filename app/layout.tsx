import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Test-Github-Copilot",
  description: "Welcome page for Test-Github-Copilot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
