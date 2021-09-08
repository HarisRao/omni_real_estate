import React from 'react';
import moment from 'moment'
import euro from '../../../images/euro30by30.png'
import ort from '../../../images/ort30by30.png'
import ethereum from '../../../images/eth30by30.png'
import bitcoin from '../../../images/btc30by30.png'
import {Progress} from 'reactstrap'
import { Modal } from 'react-responsive-modal';
import PurchaseModal from './purchaseModal'

interface IState {setModal:boolean}

const coins=[{coinpath:euro,price:1990.001,coinname:'Euro'},{coinpath:ethereum,price:1003.48,coinname:'Ethereum'},{coinpath:bitcoin,price:61.53,coinname:'Bitcoin'},{coinpath:ort,price:47199897.87,coinname:'Ort'}]


class Pricing extends React.Component<{},IState>{

    state={
        setModal:false
    }

    closeModal=()=>{
        this.setState({
          setModal:false
        })
      }
      openModal=()=>{
        this.setState({
          setModal:true
        })
      }
  
  render(){
    return (
        <div className="bg-white p-2 mb-3" id="pricing-border">
            <div className="ml-3 mt-3">
                <p className="h4 d-inline" id="sale-end-on">SALE END ON</p>
                <span className="ml-3" id="moment-size">{moment().format('DD[d] : hh[h] : mm[m] : ss[s]')}</span>
            </div>   
            <div className="row mt-5">
                {coins.map((item)=>
                    <div key={item.price} className="col-6 col-md-3  d-flex justify-content-around text-center">
                        <img className="mt-2" id="pricing-image" alt="..." src={item.coinpath}></img>
                        <p className="d-inline" id="coinprice-name">{item.coinname}<span className="d-block">{item.price}</span></p>
                    </div>
                )}
            </div>   
            <div className="d-flex justify-content-center mb-2 mt-4"><div id="bar"><span className="py-1 text-center" id="bar-percentage">75%</span></div></div>
            <Progress value={75} className="mx-3"></Progress>
            <div className="d-flex justify-content-end mx-3 pt-2 pr-3">25% remaining</div>
            <div className="d-flex justify-content-center"><button type="submit" className="btn mb-3 px-5 mt-4" id="enquiry_email_button" onClick={this.openModal}>Purchase now</button></div>
            <Modal open={this.state.setModal} center onClose={this.closeModal}>
                <div id="modal_box"><PurchaseModal onclose={this.closeModal}></PurchaseModal></div>
            </Modal>  
        </div>
      
    );

  }
 
}

export default Pricing;
