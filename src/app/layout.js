import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Navbar from "@/components/navbar/Navbar";

export const metadata = {
  title: "Mr.Bilee bob",
  description: "las mejores hamburgesas",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="es">
        <body className="bg-[url('https://res.cloudinary.com/divxrmzge/image/upload/v1708176856/ojmk9i0nuuov2f2ahtke.jpg')] bg-cover bg-center">
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
