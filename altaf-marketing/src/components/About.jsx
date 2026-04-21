import React from 'react'

const features = [
  { icon: '🎯', title: 'استراتژی هدفمند', desc: 'طراحی کمپین‌های بازاریابی بر اساس تحلیل بازار افغانستان' },
  { icon: '📱', title: 'شبکه‌های اجتماعی', desc: 'مدیریت حرفه‌ای صفحات اجتماعی و تولید محتوای جذاب' },
  { icon: '📈', title: 'افزایش فروش', desc: 'راهکارهای عملی برای چند برابر کردن درآمد کسب‌وکار شما' },
  { icon: '🤝', title: 'همکاری بلندمدت', desc: 'شراکت پایدار با برندهای معتبر افغانستان' },
]

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-950/15 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 text-green-400 text-sm font-medium">
              <span className="w-2 h-2 bg-green-400 rounded-full" />
              درباره ما
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              ما <span className="text-gradient">رشد</span> شما را
              <br />
              تضمین می‌کنیم
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              شرکت بازاریابی الطاف با سال‌ها تجربه در بازار افغانستان، خدمات جامع بازاریابی دیجیتال و سنتی را برای کسب‌وکارهای بزرگ و کوچک ارائه می‌دهد.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              ما با بهترین برندهای افغانستان همکاری می‌کنیم و محصولات آن‌ها را به دست مشتریان واقعی می‌رسانیم.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-green-500/30 hover:scale-105 transition-all duration-300"
            >
              با ما همکاری کنید ←
            </a>
          </div>

          {/* Right: Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="glass-card rounded-2xl p-5 border border-white/10 hover:border-green-500/30 transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-3xl mb-3">{f.icon}</div>
                <h4 className="text-white font-bold text-base mb-2 group-hover:text-green-400 transition-colors">{f.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
