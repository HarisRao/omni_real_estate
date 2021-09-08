import React from 'react';
// import './App.css';
import "../../App.css";
import user from "../.././images/user.png";
import WalletLowerMiddle from './walletLowerMiddle'

class  WalletMiddle extends React.Component{
  
  render(){
    return ( 
        <div id="bg">
            <div className="row ml-lg-3 ml-0">

                <div className="col-lg-2  col-md-3 col-4 mt-4 d-flex justify-content-center">
                    <img src={user} alt="" width="100" height="100" className="ml-xl-2 ml-lg-3 ml-md-0 ml-4"></img>
                </div>

                <div id="wallet_address" className="col-lg-2 col-md-2 col-8 mt-5 h5 ml-lg-3 ml-xl-0 mr-md-4 mr-lg-0">
                  Wallet Address <span id="wallet_number" className="h5">0x733d0dade1c31...e694</span>
                </div>

                <div className="col-md-1 col-xl-1"></div>

                <div className="col-lg-6 col-md-5 mb-1">
                    <div className="row">
                        <div className="col-lg-2 col-xl-3 col-md-1 col-1"></div>
                        <div
                          className="col-lg-4 col-xl-3 col-md-4 col-4 mt-4 h6 text-center pt-3 pt-sm-3 pt-lg-4 pt-xl-3 font-weight-bold"
                          id="border"
                        >
                          Claimable NFTs <span id="nft-num" className="d-block h6 font-weight-bold">8</span>
                        </div>
                        <div className="col-lg-1 col-xl-1 col-1 col-md-1"></div>
                        <div
                          className="col-lg-4 col-md-5 col-5 col-xl-4 mt-4 h6 text-center py-3 font-weight-bold ml-xl-4 ml-0"
                          id="border"
                        >
                          Total Invested Amount <span id="nft-num" className="d-block h6 font-weight-bold" >$1,115,000</span>
                        </div>
                    </div>
                </div>

              {/* <div className="col-1"></div> */}

            </div>

            <hr></hr>
            
            <WalletLowerMiddle></WalletLowerMiddle>
        </div>
    );

  }
 
}

export default WalletMiddle;
