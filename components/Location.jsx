'use client'
import { useState } from 'react'
import { MapPin, GraduationCap, HeartPulse, ShoppingBag, TreePine, Car } from 'lucide-react'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'

const locationCategories = [
  {
    id: 'connectivity',
    label: 'Connectivity',
    icon: Car,
    items: [
      { name: 'Western Express Highway', dist: '2.5 km' },
      { name: 'Swami Vivekananda Road (SV Road)', dist: '0.8 km' },
      { name: 'Malad West Metro Station (Line 2A)', dist: '0.5 km' },
      { name: 'New Link Road', dist: '0.4 km' },
      { name: 'Malad Railway Station', dist: '1.4 km' },
    ]
  },
  {
    id: 'education',
    label: 'Education Hub',
    icon: GraduationCap,
    items: [
      { name: 'Ryan International School (Malad West)', dist: '1.5 km' },
      { name: 'DG Khetan International School', dist: '1.8 km' },
      { name: 'Orchids International School', dist: '1.3 km' },
      { name: 'Dr. S. Radhakrishnan International School', dist: '1.5 km' },
      { name: 'VIBGYOR Roots and Rise School', dist: '1.7 km' },
      { name: 'Billabong High International School', dist: '3.2 km' },
    ]
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    icon: HeartPulse,
    items: [
      { name: 'Lifeline Hospital', dist: '1.2 km' },
      { name: 'Sun Hospital', dist: '0.7 km' },
      { name: 'Zenith Multispeciality Hospital', dist: '1.3 km' },
    ]
  },
  {
    id: 'shopping',
    label: 'Malls',
    icon: ShoppingBag,
    items: [
      { name: 'Infiniti Mall', dist: '0.9 km' },
      { name: 'D Mart', dist: '0.8 Km' },
      { name: 'Inorbit Mall', dist: '2 km' },
    ]
  }
]

const Location = () => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <section id="location" style={{
      padding: '72px 0',
      background: '#EAE5DC', // Matched to the screenshot background
    }}>
      <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">

        {/* Section Header */}
        <div style={{ marginBottom: '40px', textAlign: 'center' }} data-aos="fade-up">
           <h2 style={{
             fontFamily: F_JOST, fontWeight: '700', fontSize: '18px',
             color: '#684C1B', letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0,
             display: 'flex', alignItems: 'center', justifyContent: 'center',
           }}>
             LOCATION ADVANTAGES
           </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">

          {/* LEFT — Accordion */}
          <div className="w-full lg:w-[45%]" data-aos="fade-right">
            <div style={{ border: '1px solid #D5C2A8', background: '#EAE5DC' }}>

              {/* Accordion List */}
              <div style={{ overflow: 'hidden' }}>
                {locationCategories.map((cat, idx) => {
                  const isActive = activeTab === idx;
                  return (
                    <div key={idx}>
                      {/* Accordion Header */}
                      <div 
                        onClick={() => setActiveTab(isActive ? null : idx)}
                        style={{
                          display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer',
                          background: isActive ? '#9b2c2c' : '#EAE5DC',
                          color: isActive ? '#fff' : '#684C1B',
                          fontFamily: F_JOST, fontWeight: '600', fontSize: '13.5px',
                          letterSpacing: '0.04em', textTransform: 'uppercase',
                          borderBottom: '1px solid #D5C2A8', padding: '12px 16px',
                          transition: 'all 0.3s'
                        }}
                      >
                        <cat.icon size={18} />
                        {cat.label}
                        <span style={{ marginLeft: 'auto', transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>▼</span>
                      </div>

                      {/* Accordion Content */}
                      {isActive && (
                        <div>
                          <div style={{
                            display: 'grid', gridTemplateColumns: '1.2fr 1fr',
                            background: 'rgba(155, 44, 44, 0.1)', color: '#9b2c2c',
                            fontFamily: F_JOST, fontWeight: '600', fontSize: '12px',
                            letterSpacing: '0.04em', textTransform: 'uppercase',
                            borderBottom: '1px solid #D5C2A8',
                          }}>
                            <div style={{ padding: '8px 16px', borderRight: '1px solid #D5C2A8' }}>LANDMARK</div>
                            <div style={{ padding: '8px 16px', textAlign: 'center' }}>TIME / DISTANCE</div>
                          </div>
                          {cat.items.map((item, i) => (
                            <div key={i} style={{
                              display: 'grid', gridTemplateColumns: '1.2fr 1fr',
                              background: i % 2 === 0 ? '#F4EFE6' : '#EAE5DC',
                              color: '#684C1B', fontFamily: F_SANS,
                              fontSize: '13px', fontWeight: '600',
                              borderBottom: '1px solid #D5C2A8',
                            }}>
                              <div style={{ padding: '10px 16px', borderRight: '1px solid #D5C2A8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <MapPin size={14} style={{ flexShrink: 0, color: '#9b2c2c' }} />
                                {item.name}
                              </div>
                              <div style={{ padding: '10px 16px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {item.dist}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

          {/* RIGHT — Map */}
          <div className="w-full lg:flex-1" data-aos="fade-left" style={{ minHeight: '420px' }}>
            <div style={{
              overflow: 'hidden',
              border: '1px solid #D5C2A8',
              height: '100%', minHeight: '420px',
              position: 'relative',
              background: '#EAE5DC'
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.8192457494706!2d72.83648807520812!3d19.18656298204095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7e49b615d8d%3A0x8bdd8de80e0ca230!2sMahindra%20Marina64!5e1!3m2!1sen!2sin!4v1782814747492!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '420px', display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
              <div style={{
                position: 'absolute', bottom: '16px', left: '16px', zIndex: 10,
                background: 'var(--color-gold)', opacity: 0.9, backdropFilter: 'blur(6px)',
                borderRadius: '8px', padding: '6px 14px',
                display: 'flex', alignItems: 'center', gap: '6px',
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span style={{
                  color: '#fff', fontSize: '11px', fontFamily: F_JOST,
                  fontWeight: '700', letterSpacing: '0.04em'
                }}>
                  Malad West, Mumbai
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Location
