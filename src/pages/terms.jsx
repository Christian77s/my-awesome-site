const Terms = () => {
  return (
    <div className="fade-in-up" style={{ padding: '80px 15%', backgroundColor: '#fdfdfe' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', padding: '50px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#2d3436', marginBottom: '10px' }}>Syarat & Ketentuan</h1>
        <p style={{ color: '#007bff', fontWeight: '600', marginBottom: '40px' }}>Persetujuan Layanan Digital</p>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#2d3436', marginBottom: '15px' }}>1. Penerimaan Ketentuan</h2>
          <p style={{ color: '#636e72', lineHeight: '1.8' }}>
            Dengan mengakses atau menggunakan layanan TokoLokal, Anda setuju untuk terikat oleh syarat dan ketentuan ini. Jika Anda tidak menyetujui bagian mana pun dari ketentuan ini, Anda tidak diperkenankan menggunakan layanan kami.
          </p>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#2d3436', marginBottom: '15px' }}>2. Hak Kekayaan Intelektual</h2>
          <p style={{ color: '#636e72', lineHeight: '1.8' }}>
            Kecuali dinyatakan lain, TokoLokal memiliki hak cipta atas semua materi di website ini. Klien memiliki hak milik penuh atas aset digital (website/desain) yang telah dibayar lunas sesuai kesepakatan kontrak.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', color: '#2d3436', marginBottom: '15px' }}>3. Batasan Tanggung Jawab</h2>
          <p style={{ color: '#636e72', lineHeight: '1.8' }}>
            TokoLokal tidak bertanggung jawab atas kerugian tidak langsung atau konsekuensial yang timbul dari penggunaan atau ketidakmampuan menggunakan layanan kami, termasuk namun tidak terbatas pada kehilangan keuntungan bisnis.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;