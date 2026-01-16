const ServicesPage = () => {
  const services = [
    {
      title: "Pembuatan Website",
      desc: "Website cepat, responsif, dan SEO-friendly untuk UMKM.",
      icon: "🌐",
      color: "#e3f2fd"
    },
    {
      title: "Digital Marketing",
      desc: "Strategi iklan di Meta & Google untuk meningkatkan omzet.",
      icon: "📈",
      color: "#f1f8e9"
    },
    {
      title: "Desain Grafis",
      desc: "Branding logo dan konten sosial media yang memikat.",
      icon: "🎨",
      color: "#fff3e0"
    }
  ];

  return (
    <div className="fade-in-up" style={{ padding: '80px 10%' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#2d3436' }}>Layanan Unggulan Kami</h1>
        <p style={{ color: '#636e72', maxWidth: '600px', margin: '20px auto' }}>
          Kami menyediakan solusi digital menyeluruh untuk membantu bisnis lokal naik kelas.
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '30px' 
      }}>
        {services.map((s, index) => (
          <div key={index} style={{
            padding: '40px',
            borderRadius: '20px',
            backgroundColor: s.color,
            transition: 'transform 0.3s'
          }} className="service-card">
            <div style={{ fontSize: '40px', marginBottom: '20px' }}>{s.icon}</div>
            <h3 style={{ marginBottom: '15px', color: '#2d3436' }}>{s.title}</h3>
            <p style={{ color: '#636e72', lineHeight: '1.6' }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;