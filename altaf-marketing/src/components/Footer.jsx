import React from 'react'
import { companies } from '../data/companies'

export default function Footer() {
  return (
    <footer className="relative bg-black/60 border-t border-white/10 pt-16 pb-8">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
                <span className="text-white font-black text-lg">ا</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm">شرکت بازاریابی</p>
                <p className="text-gradient font-black text-lg">الطاف</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              خدمات بازاریابی در سراسر افغانستان. ما برند شما را می‌سازیم و فروش‌تان را چند برابر می‌کنیم.
            </p>
          </div>

          {/* Companies */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">شرکت‌های شریک</h4>
            <ul className="space-y-2">
              {companies.map((c) => (
                <li key={c.id}>
                  <span className="text-gray-500 text-sm hover:text-green-400 transition-colors cursor-pointer">
                    {c.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">لینک‌های سریع</h4>
            <ul className="space-y-2">
              {['خانه', 'شرکت‌ها', 'محصولات', 'درباره ما', 'تماس با ما'].map((item) => (
                <li key={item}>
                  <span className="text-gray-500 text-sm hover:text-green-400 transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-600 text-xs">
          <p>© ۱۴۰۴ شرکت بازاریابی الطاف — تمام حقوق محفوظ است</p>
          <p>ساخته شده با ❤️ برای افغانستان</p>
        </div>
      </div>
    </footer>
  )
}
