const About = () => {
  return (
    <div className="fade-in-up" style={{ padding: '80px 10%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '50px', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '300px' }}>
          <img 
            src="https://img.freepik.com/free-vector/mission-concept-illustration_114360-1532.jpg" 
            alt="Misi Kami" 
            style={{ width: '100%', borderRadius: '20px' }}
          />
        </div>
        <div style={{ flex: 1, minWidth: '300px' }}>
          <h1 style={{ fontSize: '2.5rem', color: '#2d3436', marginBottom: '20px' }}>Misi TokoLokal</h1>
          <p style={{ fontSize: '1.1rem', color: '#636e72', lineHeight: '1.8' }}>
            Lahir dari semangat membantu pengusaha Indonesia, TokoLokal percaya bahwa teknologi harus bisa diakses oleh siapa saja. 
            <br /><br />
            Kami bukan sekadar agensi, tapi partner digital yang siap menemani perjalanan bisnis Anda dari nol hingga sukses di dunia digital.
          </p>
          <div style={{ marginTop: '30px', display: 'flex', gap: '20px' }}>
            <div><h2 style={{ color: '#007bff' }}>1</h2><p>Klien Puas</p></div>
            <div><h2 style={{ color: '#007bff' }}>1</h2><p>Tahun Pengalaman</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;