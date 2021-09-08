import React from 'react';
import '../marketplace.css'
import { Form, FormGroup, Label, Input,} from 'reactstrap';
import Bitcoin from '../../../images/btc30by30.png'
import Ethereum from '../../../images/eth30by30.png'
import Ort from '../../../images/ort30by30.png'
import Euro from '../../../images/euro30by30.png'
import Select from 'react-select'
import {Button} from 'reactstrap'

const options = [
  { value: 'Bitcoin', label: <div><img alt="..." src={Bitcoin} style={{width:'30px'}}></img> Bitcoin</div> },
  {  value: 'Ethereum', label: <div><img alt="..." src={Ethereum} style={{width:'30px'}}></img> Ethereum</div> },
  { value: 'Euro', label: <div><img alt="..." src={Euro} style={{width:'30px'}}></img> Euro</div> },
  {  value: 'Ort', label: <div><img alt="..." src={Ort} style={{width:'30px'}}></img> Ort</div> }
]

interface IProps {onclose:()=>void}



class PurchaseModal extends React.Component<IProps>{
  render(){
    return (
        <div style={{position:'relative'}} className="pt-3 pb-4">   
            <p className="text-white text-center h1 mb-2"><span style={{borderBottom:'2px solid white'}}>Purchase NFT</span></p>
            <i onClick={this.props.onclose} id="purchase-cancel-icon" className="fal fa-times mr-4 mt-1 text-white"></i>
            <p className="text-center lead">Kindly fill in the details</p>
            <div className="mx-4 mt-4" id="purchase-select">
                <p style={{fontSize:'20px'}} className="mb-2">Select Currency</p>
                <Select options={options} isSearchable={false}  placeholder="Select the Coin..." />
                <Form className="mt-3">
                    <FormGroup>
                        <Label for="exampleSelect" style={{fontSize:'20px'}}>Enter Amount</Label>
                        <Input type="number" className="text-white" placeholder="Enter the Amount in Numbers" id="exampleSelect"></Input>
                    </FormGroup>
                    <div className="mt-5"><Button id="purchase-modal-btn" className="mt-5">Purchase Now</Button></div>
                </Form>
            </div>
        </div>
    );

  }
 
}

export default PurchaseModal;