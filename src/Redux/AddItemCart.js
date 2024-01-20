const addProductInCart =  [{
    itemName : "",
    imageForItem : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_VDHySriGLo3fVJvWdBIOncrjUQs4QZt-qGM8VuChNLXwtcOIHXAgorx42hIzJnBDbnY&usqp=CAU',            
    itemRate : "",
    itemCount : 1,
    itemTaste : "Extra Cheese and Topping",
},
{
    itemNameAlert : "",
    itemRateAlert : ""
}]

export const adddItemReducer = (state = addProductInCart, action) => {
   
    switch (action.type) {
        default:
        return state;
    }
}