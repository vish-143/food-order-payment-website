import React from "react";
import '../assets/style/style.css';
import deleteIcon from '../assets/Images/trash-bin.png';
import upArrow from '../assets/Images/caret-up-fill.svg';
import downArrow from '../assets/Images/caret-down-fill.svg';
import { useDispatch, useSelector } from "react-redux";
import { decrementProductItem, incrementProductItem, removeProductItem } from "../Redux/ActionCreator";
const ShowItemCart = () => {
    const totalItemName = useSelector(item => item.showItemcartDetails);
    const dispatch = useDispatch();
    return (
        <div className="itemCardDesign">
            <div className="scrollableTable">
                <div className="headerText tiltleText">Shopping Cart </div>
                <hr className="hr" />
                <div className="headerText">Shopping Cart</div>
                <div className="">You have {totalItemName.length} item in your cart</div>
                <table className="cardDesign overflowTable">
                    {totalItemName && totalItemName.map((item, index) => {
                       return <tr className="card " key={index}>
                            <td className="table-responsive ">
                                <table className="d-flex align-items-center ">
                                    <tbody className="container">
                                        <tr className="row ">
                                            <td className="col-6 cardBoxContainer">
                                                <div className=" d-flex align-items-center cardBoxContainer">
                                                    <div> <img className="pic" src={item.imageForItem} alt="" /> </div>
                                                    <div className="ps-3 d-flex flex-column justify-content">
                                                        <p className="fw-bold"> {item.itemName}</p>
                                                        <small className=" d-flex"> <span className=" text-muted"></span> {item.itemTaste} </small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="col-3 cardBoxContainer">
                                                <div className="  d-flex align-items-center justify-content -center cardBoxContainer">
                                                    <div>{item.itemCount}</div>
                                                    <div className="ps-3 d-flex flex-column justify-content">
                                                        <img className="orderCountButton svgIcon" onClick={() => dispatch(incrementProductItem(index))} src={upArrow}  alt="..." /> 
                                                        {item.itemCount === 1 ? <img className="orderCountButton svgIcon notAllowed" src={downArrow} 
                                                        disabled ={true}  /> 
                                                         :<img className="orderCountButton svgIcon" onClick={() => item.itemCount > 1 && dispatch(decrementProductItem(index))} src={downArrow}  alt="..." />  }
                                                    </div>
                                                </div> 
                                            </td>
                                            <td className="col-3 cardBoxContainer d-flex align-items-center">
                                                <div className=" d-flex align-items-center cardBoxContainer">
                                                    <div>${item.itemRate}</div>
                                                    <div className="ps-3 d-flex flex-column justify-content">
                                                        <img src={deleteIcon} className="svgIcon" alt="..." onClick={() => dispatch(removeProductItem(index))} /> </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
  }  )}
                </table>
            </div>
        </div>
    )
}

export default ShowItemCart;