import { motion } from 'motion/react';

interface MenuCardProps {
  key?: number | string;
  name: string;
  price: number;
  description: string;
  image: string;
  category?: string;
  id?: number;
}

export default function MenuCard({ name, price, description, image }: MenuCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-zinc-100 dark:border-zinc-800 group"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4 bg-white/90 dark:bg-zinc-800/90 backdrop-blur px-3 py-1 rounded-full text-sm font-bold text-primary">
          ₹{price}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{name}</h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
