const Privacy = () => {
  return (
    <div className="fade-in-up" style={{ padding: '80px 15%', backgroundColor: '#fdfdfe' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', padding: '50px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#2d3436', marginBottom: '10px' }}>Kebijakan Privasi</h1>
        <p style={{ color: '#007bff', fontWeight: '600', marginBottom: '40px' }}>Terakhir diperbarui: 16 Januari 2026</p>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#2d3436', marginBottom: '15px' }}>1. Informasi yang Kami Kumpulkan</h2>
          <p style={{ color: '#636e72', lineHeight: '1.8' }}>
            TokoLokal mengumpulkan informasi yang Anda berikan secara langsung kepada kami saat Anda mengisi formulir kontak, berlangganan buletin kami, atau berkomunikasi dengan tim dukungan kami. Ini termasuk nama, alamat email, dan detail bisnis Anda.
          </p>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#2d3436', marginBottom: '15px' }}>2. Penggunaan Informasi</h2>
          <p style={{ color: '#636e72', lineHeight: '1.8' }}>
            Kami menggunakan informasi yang dikumpulkan untuk:
          </p>
          <ul style={{ color: '#636e72', lineHeight: '2', paddingLeft: '20px', marginTop: '10px' }}>
            <li>Menyediakan, memelihara, dan meningkatkan layanan digital kami.</li>
            <li>Mengirimkan pemberitahuan teknis, pembaruan, dan pesan dukungan.</li>
            <li>Memahami tren penggunaan untuk mengoptimalkan pengalaman pengguna.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#2d3436', marginBottom: '15px' }}>3. Keamanan Data</h2>
          <p style={{ color: '#636e72', lineHeight: '1.8' }}>
            Kami mengambil langkah-langkah keamanan yang wajar untuk membantu melindungi informasi tentang Anda dari kehilangan, pencurian, penyalahgunaan, dan akses tidak sah. Data Anda disimpan dalam server terenkripsi yang aman.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;