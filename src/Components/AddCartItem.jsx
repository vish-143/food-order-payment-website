import React, { useRef, useState } from "react";
import userFace from '../assets/Images/loger.png';
import '../assets/style/style.css';
import { useDispatch, useSelector } from "react-redux";
import { addItemInCart } from "../Redux/ActionCreator";
import { DatePicker } from "antd";
const CreateCartItem = () => {
    const DisplayAddItem = useSelector(item => item.showAddItemDetails[0]);
    const displayShowError = useSelector(item => item.showAddItemDetails[1]);
    const [registerDetails, setregisterDetails] = useState(DisplayAddItem);
    const [validationError, setvalidationError] = useState(displayShowError);
    const dispatch = useDispatch();
    const itemNameRef = useRef();
    const itemRateRef = useRef();

   const handleUpDatedata = (e) => {
    e.preventDefault();
    const specialCharacterPattern = /(^[a-zA-Z ]*$)/;
    const numbersPattern = /[0-9]/;
    let temp = { ...validationError }
    Object.keys(registerDetails).forEach(value => {
        const employeeValues = registerDetails[value]
        if (employeeValues === "") {
            temp[value + "Alert"] = `Please fill the ${value}`;
        }
        else if (value === "itemName") {
            if (!specialCharacterPattern.test(employeeValues)) {
                temp[value + "Alert"] = `special characters and numbers are not allowed in ${value}`
            }
            else {
                temp[value + "Alert"] = "";
            }
        }
        else if (value === "itemRate") {
            if (!numbersPattern.test(employeeValues)) {
                temp[value + "Alert"] = `numbers only allowed  ${value}`
            }
            // else {
            //     temp[value + "Alert"] = "s";
            // }
            else if (typeof(value) === 'string'){
                console.log('hello');
                temp[value + "Alert"] = "";
                setregisterDetails({ ...registerDetails, itemRate: parseInt(employeeValues)});
            }
        }
     
    }
    )
    let errors = [];
    Object.values(temp).forEach(ele => {
        if (ele !== "") {
            errors.push(ele)
        }
    })
   
        if (!errors.length) {
            // console.log('input value',itemNameRef.current.value)
           dispatch(addItemInCart(registerDetails))
           itemNameRef.current.value = "";
           itemRateRef.current.value = "";
        }
    setvalidationError(PrevvalidationError => PrevvalidationError = temp)
   }
    return (
        <div className="container boxStorage">
            <img src={userFace} className="loginProfile" alt="..." />
            <form className="formToAddItem">
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">Enter the Item Name</label>
                    <input type="text" class="form-control" ref={itemNameRef} id="formGroupExampleInput" placeholder="Enter the name here"
                    onChange={(e) => setregisterDetails({ ...registerDetails, itemName: e.target.value.trim() })}
                     />
                </div>
                <div>{validationError.itemNameAlert}</div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Add Price</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" ref={itemRateRef}
                    onChange={(e) => setregisterDetails({ ...registerDetails, itemRate: Number(e.target.value.trim()) })}
                    placeholder="Enter the amount here" />
                </div>
                <div>{validationError.itemRateAlert}</div>
             {console.log(validationError.itemRateAlert)}
                <button  class="btn btn-primary signUpButton" onClick={handleUpDatedata}>Submit</button>
            </form>
        </div>
    )
}
export default CreateCartItem;
