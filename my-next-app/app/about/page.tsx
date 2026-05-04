'use client';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const team = [
  { img:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80', name:'Aiden Malik', role:'CEO & Founder', bio:'Former hardware engineer at Samsung. Built Voltex from a garage startup to a global brand.' },
  { img:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80', name:'Sara Khoury', role:'Head of Product', bio:'15 years curating consumer electronics. Every product on our shelves has her personal sign-off.' },
  { img:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80', name:'Leo Park', role:'Lead Tech Support', bio:'Our customers\' biggest advocate. Leads the expert team ensuring every buyer is thrilled.' },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div style={{ background: '#050814', minHeight: '100vh', paddingTop: '72px', fontFamily: 'sans-serif' }}>

        {/* Hero */}
        <div style={{ position: 'relative', height: '480px', overflow: 'hidden' }}>
          <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1400&q=80" alt="About" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.28 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(5,8,20,0.97) 40%, rgba(5,8,20,0.5) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 80px', maxWidth: '720px' }}>
            <p style={{ fontFamily: "'Space Mono',monospace", fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#00c6ff', marginBottom: '14px' }}>// Our Story</p>
            <h1 style={{ fontFamily: "'Bebas Neue','Impact',sans-serif", fontSize: '80px', letterSpacing: '2px', color: '#fff', lineHeight: '0.95', margin: '0 0 24px' }}>
              BUILT FOR<br/><span style={{ color: '#00c6ff' }}>TECH LOVERS</span>
            </h1>
            <p style={{ fontSize: '16px', color: '#5a6e82', lineHeight: '1.8', maxWidth: '520px' }}>
              Founded in 2018 by a team of engineers frustrated with overpriced, low-quality electronics. We believed everyone deserved access to premium technology — so we built Voltex.
            </p>
          </div>
        </div>

        {/* Mission */}
        <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', padding: '96px 80px', alignItems: 'center' }}>
          <div>
            <p style={{ fontFamily: "'Space Mono',monospace", fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#00c6ff', marginBottom: '12px' }}>// Our Mission</p>
            <h2 style={{ fontFamily: "'Bebas Neue','Impact',sans-serif", fontSize: '60px', letterSpacing: '2px', color: '#fff', lineHeight: 1, marginBottom: '28px' }}>TECH FOR<br/>EVERYONE</h2>
            <p style={{ fontSize: '15px', color: '#5a6e82', lineHeight: '1.9', marginBottom: '20px' }}>
              We believe the gap between cutting-edge technology and everyday affordability should not exist. Every person deserves a device that performs beautifully, lasts long, and comes with genuine support when they need it.
            </p>
            <p style={{ fontSize: '15px', color: '#5a6e82', lineHeight: '1.9', marginBottom: '36px' }}>
              From day one, our mission has been simple: source the best electronics on the planet, test them rigorously, and deliver them with complete honesty and transparency.
            </p>
            <div style={{ display: 'flex', gap: '40px' }}>
              {[['2018','Founded'],['500+','Products'],['98K','Customers'],['4.9★','Rating']].map(([n,l]) => (
                <div key={l}>
                  <div style={{ fontFamily: "'Bebas Neue','Impact',sans-serif", fontSize: '36px', color: '#00c6ff', letterSpacing: '2px' }}>{n}</div>
                  <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '10px', color: '#3a5068', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '2px' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', height: '420px' }}>
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=700&q=80" alt="Mission" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 50%, rgba(5,8,20,0.6) 100%)' }} />
          </div>
        </section>

        {/* Values */}
        <section style={{ padding: '0 80px 96px' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ fontFamily: "'Space Mono',monospace", fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#ff6b35', marginBottom: '12px' }}>// What We Stand For</p>
            <h2 style={{ fontFamily: "'Bebas Neue','Impact',sans-serif", fontSize: '60px', letterSpacing: '2px', color: '#fff', lineHeight: 1 }}>OUR VALUES</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '20px' }}>
            {[
              { icon:'🔬', title:'Rigorously Tested', desc:'Every product passes a 30-point quality check — no exceptions. If it\'s on our shelves, we trust it completely.', color:'#00c6ff' },
              { icon:'🛡️', title:'Total Honesty', desc:'We\'ll tell you when a product isn\'t right for you. Our team gives real advice, not sales pitches.', color:'#00d68f' },
              { icon:'🌍', title:'Sustainable Tech', desc:'We partner with brands committed to reducing e-waste and building products designed to last.', color:'#ff6b35' },
              { icon:'❤️', title:'Community First', desc:'From Discord communities to annual meetups, we invest in the people who make Voltex what it is.', color:'#ff4a85' },
            ].map(v => (
              <div key={v.title} style={{
                background: '#0c1220', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.07)', padding: '36px 28px',
                transition: 'transform 0.3s, border-color 0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = `${v.color}44`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; }}
              >
                <div style={{ fontSize: '40px', marginBottom: '20px' }}>{v.icon}</div>
                <div style={{ fontFamily: "'Bebas Neue','Impact',sans-serif", fontSize: '24px', letterSpacing: '1px', color: v.color, marginBottom: '12px' }}>{v.title}</div>
                <div style={{ fontSize: '14px', color: '#3a5068', lineHeight: '1.7' }}>{v.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section style={{ padding: '0 80px 96px' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ fontFamily: "'Space Mono',monospace", fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#00c6ff', marginBottom: '12px' }}>// The Team</p>
            <h2 style={{ fontFamily: "'Bebas Neue','Impact',sans-serif", fontSize: '60px', letterSpacing: '2px', color: '#fff', lineHeight: 1 }}>MEET THE MINDS</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '28px' }}>
            {team.map(member => (
              <div key={member.name} style={{
                background: '#0c1220', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.07)', overflow: 'hidden',
                transition: 'transform 0.3s, box-shadow 0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,114,255,0.15)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ height: '280px', overflow: 'hidden' }}>
                  <img src={member.img} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                </div>
                <div style={{ padding: '28px' }}>
                  <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: '#00c6ff', marginBottom: '6px' }}>{member.role}</div>
                  <div style={{ fontSize: '20px', fontWeight: '600', color: '#e0e8f0', marginBottom: '10px' }}>{member.name}</div>
                  <div style={{ fontSize: '14px', color: '#3a5068', lineHeight: '1.7' }}>{member.bio}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ margin: '0 80px 96px', borderRadius: '24px', overflow: 'hidden', position: 'relative', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1400&q=80" alt="CTA" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.25 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(5,8,20,0.8)' }} />
          <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
            <h2 style={{ fontFamily: "'Bebas Neue','Impact',sans-serif", fontSize: '60px', color: '#fff', letterSpacing: '2px', lineHeight: 1, marginBottom: '16px' }}>
              READY TO UPGRADE?
            </h2>
            <p style={{ color: '#5a6e82', fontSize: '16px', marginBottom: '32px' }}>Browse 500+ premium devices with free shipping and 2-year warranty.</p>
            <a href="/product" style={{
              background: 'linear-gradient(135deg,#00c6ff,#0072ff)', color: '#fff', textDecoration: 'none',
              fontFamily: "'Space Mono',monospace", fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: '700',
              padding: '16px 44px', borderRadius: '8px', display: 'inline-block',
            }}>Shop Now</a>
          </div>
        </section>
      </div>
      <Footer />
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&display=swap');`}</style>
    </>
  );
}