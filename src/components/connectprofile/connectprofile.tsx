import React from 'react';
// import './App.css';
import metamask from '../../images/metamaskProfile.png'
import {Button} from 'reactstrap'


class  ConnectProfile extends React.Component{
  
  render(){
    return (
      <div>
            <p className="h4 text-center mt-5">Sign in to your wallet.</p>
            <div  className="d-flex justify-content-center mt-3">
                <img src={metamask} alt="..." style={{width:'110px',height:'110px'}}></img>
            </div>
            
            <div  className="d-flex justify-content-center mt-5 mb-5">
                <Button id="profileSignIn" className="px-5">Sign In</Button>
            </div>
      </div>
    );

  }
 
}

export default ConnectProfile;