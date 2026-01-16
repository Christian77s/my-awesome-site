import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 10%',
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <Link to="/" style={{ fontSize: '24px', fontWeight: 'bold', color: '#007bff', textDecoration: 'none' }}>
        TokoLokal<span style={{ color: '#ff4757' }}>.</span>
      </Link>
      
      <div style={{ display: 'flex', gap: '30px' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Beranda</Link>
        <Link to="/layanan" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Layanan</Link>
        <Link to="/tentang" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Tentang</Link>
      </div>

      <button style={{
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        fontWeight: 'bold',
        cursor: 'pointer'
      }}>
        Hubungi Kami
      </button>
    </nav>
  );
};

export default Navbar;