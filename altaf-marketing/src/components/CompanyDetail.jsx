import React from 'react'
import ProductCard from './ProductCard'

export default function CompanyDetail({ company, onClose }) {
  if (!company) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto py-8 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-6xl glass-card rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
        {/* Header */}
        <div className={`relative bg-gradient-to-r ${company.color} p-8`}>
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white/20 border-2 border-white/40">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
              </div>
              <div>
                <h2 className="text-white font-black text-2xl">{company.name}</h2>
                <p className="text-white/80 text-sm mt-1">{company.description}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-xl bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all duration-200 hover:scale-110 text-xl font-bold"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Products */}
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white font-bold text-xl">
              محصولات <span className="text-gradient">{company.name}</span>
            </h3>
            <span className="glass px-3 py-1 rounded-full text-gray-400 text-sm">
              {company.products.length} محصول
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {company.products.length > 0
              ? company.products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    companyName={company.name}
                    companyColor={company.color}
                  />
                ))
              : [1, 2, 3, 4].map((i) => (
                  <ProductCard
                    key={i}
                    product={{}}
                    companyName={company.name}
                    companyColor={company.color}
                    isPlaceholder
                  />
                ))}
          </div>
        </div>
      </div>
    </div>
  )
}
