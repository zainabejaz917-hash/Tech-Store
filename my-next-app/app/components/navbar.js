'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: 'rgba(5,8,20,0.85)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        height: '72px',
        display: 'flex', alignItems: 'center',
        padding: '0 80px',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <div style={{
            fontFamily: "'Bebas Neue','Impact',sans-serif",
            fontSize: '26px', letterSpacing: '4px', color: '#fff',
          }}>
            VOLT<span style={{ color: '#00c6ff' }}>EX</span>
          </div>
        </Link>

        {/* Nav Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>
          {[
            { label: 'Home', href: '/' },
            { label: 'Products', href: '/product' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'About', href: '/about' },
          ].map(link => (
            <Link key={link.href} href={link.href} style={{
              fontFamily: "'Space Mono',monospace",
              fontSize: '11px', letterSpacing: '1.5px', textTransform: 'uppercase',
              color: '#7a8fa8', textDecoration: 'none',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = '#00c6ff')}
              onMouseLeave={e => (e.currentTarget.style.color = '#7a8fa8')}
            >{link.label}</Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link href="/product" style={{
          background: 'linear-gradient(135deg,#00c6ff,#0072ff)',
          color: '#fff', textDecoration: 'none',
          fontFamily: "'Space Mono',monospace",
          fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: '700',
          padding: '10px 24px', borderRadius: '6px',
          display: 'inline-block', transition: 'opacity 0.2s',
        }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >Shop Now</Link>
      </nav>

      <style>{`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&display=swap');`}</style>
    </>
  );
}