import "./globals.css";
import HeaderNav from "@/components/header/HeaderNav";

export const metadata = {
  title: "Tech Book Club",
  description: "One stop center to get tech books!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <div className="max-w-7xl mx-auto">
          <HeaderNav />
          {children}
        </div>
      </body>
    </html>
  );
}
