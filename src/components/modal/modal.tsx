import React from 'react';
import "../.././App.css";
import mathwallet from "../.././images/mathwallet.png";
import tokenpocket from "../.././images/tokenpocket.png";
import metamask from "../.././images/metamask.png";
import trustwallet from "../.././images/trustwallet.png";
import binancewallet from "../.././images/Binancewallet.png";
import walletconnect from "../.././images/walletconnect.png";
import safepalwallet from "../.././images/Logo_Icon_black.png";


interface IProps {onclose:() => void}

interface IState {walletNames:object[]}

class WalletModal extends React.Component<IProps,IState>{

  state={
    walletNames:[{name:'Metamask',img:metamask},{name:'TrustWallet',img:trustwallet},{name:'MathWallet',img:mathwallet},{name:'TokenPocket',img:tokenpocket},{name:'WalletConnect',img:walletconnect},{name:'Binance Chain Wallet',img:binancewallet},{name:'Safe Pal Wallet',img:safepalwallet}]
  }
  
  render(){
    return (
        <div className="py-3">
          <div id="border-bottom" className="d-flex justify-content-between">
              <h5 className="d-inline" id="wallet_heading">
              Connect to a wallet</h5>
              <i onClick={this.props.onclose} className="fal fa-times mr-4 mt-1 text-white"></i>
          </div>
          <div className="mt-4">
            {this.state.walletNames.map((item)=>{
              return(
                <div
                  id="wallet-contents"
                  className="px-3 mx-4 d-flex justify-content-between"
                  style={{cursor:'pointer'}}
                >
                  <p className="d-inline" id="wallet_names">
                    {item.name}
                  </p>
                  <img src={item.img} alt="..." height="50" className="py-2"></img>
                </div>)
              })
            }    
            <p className="text-white" id="learn_to_connect"  onClick={()=>window.open('https://docs.pancakeswap.finance/help/faq#how-do-i-set-up-my-wallet-on-binance-smart-chain')} style={{cursor:'pointer'}}><p className="text-center my-4"><span className="px-2" id="question_mark">?</span> Learn how to connect</p></p>
          </div>
        </div>

         
     );

  }
 
}

export default WalletModal;