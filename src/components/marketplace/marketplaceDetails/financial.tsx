import React from 'react';


class Financial extends React.Component{
  
  render(){
    return (
        <div>
        <div className="">
          <div className="card" id="remove-card-top">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-5 col-6">
                  <span>
                    <h5 className="card-title d-inline" id="description-title">
                      GUADALMINA BAJA
                    </h5>
                  </span>
                </div>
                <div className="col-sm-4 col-2"></div>
                <div className="col-sm-3 col-4 d-flex justify-content-end justify-content-sm-end">
                  <span className="h6" id="euro">
                    € 1,990,000
                  </span>
                </div>
              </div>

              <div className="row text-muted mt-2">
                <div className="col-sm-5 col-lg-5 col-9">
                  <span>
                    <h6 className="mb-2 d-inline" id="description-size">
                      <i className="fal fa-map-marker-alt"></i> Casasola, Guadalmina
                      Baja
                    </h6>
                  </span>
                </div>
                <div className="col-sm-2 col-lg-1 col-1"></div>
                <div className="col-sm-5 col-lg-6 col-12 mt-2 mt-sm-0 d-sm-flex justify-content-end">
                  <span id="description-size">
                    <i className="far fa-clock"></i>{" "}
                    <h6 className="d-inline" id="description-size">
                      2 months ago
                    </h6>{" "}
                    &nbsp; <i className="fal fa-eye"></i>{" "}
                    <h6 className="d-inline" id="description-size">
                      257 views
                    </h6>
                  </span>
                </div>
              </div>
              <p className="card-text mt-3 mb-5">
                <span className="d-block font-weight-bold">Financial:</span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged...
              </p>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <div className="card" id="remove-card-top1">
            <div className="card-body mb-4 pl-5 pl-sm-4">
              <h5 className="card-title" id="property-title">
                PROPPERTY DETAILS
              </h5>
              <div className="text-muted row mt-2">
                <div className="col-sm-4 col-12">
                  <span>
                    <h6 className="mb-2 d-inline" id="property-size">
                      Bedrooms :
                    </h6>{" "}
                    <p className="h6 d-inline text-dark" id="property-size">
                      4
                    </p>
                  </span>{" "}
                </div>
                <div className="col-sm-2"></div>
                <div className="col-sm-5 col-12 d-sm-flex justify-content-start mt-2 mt-sm-0">
                  <span className="mr-5">
                    <h6 className="d-inline" id="property-size">
                      Property ID :{" "}
                    </h6>{" "}
                    <p className="h6 d-inline text-dark" id="property-size">
                      OE-4002
                    </p>
                  </span>
                </div>
              </div>

              <div className="text-muted row mt-2">
                <div className="col-sm-4 col-12">
                  <span>
                    <h6 className="mb-2 d-inline" id="property-size">
                      Bathrooms :
                    </h6>{" "}
                    <p className="h6 d-inline text-dark" id="property-size">
                      3
                    </p>
                  </span>{" "}
                </div>
                <div className="col-sm-2"></div>
                <div className="col-sm-6 d-sm-flex justify-content-start col-12  mt-2 mt-sm-0">
                  <span className="mr-xl-5 mr-lg-4">
                    <h6 className="d-inline" id="property-size">
                      Property Type :{" "}
                    </h6>{" "}
                    <p className="h6 d-inline text-dark" id="property-size">
                      Turn Key Villas
                    </p>
                  </span>
                </div>
              </div>

              <div className="text-muted row mt-2">
                <div className="col-sm-4 col-12">
                  <span>
                    <h6 className="mb-2 d-inline" id="property-size">
                      Garage :
                    </h6>{" "}
                    <p className="h6 d-inline text-dark" id="property-size">
                      2
                    </p>
                  </span>{" "}
                </div>
                <div className="col-sm-2 col-md-2"></div>
                <div className="col-sm-5 col-md-6 d-sm-flex justify-content-start col-12  mt-2 mt-sm-0">
                  <span className="mr-5">
                    <h6 className="d-inline" id="property-size">
                      Property Status :{" "}
                    </h6>{" "}
                    <p className="h6 d-inline text-dark" id="property-size">
                      For Sale
                    </p>
                  </span>
                </div>
              </div>
              <div className="text-muted mt-2">
                <span>
                  <h6 className="mb-2 d-inline" id="property-size">
                    Property Size :
                  </h6>{" "}
                  <p className="h6 d-inline text-dark" id="property-size">
                    1000m2
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
        
        
      </div>

    );

  }
 
}

export default Financial;
