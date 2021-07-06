const intialState={
    products:[]
}
const reducer = (state = intialState,action)=>{
   // const allProducts = [...state.products];
    switch(action.type){
        case 'GET_PRODUCTS_LISTS':
            const allProductsState={
                ...state,
                products:action.playload
            }
            return allProductsState;
        case 'ADD_PRODUCT':
            const addedState ={
                ...state,
                products:[action.playload,...state.products]
            }
            return addedState;
        default:
            break;
    }
    return state;
}
export default reducer;