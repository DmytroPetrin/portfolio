import type { Metadata } from "next";
import style from './page.module.css'
import {SelectProvider} from './components/selectProvider'



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
      <body className={style.body}>
        <SelectProvider>
           {children}
        </SelectProvider>
       </body>
    </html>
  );
}
