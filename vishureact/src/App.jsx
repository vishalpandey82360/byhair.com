import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

const services = [
  { id: 'reservation', title: 'Reservation', icon: '📅', description: 'Book your salon time quickly and easily.', tone: 'reservation' },
  { id: 'styles', title: 'Hair Style Images', icon: '💇‍♀️', description: 'Browse fresh looks and trending haircuts.', tone: 'styles' },
  { id: 'music', title: 'Retro Songs', icon: '🎵', description: 'Relax with classic tunes in a stylish vibe.', tone: 'music' },
  { id: 'staff', title: 'Salon Staffs', icon: '👩‍💼', description: 'Meet the professionals behind your glow.', tone: 'staff' },
  { id: 'skincare', title: 'Skin Care', icon: '🌿', description: 'Refresh and restore your skin naturally.', tone: 'skincare' },
  { id: 'haircare', title: 'Hair Care', icon: '✨', description: 'Nourish your hair for shine and strength.', tone: 'haircare' },
]

const highlights = [
  { value: '1.2k+', label: 'Happy Clients' },
  { value: '20+', label: 'Expert Stylists' },
  { value: '4.9', label: 'Client Rating' },
]

const reservationOptions = ['Haircut', 'Hair Spa', 'Facial', 'Coloring', 'Bridal Makeover']

const styleGallery = [
  {
    name: 'Classic Bob',
    tag: 'Elegant',
    image: 'https://images.unsplash.com/photo-1521590832167-7b7d9ac061a1?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Soft Blowout',
    tag: 'Volume',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Layer Cut',
    tag: 'Modern',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Curls',
    tag: 'Texture',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Pixie Look',
    tag: 'Bold',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Long Waves',
    tag: 'Romantic',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80',
  },
]

const retroSongs = [
  { title: 'Aankhon Ki Gustakhiyan', artist: 'Mohammed Rafi', accent: '#f6b4a2' },
  { title: 'Pyar Hua Iqraar Hua', artist: 'Kishore Kumar', accent: '#a9d6e5' },
  { title: 'Lag Jaa Gale', artist: 'Lata Mangeshkar', accent: '#d4b5ff' },
  { title: 'Mera Joota Hai Japani', artist: 'Mukesh', accent: '#ffd6a5' },
  { title: 'Waqt Se Waqt Tak', artist: 'Mohammed Rafi', accent: '#b7e4c7' },
]

const salonStaff = [
  {
    name: 'Anita',
    role: 'Senior Stylist',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Riya',
    role: 'Skin Specialist',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Vikas',
    role: 'Hair Care Expert',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Neha',
    role: 'Bridal Artist',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
  },
]

const skincareItems = [
  {
    name: 'Glow Facial',
    price: '$45',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Hydration Mask',
    price: '$30',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Vitamin C Boost',
    price: '$38',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Deep Cleanse',
    price: '$35',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
  },
]

const haircareItems = [
  {
    name: 'Keratin Repair',
    price: '$55',
    image: 'https://images.unsplash.com/photo-1521590832167-7b7d9ac061a1?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Scalp Renewal',
    price: '$40',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Silk Smooth Serum',
    price: '$32',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Bond Repair Care',
    price: '$48',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
  },
]

function App() {
  const [activePage, setActivePage] = useState('home')

  const renderPage = () => {
    switch (activePage) {
      case 'reservation':
        return <ReservationPage />
      case 'styles':
        return <StylePage />
      case 'music':
        return <MusicPage />
      case 'staff':
        return <StaffPage />
      case 'skincare':
        return <SkincarePage />
      case 'haircare':
        return <HaircarePage />
      default:
        return <HomePage onSelectPage={setActivePage} />
    }
  }

  return (
    <div className="dashboard-shell">
      <aside className="dashboard-sidebar">
        <div className="sidebar-brand">VishuSalon</div>
        <nav className="sidebar-nav">
          <button className={activePage === 'home' ? 'nav-link active' : 'nav-link'} onClick={() => setActivePage('home')}>Home</button>
          <button className={activePage === 'reservation' ? 'nav-link active' : 'nav-link'} onClick={() => setActivePage('reservation')}>Reservation</button>
          <button className={activePage === 'styles' ? 'nav-link active' : 'nav-link'} onClick={() => setActivePage('styles')}>Hair Style</button>
          <button className={activePage === 'music' ? 'nav-link active' : 'nav-link'} onClick={() => setActivePage('music')}>Retro Songs</button>
          <button className={activePage === 'staff' ? 'nav-link active' : 'nav-link'} onClick={() => setActivePage('staff')}>Staffs</button>
          <button className={activePage === 'skincare' ? 'nav-link active' : 'nav-link'} onClick={() => setActivePage('skincare')}>Skin Care</button>
          <button className={activePage === 'haircare' ? 'nav-link active' : 'nav-link'} onClick={() => setActivePage('haircare')}>Hair Care</button>
        </nav>
      </aside>

      <main className="dashboard-main">
        <Navbar onSelectPage={setActivePage} activePage={activePage} />
        {renderPage()}
      </main>
    </div>
  )
}

function HomePage({ onSelectPage }) {
  return (
    <section className="dashboard-content">
      <header className="welcome-header">
        <div>
          <p className="eyebrow">Luxury beauty studio</p>
          <h1>Elevate your look with premium salon care</h1>
        </div>
        <button className="primary-btn" onClick={() => onSelectPage('reservation')}>Book Now</button>
      </header>

      <div className="hero-panel">
        <div className="hero-copy">
          <p>Tailored beauty, wellness, and hair expertise for every moment.</p>
          <div className="hero-actions">
            <button className="primary-btn" onClick={() => onSelectPage('reservation')}>Book Appointment</button>
            <button className="secondary-btn" onClick={() => onSelectPage('styles')}>View Gallery</button>
          </div>
        </div>

        <div className="metric-row">
          {highlights.map((item) => (
            <div key={item.label} className="metric-box">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="service-grid">
        {services.map((service) => (
          <article key={service.title} className={`service-card ${service.tone}`} onClick={() => onSelectPage(service.id)}>
            <div className="service-icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function ReservationPage() {
  return (
    <section className="dashboard-content page-content">
      <div className="page-header">
        <p className="eyebrow">Reservation</p>
        <h2>Book your salon appointment</h2>
      </div>

      <div className="visual-hero reservation-hero">
        <div className="hero-copy-box">
          <span className="mini-tag">Premium care</span>
          <h3>Reserve a fresh look for your next visit</h3>
          <p>Hair styling, beauty rituals, skin care, and bridal treatments tailored to your schedule.</p>
        </div>
        <div className="floating-card">
          <strong>Today</strong>
          <span>4:30 PM - Bridal glow</span>
        </div>
      </div>

      <div className="page-grid two-col">
        <div className="page-card big-card">
          <h3>Choose your service</h3>
          <div className="option-list">
            {reservationOptions.map((item) => (
              <button key={item} className="option-btn">{item}</button>
            ))}
          </div>
        </div>

        <div className="page-card form-card">
          <h3>Reservation Details</h3>
          <form className="booking-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email Address" />
            <input type="date" />
            <select>
              <option>Choose time</option>
              <option>09:00 AM</option>
              <option>11:00 AM</option>
              <option>01:00 PM</option>
              <option>04:00 PM</option>
            </select>
            <button type="button" className="primary-btn">Confirm Booking</button>
          </form>
        </div>
      </div>
    </section>
  )
}

function StylePage() {
  return (
    <section className="dashboard-content page-content">
      <div className="page-header">
        <p className="eyebrow">Hair Style Images</p>
        <h2>Trending salon looks</h2>
      </div>

      <div className="visual-hero gallery-hero">
        <div className="hero-copy-box">
          <span className="mini-tag">Trending looks</span>
          <h3>Explore hair inspiration for every mood</h3>
        </div>
      </div>

      <div className="gallery-grid">
        {styleGallery.map((style) => (
          <div key={style.name} className="gallery-card">
            <div className="gallery-image" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${style.image})` }} />
            <div className="gallery-text">
              <strong>{style.name}</strong>
              <span>{style.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function MusicPage() {
  return (
    <section className="dashboard-content page-content">
      <div className="page-header">
        <p className="eyebrow">Retro Songs</p>
        <h2>Playlist for a relaxing salon mood</h2>
      </div>

      <div className="visual-hero music-hero">
        <div className="record-visual">
          <div className="record-disc" />
        </div>
        <div className="hero-copy-box">
          <span className="mini-tag">Classic stereo</span>
          <h3>Retro beats for a warm, welcoming salon ambience</h3>
        </div>
      </div>

      <div className="list-panel">
        {retroSongs.map((song, index) => (
          <div key={song.title} className="list-row">
            <span className="song-index" style={{ color: song.accent }}>0{index + 1}</span>
            <div>
              <strong>{song.title}</strong>
              <small>{song.artist}</small>
            </div>
            <button className="secondary-btn">Play</button>
          </div>
        ))}
      </div>
    </section>
  )
}

function StaffPage() {
  return (
    <section className="dashboard-content page-content">
      <div className="page-header">
        <p className="eyebrow">Salon Staffs</p>
        <h2>Meet our expert team</h2>
      </div>

      <div className="visual-hero staff-hero">
        <div className="hero-copy-box">
          <span className="mini-tag">Our specialists</span>
          <h3>Friendly experts behind every transformation</h3>
        </div>
      </div>

      <div className="staff-grid">
        {salonStaff.map((member) => (
          <div key={member.name} className="staff-card">
            <div className="staff-avatar" style={{ backgroundImage: `url(${member.image})` }} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function SkincarePage() {
  return (
    <section className="dashboard-content page-content">
      <div className="page-header">
        <p className="eyebrow">Skin Care</p>
        <h2>Glow-enhancing care solutions</h2>
      </div>

      <div className="visual-hero skincare-hero">
        <div className="hero-copy-box">
          <span className="mini-tag">Natural glow</span>
          <h3>Calm, healthy, and radiant skin starts here</h3>
        </div>
        <div className="orb-visual" />
      </div>

      <div className="service-list">
        {skincareItems.map((item) => (
          <div key={item.name} className="info-card">
            <div className="info-image" style={{ backgroundImage: `url(${item.image})` }} />
            <div className="info-copy">
              <h3>{item.name}</h3>
              <p>Gentle care for refreshed and radiant skin.</p>
            </div>
            <strong>{item.price}</strong>
          </div>
        ))}
      </div>
    </section>
  )
}

function HaircarePage() {
  return (
    <section className="dashboard-content page-content">
      <div className="page-header">
        <p className="eyebrow">Hair Care</p>
        <h2>Healthy strands, luminous shine</h2>
      </div>

      <div className="visual-hero haircare-hero">
        <div className="hero-copy-box">
          <span className="mini-tag">Healthy hair</span>
          <h3>Restore shine, softness, and strength in every strand</h3>
        </div>
        <div className="sparkle-visual" />
      </div>

      <div className="service-list">
        {haircareItems.map((item) => (
          <div key={item.name} className="info-card">
            <div className="info-image" style={{ backgroundImage: `url(${item.image})` }} />
            <div className="info-copy">
              <h3>{item.name}</h3>
              <p>Repair and protect your hair with rich nourishment.</p>
            </div>
            <strong>{item.price}</strong>
          </div>
        ))}
      </div>
    </section>
  )
}

export default App

