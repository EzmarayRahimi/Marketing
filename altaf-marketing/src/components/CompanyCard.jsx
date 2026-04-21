import React, { useState } from 'react'

export default function CompanyCard({ company, onClick }) {
  const [imgError, setImgError] = useState(false)

  return (
    <div
      onClick={() => onClick(company)}
      className="group relative glass-card rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-white/10 hover:border-white/25"
      style={{ '--accent': company.accent }}
    >
      {/* Gradient top bar */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${company.color}`} />

      {/* Glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
        style={{ boxShadow: `inset 0 0 60px ${company.accent}20` }}
      />

      <div className="p-6">
        {/* Logo */}
        <div className="relative mb-5">
          <div
            className={`w-20 h-20 rounded-2xl overflow-hidden mx-auto bg-gradient-to-br ${company.color} p-0.5 shadow-lg`}
            style={{ boxShadow: `0 8px 32px ${company.accent}40` }}
          >
            <div className="w-full h-full rounded-2xl overflow-hidden bg-gray-900">
              {!imgError ? (
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-full h-full object-cover"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className={`w-full h-full bg-gradient-to-br ${company.color} flex items-center justify-center`}>
                  <span className="text-white font-black text-2xl">{company.name[0]}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Name */}
        <h3 className="text-white font-bold text-center text-base mb-2 leading-snug">
          {company.name}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-xs text-center leading-relaxed mb-4">
          {company.description}
        </p>

        {/* Product count badge */}
        <div className="flex justify-center">
          <span
            className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${company.color} text-white font-semibold`}
          >
            {company.products.length} محصول
          </span>
        </div>

        {/* View button */}
        <div className="mt-4 text-center">
          <span className="text-xs text-gray-500 group-hover:text-green-400 transition-colors duration-300 flex items-center justify-center gap-1">
            مشاهده محصولات
            <span className="group-hover:-translate-x-1 transition-transform duration-300 inline-block">←</span>
          </span>
        </div>
      </div>
    </div>
  )
}
