import { motion } from 'motion/react';
import { ArrowRight, Star, MapPin, Phone, Instagram, Calendar, Coffee, Utensils, Music } from 'lucide-react';
import { Link } from 'react-router-dom';
import { REVIEWS, GALLERY_IMAGES, EVENTS, MENU_ITEMS } from '../constants/menuData';

export default function Home() {
  const popularItems = MENU_ITEMS.slice(0, 3);

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1920"
            alt="Cafe Ambience"
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/20 backdrop-blur-md rounded-full text-sm font-medium border border-white/20">
              Welcome to The Bungalow Cafe
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
              Coffee, Comfort & <br />
              <span className="text-primary italic">Great Vibes</span> in Surat
            </h1>
            <p className="text-lg md:text-xl text-zinc-200 max-w-2xl mx-auto font-light">
              A cozy bungalow-style retreat in Adajan where every cup tells a story and every moment feels like home.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/menu"
              className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-all shadow-xl shadow-primary/30 flex items-center gap-2"
            >
              Explore Menu <ArrowRight size={20} />
            </Link>
            <Link
              to="/reserve"
              className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all"
            >
              Reserve Table
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Us */}
      <section className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-display font-bold text-primary">Our Story</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            The Bungalow Cafe is a cozy retreat located in Adajan, Surat, designed to give guests a warm and relaxing experience. Inspired by a bungalow-style setting, the cafe offers a calm atmosphere paired with high-quality coffee, tasty snacks, and delicious desserts.
          </p>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Our goal is simple: create a place where people can relax, enjoy good food, and spend quality time with friends and family. Whether you're here for a casual meetup, work session, or evening hangout, our cozy bungalow atmosphere makes every visit special.
          </p>
          <div className="grid grid-cols-3 gap-8 pt-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">4.6</div>
              <div className="text-xs text-zinc-500 uppercase tracking-wider">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">10k+</div>
              <div className="text-xs text-zinc-500 uppercase tracking-wider">Happy Guests</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-xs text-zinc-500 uppercase tracking-wider">Menu Items</div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=1000"
              alt="Cafe Interior"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-xl border border-zinc-100 dark:border-zinc-800 hidden lg:block">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Coffee size={24} />
              </div>
              <div>
                <div className="font-bold">Freshly Brewed</div>
                <div className="text-sm text-zinc-500">Every single day</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Popular Items */}
      <section className="bg-accent/30 dark:bg-zinc-900/50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-display font-bold">Popular Highlights</h2>
            <p className="text-zinc-500 dark:text-zinc-400">Handpicked favorites from our kitchen</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-sm border border-zinc-100 dark:border-zinc-800"
              >
                <div className="h-64 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <span className="text-primary font-bold">₹{item.price}</span>
                  </div>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm">{item.description}</p>
                  <Link to="/menu" className="text-primary font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                    View in Menu <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-display font-bold">Cafe Moments</h2>
          <p className="text-zinc-500 dark:text-zinc-400">Captured memories from our bungalow</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="aspect-square rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={img}
                alt={`Gallery ${i}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Events */}
      <section className="bg-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-display font-bold">Upcoming Events</h2>
              <p className="text-primary-foreground/70">Join us for special moments and workshops</p>
            </div>
            <Link to="/reserve" className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-zinc-100 transition-colors">
              Book Your Spot
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EVENTS.map((event) => (
              <div key={event.id} className="bg-white/10 backdrop-blur-md rounded-3xl p-8 flex flex-col md:flex-row gap-8 border border-white/20">
                <div className="w-full md:w-48 h-48 rounded-2xl overflow-hidden shrink-0">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-white/70">
                    <Calendar size={16} /> {event.date}
                  </div>
                  <h3 className="text-2xl font-bold">{event.title}</h3>
                  <p className="text-white/70 leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-display font-bold">What Guests Say</h2>
          <div className="flex items-center justify-center gap-2 text-primary">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            <span className="font-bold ml-2">4.6 / 5</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-sm border border-zinc-100 dark:border-zinc-800 space-y-6">
              <div className="flex gap-1 text-yellow-400">
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="italic text-zinc-600 dark:text-zinc-400 leading-relaxed">"{review.comment}"</p>
              <div className="flex items-center justify-between pt-4 border-t dark:border-zinc-800">
                <span className="font-bold">{review.name}</span>
                <span className="text-xs text-zinc-400">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Instagram Feed Preview */}
      <section className="max-w-7xl mx-auto px-4 text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl font-display font-bold">Follow Our Journey</h2>
          <a
            href="https://instagram.com/thebungalowcafe_surat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-bold text-xl hover:underline"
          >
            <Instagram size={24} /> @thebungalowcafe_surat
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {GALLERY_IMAGES.map((img, i) => (
            <div key={i} className="aspect-square overflow-hidden">
              <img src={img} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer" referrerPolicy="no-referrer" />
            </div>
          ))}
        </div>
      </section>

      {/* Location & Contact */}
      <section className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-display font-bold">Find Us</h2>
            <p className="text-zinc-500 dark:text-zinc-400">Visit us in Adajan for the perfect hangout spot.</p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <div className="font-bold text-lg">Our Address</div>
                <p className="text-zinc-500">Adajan, Surat, Gujarat, India</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <div className="font-bold text-lg">Call Us</div>
                <p className="text-zinc-500">+91 98765 43210</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-primary text-white text-center py-4 rounded-2xl font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
            >
              Get Directions
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-emerald-500 text-white text-center py-4 rounded-2xl font-bold shadow-lg shadow-emerald-500/20 hover:bg-emerald-600 transition-all"
            >
              WhatsApp
            </a>
          </div>
        </div>
        
        <div className="h-[400px] rounded-3xl overflow-hidden shadow-xl border border-zinc-100 dark:border-zinc-800">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.986874311816!2d72.793833!3d21.192667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e6974127412%3A0x0!2zMjHCsDExJzMzLjYiTiA3MsKwNDcnMzcuOCJF!5e0!3m2!1sen!2sin!4v1625567890123!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
