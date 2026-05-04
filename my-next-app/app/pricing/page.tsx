'use client';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const plans = [
  {
    name: 'Basic',
    price: '$0',
    sub: 'Free forever',
    color: '#3a5068',
    highlight: false,
    features: [
      'Browse full catalog',
      'Standard shipping (5-7 days)',
      'Email support',
      '30-day return window',
      '1-year manufacturer warranty',
      '—',
      '—',
    ],
  },
  {
    name: 'Pro',
    price: '$9.99',
    sub: 'per month',
    color: '#00c6ff',
    highlight: true,
    features: [
      'Everything in Basic',
      'Free express shipping',
      'Priority live chat support',
      '60-day return window',
      '2-year extended warranty',
      'Early access to new arrivals',
      '5% cashback on all orders',
    ],
  },
  {
    name: 'Elite',
    price: '$24.99',
    sub: 'per month',
    color: '#ff6b35',
    highlight: false,
    features: [
      'Everything in Pro',
      'Same-day delivery (select cities)',
      'Dedicated account manager',
      '90-day return window',
      '3-year premium warranty',
      'Exclusive member-only deals',
      '10% cashback + birthday bonus',
    ],
  },
];

const deals = [
  { img:'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80', name:'MacBook Pro M4', was:'$2,499', now:'$2,199', saving:'$300', tag:'Best Seller' },
  { img:'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&q=80', name:'Galaxy S25 Ultra', was:'$1,399', now:'$1,199', saving:'$200', tag:'New' },
  { img:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80', name:'Sony WH-1000XM6', was:'$399', now:'$349', saving:'$50', tag:'Sale' },
  { img:'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500&q=80', name:'PlayStation 5 Pro', was:'$799', now:'$699', saving:'$100', tag:'Hot' },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <div style={{ background: '#050814', minHeight: '100vh', paddingTop: '72px', fontFamily: 'sans-serif' }}>

        {/* Hero */}
        <div style={{ position: 'relative', height: '300px', overflow: 'hidden' }}>
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=80" alt="Pricing" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.2 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(5,8,20,0.6) 0%, rgba(5,8,20,0.98) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <p style={{ fontFamily: "'Space Mono',monospace", fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#00c6ff', marginBottom: '12px' }}>// Membership Plans</p>
            <h1 style={{ fontFamily: "'Bebas Neue','Impact',sans-serif", fontSize: '80px', letterSpacing: '2px', color: '#fff', lineHeight: 1, margin: '0 0 16px' }}>PRICING & PLANS</h1>
            <p style={{ color: '#5a6e82', fontSize: '16px', maxWidth: '440px', lineHeight: '1.7' }}>
              Choose a membership that fits your lifestyle and unlock exclusive benefits.
            </p>
          </div>
        </div>

        {/* Plans */}
        <section style={{ padding: '80px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px', maxWidth: '1100px', margin: '0 auto' }}>
            {plans.map(plan => (
              <div key={plan.name} style={{
                background: plan.highlight ? 'linear-gradient(160deg, #051830 0%, #071c38 100%)' : '#0c1220',
                borderRadius: '20px',
                border: plan.highlight ? `2px solid ${plan.color}` : '1px solid rgba(255,255,255,0.07)',
                padding: '40px 36px',
                position: 'relative',
                transform: plan.highlight ? 'scale(1.04)' : 'scale(1)',
                boxShadow: plan.highlight ? '0 24px 80px rgba(0,198,255,0.15)' : 'none',
              }}>
                {plan.highlight && (
                  <div style={{
                    position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)',
                    background: '#00c6ff', color: '#05090f',
                    fontFamily: "'Space Mono',monospace", fontSize: '10px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase',
                    padding: '6px 20px', borderRadius: '100px',
                  }}>Most Popular</div>
                )}
                <div style={{ fontFamily: "'Bebas Neue','Impact',sans-serif", fontSize: '32px', letterSpacing: '2px', color: plan.color, marginBottom: '4px' }}>{plan.name}</div>
                <div style={{ fontFamily: "'Bebas Neue','Impact',sans-serif", fontSize: '56px', color: '#fff', lineHeight: 1, marginBottom: '4px' }}>{plan.price}</div>
                <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '12px', color: '#3a5068', marginBottom: '32px' }}>{plan.sub}</div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '28px', marginBottom: '32px' }}>
                  {plan.features.map((f, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                      <span style={{ color: f === '—' ? '#2a3a4a' : plan.color, fontSize: '16px', fontWeight: '700', minWidth: '16px' }}>{f === '—' ? '—' : '✓'}</span>
                      <span style={{ fontSize: '14px', color: f === '—' ? '#2a3a4a' : '#8899aa', lineHeight: '1.5' }}>{f === '—' ? 'Not included' : f}</span>
                    </div>
                  ))}
                </div>

                <a href="/product" style={{
                  display: 'block', textAlign: 'center', textDecoration: 'none',
                  background: plan.highlight ? 'linear-gradient(135deg,#00c6ff,#0072ff)' : 'transparent',
                  color: plan.highlight ? '#fff' : plan.color,
                  border: plan.highlight ? 'none' : `1px solid ${plan.color}`,
                  fontFamily: "'Space Mono',monospace", fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: '700',
                  padding: '14px', borderRadius: '8px', cursor: 'pointer',
                  transition: 'opacity 0.2s', boxSizing: 'border-box' as const,
                }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  {plan.name === 'Basic' ? 'Get Started Free' : `Choose ${plan.name}`}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Current Deals */}
        <section style={{ padding: '0 80px 96px' }}>
          <div style={{ marginBottom: '48px', textAlign: 'center' }}>
            <p style={{ fontFamily: "'Space Mono',monospace", fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#ff6b35', marginBottom: '10px' }}>// Limited Time Offers</p>
            <h2 style={{ fontFamily: "'Bebas Neue','Impact',sans-serif", fontSize: '60px', letterSpacing: '2px', color: '#fff', lineHeight: 1 }}>TODAY'S BEST DEALS</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '20px' }}>
            {deals.map(d => (
              <div key={d.name} style={{
                background: '#0c1220', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.07)', overflow: 'hidden',
                transition: 'transform 0.3s, border-color 0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(255,107,53,0.3)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; }}
              >
                <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
                  <img src={d.img} alt={d.name} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }} />
                  <span style={{
                    position: 'absolute', top: '12px', left: '12px',
                    background: '#ff6b35', color: '#fff', fontFamily: "'Space Mono',monospace", fontSize: '9px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase',
                    padding: '5px 12px', borderRadius: '100px',
                  }}>Save {d.saving}</span>
                </div>
                <div style={{ padding: '20px' }}>
                  <div style={{ fontSize: '16px', fontWeight: '600', color: '#e0e8f0', marginBottom: '10px' }}>{d.name}</div>
                  <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '12px', color: '#2e3e50', textDecoration: 'line-through', marginBottom: '2px' }}>Was {d.was}</div>
                  <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '20px', color: '#00c6ff', fontWeight: '700', marginBottom: '14px' }}>{d.now}</div>
                  <a href="/product" style={{
                    display: 'block', textAlign: 'center',
                    background: 'rgba(0,198,255,0.1)', border: '1px solid rgba(0,198,255,0.25)', color: '#00c6ff',
                    fontFamily: "'Space Mono',monospace", fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: '700',
                    padding: '10px', borderRadius: '6px', textDecoration: 'none',
                  }}>Shop Now</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: '0 80px 96px', maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontFamily: "'Bebas Neue','Impact',sans-serif", fontSize: '56px', letterSpacing: '2px', color: '#fff', lineHeight: 1 }}>COMMON QUESTIONS</h2>
          </div>
          {[
            ['Can I cancel my membership anytime?', 'Yes — cancel with one click, no questions asked. You keep benefits until the end of your billing period.'],
            ['Is there a free trial for Pro?', 'Absolutely. Every new Pro member gets 14 days free. No credit card required to start.'],
            ['Do member discounts stack with sale prices?', 'Yes! Your cashback applies on top of any existing sale, including our clearance events.'],
            ['What payment methods are accepted?', 'We accept Visa, Mastercard, Amex, PayPal, Apple Pay, and Google Pay.'],
          ].map(([q, a]) => (
            <div key={q} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '24px 0' }}>
              <div style={{ fontSize: '16px', fontWeight: '600', color: '#e0e8f0', marginBottom: '10px' }}>{q}</div>
              <div style={{ fontSize: '14px', color: '#4a5e72', lineHeight: '1.7' }}>{a}</div>
            </div>
          ))}
        </section>
      </div>
      <Footer />
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&display=swap');`}</style>
    </>
  );
}