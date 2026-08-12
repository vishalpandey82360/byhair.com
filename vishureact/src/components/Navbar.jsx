export default function Navbar({ onSelectPage, activePage }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'reservation', label: 'Reservation' },
    { id: 'styles', label: 'Hair Styles' },
    { id: 'music', label: 'Retro Songs' },
    { id: 'staff', label: 'Staffs' },
    { id: 'skincare', label: 'Skin Care' },
    { id: 'haircare', label: 'Hair Care' },
  ]

  return (
    <nav className="navbar navbar-expand-lg navbar-dark dashboard-navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Vishu Salon</a>

        <div className="top-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={activePage === item.id ? 'mini-nav active' : 'mini-nav'}
              onClick={() => onSelectPage(item.id)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </div>

        <form className="d-flex dashboard-search-form">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-light" type="submit">
            Search
          </button>
        </form>
        <div className="navbar-user text-light ms-3">
          vishal
        </div>
      </div>
    </nav>
  )
}
