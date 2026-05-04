'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: '#07090f', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '64px 80px 36px', color: '#5a6e82' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px', marginBottom: '56px' }}>
        {/* Brand */}
        <div>
          <div style={{ fontFamily: "'Bebas Neue','Impact',sans-serif", fontSize: '28px', letterSpacing: '4px', color: '#fff', marginBottom: '16px' }}>
            VOLT<span style={{ color: '#00c6ff' }}>EX</span>
          </div>
          <p style={{ fontSize: '14px', lineHeight: '1.8', maxWidth: '280px', color: '#4a5e72', marginBottom: '24px' }}>
            Premium electronics curated for people who demand the best from their technology.
          </p>
          <div style={{ display: 'flex', gap: '12px' }}>
            {['Twitter','Instagram','YouTube','LinkedIn'].map(s => (
              <div key={s} style={{
                width: '36px', height: '36px', borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '14px', cursor: 'pointer', transition: 'border-color 0.2s',
                color: '#8899aa',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,198,255,0.4)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
              >{s[0]}</div>
            ))}
          </div>
        </div>

        {/* Links */}
        {[
          { title: 'Shop', links: ['Laptops','Smartphones','Audio','Wearables','Gaming','Accessories'] },
          { title: 'Company', links: ['About Us','Careers','Press','Blog','Partners'] },
          { title: 'Support', links: ['Help Center','Shipping','Returns','Warranty','Contact'] },
        ].map(col => (
          <div key={col.title}>
            <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: '#fff', marginBottom: '20px' }}>{col.title}</div>
            {col.links.map(l => (
              <div key={l} style={{ marginBottom: '12px' }}>
                <Link href="/product" style={{ fontSize: '14px', color: '#4a5e72', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = '#00c6ff'}
                  onMouseLeave={e => e.target.style.color = '#4a5e72'}
                >{l}</Link>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '12px', color: '#2e3e50' }}>
          © 2025 VOLTEX ELECTRONICS. All rights reserved.
        </div>
        <div style={{ display: 'flex', gap: '24px' }}>
          {['Privacy Policy','Terms of Service','Cookie Policy'].map(l => (
            <Link key={l} href="/" style={{ fontFamily: "'Space Mono',monospace", fontSize: '11px', color: '#2e3e50', textDecoration: 'none', letterSpacing: '0.5px' }}>{l}</Link>
          ))}
        </div>
      </div>

      <style>{`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&display=swap');`}</style>
    </footer>
  );
}