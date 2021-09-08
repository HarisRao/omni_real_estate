import React from 'react';
import '../../App.css';
import {Link} from 'react-scroll'
import {NavLink} from 'react-router-dom'




class  Footer extends React.Component{
  
  render(){
    return (
        <div id="footer">
        <div className="row d-flex justify-content-md-start justify-content-lg-around mx-0">
          <div className="col-lg-4 col-md-6 mt-5 ml-5 mr-md-none mr-4">
            <span className="text-white h2 d-block" id="span_color">
              Don't Miss Out
            </span>
            <span className="text-white h4 font-italic d-block">
              Sign up for the latest news $ort
            </span>

            <form className="mt-4">
              <div className="form-group">
                <label  htmlFor="exampleInputEmail1" className="text-white h6">
                  Email address*
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter your email address"
                ></input>
                <button
                  type="submit"
                  className="btn btn-outline-light mt-3 btn-lg btn-block"
                >
                  SIGN UP
                </button>
                <small id="emailHelp" className="form-text text-white mt-2">
                  This site is intended for Spanish customers.By signing up you
                  understand and agree that your data is collected and used
                  subject to our Spanish{" "}
                  <NavLink to="/privacypolicy" className="text-white" id="underline">Privacy Policy</NavLink> and <NavLink to="/termsandcondition" className="text-white" id="underline">Terms of Use </NavLink>.

                  
                </small>
              </div>
            </form>


            <div id="icon-align-last">

           
              <span className="fa-stack">
                <i className="fab fa-twitter fa-stack-1x"></i>
              </span>
              <span className="fa-stack ml-1">
                <i className="fab fa-facebook-f fa-stack-1x"></i>
              </span>

              <span className="fa-stack ml-1">
                <i className="fab fa-instagram fa-stack-1x"></i>
              </span>

              <span className="fa-stack ml-1">
                <i className="fab fa-linkedin fa-stack-1x"></i>
              </span>

              <span className="fa-stack ml-1">
                <i className="fab fa-pinterest-p fa-stack-1x"></i>
              </span>
            </div>

          </div>

          <div className="col-lg-1"></div>
          <div className="col-lg-2 col-md-4 mt-5 ml-5 pl-md-0">
            <p className="h6 pl-md-4 pl-lg-0 text-white" style={{ fontSize: "22px" }}>
              COMPANY
            </p>
            <span className="text-white pl-md-4 pl-lg-0 lead d-block">About Us</span>
            <span className="text-white pl-md-4 pl-lg-0 lead d-block">Team</span>
            <span className="text-white pl-md-4 pl-lg-0 lead d-block">Financing</span>
            <span className="text-white pl-md-4 pl-lg-0 lead d-block">Development</span>
          </div>
          <div className="col-lg-3 col-md-4 mt-5 ml-5 ml-md-0">
            <p className="h6 text-white mr-lg-2 mr-xl-0" style={{ fontSize: "22px" }}>
              CUSTOMER SERVICE
            </p>
            <span className="text-white lead d-block">My Wallet</span>
            <span className="text-white lead d-block">Marketplace</span>
            <span className="text-white lead d-block">$ort</span>
            <span className="text-white lead d-block">Contact Us</span>
          </div>
        </div>

        <hr className="footer"></hr>
        <div className="row mx-0" id="footer-after-line">
          <div className="col-lg-6">
            <div className="text-white pb-4 ml-5">
              <span>SETMAP</span>
              <span className="ml-3 ">PRIVACY</span>
              <span className="ml-3 ">TERMS</span>
              <span className="ml-3 ">USER CONTENTS</span>
              <span className="ml-3 ">PERMISSION TERMS</span>
            </div>
          </div>
          <div className="col-lg-2"></div>
          <div className="col-lg-4 ml-5 ml-lg-0">
            <p className="text-white">
              Copyright @ 2021 OMNI GROUP &nbsp;{" "}
              <Link to="back-to-top" activeClass="active" spy={true} duration={700} smooth={true} style={{cursor:'pointer'}} ><span id="span_color">Back to top <i className="far fa-chevron-up"></i></span></Link>
            </p>
          </div>
        </div>
      </div>
     );

  }
 
}

export default Footer;