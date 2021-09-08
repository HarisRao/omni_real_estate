import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from '../src/components/home/home'
import Footer from '../src/components/footer/footer'
import ConnectProfile from '../src/components/connectprofile/connectprofile'
import Wallet from './components/wallet/wallet'
import Create from './components/create/create'
import PrivacyPolicy from './components/privacyPolicy/privacyPolicy'
import TermsAndCondition from './components/termsAndCondition/termsAndCondition'
import MarketPlace from './components/marketplace/marketplace'
import MarketPlaceDetails from './components/marketplace/marketplaceDetails/marketPlaceDetails'
import Staking from './components/staking/staking'



class  Main extends React.Component{
  
  render(){
    return (
        <div>
            <Router>
              <div>
                <Navbar></Navbar>
                <Route path="/" component={Home} exact={true}></Route>
                <Route path="/marketplace" component={MarketPlace} exact={true}></Route>
                <Route path="/marketplace/propertydetails" component={MarketPlaceDetails} exact={true}></Route>
                <Route path="/wallet" component={Wallet} exact={true}></Route>
                <Route path="/connectprofile" component={ConnectProfile} exact={true}></Route>
                <Route path="/staking" component={Staking} exact={true}></Route>
                <Route path="/create" component={Create} exact={true}></Route>
                <Route path="/privacypolicy" component={PrivacyPolicy} exact={true}/>
                <Route path="/termsandcondition" component={TermsAndCondition} exact={true}/>
                <Footer></Footer>
              </div>
            </Router>
         
        </div>
     );

  }
 
}

export default Main;