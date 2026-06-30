'use client'
import React from 'react'
import Link from 'next/link'


const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'

const Footer = () => (
  <footer style={{ background: 'var(--color-dark)', color: '#fff' }}>

    <div style={{ maxWidth: '860px', margin: '0 auto', padding: '56px 24px 32px', textAlign: 'center' }}>
      <h2 style={{ fontSize: '24px', fontWeight: '800', fontFamily: F_JOST, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }} data-aos="fade-in">
        Mahindra Marina 64
      </h2>
      <p style={{ fontSize: '13px', color: 'var(--color-gold)', fontFamily: F_JOST, fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '12px' }}>
        2/3 BHK Luxury Apartments — off Malad West
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
        <span style={{ width: '36px', height: '2.5px', background: 'linear-gradient(90deg, var(--color-gold), var(--color-gold-light))', borderRadius: '2px' }} />
      </div>
      <p style={{ fontSize: '15px', color: '#bbb', fontFamily: F_SANS, lineHeight: 1.8, marginBottom: '24px', textAlign: 'justify' }}
        data-aos="fade-in" data-aos-delay="100">
        Mahindra Marina 64 is a premier luxury residential development off Malad West, offering premium 2/3 BHK apartments. Thoughtfully curated amenities, iconic views, advanced security, and smart home features — Mahindra Marina 64 is designed for those who demand the extraordinary.
      </p>
      
      {/* RERA Block */}
      <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.05)', padding: '10px 24px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)' }}>
        <span style={{ fontFamily: F_SANS, fontSize: '14px', color: '#aaa' }}>RERA No : </span>
        <strong style={{ fontFamily: F_JOST, fontSize: '15px', color: '#fff', letterSpacing: '0.04em', wordBreak: 'break-word' }}>PR1181012500087</strong>
      </div>
    </div>

    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 py-4 px-6 border-t border-[#222] text-center sm:text-left max-w-[1200px] mx-auto">
      <p style={{ fontSize: '13px', color: '#888', fontFamily: F_SANS }}>
        &copy; 2026 Mahindra Marina 64. All rights reserved.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
        <Link href="/privacy-policy" style={{ fontSize: '13px', color: 'var(--color-gold)', fontFamily: F_SANS }}>
          Privacy Policy
        </Link>
      </div>
    </div>

    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '12px 24px 20px', textAlign: 'center' }}>
      <p style={{ fontSize: '10.5px', color: '#999', fontFamily: F_SANS, lineHeight: 1.7, textAlign: 'justify' }}>
        <strong style={{ color: '#bbb' }}>Disclaimer:</strong> This is not the official website of the developer. The information depicted herein, including master plans, floor plans, furniture layout, fittings, illustrations, specifications, designs, dimensions, rendered views, colours, amenities and facilities etc., are subject to change without notification as may be required by the relevant authorities or the Developer&apos;s architect. This advertisement is an invitation to offer and shall not be construed as an offer or contract. * Prices subject to change without notice. All taxes extra as applicable.
      </p>
    </div>
  </footer>
)

export default Footer
