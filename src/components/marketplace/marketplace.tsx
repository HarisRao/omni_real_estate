import React from 'react';
import './marketplace.css'
import img1 from "../../images/1.jpg";
import MarketPlaceMiddle from './marketplaceMiddle'
import Coins from '../coins/coins'
import Newsletter from '../newsletter/newsletter'

const investArray=['LOREM IPSUM DOLAR SIT AMET','LOREM IPSUM DOLAR SIT AMET IPSUM','LOREM IPSUM DOLAR SIT AMET','LOREM IPSUM DOLAR SIT AMET DOLOR SIT AMET','LOREM IPSUM DOLAR SIT AMET','LOREM IPSUM DOLAR SIT AMET IPSUM']

class MarketPlace extends React.Component{
  
  render(){
    return (
        <div className="fluid-container mt-3" id="bg">
                <div className="row">
                    <div className="col-md-6  col-12 mt-4 bg-white mb-3 p-sm-4 p-0 pl-4 pl-sm-0" id="headerabstract_image">

                        <div className="row mt-md-4 mb-4 text-sm-center text-md-left">
                            <div className="col-1"></div>
                            <div className="col-10">
                            <p className="mt-3 h5">INVEST IN TOKENIZED REAL ESTATE</p></div>
                            <div className="col-1"></div>
                        </div>
                        

                        {investArray.map((item,index)=>{
                            return(
                            <div className="row mt-3 text-sm-center text-md-left" key={index}>
                                <div className="col-lg-1 col-1 "></div>
                                <div className="col-10  pl-3 "><i className="fa fa-check" aria-hidden="true"></i><span id="fnt" className="pl-3">{item}</span></div>
                            </div>
                            )
                        })}
                    </div>
                    <div className="col-3  col-md-1"></div>
                    <div className="col-md-5 ml-4 ml-md-0 ml-lg-0 col-8 mt-5">  
                        <img id="img_center"src={img1} alt="..."></img>
                    </div>
                </div>
                
                <MarketPlaceMiddle></MarketPlaceMiddle>
                <div className="mt-5">
                    <Coins></Coins>
                    <Newsletter></Newsletter>
                </div>


                

            </div>
    );

  }
 
}

export default MarketPlace;
