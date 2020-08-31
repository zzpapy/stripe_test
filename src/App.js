import React from 'react';
import './App.css';

import StripeCheckoutButton from './components/stripe-button/stripe.button.component';

function App() {

  const totalPrice = 58;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Make Stripe Payment @ Freaky Jolly</h1>
        <p>
          Pay Total of $ {totalPrice}
        </p>
        <p>
          <StripeCheckoutButton price={totalPrice} />
        </p>
      </header>
    </div>
  );
}

export default App;