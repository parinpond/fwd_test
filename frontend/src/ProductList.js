import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as action from './action';
class ProductList extends Component{
    render(){
        const allProducts = this.props.productsFromStore;
        let list =(
                <div className="col-12 mx-auto">
                    ไม่มีข้อมูล
                </div>
        );
        if(allProducts.length !== 0){
            list = allProducts.map(item =>(
                <div className="col-12 mx-auto">
                    <div className="mb-3 row">
                        <label htmlFor="inputPassword" className="col-sm-5 col-form-label">productID</label>
                        <div className="col-sm-6">{item.productID}</div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="inputPassword" className="col-sm-5 col-form-label">แผนประกัน</label>
                        <div className="col-sm-6">{item.planCode}</div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="inputPassword" className="col-sm-5 col-form-label">เบี้ยประกันภัยที่ต้องการ/ปี</label>
                        <div className="col-sm-6">{item.premiumPerYear}</div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="inputPassword" className="col-sm-5 col-form-label">งวดการชำระเบี้ย</label>
                        <div className="col-sm-6">{item.paymentFrequency}</div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="inputPassword" className="col-sm-5 col-form-label">ทุนประกันภัยที่ต้องการ</label>
                        <div className="col-sm-6">{item.saPerYear}</div>
                    </div>
                </div>
            )
            );
        }
        return (
                <div className="col-12 mx-auto mt-4">
                    <div className="card">
                        <div className="card-header">สรุป คำนวณทุนประกันโดยระบุทุนประกัน</div>
                        <div className="card-body">
                            {list}
                        </div>
                    </div>
                </div>
        );
    }
    componentDidMount(){
        this.props.getAllProducts();
    }
}
const mapStateToProps = state=>{
    return {
        productsFromStore :state.products
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        getAllProducts :()=>{
            return dispatch(action.getProductLists());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductList);