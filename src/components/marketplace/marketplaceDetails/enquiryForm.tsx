import React from 'react';


class EnquiryForm extends React.Component{
  
  render(){
    return (
        <div className="bg-white p-3 mr-3 mr-sm-0" id="box">
        <h4 id="enquiry_color" className="text-center mt-2">
          MAKE AN ENQUIRY{" "}
        </h4>
        <div className="row mt-4">
          <div className="col-lg-3 col-md-2 col-12"></div>
          <div className="col-lg-6 col-md-8 col-12">
            <p id="enquiry_text" className="text-center">
              For more information on this property or to request that a member
              of our sales team contact you please fill in the form below.
            </p>
          </div>
          <div className="col-lg-3 col-md-2 col-12"></div>
        </div>

        <form>
          <div className="container">
            <div className="row mt-4 ">
              <div className="col-lg-4 col-12">
                <input
                  type="text"
                  id="enquiry_form_field"
                  className="form-control"
                  placeholder="Full Name"
                ></input>
              </div>

              <div className="col-lg-4 col-12 mt-3 mt-lg-0">
                <input
                  type="number"
                  id="enquiry_form_field"
                  className="form-control"
                  placeholder="Phone No"
                ></input>
              </div>

              <div className="col-lg-4 col-12 mt-3 mt-lg-0 d-flex justify-content-end">
                <input
                  type="email"
                  id="enquiry_form_field"
                  className="form-control"
                  placeholder="Email"
                ></input>
              </div>
            </div>

            <div className="mt-4">
              <textarea
                id="enquiry_text_field"
                className="form-control"
                rows={7}
                placeholder="Please Write Your Enquiry Here..."
              ></textarea>
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="btn mb-3 px-5 mt-4"
                id="enquiry_email_button"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </form>
      </div>
    );

  }
 
}

export default EnquiryForm;
