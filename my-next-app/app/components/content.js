'use client';

const categories = [
  {
    img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80',
    label: 'Laptops', tag: 'Computing', from: '$799',
    desc: 'Ultrabooks, gaming rigs, and workstations for every power user.',
  },
  {
    img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80',
    label: 'Smartphones', tag: 'Mobile', from: '$499',
    desc: 'Flagship cameras, OLED displays and 5G on the world\'s best handsets.',
  },
  {
    img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80',
    label: 'Audio', tag: 'Sound', from: '$149',
    desc: 'Studio-grade headphones, earbuds & speakers with ANC.',
  },
  {
    img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80',
    label: 'Smart Watches', tag: 'Wearables', from: '$299',
    desc: 'Track health, fitness and stay connected all day long.',
  },
];

const featured = [
  {
    img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80',
    brand: 'Apple', name: 'MacBook Pro M4', price: '$2,199', tag: 'Best Seller',
    tagColor: '#00c6ff',
  },
  {
    img: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&q=80',
    brand: 'Samsung', name: 'Galaxy S25 Ultra', price: '$1,199', tag: 'New',
    tagColor: '#ff6b35',
  },
  {
    img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
    brand: 'Sony', name: 'WH-1000XM6', price: '$349', tag: 'Top Rated',
    tagColor: '#00d68f',
  },
];

export default function Content() {
  return (
    <main style={{ background: '#050814', color: '#e0e8f0', fontFamily: 'sans-serif' }}>

      {/* ─── Marquee ─── */}
      <div style={{ background: 'linear-gradient(90deg,#0072ff,#00c6ff)', overflow: 'hidden', padding: '14px 0' }}>
        <div style={{ display: 'flex', animation: 'marquee 22s linear infinite', whiteSpace: 'nowrap', width: 'max-content' }}>
          {Array(2).fill(['FREE SHIPPING OVER $99','2-YEAR WARRANTY','30-DAY RETURNS','CERTIFIED AUTHENTIC','EXPERT SUPPORT 24/7']).flat().map((t, i) => (
            <span key={i} style={{ fontFamily: "'Space Mono',monospace", fontSize: '12px', letterSpacing: '3px', color: '#fff', fontWeight: '700', padding: '0 32px' }}>
              {t} <span style={{ opacity: 0.4, marginLeft: '16px' }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ─── Category Cards ─── */}
      <section style={{ padding: '96px 80px' }}>
        <div style={{ marginBottom: '56px' }}>
          <p style={{ fontFamily: "'Space Mono',monospace", fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#00c6ff', marginBottom: '10px' }}>// Shop by Category</p>
          <h2 style={{ fontFamily: "'Bebas Neue','Impact',sans-serif", fontSize: '56px', letterSpacing: '2px', color: '#fff', lineHeight: 1 }}>BROWSE THE COLLECTION</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '20px' }}>
          {categories.map(cat => (
            <a href="/product" key={cat.label} style={{ textDecoration: 'none', display: 'block', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)', background: '#0c1220', transition: 'transform 0.3s, box-shadow 0.3s', cursor: 'pointer' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 24px 60px rgba(0,114,255,0.2)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                <img src={cat.img} alt={cat.label} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,8,20,0.8) 0%, transparent 60%)' }} />
                <span style={{
                  position: 'absolute', top: '14px', left: '14px',
                  fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase',
                  background: 'rgba(0,198,255,0.15)', border: '1px solid rgba(0,198,255,0.3)', color: '#00c6ff',
                  padding: '5px 12px', borderRadius: '100px',
                }}>{cat.tag}</span>
              </div>
              <div style={{ padding: '20px' }}>
                <div style={{ fontFamily: "'Bebas Neue','Impact',sans-serif", fontSize: '24px', letterSpacing: '1px', color: '#fff', marginBottom: '6px' }}>{cat.label}</div>
                <div style={{ fontSize: '13px', color: '#5a6e82', lineHeight: '1.6', marginBottom: '14px' }}>{cat.desc}</div>
                <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '14px', color: '#00c6ff', fontWeight: '700' }}>From {cat.from}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ─── Featured Products ─── */}
      <section style={{ padding: '0 80px 96px' }}>
        <div style={{ marginBottom: '48px' }}>
          <p style={{ fontFamily: "'Space Mono',monospace", fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#ff6b35', marginBottom: '10px' }}>// Top Picks</p>
          <h2 style={{ fontFamily: "'Bebas Neue','Impact',sans-serif", fontSize: '56px', letterSpacing: '2px', color: '#fff', lineHeight: 1 }}>FEATURED PRODUCTS</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
          {featured.map(p => (
            <a href="/product" key={p.name} style={{ textDecoration: 'none', display: 'block', background: '#0c1220', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.07)', overflow: 'hidden', transition: 'transform 0.3s, border-color 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(0,198,255,0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; }}
            >
              <div style={{ position: 'relative', height: '260px', background: '#0a1018' }}>
                <img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }} />
                <span style={{
                  position: 'absolute', top: '16px', right: '16px',
                  fontFamily: "'Space Mono',monospace", fontSize: '10px', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: '700',
                  background: p.tagColor, color: '#05090f',
                  padding: '5px 14px', borderRadius: '100px',
                }}>{p.tag}</span>
              </div>
              <div style={{ padding: '24px' }}>
                <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: '#5a6e82', marginBottom: '6px' }}>{p.brand}</div>
                <div style={{ fontSize: '20px', fontWeight: '600', color: '#fff', marginBottom: '12px' }}>{p.name}</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '22px', color: '#00c6ff', fontWeight: '700' }}>{p.price}</span>
                  <button style={{
                    background: 'linear-gradient(135deg,#00c6ff,#0072ff)', color: '#fff', border: 'none',
                    fontFamily: "'Space Mono',monospace", fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase',
                    padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontWeight: '700',
                  }}>Add to Cart</button>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ─── Brand Banner ─── */}
      <section style={{
        margin: '0 80px 96px', borderRadius: '20px', overflow: 'hidden',
        position: 'relative', height: '360px', display: 'flex', alignItems: 'center',
      }}>
        <img src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=1400&q=80" alt="Tech" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(5,8,20,0.92) 40%, rgba(5,8,20,0.4) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, padding: '0 64px', maxWidth: '560px' }}>
          <p style={{ fontFamily: "'Space Mono',monospace", fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#00c6ff', marginBottom: '14px' }}>// Limited Time</p>
          <h2 style={{ fontFamily: "'Bebas Neue','Impact',sans-serif", fontSize: '60px', color: '#fff', lineHeight: 1, marginBottom: '18px', letterSpacing: '2px' }}>UP TO 30% OFF<br/><span style={{ color: '#00c6ff' }}>PREMIUM GEAR</span></h2>
          <p style={{ color: '#7a8fa8', fontSize: '15px', lineHeight: '1.7', marginBottom: '32px' }}>Massive savings on Apple, Samsung, Sony and more — for a limited time only.</p>
          <a href="/product" style={{
            background: '#fff', color: '#050814', textDecoration: 'none',
            fontFamily: "'Space Mono',monospace", fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: '700',
            padding: '14px 36px', borderRadius: '6px', display: 'inline-block',
          }}>Shop The Sale</a>
        </div>
      </section>

      {/* ─── Why Voltex ─── */}
      <section style={{ padding: '0 80px 96px' }}>
        <div style={{ marginBottom: '48px' }}>
          <p style={{ fontFamily: "'Space Mono',monospace", fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#00c6ff', marginBottom: '10px' }}>// Why Choose Us</p>
          <h2 style={{ fontFamily: "'Bebas Neue','Impact',sans-serif", fontSize: '56px', letterSpacing: '2px', color: '#fff', lineHeight: 1 }}>THE VOLTEX PROMISE</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '2px' }}>
          {[
            { icon: '🔬', title: 'Tested & Verified', desc: 'Every device passes a 30-point quality inspection before it ships.' },
            { icon: '🛡️', title: '2-Year Warranty', desc: 'Comprehensive coverage on every product we sell, no questions asked.' },
            { icon: '🚀', title: 'Same-Day Shipping', desc: 'Order before 2pm and your tech leaves the warehouse today.' },
            { icon: '💬', title: 'Expert Support', desc: 'Real engineers on live chat — 7 days a week, no bots.' },
          ].map(item => (
            <div key={item.title} style={{
              background: '#0c1220', border: '1px solid rgba(255,255,255,0.06)',
              padding: '36px 28px', transition: 'border-color 0.2s, background 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,198,255,0.25)'; e.currentTarget.style.background = '#0f1828'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = '#0c1220'; }}
            >
              <div style={{ fontSize: '36px', marginBottom: '18px' }}>{item.icon}</div>
              <div style={{ fontFamily: "'Bebas Neue','Impact',sans-serif", fontSize: '22px', letterSpacing: '1px', color: '#fff', marginBottom: '10px' }}>{item.title}</div>
              <div style={{ fontSize: '14px', color: '#5a6e82', lineHeight: '1.7' }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&display=swap');
        @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
      `}</style>
    </main>
  );
}