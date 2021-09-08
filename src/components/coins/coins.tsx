import React from 'react';
import '../../App.css';
import worldcoinindex from "../../images/worldcoinindex.png";
import coingecko from "../../images/coingecko.png";
import coinsbit from "../../images/coinsbit.png";
import pancakeswap from "../../images/pancakeswap.png";
import binance from "../../images/binance.png";
import coinmarket from "../../images/coinmarket.png";




const coinimages=[worldcoinindex,coingecko,coinsbit,pancakeswap,binance,coinmarket]


class  Coins extends React.Component{
  
  render(){
    return (
        <div>
        <h4 className="text-center h2" style={{color:'#122e53'}}>BUY $ORT TOKENS</h4>

        <div className="container">
          <div className="row">
              {coinimages.map((coinimage,index)=>
                <div key={index} className="col-4 mt-4">
                  <img src={coinimage} alt="" className="w-100"></img>
                </div>
              )}
          </div>
        </div>


      </div>
     );

  }
 
}

export default Coins;