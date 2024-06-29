import type { Metadata } from "next";
import style from './page.module.css'



export const metadata: Metadata = {
  title: "Porfolio Dmytro Petrin",
  description: "Porfolio Dmytro Petrin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={style.body}>{children}</body>
    </html>
  );
}
