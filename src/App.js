import logo from "./images/icon-music.svg";
import illustration from "./images/illustration-hero.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={illustration} alt="illustration" className="header" />
      <div className="footer">
        <h1>Order Summary</h1>
        <p>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <div className="plan">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="pay">
            <p>Annual Plan</p>
            <p>$59.99/year</p>
          </div>
          <a href="_blank">Change</a>
        </div>
        <div className="btn-pay">Proceed to Payment</div>
        <div className="btn-cancel">Cancel Order</div>
      </div>
    </div>
  );
}

export default App;
