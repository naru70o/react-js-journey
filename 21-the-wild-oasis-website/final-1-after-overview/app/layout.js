import Header from "./components/Header";

export const metadata = {
  title: { template: "%s - The Wild Oasis", default: "The Wild Oasis" },
  description: "Beautiful cabin",
};

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${josefin.className} min-h-screen bg-cyan-950`}>
        <Header />
        <main className="bg-cyan-400">{children}</main>
        <footer>Copyright by The Wild Oasis</footer>
      </body>
    </html>
  );
}
