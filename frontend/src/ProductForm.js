import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as action from './action';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
class ProductForm extends Component{
    
    state={
        gerderCd:"",
        dod:"",
        planCode:"",
        premiumPerYear:"",
        paymentFrequency:"",
        saPerYear:""
    }
    
    onInputChange = (event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    onProductSubmit =(data,event)=>{
        event.preventDefault();
        const newData={
            gerderCd:data.gerderCd,
            dod:data.dod,
            planCode:data.planCode,
            premiumPerYear:data.premiumPerYear,
            paymentFrequency:data.paymentFrequency,
            saPerYear:data.saPerYear
        }
        this.props.addProductAtStore(newData);
    }
    
    render(){
        return (
                <div className="col-12 mx-auto mt-4">
                    <div className="card">
                        <div className="card-header">คำนวณทุนประกันโดยระบุทุนประกัน</div>
                        <div className="card-body">
                        <form onSubmit={this.onProductSubmit.bind(this,this.state)}> 
                        <div className="mb-3 row">
                            <label className="col-sm-5 col-form-label">เพศ</label>
                            <div className="col-sm-3 mt-2">
                                <input type="radio" name="gerderCd" value="FEMALE" onChange={this.onInputChange}/><label htmlFor="html"> FEMALE</label>
                            </div>
                            <div className="col-sm-4 mt-2">
                                <input type="radio" name="gerderCd" value="MALE" onChange={this.onInputChange}/><label htmlFor="html"> MALE</label>
                            </div>
                            
                        </div>
                        <div className="mb-3 row">
                            <label className="col-sm-5 col-form-label">วันเกิด</label>
                            <div className="col-sm-6">
                                <input type="text" className="form-control" name="dod" value={this.state.dod} onChange={this.onInputChange}/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="inputPassword" className="col-sm-5 col-form-label">แผนประกัน</label>
                            <div className="col-sm-6">
                                <select className="form-select" name="planCode" onChange={this.onInputChange}>
                                <option defaultValue>กรุณาเลือก แผนประกัน</option>
                                <option value="TT1A20">Package1 (benefit 200k)</option>
                                <option value="TT1A50">Package2 (benefit 500k)</option>
                                <option value="TT1AM1">Package3 (benefit 1M)</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="inputPassword" className="col-sm-5 col-form-label">เบี้ยประกันภัยที่ต้องการ/ปี</label>
                            <div className="col-sm-6">
                                <input type="text"  className="form-control" name="premiumPerYear" value={this.state.premiumPerYear}  onChange={this.onInputChange}/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="inputPassword" className="col-sm-5 col-form-label">งวดการชำระเบี้ย</label>
                            <div className="col-sm-6">
                            <select className="form-select" name="paymentFrequency" onChange={this.onInputChange}>
                                <option defaultValue>กรุณาเลือก งวดการชำระเบี้ย</option>
                                <option value="MONTHLY">รายเดือน</option>
                                <option value="QUARTERLY">ราย3เดือน</option>
                                <option value="HALFYEARLY">ราย6เดือน</option>
                                <option value="YEARLY">รายปี</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="inputPassword" className="col-sm-5 col-form-label">ทุนประกันภัยที่ต้องการ</label>
                            <div className="col-sm-6">
                                <input type="text"  className="form-control" name="saPerYear" value={this.state.saPerYear} onChange={this.onInputChange} />
                            </div>
                        </div>

                        <div className="text-center">
                            <button type="submit" className="btn btn-primary my-1">Submit</button>
                        </div>   
                        </form>
                        </div>
                    </div>
                </div>
        );
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        addProductAtStore : (newProductData)=>{
            return dispatch(action.addProduct(newProductData));
        }
    }
}
export default connect(null,mapDispatchToProps)(ProductForm);