import React, { useState } from 'react'
import { companies } from '../data/companies'
import ProductCard from './ProductCard'

export default function Products({ selectedCompany, onClearSelection }) {
  const [activeTab, setActiveTab] = useState(selectedCompany?.id || 'all')

  const displayCompanies = activeTab === 'all' ? companies : companies.filter(c => c.id === activeTab)

  React.useEffect(() => {
    if (selectedCompany) setActiveTab(selectedCompany.id)
  }, [selectedCompany])

  return (
    <section id="products" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4 text-green-400 text-sm font-medium">
            <span className="w-2 h-2 bg-green-400 rounded-full" />
            محصولات ما
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            تمام <span className="text-gradient">محصولات</span>
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            مجموعه‌ای از بهترین نوشیدنی‌های افغانستان
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => { setActiveTab('all'); onClearSelection && onClearSelection() }}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
              activeTab === 'all'
                ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/30'
                : 'glass text-gray-400 hover:text-white hover:bg-white/10'
            }`}
          >
            همه
          </button>
          {companies.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveTab(c.id)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === c.id
                  ? `bg-gradient-to-r ${c.color} text-white shadow-lg`
                  : 'glass text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Products grouped by company */}
        {displayCompanies.map((company) => (
          <div key={company.id} className="mb-16">
            {/* Company header */}
            <div className="flex items-center gap-4 mb-6">
              <div className={`h-0.5 flex-1 bg-gradient-to-r ${company.color} opacity-40`} />
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${company.color} flex items-center justify-center`}>
                  <span className="text-white font-black text-sm">{company.name[0]}</span>
                </div>
                <h3 className="text-white font-bold text-lg">{company.name}</h3>
                <span className="text-gray-500 text-sm">({company.products.length} محصول)</span>
              </div>
              <div className={`h-0.5 flex-1 bg-gradient-to-l ${company.color} opacity-40`} />
            </div>

            {/* Products grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {company.products.length > 0
                ? company.products.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      companyName={company.name}
                      companyColor={company.color}
                    />
                  ))
                : [1, 2, 3].map((i) => (
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
        ))}
      </div>
    </section>
  )
}
