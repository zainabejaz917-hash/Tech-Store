'use client';

export default function Header() {
  return (
    <header style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      overflow: 'hidden',
      background: '#050814',
      paddingTop: '72px',
    }}>
      {/* Background Image with Overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=1600&q=80)',
        backgroundSize: 'cover', backgroundPosition: 'center',
        opacity: 0.18,
      }} />

      {/* Gradient Overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(5,8,20,0.97) 0%, rgba(5,8,20,0.75) 50%, rgba(0,114,255,0.08) 100%)',
      }} />

      {/* Animated Grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(0,198,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,198,255,0.04) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
      }} />

      {/* Glow orb */}
      <div style={{
        position: 'absolute', top: '-80px', right: '15%',
        width: '560px', height: '560px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,114,255,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '0', left: '30%',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,198,255,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, padding: '0 80px', maxWidth: '1200px', width: '100%', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          
          {/* Left Text */}
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(0,198,255,0.08)', border: '1px solid rgba(0,198,255,0.25)',
              padding: '8px 18px', borderRadius: '100px', marginBottom: '32px',
            }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#00c6ff', animation: 'pulse 2s infinite', display: 'inline-block' }} />
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '11px', letterSpacing: '2px', color: '#00c6ff', textTransform: 'uppercase' }}>
                New Arrivals 2025
              </span>
            </div>

            <h1 style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: '88px', lineHeight: '0.9', letterSpacing: '2px',
              marginBottom: '28px', color: '#fff',
            }}>
              <span style={{ display: 'block' }}>THE FUTURE</span>
              <span style={{ display: 'block', color: '#00c6ff', textShadow: '0 0 60px rgba(0,198,255,0.35)' }}>OF TECH</span>
              <span style={{ display: 'block', color: 'rgba(255,255,255,0.35)', fontSize: '54px' }}>IS HERE NOW</span>
            </h1>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#7a8fa8', marginBottom: '40px', maxWidth: '440px' }}>
              Premium laptops, flagship phones, pro audio, and next-gen smart devices — handpicked for people who refuse to settle for less.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="/product" style={{
                background: 'linear-gradient(135deg, #00c6ff, #0072ff)',
                color: '#fff', textDecoration: 'none',
                fontFamily: "'Space Mono', monospace",
                fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: '700',
                padding: '16px 40px', borderRadius: '6px',
                display: 'inline-block', transition: 'transform 0.2s, box-shadow 0.2s',
              }}>Explore Products</a>
              <a href="/pricing" style={{
                background: 'transparent',
                color: '#fff', textDecoration: 'none',
                fontFamily: "'Space Mono', monospace",
                fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase',
                padding: '16px 40px', borderRadius: '6px',
                border: '1px solid rgba(255,255,255,0.15)',
                display: 'inline-block', transition: 'border-color 0.2s',
              }}>View Pricing</a>
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', gap: '48px', marginTop: '56px', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
              {[['500+','Products'],['98K','Customers'],['4.9★','Rating'],['24/7','Support']].map(([n,l]) => (
                <div key={l}>
                  <div style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif", fontSize: '36px', color: '#00c6ff', letterSpacing: '2px' }}>{n}</div>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '11px', color: '#5a6e82', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '2px' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Hero Image Stack */}
          <div style={{ position: 'relative', height: '520px' }}>
            <img
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=520&q=85"
              alt="MacBook Pro"
              style={{
                position: 'absolute', top: '0', left: '0',
                width: '360px', borderRadius: '16px',
                boxShadow: '0 32px 80px rgba(0,0,0,0.6)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            />
            <img
              src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=300&q=85"
              alt="iPhone"
              style={{
                position: 'absolute', bottom: '20px', right: '0',
                width: '200px', borderRadius: '16px',
                boxShadow: '0 24px 60px rgba(0,0,0,0.6)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            />
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&q=85"
              alt="Headphones"
              style={{
                position: 'absolute', top: '40px', right: '80px',
                width: '160px', borderRadius: '12px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&display=swap');
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.8)} }
      `}</style>
    </header>
  );
}