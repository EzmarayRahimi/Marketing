import React, { useState } from 'react'

const PLACEHOLDER = '/Marketing/images/placeholder.jpg'

export default function ProductCard({ product, companyName, companyColor, isPlaceholder = false }) {
  const [imgError, setImgError] = useState(false)

  const src = isPlaceholder || imgError ? PLACEHOLDER : product.image

  return (
    <div className="group glass-card rounded-2xl overflow-hidden transition-all duration-400 hover:scale-105 hover:shadow-2xl border border-white/10 hover:border-white/20">
      {/* Image */}
      <div className="relative overflow-hidden aspect-square bg-gray-900">
        {!isPlaceholder && !imgError ? (
          <img
            src={product.image}
            alt="نوشیدنی"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 p-6 text-center">
            <div className="text-5xl mb-3">🥤</div>
            <p className="text-gray-400 text-xs font-medium">محصول به‌زودی اضافه می‌شود</p>
          </div>
        )}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badge */}
        {!isPlaceholder && !imgError && (
          <div className={`absolute top-2 right-2 bg-gradient-to-r ${companyColor} text-white text-xs px-2 py-1 rounded-lg font-semibold shadow-lg`}>
            اصل
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        {isPlaceholder || imgError ? (
          <>
            <p className="text-gray-300 font-semibold text-sm mb-1">محصول به‌زودی اضافه می‌شود</p>
            <p className="text-gray-500 text-xs">در حال تکمیل محصولات</p>
          </>
        ) : (
          <>
            <p className="text-white font-semibold text-sm mb-1">نوشیدنی</p>
            <p className="text-gray-400 text-xs mb-2">{companyName}</p>
            <div className="flex items-center justify-between">
              <span className="text-green-400 font-bold text-sm">۱۰٪ تخفیف</span>
              <button className={`text-xs bg-gradient-to-r ${companyColor} text-white px-3 py-1 rounded-lg hover:opacity-90 transition-opacity`}>
                سفارش
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
