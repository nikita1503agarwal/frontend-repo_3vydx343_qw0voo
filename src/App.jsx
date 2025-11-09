import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import Reservation from "./components/Reservation";

function Footer() {
  return (
    <footer className="py-10 border-t bg-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-600">© {new Date().getFullYear()} Akai Sakura. All rights reserved.</p>
        <p className="text-sm text-neutral-600">和食 · 心を込めて · Made with care</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Reservation />
      <Footer />
    </div>
  );
}
