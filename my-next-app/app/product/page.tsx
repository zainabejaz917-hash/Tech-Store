'use client';
import { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const products = [
  { id:1, img:'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80', brand:'Apple', name:'MacBook Pro 16"', spec:'M4 Pro · 18GB · 512GB SSD · Liquid Retina XDR', price:2199, oldPrice:2499, badge:'Best Seller', badgeColor:'#00c6ff', cat:'laptop' },
  { id:2, img:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80', brand:'Dell', name:'XPS 15 OLED', spec:'Intel Core i9 · 32GB RAM · 1TB SSD · 15.6" OLED', price:1799, oldPrice:null, badge:null, cat:'laptop' },
  { id:3, img:'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&q=80', brand:'Lenovo', name:'ThinkPad X1 Carbon', spec:'Intel i7 · 16GB · 512GB · Ultra-light 1.12kg', price:1299, oldPrice:1599, badge:'Sale', badgeColor:'#ff6b35', cat:'laptop' },
  { id:4, img:'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&q=80', brand:'Samsung', name:'Galaxy S25 Ultra', spec:'Snapdragon 8 Gen 4 · 12GB · 256GB · 200MP Camera', price:1199, oldPrice:null, badge:'New', badgeColor:'#ff6b35', cat:'phone' },
  { id:5, img:'https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=500&q=80', brand:'Apple', name:'iPhone 16 Pro', spec:'A18 Pro · 8GB · 256GB · ProRAW Camera System', price:1099, oldPrice:null, badge:'New', badgeColor:'#00c6ff', cat:'phone' },
  { id:6, img:'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80', brand:'Google', name:'Pixel 9 Pro', spec:'Tensor G4 · 16GB · 128GB · AI Photography', price:899, oldPrice:999, badge:'Sale', badgeColor:'#ff6b35', cat:'phone' },
  { id:7, img:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80', brand:'Sony', name:'WH-1000XM6', spec:'Industry-best ANC · 40hr battery · Spatial Audio', price:349, oldPrice:399, badge:'Top Rated', badgeColor:'#00d68f', cat:'audio' },
  { id:8, img:'https://images.unsplash.com/photo-1585298723682-7115561c51b7?w=500&q=80', brand:'Apple', name:'AirPods Pro 3', spec:'H3 chip · Adaptive ANC · Lossless · MagSafe', price:279, oldPrice:null, badge:null, cat:'audio' },
  { id:9, img:'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80', brand:'Bose', name:'QuietComfort Ultra', spec:'CustomTune Technology · 24hr battery · Dolby Atmos', price:379, oldPrice:429, badge:null, cat:'audio' },
  { id:10, img:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80', brand:'Apple', name:'Watch Ultra 3', spec:'49mm Titanium · GPS + Cellular · 60hr battery', price:799, oldPrice:null, badge:'New', badgeColor:'#ff6b35', cat:'wearable' },
  { id:11, img:'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=500&q=80', brand:'Samsung', name:'Galaxy Watch 7 Ultra', spec:'Health monitoring · 60hr battery · Titanium build', price:649, oldPrice:699, badge:null, cat:'wearable' },
  { id:12, img:'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500&q=80', brand:'Sony', name:'PlayStation 5 Pro', spec:'Enhanced GPU · 2TB SSD · 4K@120fps · PS VR2 ready', price:699, oldPrice:799, badge:'Hot', badgeColor:'#ff3b3b', cat:'gaming' },
];

const filters = ['All','Laptops','Phones','Audio','Wearables','Gaming'];
const catMap: Record<string, string> = { All:'all', Laptops:'laptop', Phones:'phone', Audio:'audio', Wearables:'wearable', Gaming:'gaming' };

export default function ProductPage() {
  const [active, setActive] = useState('All');
  const [cart, setCart] = useState<typeof products>([]);
  const [toast, setToast] = useState('');

  const filtered = active === 'All' ? products : products.filter(p => p.cat === catMap[active]);

  function addToCart(p: typeof products[0]) {
    setCart(c => [...c, p]);
    setToast(`✓ ${p.name} added to cart`);
    setTimeout(() => setToast(''), 2200);
  }

  return (
    <>
      <Navbar />
      <div style={{ background: '#050814', minHeight: '100vh', paddingTop: '72px', fontFamily: 'sans-serif' }}>
        <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
          <img src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=1400&q=80" alt="Products" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.25 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(5,8,20,0.98) 0%, rgba(5,8,20,0.6) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 80px' }}>
            <p style={{ fontFamily: "'Space Mono',monospace", fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase' as const, color: '#00c6ff', marginBottom: '12px' }}>// Our Catalog</p>
            <h1 style={{ fontFamily: "'Bebas Neue','Impact',sans-serif", fontSize: '72px', letterSpacing: '2px', color: '#fff', lineHeight: 1, margin: 0 }}>ALL PRODUCTS</h1>
          </div>
        </div>

        <div style={{ padding: '32px 80px 0', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', gap: '8px', flexWrap: 'wrap' as const }}>
          {filters.map(f => (
            <button key={f} onClick={() => setActive(f)} style={{
              fontFamily: "'Space Mono',monospace", fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase' as const,
              padding: '10px 22px', border: active === f ? '1px solid #00c6ff' : '1px solid rgba(255,255,255,0.1)',
              background: active === f ? 'rgba(0,198,255,0.1)' : 'transparent',
              color: active === f ? '#00c6ff' : '#5a6e82',
              cursor: 'pointer', borderRadius: '6px', marginBottom: '12px', transition: 'all 0.2s',
            }}>{f}</button>
          ))}
          <div style={{ marginLeft: 'auto', marginBottom: '12px', fontFamily: "'Space Mono',monospace", fontSize: '12px', color: '#3a5068', display: 'flex', alignItems: 'center' }}>
            {filtered.length} products · 🛒 {cart.length} in cart
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px', padding: '40px 80px 96px' }}>
          {filtered.map(p => (
            <div key={p.id} style={{
              background: '#0c1220', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.07)',
              overflow: 'hidden', transition: 'transform 0.3s, border-color 0.3s, box-shadow 0.3s',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-5px)'; (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,198,255,0.25)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)'; }}
            >
              <div style={{ position: 'relative', height: '240px', background: '#080d18', overflow: 'hidden' }}>
                <img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }} />
                {p.badge && (
                  <span style={{
                    position: 'absolute', top: '14px', right: '14px',
                    fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '1px', textTransform: 'uppercase' as const, fontWeight: '700',
                    background: p.badgeColor, color: '#05090f', padding: '5px 14px', borderRadius: '100px',
                  }}>{p.badge}</span>
                )}
              </div>
              <div style={{ padding: '24px' }}>
                <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase' as const, color: '#3a5068', marginBottom: '5px' }}>{p.brand}</div>
                <div style={{ fontSize: '19px', fontWeight: '600', color: '#e0e8f0', marginBottom: '8px' }}>{p.name}</div>
                <div style={{ fontSize: '13px', color: '#3a5068', lineHeight: '1.5', marginBottom: '20px' }}>{p.spec}</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    {p.oldPrice && <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '12px', color: '#2e3e50', textDecoration: 'line-through', marginBottom: '2px' }}>${p.oldPrice.toLocaleString()}</div>}
                    <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '22px', color: '#00c6ff', fontWeight: '700' }}>${p.price.toLocaleString()}</div>
                  </div>
                  <button onClick={() => addToCart(p)} style={{
                    background: 'linear-gradient(135deg,#00c6ff,#0072ff)', color: '#fff', border: 'none',
                    fontFamily: "'Space Mono',monospace", fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase' as const, fontWeight: '700',
                    padding: '11px 22px', borderRadius: '8px', cursor: 'pointer',
                  }}>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        position: 'fixed', bottom: '28px', right: '28px',
        background: 'linear-gradient(135deg,#00c6ff,#0072ff)', color: '#fff',
        fontFamily: "'Space Mono',monospace", fontSize: '13px', fontWeight: '700',
        padding: '14px 26px', borderRadius: '10px', zIndex: 9999,
        transition: 'all 0.4s cubic-bezier(0.34,1.56,0.64,1)',
        transform: toast ? 'translateY(0)' : 'translateY(100px)',
        opacity: toast ? 1 : 0, pointerEvents: 'none',
      }}>{toast}</div>

      <Footer />
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&display=swap');`}</style>
    </>
  );
}