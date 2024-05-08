import React from "react";
import "./ConfirmOrder.css";
import { useNavigate } from "react-router-dom";

const ConfirmOrder = () => {
  const navigate = useNavigate();
  return (
    <div className="confirm">
      <div className="confirm-contents">
        <h2>Your Order is Confirmed 📦& on your way.🛵</h2>
        <p>
          Your order is being processed & will soon be out for delivery. Once
          there is update on the delivery you will be notified. Thank you for
          your order. Bon appetit 👏🏼 !
        </p>
        <div>
          <button onClick={() => navigate("/")}>Homepage</button>
          <button onClick={() => navigate("/myorders")}>My Orders</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrder;
