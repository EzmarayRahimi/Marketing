import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Companies from './components/Companies'
import Products from './components/Products'
import CompanyDetail from './components/CompanyDetail'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [selectedCompany, setSelectedCompany] = useState(null)
  const [detailCompany, setDetailCompany] = useState(null)

  const handleSelectCompany = (company) => {
    setDetailCompany(company)
  }

  const handleCloseDetail = () => {
    setDetailCompany(null)
  }

  return (
    <div className="min-h-screen bg-hero font-vazir" dir="rtl">
      <Header />
      <Hero />
      <Companies onSelectCompany={handleSelectCompany} />
      <Products selectedCompany={selectedCompany} onClearSelection={() => setSelectedCompany(null)} />
      <About />
      <Contact />
      <Footer />

      {/* Company Detail Modal */}
      {detailCompany && (
        <CompanyDetail company={detailCompany} onClose={handleCloseDetail} />
      )}
    </div>
  )
}
