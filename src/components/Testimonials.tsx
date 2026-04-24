import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const testimonials = [
  {
    name: 'Sardor Karimov',
    rating: 5,
    text: 'Ajoyib mehmonxona! Xonalar juda toza va shinam. Xodimlar juda xushmuomala va professional. Albatta yana tashrif buyuraman.',
    date: '2 hafta oldin',
    avatar: 'SK',
  },
  {
    name: 'Dilnoza Azimova',
    rating: 5,
    text: 'Oilamiz bilan dam olish uchun eng zo\'r joy. Basseyn, restoran va xonalar — hammasi yuqori darajada. Tavsiya qilaman!',
    date: '1 oy oldin',
    avatar: 'DA',
  },
  {
    name: 'Jasur Rakhmatov',
    rating: 4,
    text: 'Ish safari uchun kelgan edim. Wi-Fi tez, xona qulay va nonushta juda mazali. Narxi ham munosib.',
    date: '3 hafta oldin',
    avatar: 'JR',
  },
  {
    name: 'Malika Yusupova',
    rating: 5,
    text: 'To\'yimiz uchun bu mehmonxonani tanlagan edik — juda to\'g\'ri qaror qabul qilgan ekanmiz. Hamma narsa mukammal edi!',
    date: '2 oy oldin',
    avatar: 'MY',
  },
  {
    name: 'Bobur Toshmatov',
    rating: 5,
    text: 'Farg\'onadagi eng yaxshi mehmonxona. VIP suite juda hashamatli va qulay. Spa xizmati ham ajoyib.',
    date: '1 hafta oldin',
    avatar: 'BT',
  },
  {
    name: 'Nodira Karimova',
    rating: 4,
    text: 'Xodimlarning xizmat ko\'rsatishi zo\'r. Har bir mayda narsaga e\'tibor berishadi. Qaytib kelaman!',
    date: '3 oy oldin',
    avatar: 'NK',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-[#C9A84C]' : 'text-white/20'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#C9A84C]/3 rounded-full blur-[200px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-4">
            Mijozlar fikrlari
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
            Sharhlar
          </h2>
          
          {/* Rating */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-1">
              {renderStars(4)}
            </div>
            <span className="text-2xl font-serif font-bold text-[#C9A84C]">4.4</span>
            <span className="text-white/40">/ 5</span>
          </div>
          
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto" />
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full p-6 bg-white/[0.03] border border-white/[0.06] rounded-2xl hover:bg-white/[0.06] hover:border-[#C9A84C]/20 transition-all duration-500">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-[#C9A84C]/20 group-hover:text-[#C9A84C]/40 transition-colors">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Text */}
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#E8D5A3] flex items-center justify-center">
                    <span className="text-black font-semibold text-sm">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">{testimonial.name}</div>
                    <div className="text-white/40 text-xs">{testimonial.date}</div>
                  </div>
                </div>

                {/* Google Badge */}
                <div className="absolute bottom-4 right-4 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  <span className="text-white/40 text-xs">Google</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
