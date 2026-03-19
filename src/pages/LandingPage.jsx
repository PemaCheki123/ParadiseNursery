import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="landing-page" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=2070&auto=format&fit=crop')" }}>
      <div className="landing-content">
        <h1>Paradise Nursery</h1>
        <p>Premium houseplants carefully curated for your home. Bring the serenity of nature into your living space today.</p>
        <Link to="/products">
          <button>Explore Our Collection</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;