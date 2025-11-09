import { MapPin, Phone, ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-red-100/70">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-red-600 flex items-center justify-center text-white text-xl font-black shadow-sm">
            日
          </div>
          <div className="leading-tight">
            <p className="font-extrabold text-xl tracking-wide">AKAI SAKURA</p>
            <p className="text-xs text-neutral-500">和食レストラン • Washoku</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#menu" className="hover:text-red-600 transition-colors">Menu</a>
          <a href="#about" className="hover:text-red-600 transition-colors">About</a>
          <a href="#reserve" className="hover:text-red-600 transition-colors">Reserve</a>
        </nav>
        <div className="flex items-center gap-3 text-sm">
          <span className="hidden sm:flex items-center gap-1 text-neutral-600"><MapPin size={16}/> Shibuya, Tokyo</span>
          <a href="tel:+810000000000" className="hidden sm:flex items-center gap-1 hover:text-red-600 transition-colors"><Phone size={16}/> Call</a>
          <button className="relative inline-flex items-center gap-2 bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-700 transition-colors shadow">
            <ShoppingCart size={18}/>
            <span className="font-medium">Order</span>
          </button>
        </div>
      </div>
    </header>
  );
}
