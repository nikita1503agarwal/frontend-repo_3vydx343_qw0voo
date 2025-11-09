import { useMemo, useState } from "react";
import { Star } from "lucide-react";

const CATEGORIES = [
  { id: "sushi", label: "Sushi" },
  { id: "ramen", label: "Ramen" },
  { id: "donburi", label: "Donburi" },
  { id: "dessert", label: "Dessert" },
  { id: "drink", label: "Drinks" },
];

const ITEMS = [
  { id: 1, name: "Nigiri Mori", price: 180000, category: "sushi", desc: "Chef's selection nigiri", rating: 4.9, badge: "Chef's pick", img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop" },
  { id: 2, name: "Sake Maki", price: 85000, category: "sushi", desc: "Salmon roll", rating: 4.8, img: "https://images.unsplash.com/photo-1593030761757-71ca0c4c6c23?q=80&w=1200&auto=format&fit=crop" },
  { id: 3, name: "Tonkotsu Ramen", price: 110000, category: "ramen", desc: "12h pork broth", rating: 4.9, badge: "Best seller", img: "https://images.unsplash.com/photo-1604908554027-912becd9c5a7?q=80&w=1200&auto=format&fit=crop" },
  { id: 4, name: "Shoyu Ramen", price: 98000, category: "ramen", desc: "Tokyo style", rating: 4.7, img: "https://images.unsplash.com/photo-1617093727343-374698b1b08e?q=80&w=1200&auto=format&fit=crop" },
  { id: 5, name: "Gyudon", price: 95000, category: "donburi", desc: "Beef bowl", rating: 4.8, img: "https://images.unsplash.com/photo-1625944074423-60cc8eebe30d?q=80&w=1200&auto=format&fit=crop" },
  { id: 6, name: "Katsudon", price: 99000, category: "donburi", desc: "Pork cutlet bowl", rating: 4.7, img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1200&auto=format&fit=crop" },
  { id: 7, name: "Matcha Parfait", price: 65000, category: "dessert", desc: "Uji matcha", rating: 4.6, img: "https://images.unsplash.com/photo-1509460913899-35a0cf2c0192?q=80&w=1200&auto=format&fit=crop" },
  { id: 8, name: "Mochi Trio", price: 45000, category: "dessert", desc: "Seasonal flavors", rating: 4.5, img: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1200&auto=format&fit=crop" },
  { id: 9, name: "Genmaicha", price: 35000, category: "drink", desc: "Roasted rice tea", rating: 4.7, img: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0ea?q=80&w=1200&auto=format&fit=crop" },
  { id: 10, name: "Yuzu Soda", price: 38000, category: "drink", desc: "Citrus sparkle", rating: 4.6, img: "https://images.unsplash.com/photo-1577805947697-89e18249d767?q=80&w=1200&auto=format&fit=crop" },
];

function formatIDR(value) {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(value);
}

export default function Menu() {
  const [active, setActive] = useState("sushi");
  const filtered = useMemo(() => ITEMS.filter(i => i.category === active), [active]);

  return (
    <section id="menu" className="py-16 bg-gradient-to-b from-white to-red-50/40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-red-600 font-semibold tracking-widest text-xs uppercase">メニュー · Menu</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Signature Dishes</h2>
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-4 py-2 rounded-full border text-sm whitespace-nowrap transition-all ${active === cat.id ? 'bg-red-600 text-white border-red-600 shadow' : 'bg-white hover:bg-red-50 border-red-200 text-red-700'}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(item => (
            <article key={item.id} className="group bg-white rounded-xl overflow-hidden border border-red-100/70 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                {item.badge && (
                  <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
                    {item.badge}
                  </span>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-bold text-lg leading-tight">{item.name}</h3>
                    <p className="text-sm text-neutral-600">{item.desc}</p>
                  </div>
                  <div className="flex items-center gap-1 text-amber-500 text-sm">
                    <Star size={16} fill="currentColor" />
                    <span className="font-semibold">{item.rating}</span>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <p className="font-extrabold text-red-700">{formatIDR(item.price)}</p>
                  <button className="px-3 py-2 text-sm rounded-md bg-red-600 text-white hover:bg-red-700 transition-colors">Add</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
