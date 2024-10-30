import type { Metadata } from "next";
import "./styles/globals.scss";
import { inter } from './utils/font'



export const metadata: Metadata = {
  title: {
    template: "%s | Lendsqr Dashboard",
    default: "Lendsqr Dashboard",
  },
  description: "The Lendsqr Admin Dashboard built with Next.js.",
  metadataBase: new URL("https://your-username-lendsqr-fe-test.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
