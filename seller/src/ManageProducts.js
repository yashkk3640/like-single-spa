import React, { useState } from "react";
// import laptopImg from "./images/laptop.jpg";
// import mobileImg from "./images/mobile.jpg";
// import routerImg from "./images/router.jpg";
// import watchImg from "./images/watch.jpg";
// import speakerImg from "./images/speaker.jpg";

export const products = [
  {
    id: "laptop",
    name: "Laptop",
    image:
      "https://p2-ofp.static.pub/fes/cms/2022/03/18/rotkojn3z2ubiyihz08sm4kpv3mem1167804.png",
  },
  {
    id: "mobile",
    name: "Mobile",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvbzLUwVnkY49MlfzueSFHnfRwjfq3_M9MyLXw2cmwYSruAiwAQC-fQ4vgMLD7-s2ctO8&usqp=CAU",
  },
  {
    id: "router",
    name: "Router",
    image:
      "https://www.cnet.com/a/img/resize/97afa6140da1f8dcc4b54e2446f315fdbcc06c41/2019/05/13/87cf56a6-bca0-4f96-b0e6-7dbe58ad6177/asus-rt-ax88u-wi-fi-6-router-wifi.jpg?auto=webp&fit=crop&height=299&width=532",
  },
  {
    id: "watch",
    name: "Watch",
    image: "https://cdn1.smartprix.com/rx-idcbAzKFm-w1200-h1200/dcbAzKFm.jpg",
  },
  {
    id: "speaker",
    name: "Speaker",
    image:
      "https://cdn.mos.cms.futurecdn.net/cfEEcVzhmDwoULoiHbLZsN-480-80.jpg",
  },
];

const getSellerProducts = (sId) => {
  return products.map((p) => ({ ...p, sellerId: sId }));
};

const ManageProducts = () => {
  const [currentSeller, setCurrentSeller] = useState();
  return (
    <>
      <div>Seller's Manage Product Page</div>
      <select
        name="Seller"
        id="seller"
        value={currentSeller}
        onChange={(e) => setCurrentSeller(e.target.value?.trim())}
      >
        <option value="">Select Seller</option>
        <option value="seller1">First Seller</option>
        <option value="seller2">Second Seller</option>
        <option value="seller3">Third Seller</option>
        <option value="seller4">Fourth Seller</option>
      </select>
      <div style={{ fontSize: "20px", display: "flex", flexWrap: "wrap" }}>
        {currentSeller &&
          getSellerProducts(currentSeller).map((p) => (
            <div style={{ width: "220px", padding: "20px" }}>
              <img src={p.image} width="200px" height="200px" />
              <div style={{ width: "100%", textAlign: "center" }}>
                {p.name}
                <span
                  style={{
                    marginLeft: "20px",
                    fontSize: "16px",
                    color: "#333",
                  }}
                >
                  by @{p.sellerId}
                </span>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ManageProducts;
