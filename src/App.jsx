import "./App.css";
import topBanner from "./imgs/illustration-hero.svg";
import musicNote from "./imgs/icon-music.svg";

function App() {
  return (
    <div className="container">
      <img src={topBanner} alt="a illustration of a person dancing" />
      <h1>Order Summary</h1>
      <p>
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>

      <div className="annualPlan">
        <div className="planContainer">
          <div className="left">
            <img src={musicNote} alt="a music note" />
            <div className="price">
              <h2>Annual Plan</h2>
              <p>$59.99/year</p>
            </div>
          </div>
          <a href="#">Change</a>
        </div>
      </div>

      <button>Proceed to Payment</button>

      <a className="cancelOrder" href="#">Cancel Order</a>
    </div>
  );
}

export default App;
