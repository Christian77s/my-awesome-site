const Hero = () => {
    return (

        <section className="fade-in-up" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '80px 10%',
            backgroundColor: '#f9fafd',
            minHeight: '80vh'
        }}>
            <div style={{ flex: 1 }}>
                <h1 style={{ fontSize: '3.5rem', lineHeight: '1.2', color: '#2d3436', marginBottom: '20px' }}>
                    Solusi Digital <br />
                    <span style={{ color: '#007bff' }}>Untuk Bisnis Anda</span>
                </h1>
                <p style={{ fontSize: '1.2rem', color: '#636e72', marginBottom: '30px', maxWidth: '500px' }}>
                    Bantu brand lokal Anda tumbuh lebih cepat dengan teknologi website modern dan desain yang memikat pelanggan.
                </p>
                <button style={{
                    padding: '15px 35px',
                    fontSize: '1rem',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(0,123,255,0.3)'
                }}>
                    Mulai Sekarang
                </button>
            </div>

            <div style={{ flex: 1, textAlign: 'right' }}>
                <img
                    src="https://img.freepik.com/free-vector/creative-team-working-project_23-2148408540.jpg"
                    alt="Digital Solution"
                    style={{
                        width: '100%',
                        maxWidth: '500px',
                        borderRadius: '20px', 
                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                    }}
                />
            </div>
        </section>
    );
};

export default Hero;