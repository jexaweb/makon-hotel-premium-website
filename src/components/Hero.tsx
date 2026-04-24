import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src="/hotel-bg.jpg"
          alt="Makon Hotel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none ">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-[10%] w-2 h-2 bg-[#C9A84C]/30 rounded-full"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -3, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-1/3 right-[15%] w-1.5 h-1.5 bg-[#C9A84C]/20 rounded-full"
        />
        <motion.div
          animate={{
            y: [0, -25, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/3 left-[20%] w-1 h-1 bg-white/20 rounded-full"
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 backdrop-blur-sm">
            <span className="w-2 h-2 bg-[#C9A84C] rounded-full animate-pulse" />
            <span className="text-[#C9A84C] text-xs tracking-[0.2em] uppercase font-medium">
              Premium mehmonxona
            </span>
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-bold text-white mb-4 tracking-tight"
        >
          <span className="block">MAKON</span>
          <span className="block mt-2 bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] bg-clip-text text-transparent">
            HOTEL
          </span>
        </motion.h1>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mb-6"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed font-light mb-10"
        >
          Qulaylik, shinamlik va premium xizmatlar — barchasi bir joyda.
          <br className="hidden sm:block" />
          Farg'onaning eng hashamatli mehmonxonasida unutilmas dam oling.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <motion.a
            href="#contact"
            className="group relative px-8 py-4 bg-gradient-to-r from-[#C9A84C] to-[#E8D5A3] text-black font-semibold rounded-full overflow-hidden shadow-2xl shadow-[#C9A84C]/20"
            whileHover={{ scale: 1.05, boxShadow: '0 25px 50px rgba(201, 168, 76, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Bron qilish
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#E8D5A3] to-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>

          <motion.a
            href="#about"
            className="group px-8 py-4 border border-white/20 text-white rounded-full hover:border-[#C9A84C]/50 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-2">
              Batafsil
              <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </span>
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-5 left-0 right-0 px-4 "
        >
          <div className="max-w-6xl  mx-auto grid grid-cols-3 gap-8 ">
            {[
              { value: '5+', label: 'Yillik tajriba' },
              { value: '4.4', label: 'Google reyting' },
              { value: '1000+', label: 'Mamnun mijozlar' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 + i * 0.15 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-serif font-bold text-[#C9A84C]">
                  {stat.value}
                </div>
                <div className="text-white/50 text-xs md:text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden md:block "
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1 "
        >
          <motion.div className="w-1.5 h-3 bg-[#C9A84C] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
