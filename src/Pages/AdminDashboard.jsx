// src/components/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []);

  // Styles
  const linkStyle = {
    color: '#fff',
    fontSize: '18px',
    textDecoration: 'none',
    display: 'block',
    padding: '10px 0',
    transition: 'background-color 0.3s, color 0.3s',
  };

  const sectionHeaderStyle = {
    fontSize: '24px',
    marginBottom: '10px',
  };

  const creativeContentStyle = {
    lineHeight: '1.6',
  };

  return (
    <div style={{
      display: 'flex',
      height: '100vh', // 100% height of the viewport
      backgroundColor: '#f9f9f9',
    }}>

      {/* Left Division */}
      <aside className="left-panel" style={{
        width: '20%',
        height: '100%',
        padding: '20px',
        backgroundColor: 'brown',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      }}>
        <div>
          <h3 style={{ color: '#fff', marginBottom: '20px', fontSize: '24px' }}>Admin Panel</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>
              <Link to="/add-product" style={linkStyle} onMouseOver={(e) => e.target.style.backgroundColor = '#2c3e50'} onMouseOut={(e) => e.target.style.backgroundColor = 'brown'}>
                Add Product
              </Link>
            </li>
            <li>
              <Link to="/update-product" style={linkStyle} onMouseOver={(e) => e.target.style.backgroundColor = '#2c3e50'} onMouseOut={(e) => e.target.style.backgroundColor = 'brown'}>
                Update Product
              </Link>
            </li>
            <li>
              <Link to="/delete-product" style={linkStyle} onMouseOver={(e) => e.target.style.backgroundColor = '#2c3e50'} onMouseOut={(e) => e.target.style.backgroundColor = 'brown'}>
                Delete Product
              </Link>
            </li>
            <li>
              <Link to="/view-products" style={linkStyle} onMouseOver={(e) => e.target.style.backgroundColor = '#2c3e50'} onMouseOut={(e) => e.target.style.backgroundColor = 'brown'}>
                View Products
              </Link>
            </li>
            <li>
              <Link to="/view-users" style={linkStyle} onMouseOver={(e) => e.target.style.backgroundColor = '#2c3e50'} onMouseOut={(e) => e.target.style.backgroundColor = 'brown'}>
                View All Users
              </Link>
            </li>
            <li>
              <Link to="/analytics" style={linkStyle} onMouseOver={(e) => e.target.style.backgroundColor = '#2c3e50'} onMouseOut={(e) => e.target.style.backgroundColor = 'brown'}>
                Analytics
              </Link>
            </li>
            <li>
              <Link to="/settings" style={linkStyle} onMouseOver={(e) => e.target.style.backgroundColor = '#2c3e50'} onMouseOut={(e) => e.target.style.backgroundColor = 'brown'}>
                Settings
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      {/* Right Division */}
      <main className="right-panel" style={{
        width: '80%',
        height: '100%',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      }}>
        <header style={{
          backgroundColor: '#333',
          color: '#fff',
          padding: '20px',
          textAlign: 'center',
          borderRadius: '8px',
          marginBottom: '20px',
        }}>
          <h1 style={{ fontSize: '32px', marginBottom: '10px' }}>Welcome to Admin Dashboard</h1>
          <p>Manage your products, users, and analytics with ease.</p>
        </header>

        <section style={{ marginTop: '20px' }} className="dashboard-section">
          <h2 style={sectionHeaderStyle}>Dashboard Overview</h2>
          <div style={creativeContentStyle}>
            <p>Get a quick glance at your key performance indicators and business insights.</p>
            <p>Real-time charts and graphs help you make informed decisions.</p>
          </div>
        </section>

        <section style={{ marginTop: '20px' }} className="total-users-section">
          <h2 style={sectionHeaderStyle}>Total Number of Users</h2>
          <div style={creativeContentStyle}>
            <p>Your platform currently has <strong>{data.length}</strong> registered users.</p>
            <p>Engage with your community and track user growth.</p>
          </div>
        </section>

        <section style={{ marginTop: '20px' }} className="total-products-section">
          <h2 style={sectionHeaderStyle}>Total Products</h2>
          <div style={creativeContentStyle}>
            <p>Explore the variety of products available on your platform.</p>
            <p>Efficiently manage and categorize your product catalog.</p>
          </div>
        </section>

        <section style={{ marginTop: '20px' }} className="analytics-section">
          <h2 style={sectionHeaderStyle}>Analytics</h2>
          <div style={creativeContentStyle}>
            <p>Dive into detailed analytics to understand user behavior and preferences.</p>
            <p>Optimize your platform based on actionable insights.</p>
          </div>
        </section>

        {/* Add more creative sections as needed */}

        <footer style={{
          marginTop: '20px',
          textAlign: 'center',
          color: '#777',
        }}>
          <p>&copy; 2024 Admin Dashboard</p>
        </footer>
      </main>
    </div>
  );
};

export default AdminDashboard;
