import "@/app/globals.css";
import Footer from "@/components/footer/Footer";
import HeaderMenu from "@/components/header/HeaderMenu";
import { AntdRegistry } from "@ant-design/nextjs-registry";

export const metadata = {
  title: "KhelBro",
  description: "KhelBro - Your Gaming Hub",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <HeaderMenu />
          {children}
          <Footer />
        </AntdRegistry>
      </body>
    </html>
  );
}
