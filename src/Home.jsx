import { Link } from 'react-router'

function Home () {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to Docs System</h1>
        <p>Your comprehensive guide to data manipulation and web development tools.</p>
      </header>
      <main className="main-content">
        <section className="features">
          <h2>Explore Our Documentation</h2>
          <div className="feature-cards">
            <div className="card">
              <h3>Pandas</h3>
              <p>Gu&iacute;a esencial de Pandas para Data Engineering: creaci&oacute;n, transformaci&oacute;n, limpieza y exportaci&oacute;n de datos.</p>
              <Link to="/pandas" className="btn">View Pandas Docs</Link>
            </div>
            <div className="card">
              <h3>Beautiful Soup 4</h3>
              <p>Learn about the Python library for parsing HTML and XML documents.</p>
              <Link to="/bs4" className="btn">View Beautiful Soup 4 Docs</Link>
            </div>
            <div className="card">
              <h3>MySQL Connector Python</h3>
              <p>Explore the connector library for Python to interact with MySQL databases safely and efficiently.</p>
              <Link to="/mysql-connector-python" className="btn">View MySQL Connector Docs</Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2026 Docs System. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Home
