import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Navbar from "@/components/navbar/Navbar";

export const metadata = {
  title: "ALTA BURGER",
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
        <body className="bg-[url('https://res.cloudinary.com/divxrmzge/image/upload/v1711387729/Imagen_de_WhatsApp_2024-03-25_a_las_12.36.43_f12c5dfb_qag79s.jpg')] bg-cover  ">
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
