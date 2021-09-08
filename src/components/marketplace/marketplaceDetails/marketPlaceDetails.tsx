import React from 'react';
import img1 from "../../../images/1.jpg";
import img2 from "../../../images/2.jpg";
import img3 from "../../../images/3.jpg";
import "../marketplace.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import DropdownIcon from '../../DropdownIcon/dropdownicon'
import EnquiryForm from './enquiryForm'
import FeaturedBox from './featuredBox'
import Pricing from './pricing'
import Description from './description'
import Coins from '../../coins/coins'
import Financial from './financial'
import {TabContent,TabPane,Nav,NavItem,NavLink} from "reactstrap";
import classnames from "classnames";




interface IState {activeTab:string}

const carouselimages=[img1,img2,img3,img1,img2,img3]
const featuredimages=[img1,img2,img3,img1,img2,img3,img1,img2]


class MarketPlaceDetails extends React.Component<{},IState>{

    state={
        activeTab:'1'
    }

    toggle_tab = (toggle_id:string) => {
        if (this.state.activeTab !== toggle_id)
          this.setState({
            activeTab: toggle_id,
          });
      };
  
  render(){
    return (
        <div>
            <div className="container mt-5">
                <Carousel
                  useKeyboardArrows
                  showThumbs={true}
                  autoPlay
                  showArrows={true}
                >
                    {carouselimages.map((image,index)=>
                      <div key={index}>
                        <img src={image} alt="..." className="rounded" />
                        <i
                          className="fal fa-map-marker-alt mt-1"
                          id="image_map_marker"
                          style={{cursor:'pointer'}}
                          onClick={() => window.open("https://maps.google.com")}
                          /* ()=>window.open("https://maps.google.com?q="+your_lat+","+your_lng") */
                        ></i>
                        <DropdownIcon></DropdownIcon>
                      </div>
                    )}
                </Carousel>
            </div>

            <div id="description" className="fluid-container mt-4">
                <div className="mx-0 mx-sm-4 mx-md-5 ml-3 ml-sm-0">
                    <div className="row mt-3 mr-0">
                        <div className="col-xl-8 col-lg-8 col-md-12 col-12 pr-sm-0 pr-md-0 pr-lg-3">

                            <Pricing></Pricing>

                            <Nav tabs>
                              <NavItem>
                                <NavLink
                                  className={classnames({
                                    active: this.state.activeTab === "1",
                                  })}
                                  onClick={() => this.toggle_tab("1")}
                                  id="tabs"
                                >
                                  Description
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink
                                  className={classnames({
                                    active: this.state.activeTab === "2",
                                  })}
                                  onClick={() => this.toggle_tab("2")}
                                  id="tabs"
                                >
                                  Financial
                                </NavLink>
                              </NavItem>
                            </Nav>

                            <TabContent activeTab={this.state.activeTab}>
                              <TabPane tabId="1">
                                <Description></Description>
                              </TabPane>
                              <TabPane tabId="2">
                                <Financial></Financial>
                              </TabPane>
                            </TabContent>
                        </div>

                        <div
                            className="col-xl-4 col-lg-4 col-md-3 bg-white col-12"
                            id="Featured_box"
                        >
                            <h5 className="text-center pt-4">FEATURED</h5>
                            {featuredimages.map((image,index)=><FeaturedBox key={index} featuredimage={image}></FeaturedBox>)}
                        </div>
                    </div>
                    <EnquiryForm></EnquiryForm>
                </div>

                <div className="my-5">
                  <Coins></Coins>
                </div>
            </div>
        </div>
    );

  }
 
}

export default MarketPlaceDetails;