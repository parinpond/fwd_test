import axios from 'axios';
export const addProduct =(data)=>{
    return (dispatch)=>{
        axios.post("http://localhost:3003/products/",data)
        .then((res)=>{
            dispatch({
                type:'ADD_PRODUCT',
                playload:res.data
            });
        });
    }
}
export const getProductLists =()=>{
    return (dispatch)=>{
        axios.post("http://localhost:3003/products/")
        .then((res)=>{
            dispatch({
                type:'GET_PRODUCT_LISTS',
                playload:res.data
            });
        });
    }
}
