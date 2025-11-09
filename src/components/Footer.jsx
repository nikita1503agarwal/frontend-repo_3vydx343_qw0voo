export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-12 border-t bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 items-start">
        <div>
          <div className="inline-flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-red-600 text-white flex items-center justify-center font-black">日</div>
            <p className="font-extrabold tracking-wide">AKAI SAKURA</p>
          </div>
          <p className="mt-2 text-sm text-neutral-600">和食 · 心を込めて — Crafted with harmony and respect for seasonality.</p>
        </div>
        <div className="text-sm">
          <p className="font-semibold text-neutral-900">Visit</p>
          <p className="text-neutral-600 mt-1">1-1 Dogenzaka, Shibuya, Tokyo</p>
          <p className="text-neutral-600">Open Daily 11:00–22:00</p>
        </div>
        <div className="text-sm">
          <p className="font-semibold text-neutral-900">Contact</p>
          <a href="tel:+810000000000" className="text-red-700 hover:underline mt-1 inline-block">+81 00 0000 0000</a>
          <p className="text-neutral-600">reservation@akaisakura.jp</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 mt-8 flex items-center justify-between text-xs text-neutral-600">
        <p>© {year} Akai Sakura. All rights reserved.</p>
        <p>和食 · 旬 · おもてなし</p>
      </div>
    </footer>
  );
}
