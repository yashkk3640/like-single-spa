import React, { useState } from "react";

import { products } from "seller/ManageProducts";

const getOrderForUser = (uId) =>
  products
    .filter((p, idx) => uId[uId.length - 1] === String(idx))
    .map((p) => ({ ...p, userId: uId }));

const UserOrders = () => {
  const [userId, setUserId] = useState();
  return (
    <>
      <div>User's Orders Page</div>
      <select
        name="Buyer"
        id="buyer"
        value={userId}
        onChange={(e) => setUserId(e.target.value?.trim())}
      >
        <option value="">Select Buyer</option>
        <option value="buyer1">First Buyer</option>
        <option value="buyer2">Second Buyer</option>
        <option value="buyer3">Third Buyer</option>
        <option value="buyer4">Fourth Buyer</option>
      </select>
      <div style={{ fontSize: "20px", display: "flex", flexWrap: "wrap" }}>
        {userId &&
          getOrderForUser(userId).map((p, idx) => (
            <div style={{ width: "220px", padding: "20px" }} key={idx}>
              <img src={p.image} width="200px" height="200px" />
              <div style={{ width: "100%", textAlign: "center" }}>{p.name}</div>
            </div>
          ))}
      </div>
    </>
  );
};

export default UserOrders;
