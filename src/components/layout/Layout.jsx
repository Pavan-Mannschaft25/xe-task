import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header logoSrc="/logo.svg" />
      <main className="flex-1">{children}</main>
      <Footer logoSrc="/logo-white.svg" />
    </div>
  );
}
