import React from 'react';
import './staking.css'
import Ort from '../../images/omni-coin.png'
import { Button,Label,Input } from 'reactstrap';

interface IState {count:number}
class Staking extends React.Component<{},IState>{
    state={
        count:0
    }
    increament=()=>{
        if(this.state.count >=0 && this.state.count < 12)
        {
            this.setState({
                count:this.state.count+1
            })
        }else{
            this.setState({
                count:12
            })    
        }
    }
    decreament=()=>{
        if(this.state.count > 0)
        {
            this.setState({
                count:this.state.count-1
            })
        }else{
            this.setState({
                count:0
            })
        }
    }
  render(){
    return (
        <div className="py-5 stake-bg-pic">
            <div className="d-flex justify-content-center align-items-center">
                <div className="pt-3 pb-1" id="stake-box">
                    <p className="h1 text-center stake-header" id="stake-header">Stake</p>
                    <p className="text-center"id="stake-desc">Here you will be able to stake and become eligible for our Staking Rewards Program.</p>
                    <div id="stake-inside-box" className="py-4 px-3 mt-4" >
                        <div className="d-flex justify-content-between">
                            <Label className="h5 mb-0 text-white inside-box-font" for="input-num">Input</Label>
                            <p className="h5 mb-0 text-white inside-box-font">Balance : 30,000</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mt-4">
                            <Input type="number" id="input-num" className="text-white mb-0 h4 w-50" placeholder="0.0"></Input>
                            <p className="text-white h5 mb-0 inside-box-font"><img src={Ort} alt="..." style={{width:'40px'}}></img> ORT</p>
                        </div>

                    </div>

                    <div className="d-flex justify-content-between">
                        <div style={{position:'relative'}}>
                            <div id="stake-inside-box" className="mt-3">
                                <Button id="count-btn" onClick={this.decreament}><i className="fal fa-minus  text-white"></i></Button>
                                <p className="text-white d-inline mb-0 pt-1" style={{fontSize:'18px'}}>{this.state.count}</p>
                                <Button id="count-btn" onClick={this.increament}><i className="fal fa-plus text-white"></i></Button>
                            </div>
                                <Input type="select" name="select" id="MonthsSelect">
                                    <option>Months</option>
                                    <option>Year</option>
                                </Input>
                        </div>
                        <div className="mt-3">
                            <Button id="stake-btn" className="text-center">Stake</Button>
                        </div>
                    </div>

                    <p className="text-center text-danger h5 red-text-font mt-4">Read our terms and conditions before proceeding.</p>

                </div>

            </div>

        </div>
    );

  }
 
}

export default Staking;