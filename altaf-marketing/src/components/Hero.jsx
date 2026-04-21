import React from 'react'

const stats = [
  { value: '۶+', label: 'شرکت شریک' },
  { value: '۵۰+', label: 'محصول فعال' },
  { value: '۱۰۰%', label: 'رضایت مشتری' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-emerald-400/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-600/10 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(34,197,94,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 text-green-400 text-sm font-medium">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          پلتفرم بازاریابی حرفه‌ای افغانستان
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
          🚀 کسب‌وکار خود را
          <br />
          <span className="text-gradient">متحول کنید!</span>
        </h1>

        {/* Sub text */}
        <div className="glass-card rounded-2xl p-6 md:p-8 mb-8 text-right max-w-3xl mx-auto">
          <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-4">
            آیا می‌خواهید فروش‌تان چند برابر شود؟ آیا به دنبال جذب مشتریان بیشتر هستید؟
          </p>
          <p className="text-green-400 font-bold text-lg md:text-xl mb-6">
            ✨ ما اینجاییم تا برند شما را بدرخشانیم!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            {[
              'استراتژی‌های حرفه‌ای بازاریابی',
              'مدیریت شبکه‌های اجتماعی',
              'طراحی کمپین‌های تبلیغاتی هدفمند',
              'افزایش فروش و جذب مشتری واقعی',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-gray-300 text-sm">
                <span className="text-green-400 text-base">✔️</span>
                {item}
              </div>
            ))}
          </div>
          <p className="text-white font-semibold text-base">
            💡 با ما، فقط تبلیغ نمی‌کنید… بلکه <span className="text-gradient font-black">رشد می‌کنید!</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="#contact"
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white px-8 py-4 rounded-2xl font-bold text-base shadow-2xl shadow-green-500/40 transition-all duration-300 hover:scale-105 hover:shadow-green-500/60 w-full sm:w-auto"
          >
            📞 همین حالا با ما تماس بگیرید
          </a>
          <a
            href="#companies"
            className="glass text-white px-8 py-4 rounded-2xl font-bold text-base transition-all duration-300 hover:scale-105 hover:bg-white/10 w-full sm:w-auto"
          >
            مشاهده شرکت‌ها ←
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6">
          {stats.map((s) => (
            <div key={s.label} className="glass-card px-6 py-4 rounded-2xl text-center min-w-[100px]">
              <p className="text-3xl font-black text-gradient">{s.value}</p>
              <p className="text-gray-400 text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-xs animate-bounce">
        <span>اسکرول کنید</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-green-500 to-transparent rounded-full" />
      </div>
    </section>
  )
}
