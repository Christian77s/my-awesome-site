const Contact = () => {
  return (
    <section style={{
      padding: '100px 10%',
      backgroundColor: '#ffffff',
      textAlign: 'center'
    }}>
      <div style={{
        backgroundColor: '#007bff',
        padding: '60px',
        borderRadius: '30px',
        color: 'white'
      }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Siap Memulai Project?</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '40px', opacity: '0.9' }}>
          Kirimkan detail kebutuhan Anda melalui email dan kami akan membalas dalam 24 jam.
        </p>
        <a 
          href="mailto:halo@tokolokal.id" 
          style={{
            backgroundColor: 'white',
            color: '#007bff',
            padding: '15px 40px',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            display: 'inline-block'
          }}
        >
          Kirim Email Sekarang
        </a>
      </div>
    </section>
  );
};

export default Contact;