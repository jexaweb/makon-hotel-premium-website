import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    roomType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const text = `🏨 *Yangi bron qilish*\n\n👤 Ism: ${formData.name}\n📞 Telefon: ${formData.phone}\n📅 Sana: ${formData.date}\n🚪 Xona: ${formData.roomType}\n💬 Xabar: ${formData.message}`;
    
    window.open(`https://t.me/share/url?url=&text=${encodeURIComponent(text)}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-[#050505]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#C9A84C]/3 rounded-full blur-[120px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-4">
            Aloqa
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Bron
            <span className="block bg-gradient-to-r from-[#C9A84C] to-[#E8D5A3] bg-clip-text text-transparent">
              Qilish
            </span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Xonangizni hozirdan bron qiling — sizning qulayligingiz bizning ustuvor vazifamiz
          </p>
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="p-6 bg-white/[0.03] border border-white/[0.06] rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C9A84C]/20 to-[#C9A84C]/5 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white/50 text-sm">Telefon</div>
                  <a href="tel:+998732490009" className="text-white font-semibold hover:text-[#C9A84C] transition-colors">
                    +998 73 249 00 09
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white/[0.03] border border-white/[0.06] rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C9A84C]/20 to-[#C9A84C]/5 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white/50 text-sm">Manzil</div>
                  <div className="text-white font-semibold">Ferganskaya 82, Farg'ona</div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white/[0.03] border border-white/[0.06] rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C9A84C]/20 to-[#C9A84C]/5 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white/50 text-sm">Ish vaqti</div>
                  <div className="text-white font-semibold">24/7 qabulxona</div>
                </div>
              </div>
            </div>

            {/* Telegram Button */}
            <motion.a
              href="https://t.me/makonhotel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-4 bg-[#0088cc]/20 border border-[#0088cc]/30 rounded-xl hover:bg-[#0088cc]/30 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#0088cc">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.504-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              <span className="text-[#0088cc] font-medium">Telegram orqali bog'lanish</span>
            </motion.a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="relative p-8 bg-white/[0.03] border border-white/[0.06] rounded-2xl">
              {/* Success Message */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute inset-0 z-10 flex items-center justify-center bg-black/90 backdrop-blur-xl rounded-2xl"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#E8D5A3] flex items-center justify-center">
                      <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <h3 className="text-white text-xl font-serif mb-2">Xabar yuborildi!</h3>
                    <p className="text-white/50 text-sm">Tez orada siz bilan bog'lanamiz</p>
                  </div>
                </motion.div>
              )}

              <div className="grid md:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-white/60 text-sm">Ismingiz</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Ismingizni kiriting"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:border-[#C9A84C]/50 focus:ring-1 focus:ring-[#C9A84C]/20 transition-all duration-300 outline-none"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-white/60 text-sm">Telefon raqam</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+998 XX XXX XX XX"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:border-[#C9A84C]/50 focus:ring-1 focus:ring-[#C9A84C]/20 transition-all duration-300 outline-none"
                  />
                </div>

                {/* Date */}
                <div className="space-y-2">
                  <label className="text-white/60 text-sm">Sana</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-[#C9A84C]/50 focus:ring-1 focus:ring-[#C9A84C]/20 transition-all duration-300 outline-none [color-scheme:dark]"
                  />
                </div>

                {/* Room Type */}
                <div className="space-y-2">
                  <label className="text-white/60 text-sm">Xona turi</label>
                  <select
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-[#C9A84C]/50 focus:ring-1 focus:ring-[#C9A84C]/20 transition-all duration-300 outline-none appearance-none"
                  >
                    <option value="" className="bg-black">Tanlang</option>
                    <option value="Standart" className="bg-black">Standart xona — 450 000 UZS</option>
                    <option value="Deluxe" className="bg-black">Deluxe xona — 750 000 UZS</option>
                    <option value="VIP Suite" className="bg-black">VIP Suite — 1 200 000 UZS</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2 md:col-span-2">
                  <label className="text-white/60 text-sm">Xabar</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Qo'shimcha ma'lumot yoki tilaklaringiz..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:border-[#C9A84C]/50 focus:ring-1 focus:ring-[#C9A84C]/20 transition-all duration-300 outline-none resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full mt-6 px-8 py-4 bg-gradient-to-r from-[#C9A84C] to-[#E8D5A3] text-black font-semibold rounded-xl hover:shadow-lg hover:shadow-[#C9A84C]/30 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                   yuborish
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
