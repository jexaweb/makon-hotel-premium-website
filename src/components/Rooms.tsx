import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const rooms = [
  {
    id: 1,
    name: 'Standart xona',
    price: '450 000',
    image: '/hotel-ser.jpg',
    size: '25 m²',
    guests: '2 kishi',
    features: ['Konditsioner', 'Televizor', 'Wi-Fi', 'Mini-bar', 'Xavfsizlik'],
  },
  {
    id: 2,
    name: 'Deluxe xona',
    price: '750 000',
    image: '/hotel-ser1.jpg',
    size: '40 m²',
    guests: '2-3 kishi',
    features: ['Konditsioner', 'Smart TV', 'Wi-Fi', 'Mini-bar', 'Vanna', 'Balkon'],
    popular: true,
  },
  {
    id: 3,
    name: 'VIP Suite',
    price: '1 200 000',
    image: '/hotel-ser2.jpg',
    size: '65 m²',
    guests: '2-4 kishi',
    features: ['Konditsioner', 'Smart TV', 'Wi-Fi', 'Mini-bar', 'Jacuzzi', 'Balkon', 'Xona xizmati'],
  },
];

export default function Rooms() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredRoom, setHoveredRoom] = useState<number | null>(null);

  return (
    <section id="rooms" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#080808] to-black" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A84C]/3 rounded-full blur-[150px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-4">
            Xonalar va narxlar
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Premium
            <span className="block bg-gradient-to-r from-[#C9A84C] to-[#E8D5A3] bg-clip-text text-transparent">
              Xonalar
            </span>
          </h2>
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto" />
        </motion.div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {rooms.map((room, i) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
              onMouseEnter={() => setHoveredRoom(room.id)}
              onMouseLeave={() => setHoveredRoom(null)}
              className="group relative"
            >
              {/* Popular Badge */}
              {room.popular && (
                <div className="absolute -top-3 left-6 z-20">
                  <span className="px-4 py-1.5 bg-gradient-to-r from-[#C9A84C] to-[#E8D5A3] text-black text-xs font-semibold rounded-full shadow-lg shadow-[#C9A84C]/30">
                    Mashhur
                  </span>
                </div>
              )}

              <div className={`relative bg-white/[0.03] border rounded-2xl overflow-hidden transition-all duration-500 ${
                room.popular 
                  ? 'border-[#C9A84C]/30 shadow-2xl shadow-[#C9A84C]/10' 
                  : 'border-white/[0.06] hover:border-[#C9A84C]/20'
              }`}>
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredRoom === room.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.7 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Price Tag */}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-2">
                    <div className="text-[#C9A84C] font-serif font-bold text-xl">
                      {room.price}
                    </div>
                    <div className="text-white/50 text-xs">UZS / kecha</div>
                  </div>

                  {/* Room Size */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-xs">
                      {room.size}
                    </span>
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-xs">
                      {room.guests}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-white mb-4">{room.name}</h3>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {room.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/60 text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Book Button */}
                  <motion.a
                    href="#contact"
                    className={`block w-full text-center py-3 rounded-xl font-medium transition-all duration-300 ${
                      room.popular
                        ? 'bg-gradient-to-r from-[#C9A84C] to-[#E8D5A3] text-black hover:shadow-lg hover:shadow-[#C9A84C]/30'
                        : 'bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-[#C9A84C]/30'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Bron qilish
                  </motion.a>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C9A84C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-white/40 text-sm mt-12"
        >
          * Narxlar o'zgarishi mumkin. Batafsil ma'lumot uchun biz bilan bog'laning.
        </motion.p>
      </div>
    </section>
  );
}
