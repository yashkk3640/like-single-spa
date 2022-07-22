import React from "react";

const ManageSellers = () => {
  return (
    <>
      <div>Admin's Manage Sellers Page</div>
      <table style={{ fontSize: "16px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Contact No.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Seller 1</td>
            <td>first@seller.com</td>
            <td>first_seller</td>
            <td>123456789</td>
          </tr>
          <tr>
            <td>Seller 2</td>
            <td>second@seller.com</td>
            <td>second_seller</td>
            <td>234567891</td>
          </tr>
          <tr>
            <td>Seller 3</td>
            <td>third@seller.com</td>
            <td>third_seller</td>
            <td>345678912</td>
          </tr>
          <tr>
            <td>Seller 4</td>
            <td>fourth@seller.com</td>
            <td>fourth_seller</td>
            <td>456789123</td>
          </tr>
          <tr>
            <td>Seller 4</td>
            <td>fifth@seller.com</td>
            <td>firth_seller</td>
            <td>567891234</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ManageSellers;
