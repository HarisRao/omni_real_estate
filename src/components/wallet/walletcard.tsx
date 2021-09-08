import React from 'react';

interface IProps {img:string}


class  WalletCard extends React.Component<IProps>{
  
  render(){
    return (
        <div className="col-lg-4 col-md-4 col-12 text-center mt-lg-4 mt-3">
            <div className="card p-3">
                <h6 className="card-title">Spectacular new built house..</h6>
                    <img className="card-img-top" src={this.props.img} alt="..."></img>
                <h6 className="card-subtitle text-white text-center mt-3 p-2">
                  Claim NFT
                </h6>
                <div className="card-text mt-4 d-flex justify-content-between">
                  Rent Amount: <span id="span_weight">$1500</span>
                </div>
                <div className="card-text mt-1 d-flex justify-content-between">
                  Percentage Holder: <span id="span_weight">12%</span>
                </div>
                <div className="card-text mt-1 d-flex justify-content-between">
                  Invested Amount: <span id="span_weight">$285,000</span>
                </div>
            </div>
        </div>
    );

  }
 
}

export default WalletCard;