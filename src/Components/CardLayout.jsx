import React from "react";
import userFace from '../assets/Images/images.jpg';
import masterCard from '../assets/Images/206680_master_method_card_payment_icon.png';
import Rupay from '../assets/Images/701549_bank_card_payment_rupay_icon.png';
import visa from '../assets/Images/206684_visa_method_card_payment_icon.png';
import globalPay from '../assets/Images/206676_pay_method_world_payment_icon.png';
import loginuser from '../assets/Images/loger.png'
import '../assets/style/style.css';
import { useSelector } from "react-redux";
const PaymentCard = () => {
    const totalItemName = useSelector(item => item.showItemcartDetails);
    const  totalItemPrice = totalItemName.reduce((accumulator, object) => {
        return accumulator + object.itemRate;
      }, 0);
      console.log('item price' ,totalItemPrice );
    return (
        <div className="DebitCard gy-5">
            <div className="imageHeader">
                <h3>Card Details</h3>
                <img src={loginuser} className="userFace" alt="..." />
            </div>
            <div>Card Type</div>
            <div className="container-fluid">
                <div className=" iconPaymentContainer">
                    <div className=" paymentIcon">
                        <img src={masterCard} className="userFace rounded mx-auto d-block" alt="..." />
                    </div>
                    <div className=" paymentIcon">
                        <img src={visa} className="userFace rounded mx-auto d-block" alt="..." />

                    </div>
                    <div className=" paymentIcon">
                        <img src={Rupay} className="userFace rounded mx-auto d-block" alt="..." />

                    </div>
                    <div className=" paymentIcon">
                       SEE ALL 
                        {/* <img src={globalPay} className="userFace rounded mx-auto d-block" alt="SEE ALL" /> */}
                    </div>
                </div>
            </div>
            <div className="mb-3 ">
                <label htmlFor="formGroupExampleInput" className="form-label">Name on card</label>
                <input type="text" className="form-control inputColor " id="formGroupExampleInput" placeholder="Name"   />
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">Card Number</label>
                <input type="text" className="form-control inputColor " id="formGroupExampleInput2" placeholder="1111 2222 3333 4444" />
            </div>
            <div className="priceContainer row gy-3">
                <div className="col">
                    <label htmlFor="expiration" className="form-label">Expiration Date</label>
                    <input type="text" className="form-control inputColor" id="expiration" placeholder="mm/yy"/>
                </div>
                <div className="col">
                    <label htmlFor="cvvNumber" className="form-label">CVV</label>
                    <input type="number" className="form-control inputColor" id="cvvNumber" placeholder="123"/>
                </div>
            </div>
            <br/>
            <hr className="hr" />
            <div className="row gy-3">
                <div class="col-6">
                    <div className="float-start">Sub Total</div>
                </div>
             
                <div className=" col-6 ">
                    <div className="float-end">${totalItemPrice}</div>
                </div>
                <div className=" col-6 ">
                <div className="float-start">Shipping</div>   
                </div>
                <div className=" col-6">
                <div className="float-end">$4</div>
                    
                </div>
                <div className=" col-6">
                <div className="float-start">Total(Tax.incl)</div>
                </div>
                <div className=" col-6">
                <div className="float-end">${totalItemPrice + 4}</div>   
                </div>
            </div>
            {/* // )} */}
            <div className="buttonContainer">
            <button type="button" className="btn text-light col-12 orderButton">${totalItemPrice + 4} Checkout</button>
            </div>
        </div>
    )
}
export default PaymentCard;