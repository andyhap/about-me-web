import 'bootstrap/dist/css/bootstrap.min.css';
import './style/page.css';
import './globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Lato } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"

const lato = Lato({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Andy Hikmal Portfolio",
  description: "Personal portfolio by Andy Hikmal",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
