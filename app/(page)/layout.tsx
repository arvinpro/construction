import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className="bg-white min-h-screen">
        <Navbar />
        {children}
        <Toaster  position="top-right" reverseOrder={false}/>
        <Footer />
      </body>
    </html>
  );
}
