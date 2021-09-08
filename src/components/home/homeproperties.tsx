import React from 'react';
import './home.css';
import homeimg from '../../images/1.jpg'
import homeimg3 from '../../images/3.jpg'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import DropdownIcon from '../DropdownIcon/dropdownicon'

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1441 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1440, min: 1076 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1075, min: 993 },
      items: 3
    },
    tablet1: {
        breakpoint: { max: 992, min: 768 },
        items: 2
      },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1
    }
  };

  const propertyData=[homeimg,homeimg,homeimg,homeimg,homeimg,homeimg,homeimg,homeimg,homeimg,homeimg,homeimg]


class  HomeProperties extends React.Component{
  
  render(){
    return (
      <div>
          <div className="mt-2 mb-5 mx-3">
                <Carousel responsive={responsive} keyBoardControl={true} arrows={false}>
                    {propertyData.map((item,index)=>{
                        return(
                            <div className="p-1" key={index}>
                                <div className="card">
                                    <div id={`first${index}`} className="carousel slide p-2" data-ride="carousel">
                                        <div className="carousel-inner">
                                          <div className="carousel-item active">
                                            <img className="d-block w-100" src={homeimg3} alt="First slide"  style={{borderRadius:'10px',filter:'brightness(0.9)'}}/>
                                          </div>
                                          <div className="carousel-item">
                                            <img className="d-block w-100" src={item} alt="Second slide"  style={{borderRadius:'10px',filter:'brightness(0.9)'}}/>
                                          </div>
                                          <div className="carousel-item">
                                            <img className="d-block w-100" src={homeimg3} alt="Third slide"  style={{borderRadius:'10px',filter:'brightness(0.9)'}}/>
                                          </div>
                                        </div>
                                        <a className="carousel-control-prev" href={`#first${index}`} role="button" data-slide="prev">
                                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                          <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="carousel-control-next" href={`#first${index}`} role="button" data-slide="next">
                                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                          <span className="sr-only">Next</span>
                                        </a>
                                    </div>

                                    <div>                                      
                                        <div id="main-div-price-and-icon" className="d-flex justify-content-between">
                                            <div>
                                                <p className="card-text text-white mb-0" id="home-property-price">Price : € 1,990,000</p>
                                            </div>
                                            <div className="d-flex">
                                                <i
                                                    className="fal fa-map-marker-alt mr-1"
                                                    id="image_map_marker_onHomeProperty"
                                                    onClick={() => window.open("https://maps.google.com")}
                                                    /* ()=>window.open("https://maps.google.com?q="+your_lat+","+your_lng") use this to add longitude and latitude values for a property*/
                                                ></i>

                                                <div id="image_icon_marker_onHomeProperty">
                                                    <DropdownIcon></DropdownIcon>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-between text-white p-2 " id="property-carousel-coin-price">
                                            <p className="mb-0">Bitcoin 34.04</p>      
                                            <p className="mb-0">Ethereum 484.63</p>
                                        </div>
                                    </div>

                                    <div className="card-body p-2 py-2">
                                        <p className="mb-1 h5" style={{color:'#ffacaf'}}>Guadalmina Baja </p>
                                        <p className="mb-2 h6">Spectacular new built house...</p>
                                        <div><small style={{fontSize:'14px'}}>Go somewhere Some quick example text to build on the card title and make up the bulk of the card's content.Go somewhere Some quick example text to build on the card title.</small></div>
                                    </div>

                                    <div className="card-footer px-3 py-1 d-flex justify-content-around" id="property-footer">
                                        <span><i className="fas fa-bed fa-1x"></i><small className="ml-1"> 3</small></span>
                                        <span className="ml-4"><i className="fas fa-bath fa-1x"></i><small className="ml-1"> 3</small></span>
                                        <span className="ml-4"><i className="far fa-draw-square fa-1x"></i><small className="ml-1"> 3</small></span>
                                    </div>

                                </div>
                            </div>

                        )
                    })}

                </Carousel>
            </div>
       
      </div>
     );

  }
 
}

export default HomeProperties;