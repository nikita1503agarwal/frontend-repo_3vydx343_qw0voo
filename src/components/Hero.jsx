import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[70vh] md:min-h-[80vh]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1zVqD0n5LxBcS9c0/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="backdrop-blur-sm bg-white/40 rounded-xl p-6 md:p-10 border border-white/60 shadow-lg">
          <p className="text-red-600 font-semibold tracking-widest text-xs uppercase">ようこそ · Welcome</p>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-2 leading-tight">
            Authentic Japanese Cuisine
          </h1>
          <p className="mt-4 text-neutral-700 max-w-2xl">
            Experience the harmony of flavors, tradition, and craftsmanship. From delicate sushi to soulful ramen, curated by our Tokyo-trained chefs.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#menu" className="px-5 py-3 rounded-md bg-red-600 text-white font-medium hover:bg-red-700 transition-colors">Explore Menu</a>
            <a href="#reserve" className="px-5 py-3 rounded-md bg-white text-red-600 font-medium border border-red-200 hover:bg-red-50 transition-colors">Reserve Table</a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
    </section>
  );
}
