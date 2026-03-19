// src/components/Footer.jsx
function Footer() {
  return (
    <footer style={{
      textAlign: "center",
      padding: "1rem",
      borderTop: "1px solid #ccc",
      marginTop: "2rem",
      backgroundColor: "#f5f5f5"
    }}>
      <p>© 2026 Paradise Nursery. All rights reserved.</p>
      <p>Follow us on 
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a> | 
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a>
      </p>
    </footer>
  );
}

export default Footer;