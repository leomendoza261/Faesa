import { montserrat } from "./ui/fonts";
import "./ui/global.css"
import { OrderProvider } from "./ui/OrdenesContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <OrderProvider>
        <body className={`${montserrat.className} antialiased`}>
          {children}
        </body>
      </OrderProvider>
    </html>
  );
}
