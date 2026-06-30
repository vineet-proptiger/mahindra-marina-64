'use client'
import React from 'react'
import {
  Film, Castle, Flower, Waves, Dumbbell, Gamepad2, Coffee, Wind
} from 'lucide-react'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'


const CurvedCorners = ({ bg = '#fff', color = '#e5e7eb' }) => {
  const corners = [
    { top: '-1px', left: '-1px', borderRight: `1px solid ${color}`, borderBottom: `1px solid ${color}`, borderBottomRightRadius: '18px' },
    { top: '-1px', right: '-1px', borderLeft: `1px solid ${color}`, borderBottom: `1px solid ${color}`, borderBottomLeftRadius: '18px' },
    { bottom: '-1px', left: '-1px', borderRight: `1px solid ${color}`, borderTop: `1px solid ${color}`, borderTopRightRadius: '18px' },
    { bottom: '-1px', right: '-1px', borderLeft: `1px solid ${color}`, borderTop: `1px solid ${color}`, borderTopLeftRadius: '18px' },
  ]
  return corners.map((c, i) => (
    <span key={i} style={{ position: 'absolute', ...c, width: '22px', height: '22px', background: bg, display: 'block' }} />
  ))
}

const newAmenities = [
  { icon: Film,         title: 'MINI THEATRE',         desc: 'Enjoy private screenings of your favorite movies in our state-of-the-art mini theatre.' },
  { icon: Castle,       title: 'CLUBHOUSE',            desc: 'A grand clubhouse featuring diverse recreational facilities for the community.' },
  { icon: Flower,       title: 'MEDITATION POD',       desc: 'Discover inner peace and tranquility in our specially designed meditation pods.' },
  { icon: Waves,        title: 'SWIMMING POOL',        desc: 'A pristine swimming pool for a refreshing dip and aquatic relaxation.' },
  { icon: Dumbbell,     title: 'GYMNASIUM',            desc: 'A state-of-the-art fitness center equipped with modern workout machines.' },
  { icon: Gamepad2,     title: "KIDS' PLAY AREA",      desc: 'A safe and vibrant play zone designed specifically for the joy of children.' },
  { icon: Coffee,       title: 'CAFETERIA',            desc: 'Relax and enjoy a cup of coffee and snacks at our cozy community cafeteria.' },
  { icon: Wind,         title: 'SKATING RINK',         desc: 'A dedicated skating rink providing endless fun and activity for everyone.' },
]

const Amenities = () => {
  return (
    <section id="amenities" style={{
      padding: '72px 0',
      background: '#fff',
    }}>
      <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">

        {/* Section Header */}
        <div style={{ marginBottom: '40px', textAlign: 'center' }} data-aos="fade-up">
          <h2 style={{
            fontFamily: F_JOST, fontWeight: '700', fontSize: '18px',
            color: '#684C1B', letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            LIFESTYLE AMENITIES – Experience More Every Day
          </h2>
        </div>

        {/* Grid Container */}
        <div data-aos="fade-up" data-aos-delay="100" style={{
          position: 'relative',
          border: '1px solid #e5e7eb',
          margin: '0 auto',
        }}>
          <CurvedCorners color="#e5e7eb" bg="#fff" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#e5e7eb]">
            {newAmenities.map((item, idx) => (
              <div key={idx} className="bg-white flex flex-col items-center group" style={{
                padding: '48px 24px',
                textAlign: 'center',
              }}>
                {/* Icon */}
                <div className="w-[80px] h-[80px] rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-105 transition-transform duration-300" style={{ background: '#C9A96E' }}>
                  <item.icon size={36} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: F_JOST, fontSize: '15px', fontWeight: '700',
                  color: '#684C1B', letterSpacing: '0.05em', margin: '0 0 12px'
                }}>
                  {item.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontFamily: F_SANS, fontSize: '13px', color: '#6b7280',
                  lineHeight: 1.6, margin: 0,
                  textAlign: 'justify'
                }}>
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}

export default Amenities
