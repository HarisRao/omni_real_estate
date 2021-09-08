import React from 'react';

interface IProps {featuredimage:string}

class FeaturedBox extends React.Component<IProps>{
  
  render(){
    return (
    <div className="row mt-4">
        <div className="col-xl-4 col-lg-3 ml-xl-2 col-md-12 col-3">
          <img src={this.props.featuredimage} alt="" width="100" height="" className="rounded"></img>
        </div>
        <div className="col-xl-7 ml-lg-5 ml-xl-0 col-lg-7 col-md-12 col-7">
          <span className="d-block h6 font-weight-bold" id="Featured_title">
            NUEVA ANDALUCIA <br></br>
            <span className="text-dark font-weight-normal d-block mt-2">
              € 3,995,000{" "}
            </span>{" "}
            <br></br>
            <span className="text-muted d-block" id="featured_description">
              5 beds-7 baths-1084m2
            </span>{" "}
          </span>
        </div>
    </div>
    );

  }
 
}

export default FeaturedBox;
