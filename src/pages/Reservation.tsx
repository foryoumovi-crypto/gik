import { motion } from 'motion/react';
import { Calendar, Clock, Users, MessageSquare, CheckCircle } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Reservation() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    notes: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white dark:bg-zinc-900 p-12 rounded-3xl shadow-xl text-center space-y-6 border border-zinc-100 dark:border-zinc-800"
        >
          <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle size={48} />
          </div>
          <h2 className="text-3xl font-display font-bold">Table Reserved!</h2>
          <p className="text-zinc-500 dark:text-zinc-400">
            Thank you, {formData.name}. We've received your reservation for {formData.guests} guests on {formData.date} at {formData.time}.
          </p>
          <p className="text-sm text-zinc-400">A confirmation has been sent to your email.</p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="w-full bg-primary text-white py-4 rounded-2xl font-bold hover:bg-primary/90 transition-all"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-24">
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold"
          >
            Reserve a Table
          </motion.h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Secure your spot at The Bungalow Cafe. Whether it's a date, a meeting, or a family gathering, we'll have your table ready.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 -mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl p-8 md:p-12 border border-zinc-100 dark:border-zinc-800"
        >
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-bold text-zinc-500 uppercase tracking-wider">Full Name</label>
              <input
                required
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="John Doe"
                className="w-full px-6 py-4 bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-zinc-500 uppercase tracking-wider">Phone Number</label>
              <input
                required
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                placeholder="+91 00000 00000"
                className="w-full px-6 py-4 bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-zinc-500 uppercase tracking-wider">Date</label>
              <div className="relative">
                <Calendar className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
                <input
                  required
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="w-full pl-14 pr-6 py-4 bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-zinc-500 uppercase tracking-wider">Time</label>
              <div className="relative">
                <Clock className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
                <input
                  required
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                  className="w-full pl-14 pr-6 py-4 bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-zinc-500 uppercase tracking-wider">Number of Guests</label>
              <div className="relative">
                <Users className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({...formData, guests: e.target.value})}
                  className="w-full pl-14 pr-6 py-4 bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="5">5 People</option>
                  <option value="6+">6+ People</option>
                </select>
              </div>
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-bold text-zinc-500 uppercase tracking-wider">Special Notes (Optional)</label>
              <div className="relative">
                <MessageSquare className="absolute left-6 top-6 text-zinc-400" size={20} />
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  placeholder="Any allergies or special requests?"
                  rows={4}
                  className="w-full pl-14 pr-6 py-6 bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                ></textarea>
              </div>
            </div>
            <div className="md:col-span-2 pt-4">
              <button
                type="submit"
                className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all active:scale-[0.98]"
              >
                Confirm Reservation
              </button>
              <p className="text-center text-xs text-zinc-400 mt-6">
                By clicking confirm, you agree to our reservation policy. We'll hold your table for 15 minutes past your reservation time.
              </p>
            </div>
          </form>
        </motion.div>
      </section>
    </div>
  );
}
