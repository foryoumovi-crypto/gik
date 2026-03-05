import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 text-white">
              <Logo size={48} />
              <span className="text-2xl font-display font-bold">The Bungalow Cafe</span>
            </Link>
            <p className="text-sm leading-relaxed">
              A cozy bungalow cafe serving coffee, comfort, and great vibes in the heart of Surat.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://instagram.com/thebungalowcafe_surat" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/menu" className="hover:text-white transition-colors">Menu</Link></li>
              <li><Link to="/reserve" className="hover:text-white transition-colors">Reservations</Link></li>
              <li><Link to="/menu" className="hover:text-white transition-colors">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 text-primary" />
                <span>Adajan, Surat, Gujarat, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-primary" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-primary" />
                <span>hello@bungalowcafe.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Opening Hours</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span className="text-white">10:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sat - Sun</span>
                <span className="text-white">09:00 AM - 12:00 AM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-16 pt-8 text-center text-xs">
          <p>© {new Date().getFullYear()} The Bungalow Cafe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
