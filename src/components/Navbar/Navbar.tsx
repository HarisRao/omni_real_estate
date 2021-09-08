import React from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css'
import WalletModal from '../modal/modal'
import icon from "../../images/icon100by50.png";
import { NavLink } from "react-router-dom";
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap'
import '../../App.css'


interface MyState {setmodal:boolean,DropDownOpen:boolean}

class Navbar extends React.Component<{},MyState>{
  
  state={
    setmodal:false,
    DropDownOpen:false
  }
  
  closeModal=()=>{
    this.setState({
      setmodal:false
    })
  }
  openModal=()=>{
    this.setState({
      setmodal:true
    })
  }

toggle_Dropdown=()=>{
    this.setState({
        DropDownOpen:!this.state.DropDownOpen
    })
}
  render(){
    return (
        <div  id="back-to-top">
         <nav className="navbar navbar-expand-lg navbar-dark py-4">
            <img
              src={icon}
              // width="100"
              alt=""
              className="ml-4"
              style={{width:'100px'}}
            ></img>
            <button
              className="navbar-toggler text-white"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="navbar-nav">
                <NavLink
                  exact
                  to="/"
                  className="nav-item nav-link text-white "
                  activeClassName="item"
                >
                  HOME
                </NavLink>
                <NavLink
                  exact
                  to="/marketplace"
                  className="nav-item nav-link text-white "
                  activeClassName="item"
                >
                  MARKETPLACE
                </NavLink>
                <NavLink
                  exact
                  to="/wallet"
                  className="nav-item nav-link text-white "
                  activeClassName="item"
                >
                  WALLET
                </NavLink>
                <NavLink
                  exact
                  to="/sort"
                  className="nav-item nav-link text-white "
                  activeClassName="item"
                >
                  $ORT
                </NavLink>


                <NavLink
                  exact
                  to="/create"
                  className="nav-item nav-link text-white "
                  activeClassName="item"
                >
                  CREATE
                </NavLink>



              </div>

                <div className="ml-auto">
                  <Dropdown className="dropdown-nav-profile" isOpen={this.state.DropDownOpen} toggle={this.toggle_Dropdown}>
                    <DropdownToggle caret>
                        <i className="fal fa-user-circle mr-3 mb-2 mb-lg-0" id="nav-profile"></i>
                    </DropdownToggle>
                    <DropdownMenu right id="dropdown-nav"> 
                        <DropdownItem style={{borderBottom:'1px solid white'}}>
                          <NavLink exact to="/connectprofile" className="nav-item nav-link text-center text-white my-1">PROFILE</NavLink> 
                        </DropdownItem>
                        <DropdownItem>
                          <NavLink exact to="/staking" className="nav-item nav-link text-center text-white mt-2">STAKING</NavLink> 
                        </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>

                {/* <NavLink
                    exact
                    to="/connectprofile"
                    className="nav-item nav-link text-white mr-3"
                  >
                    <i className="fal fa-user-circle" id="nav-profile"></i>
                </NavLink> */}

              <button
                className="btn btn-outline-light my-2 my-sm-0 px-4 btn-lg mr-3 shadow-none"
                type="submit"
                onClick={this.openModal}
                >
                + CONNECT
              </button>

              <Modal open={this.state.setmodal} center onClose={this.closeModal}>
                <div id="modal_box"><WalletModal onclose={this.closeModal} ></WalletModal></div>
              </Modal>
            </div>
          </nav>
        </div>
     );

  }
 
}

export default Navbar;
