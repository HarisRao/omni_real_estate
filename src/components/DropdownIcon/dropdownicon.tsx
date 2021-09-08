import React from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap'
import {FacebookShareButton,TelegramShareButton,WhatsappShareButton,LinkedinShareButton,TwitterShareButton} from 'react-share'
import {FacebookIcon,TelegramIcon,WhatsappIcon,LinkedinIcon,TwitterIcon} from 'react-share'



interface IState {DropDownOpen:boolean}

class  HomeDropdownIcon extends React.Component<{},IState>{

    state={
        DropDownOpen:false
    }

    toggle_share=()=>{
        this.setState({
            DropDownOpen:!this.state.DropDownOpen
        })
    }
  
  render(){
    return (
      <div>
                    <Dropdown className="dropdown_fa" isOpen={this.state.DropDownOpen} toggle={this.toggle_share}>
                        <DropdownToggle caret>
                            <i className="fal fa-share-alt mt-1"></i>    
                        </DropdownToggle>
                        <DropdownMenu right id="dropdown_menu">
                            
                            <DropdownItem>
                                <FacebookShareButton url={window.location.href}>
                                    <FacebookIcon size={22} round={true} ></FacebookIcon>
                                </FacebookShareButton>
                            </DropdownItem>
                            <DropdownItem>
                                <TelegramShareButton url={'https://www.google.com/'}>
                                    <TelegramIcon   size={22} round={true} ></TelegramIcon>
                                </TelegramShareButton>
                            </DropdownItem>
                            <DropdownItem>
                                <WhatsappShareButton url={window.location.href}>
                                    <WhatsappIcon  size={22} round={true} ></WhatsappIcon>
                                </WhatsappShareButton>
                            </DropdownItem>
                            <DropdownItem>
                                
                                <LinkedinShareButton url={'https://www.google.com/'}>
                                    <LinkedinIcon  size={22} round={true} ></LinkedinIcon>
                                </LinkedinShareButton>
                            </DropdownItem>

                                <DropdownItem>
                                    <TwitterShareButton url={'https://www.google.com/'}>
                                        <TwitterIcon  size={22} round={true} ></TwitterIcon>
                                    </TwitterShareButton>
                                </DropdownItem>

                        </DropdownMenu>
                    </Dropdown>
     
         
      </div>
     );

  }
 
}

export default HomeDropdownIcon;