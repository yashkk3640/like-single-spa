import React from "react";
import "./index.css";

const ManageBuyers = () => {
  return (
    <>
      <div>Admin's Manage Buyers Page</div>
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
            <td>buyer 1</td>
            <td>first@buyer.com</td>
            <td>first_buyer</td>
            <td>123456789</td>
          </tr>
          <tr>
            <td>buyer 2</td>
            <td>second@buyer.com</td>
            <td>second_buyer</td>
            <td>234567891</td>
          </tr>
          <tr>
            <td>buyer 3</td>
            <td>third@buyer.com</td>
            <td>third_buyer</td>
            <td>345678912</td>
          </tr>
          <tr>
            <td>buyer 4</td>
            <td>fourth@buyer.com</td>
            <td>fourth_buyer</td>
            <td>456789123</td>
          </tr>
          <tr>
            <td>buyer 4</td>
            <td>fifth@buyer.com</td>
            <td>firth_buyer</td>
            <td>567891234</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ManageBuyers;
