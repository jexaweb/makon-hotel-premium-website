import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

const images = [
  { src: '/hotel-bg.jpg', title: 'Mehmonxona tashqi ko\'rinishi', category: 'Exterior' },
  { src: '/hotel-qb.jpg', title: 'Lobby va qabulxona', category: 'Interior' },
  { src: '/hotel-ser1.jpg', title: 'Deluxe xona', category: 'Rooms' },
  { src: '/hotel-ser.jpg', title: 'Restoran', category: 'Dining' },
  { src: '/hotel-ser2.jpg', title: 'VIP Suite', category: 'Rooms' },
  { src: '/hotel-ser4.jpg', title: 'Basseyn', category: 'Amenities' },
  { src: '/hotel-ta.jpg', title: 'Spa markaz', category: 'Amenities' },
  { src: '/hotel-ser3.jpg', title: 'Standart xona', category: 'Rooms' },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(images.map((img) => img.category))];
  const filteredImages = filter === 'All' ? images : images.filter((img) => img.category === filter);

  return (
    <section id="gallery" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#080808] to-black" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-4">
            Galereya
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Bizning
            <span className="block bg-gradient-to-r from-[#C9A84C] to-[#E8D5A3] bg-clip-text text-transparent">
              Galereya
            </span>
          </h2>
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto" />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                filter === cat
                  ? 'bg-gradient-to-r from-[#C9A84C] to-[#E8D5A3] text-black font-semibold'
                  : 'bg-white/5 border border-white/10 text-white/60 hover:border-[#C9A84C]/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, i) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`relative group cursor-pointer overflow-hidden rounded-xl ${
                  i === 0 || i === 5 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                onClick={() => setSelectedImage(i)}
              >
                <div className={`relative ${i === 0 || i === 5 ? 'h-72 md:h-full' : 'h-48 md:h-56'}`}>
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="text-white font-semibold text-sm">{image.title}</div>
                    <div className="text-[#C9A84C] text-xs mt-1">{image.category}</div>
                  </div>

                  {/* Zoom Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                    </svg>
                  </div>

                  {/* Border */}
                  <div className="absolute inset-0 border border-white/10 rounded-xl group-hover:border-[#C9A84C]/30 transition-colors duration-500" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation */}
            <button
              className="absolute left-4 md:left-8 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((prev) => (prev! > 0 ? prev! - 1 : filteredImages.length - 1));
              }}
            >
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <button
              className="absolute right-4 md:right-8 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((prev) => (prev! < filteredImages.length - 1 ? prev! + 1 : 0));
              }}
            >
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            {/* Image */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].title}
                className="w-full h-full object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white font-serif text-xl">{filteredImages[selectedImage].title}</h3>
                <p className="text-[#C9A84C] text-sm mt-1">{filteredImages[selectedImage].category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
