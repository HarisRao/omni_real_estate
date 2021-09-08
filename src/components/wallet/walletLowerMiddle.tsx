import React from 'react';
import img1 from "../.././images/1.jpg";
import img2 from "../.././images/2.jpg";
import img3 from "../.././images/3.jpg";
import WalletCard from './walletcard'
import "../.././App.css";
import { TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import classnames from 'classnames'
import GeneralSettings from './settings/settings'
import PropertyTabs from '../imageTabs/imagetabs' 

const images=[img1,img2,img3,img1,img2,img3]
const imagesTab=[img1,img2,img1]

interface IState {activeTab:string}

class  WalletLowerMiddle extends React.Component<{},IState>{
    state={
        activeTab:'1'
    }

    render(){

      const  toggle = (tab:string) => {
          if(this.state.activeTab !== tab) 
          this.setState({
              activeTab:tab
          })
        }

      return (
        <div className="ml-lg-4 ml-0">
            <div className="row" style={{margin:'0px'}}>
                <div className="col-12 col-lg-2 px-lg-0 mt-lg-3 mt-3">
                    <Nav tabs className="flex-md-column border-0">
                      <NavItem className="mt-2">
                          <NavLink
                          className={classnames({ active: this.state.activeTab === '1'})}
                          onClick={() => { toggle('1'); }}
                          style={{background:this.state.activeTab ==='1' ? '#122e53':'#f8f8f8',color:this.state.activeTab ==='1' ? 'white':'black',cursor:'pointer'}}
                          >
                              Claimable NFTs
                          </NavLink>
                      </NavItem>
            
                      <NavItem className="mt-2">
                          <NavLink
                          className={classnames({ active: this.state.activeTab === '2'})} 
                          onClick={() => { toggle('2'); }}
                          style={{background:this.state.activeTab ==='2' ? '#122e53':'#f8f8f8',color:this.state.activeTab ==='2' ? 'white':'black',cursor:'pointer'}}
                          >
                              General Settings
                          </NavLink>
                      </NavItem>
            
                      <NavItem className="mt-2">
                          <NavLink
                          className={classnames({ active: this.state.activeTab === '3' })}
                          onClick={() => { toggle('3'); }}
                          style={{background:this.state.activeTab ==='3' ? '#122e53':'#f8f8f8',color:this.state.activeTab ==='3'? 'white':'black',cursor:'pointer'}}
                          >
                              Favorited
                          </NavLink>
                      </NavItem>
                  </Nav>
                </div>
            
                <div className="col-12 col-lg-10">
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <div className="row pb-5 mr-lg-0 mr-1">
                              {images.map((img,index)=><WalletCard key={index} img={img}></WalletCard>)}
                            </div>
                        </TabPane>
                        <TabPane tabId="2">
                            <GeneralSettings></GeneralSettings>
                        </TabPane>
                        <TabPane tabId="3">
                            <div className="mb-5 mx-4">
                              {imagesTab.map((images,index)=>{
                                return(
                                  <div id="walletTabsPage">
                                    <PropertyTabs image={images} ind={index}></PropertyTabs>
                                  </div>
                                )
                              })}
                            </div>
                        </TabPane>
                    </TabContent>     
                </div>             
            </div>    
        </div>
    );

  }
 
}

export default WalletLowerMiddle;
