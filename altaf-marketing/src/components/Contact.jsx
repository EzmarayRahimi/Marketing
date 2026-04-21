import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-950/20 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4 text-green-400 text-sm font-medium">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            تماس با ما
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            یک قدم جلوتر از <span className="text-gradient">رقبا</span> باشید
          </h2>
          <p className="text-gray-400 text-base">
            📞 همین حالا با ما تماس بگیرید
          </p>
        </div>

        <div className="glass-card rounded-3xl p-8 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { icon: '📞', label: 'تلفن', value: '+93 795317400' },
              { icon: '📧', label: 'ایمیل', value: 'Eltaf@gmail.com' },
              { icon: '📍', label: 'آدرس', value: 'هرات ، افغانستان' },
            ].map((item) => (
              <div key={item.label} className="glass rounded-2xl p-5 text-center hover:border-green-500/30 border border-white/5 transition-all duration-300 hover:scale-105">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="text-gray-500 text-xs mb-1">{item.label}</p>
                <p className="text-white font-semibold text-sm">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Form */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="نام شما"
              className="glass rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm border border-white/10 focus:border-green-500/50 focus:outline-none transition-all duration-200 bg-transparent"
            />
            <input
              type="tel"
              placeholder="شماره تماس"
              className="glass rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm border border-white/10 focus:border-green-500/50 focus:outline-none transition-all duration-200 bg-transparent"
            />
            <textarea
              placeholder="پیام شما..."
              rows={4}
              className="glass rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm border border-white/10 focus:border-green-500/50 focus:outline-none transition-all duration-200 bg-transparent md:col-span-2 resize-none"
            />
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white py-4 rounded-xl font-bold text-base shadow-lg shadow-green-500/30 transition-all duration-300 hover:scale-105 hover:shadow-green-500/50"
              >
                ارسال پیام 📨
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
