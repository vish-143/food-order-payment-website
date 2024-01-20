import { ADDPRODUCT, ADDUSERITEM, CLEARITEM, DELETEPRODUCT } from "./ActionType";
const cartProductDetails = [{
    itemName : "Italy Pizza ",
    imageForItem : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_VDHySriGLo3fVJvWdBIOncrjUQs4QZt-qGM8VuChNLXwtcOIHXAgorx42hIzJnBDbnY&usqp=CAU',            
    itemRate : 681,
    itemCount : 1,
    itemTaste : "Extra Cheese and Topping",
},
{

    itemName : "Combo Plate ",
    imageForItem : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_VDHySriGLo3fVJvWdBIOncrjUQs4QZt-qGM8VuChNLXwtcOIHXAgorx42hIzJnBDbnY&usqp=CAU',                 
    itemRate : 540,
    itemCount : 1,
    itemTaste : "Extra Cheese and Topping", 
},
{

    itemName : "Spanish Rice",
    imageForItem :  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_VDHySriGLo3fVJvWdBIOncrjUQs4QZt-qGM8VuChNLXwtcOIHXAgorx42hIzJnBDbnY&usqp=CAU',
    itemRate : 350,
    itemCount : 1,
    itemTaste :  "Extra garlic ",
}]

export const cartReducer = (state = cartProductDetails, action) => {
    switch (action.type) {
        case ADDPRODUCT:
            const totalData =  state.map((product,index) => {
                if ( index === action.payload) {
                    console.log('final',product);
                    return {
                        ...product,
                        itemCount  : state[action.payload].itemCount  + 1,
                        itemRate :  Math.round((state[action.payload].itemRate / state[action.payload].itemCount )) + state[action.payload].itemRate
                    };
                }
                return product;
            });
           return totalData
        case DELETEPRODUCT: 
        const allData =  state.map((product,index) => {
            if ( index === action.payload) {
                console.log('final',product);
                return {
                    ...product,
                    itemCount  : state[action.payload].itemCount  - 1,
                    itemRate : state[action.payload].itemRate - Math.round((state[action.payload].itemRate / state[action.payload].itemCount )) 
                };
            }
            return product;
        });
        return allData;
        case ADDUSERITEM:
         return [ action.payload , ...state]  
        case CLEARITEM:
        const filteredItem = state.filter((product,index)=> action.payload !== index)
        return filteredItem
        default:
        return state;
    }
}