import { Link } from 'react-router-dom'; 

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#2d3436', color: '#dfe6e9', padding: '60px 10% 20px 10%' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
        

        <div>
          <h3 style={{ color: 'white', marginBottom: '15px' }}>TokoLokal</h3>
          <p style={{ fontSize: '0.9rem' }}>Memberdayakan bisnis lokal melalui teknologi modern.</p>
        </div>


        <div>
          <h4 style={{ color: 'white', marginBottom: '15px' }}>Bantuan</h4>
          <Link to="/privasi" style={{ display: 'block', color: '#a0aec0', marginBottom: '10px', textDecoration: 'none' }}>
            Kebijakan Privasi
          </Link>
          <Link to="/syarat-ketentuan" style={{ display: 'block', color: '#a0aec0', textDecoration: 'none' }}>
            Syarat & Ketentuan
          </Link>
        </div>
        <div>
<div>
  <h4 style={{ color: 'white', marginBottom: '15px' }}>Hubungi Kami</h4>
  
  <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
    <span>📩</span>
    <a href="mailto:halo@tokolokal.id" style={{ color: '#a0aec0', textDecoration: 'none' }}>
      halo@tokolokal.id
    </a>
  </div>

  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
    <span>📍</span>
    <a 
      href="https://www.google.com/maps/place/Jakarta" 
      target="_blank" 
      rel="noopener noreferrer"
      style={{ color: '#a0aec0', textDecoration: 'none', lineHeight: '1.5' }}
    >
      Jakarta, Daerah Khusus Ibukota Jakarta,<br />
      Indonesia
    </a>
  </div>
</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;