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
        <body className="bg-[url('https://static.vecteezy.com/system/resources/previews/009/975/366/non_2x/black-wooden-texture-dark-background-blank-for-design-free-photo.jpg')] object-contain   bg-repeat-y">
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
