import React from "react";
import PaymentCard from "./CardLayout";
import '../assets/style/style.css';
import ShowItemCart from "./ItemCart";
import CreateCartItem from "./AddCartItem";

const Home = () => {
    return (
        // <div><PaymentCard/></div>
        <div className="container-fluid headerBox">
  <div className="row componentPack">
    <div className="col-2 splitContainer addItemContainer" >
      <CreateCartItem/>
    </div>
    <div className="col-6 splitContainer box2"  >
      <ShowItemCart/>
    </div>
    <div className="col-3 splitContainer box3" >
      <PaymentCard/>
    </div>
  </div>

</div>
    )
}
export default Home;