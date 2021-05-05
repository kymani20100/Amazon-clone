export const initialState = {
    basket: [],
    user: null,
};

export const getBasketTotal = (basket) => {
    return basket?.reduce((amount,item) => item.price + amount, 0);
}

const reducer = (state, action) =>{

    switch(action.type){
        case 'ADD_TO_BASKET':
            // RETURN ALL THE CONTENT OF THE BASKET PLUS THE CURRENT ADDED ITEM
            return {
                 ...state, 
                 basket: [...state.basket, action.item],
            };
        case 'REMOVE_FROM_BASKET':
            // Clone the basket
            let newBasket = [...state.basket];
            // Check if the product exist
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if(index >= 0){
                // item exist in basket, remove it
                newBasket.splice(index, 1);
            }else{
                console.warn(`Can't remove product of (id: ${action.id}) as it does not exist`)
            }
            return {...state, basket: newBasket};
        default:
            return state;
    }
}

export default reducer;