export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <p className="text-red-600 font-semibold tracking-widest text-xs uppercase">物語 · Our Story</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Crafted with Kaiseki Principles</h2>
          <p className="mt-4 text-neutral-700">
            We honor seasonality, simplicity, and balance. Our ingredients are sourced from trusted markets in Tsukiji and local farms, prepared with meticulous technique and respect for tradition.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-4">
            <li className="p-4 rounded-lg border bg-white">• Seasonal omakase</li>
            <li className="p-4 rounded-lg border bg-white">• Artisanal soy & miso</li>
            <li className="p-4 rounded-lg border bg-white">• Hand-pulled noodles</li>
            <li className="p-4 rounded-lg border bg-white">• Tea ceremony pairings</li>
          </ul>
        </div>
        <div className="order-1 md:order-2 relative">
          <img src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxJbnRlcmlvcnxlbnwwfDB8fHwxNzYyNjgzNTQxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Interior" className="rounded-xl shadow-lg border" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-100 rounded-full blur-2xl opacity-70"/>
        </div>
      </div>
    </section>
  );
}
