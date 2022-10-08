import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header"></div>
      <div className="footer">
        <h1>Order Summary</h1>
        <p>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <div className="plan">
          <div className="logo"></div>
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
