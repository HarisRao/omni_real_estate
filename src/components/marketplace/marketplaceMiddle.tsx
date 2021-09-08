import React from 'react';
import './marketplace.css'
import Select from 'react-select';
import MarketplaceDropdown from './marketplaceDropdown'
import MarketplaceTabs from '../imageTabs/imagetabs'
import marketplacetabsimages from '../../images/2.jpg'

const prices = [
    { value: 'all', label: 'All' },
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
];

const marketplacetabsboxes=[marketplacetabsimages,marketplacetabsimages,marketplacetabsimages,marketplacetabsimages]


class  MarketPlaceMiddle extends React.Component{
  
  render(){
    return (
        <div className="bg-white mt-3">
                    <h2 className="text-center pt-4 mb-5">FRESH LISTING</h2>
                        <div className="row">
                            <div className="col-1 col-md-1 col-lg-1 col-xl-1"></div> 
                            <div className="col-10 col-md-10 col-lg-3 col-xl-3 mt-2 px-0 px-lg-3 py-lg-2" id="">
                                <p id="search">Custom Search</p>
                                <MarketplaceDropdown></MarketplaceDropdown>
                            </div>


                            <div className="col-10 col-sm-10 col-md-10 ml-md-auto ml-lg-0 col-lg-7 col-xl-7" id="main-tab-div">
                                <div className="row d-flex justify-content-between">
                                    <div className="ml-sm-3 ml-md-0 col-12 col-sm-5 col-md-6 col-lg-5 col-xl-4 mt-sm-2 mt-lg-0">
                                        <p id="search" className="mt-3">showing <span className="yellow_color">1-4</span> of <span className="yellow_color">25</span> results</p>
                                    </div>
                                    <div className="col-1 col-md-2 col-sm-2 col-lg-4 col-xl-5"></div>
                                    <div className="col-12 col-md-4 col-sm-4 col-lg-3 col-xl-3 mt-sm-3 mt-lg-0 ml-md-0 pr-sm-0 pr-md-3" id="sort">
                                        <Select options={prices} placeholder="Sort By"/>
                                    </div>
                                </div>


                                {marketplacetabsboxes.map((images,index)=>{
                                    return(
                                        <div key={index} id="marketplaceTabsPagePadding">
                                            <MarketplaceTabs image={images} ind={index}></MarketplaceTabs>             
                                        </div>
                                    )
                                })}


                                <p id="search" className="mt-4 mb-5 d-md-block ">Page 1 of 8<i className="fa fa-angle-left ml-4"></i><span id="num" className="px-2">1</span><span id="num" className="px-2">2</span> <span id="search" className="px-2">...</span><span id="num" className="px-2">8</span><i className="fa fa-angle-right"></i></p>        
                            </div>

                            <div className="col-1"></div>

                        </div>

                </div>
    );

  }
 
}

export default MarketPlaceMiddle;
