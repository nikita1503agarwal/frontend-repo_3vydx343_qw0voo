import { useState } from "react";

export default function Reservation() {
  const [form, setForm] = useState({ name: "", date: "", time: "", people: 2 });
  const [done, setDone] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function submit(e) {
    e.preventDefault();
    setDone(true);
  }

  return (
    <section id="reserve" className="py-16 bg-gradient-to-t from-white to-red-50/40">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-red-600 font-semibold tracking-widest text-xs uppercase">予約 · Reservation</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Book Your Table</h2>
          <p className="mt-4 text-neutral-700">Join us for lunch or dinner. We recommend reservations for weekends and omakase experiences.</p>
        </div>
        <div>
          {done ? (
            <div className="p-6 rounded-xl border bg-white shadow">
              <p className="font-semibold">Arigatou, {form.name || 'Guest'}!</p>
              <p className="text-sm text-neutral-700 mt-1">Your table for {form.people} on {form.date} at {form.time} is requested. We will confirm shortly.</p>
              <button onClick={() => setDone(false)} className="mt-4 px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700">Make another</button>
            </div>
          ) : (
            <form onSubmit={submit} className="grid gap-3 p-6 rounded-xl border bg-white shadow">
              <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500" required />
              <div className="grid grid-cols-2 gap-3">
                <input type="date" name="date" value={form.date} onChange={handleChange} className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500" required />
                <input type="time" name="time" value={form.time} onChange={handleChange} className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500" required />
              </div>
              <select name="people" value={form.people} onChange={handleChange} className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500">
                {[...Array(8)].map((_, i) => (
                  <option key={i+1} value={i+1}>{i+1} guests</option>
                ))}
              </select>
              <button className="mt-2 px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700">Reserve</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
