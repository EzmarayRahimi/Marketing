import React from 'react'
import { companies } from '../data/companies'
import CompanyCard from './CompanyCard'

export default function Companies({ onSelectCompany }) {
  return (
    <section id="companies" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-950/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4 text-green-400 text-sm font-medium">
            <span className="w-2 h-2 bg-green-400 rounded-full" />
            شرکت‌های شریک ما
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            شرکت‌های <span className="text-gradient">معتبر</span>
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            با بهترین برندهای افغانستان همکاری می‌کنیم تا محصولات شما به دست مشتریان واقعی برسد
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company) => (
            <CompanyCard
              key={company.id}
              company={company}
              onClick={onSelectCompany}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
