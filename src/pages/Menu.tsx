import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../constants/menuData';
import MenuCard from '../components/MenuCard';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = MENU_ITEMS.filter(item => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold"
          >
            Our Menu
          </motion.h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Explore our curated selection of coffees, snacks, and desserts. Freshly prepared for your comfort.
          </p>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="sticky top-20 z-40 bg-secondary/95 dark:bg-zinc-950/95 backdrop-blur-md py-4 border-b dark:border-zinc-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">
            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto pb-2 w-full lg:w-auto no-scrollbar scroll-smooth">
              <button
                onClick={() => setActiveCategory("All")}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                  activeCategory === "All" 
                    ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105' 
                    : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-100 dark:border-zinc-800'
                }`}
              >
                All Items
              </button>
              {MENU_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                    activeCategory === cat 
                      ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105' 
                      : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-100 dark:border-zinc-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full lg:w-80 group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-primary transition-colors">
                <Search size={20} />
              </div>
              <input
                type="text"
                placeholder="Search for coffee, snacks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-3 bg-zinc-900 dark:bg-zinc-900 border-2 border-zinc-800 dark:border-zinc-800 rounded-2xl text-sm font-medium text-white focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-zinc-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-primary transition-colors p-1"
                >
                  <X size={18} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <AnimatePresence mode="popLayout">
          {filteredItems.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {filteredItems.map((item) => (
                <MenuCard 
                  key={item.id} 
                  name={item.name}
                  price={item.price}
                  description={item.description}
                  image={item.image}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24 space-y-4"
            >
              <div className="text-6xl">☕</div>
              <h3 className="text-xl font-bold">No items found</h3>
              <p className="text-zinc-500">Try searching for something else or change the category.</p>
              <button
                onClick={() => {setSearchQuery(""); setActiveCategory("All");}}
                className="text-primary font-bold hover:underline"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
