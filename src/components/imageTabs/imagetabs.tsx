import React from 'react';
import {NavLink} from 'react-router-dom'
import '../marketplace/marketplace.css'


interface IProps {ind:number,image:string}

class  ImageTabs extends React.Component<IProps>{
  
  render(){
    return (
        <div>
              <div  className="row mt-3" id="box">
               <div className="col-lg-4 col-12 px-3 py-3 py-lg-0" id="carousel_image">
                        <div id={`tabs${this.props.ind}`} className="carousel slide" data-ride="carousel">
                          <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img className="d-block w-100 h-100 rounded" src={this.props.image} alt="First slide"></img>
                              <div className="top-right">FEATURED</div> {/* if featured then top-right css have to toggle it. */}
                              <div className="centered">SOLD OUT</div> {/* if sold out then centered css have to toggle it.Have display none by default*/}
                            </div>
                            <div className="carousel-item">
                              <img className="d-block w-100  h-100 rounded" src={this.props.image} alt="Second slide"></img>
                              <div className="top-right">FEATURED</div>
                              <div className="centered">SOLD OUT</div>
                            </div>
                            <div className="carousel-item">
                              <img className="d-block w-100  h-100 rounded" src={this.props.image} alt="Third slide"></img>
                              <div className="top-right">FEATURED</div>
                              <div className="centered">SOLD OUT</div>
                            </div>
                          </div>
                          <a className="carousel-control-prev" href={`#tabs${this.props.ind}`} role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                          </a>
                          <a className="carousel-control-next" href={`#tabs${this.props.ind}`} role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                          </a>
                        </div>
                  </div>
                  <div className="col-lg-6 col-md-8">
                    <NavLink to="/marketplace/propertydetails" id="imagetablink"> 
                      <blockquote className="mb-0 mb-lg-2 mt-md-4 mt-lg-0">
                          <p className="mb-0" style={{paddingTop:'0.65rem'}}>GUADAMILNA BAJA</p>
                          <small className="mt-0">Turn key villas - 4 bedrooms - 4 bathrooms 1000m2</small>
                          <footer className="mt-2">Someone famous in lorem the original words and form of a written or printed work.An edited or emended copy of an original work.Work containing such text.</footer>
                      </blockquote>
                      <div className="py-2 py-lg-0">
                        <span><i className="fas fa-bed fa-1x"></i><small className="ml-1"> 3</small></span>
                        <span className="ml-4"><i className="fas fa-bath fa-1x"></i><small className="ml-1"> 3</small></span>
                        <span className="ml-4"><i className="far fa-draw-square fa-1x"></i><small className="ml-1"> 3</small></span>
                      </div>
                    </NavLink>
              
                  </div>
                  <div className="col-lg-2 col-md-4" id="box1"> 
                    <NavLink to="/marketplace/propertydetails" id="imagetablink"> 
                      <div className="py-2 py-lg-1" id="inner_box">
                          <span className="text-center pt-0 d-block">Euro</span>
                          <p className="text-center mb-0">1.000.000</p>
                      </div>
                      <div className="py-2 py-lg-1" id="inner_box">
                          <span className="text-center pt-0 d-block">Bitcoin</span>
                          <p className="text-center mb-0">34.02</p>
                      </div>
                      <div className="py-2 py-lg-1" id="">
                          <span className="text-center pt-0 d-block ">Ethereum</span>
                          <p className="text-center mb-0">484.64</p>
                      </div>
                    </NavLink>
                  </div>
              </div>
            </div>
    );

  }
 
}

export default ImageTabs;