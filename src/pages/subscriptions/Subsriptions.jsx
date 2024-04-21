import { useState } from "react";
import "./subscriptions.css";

function Subsriptions() {
  const [hoverPurchase1, setHoverPurchase1] = useState(false);
  const [hoverPurchase2, setHoverPurchase2] = useState(false);
  return (
    <div className="page-subscriptions">
      <div className="subscriptions-content">
        <h1 className="subscriptions-page-title">Available Subscriptions</h1>
        <p className="subscriptions-page-info">
          Subsriptions allow you to access movies wihout purchasing them one at
          a time. Choose the one which fits you best, save money and time.
        </p>
        <div className="subscriptions">
          <div className="standart-subscription">
            <div className="standart-subscription-content">
              <p className="standart-title">Standart Subscription</p>
              <p className="standart-info">
                Say goodbye to buying movies one by one. Purchase standart
                subscription to get a variety of movies of different genres. pay
                only 9.99$ per month and enjoy.
              </p>
              {/* <p className="standart-price">Price : 9.99$</p> */}
            </div>
            <button
              className="standart-purchase-btn"
              onMouseEnter={() => setHoverPurchase1(true)}
              onMouseLeave={() => setHoverPurchase1(false)}
            >
              {hoverPurchase1 === false ? <p>Purchase</p> : <p>9.99$</p>}
            </button>
          </div>
          <div className="premium-subscription">
            <div className="premium-subscription-content">
              <p className="premium-title">Premium Subscription</p>
              <p className="premium-info">
                Premium Subscription brings experience of watching movies to a
                whole different level. All boundaries are erased. get access to
                the newest movies right from the moment they release in cinemas.
              </p>
              {/* <p className="premium-price">Price : 19.99$</p> */}
            </div>
            <button
              className="premium-purchase-btn"
              onMouseEnter={() => setHoverPurchase2(true)}
              onMouseLeave={() => setHoverPurchase2(false)}
            >
              {hoverPurchase2 === false ? <p>Purchase</p> : <p>19.99$</p>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subsriptions;
