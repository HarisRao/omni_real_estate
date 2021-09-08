import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ImageUploading ,{ImageListType} from "react-images-uploading";
import placeholder from '../../../images/img-placeholder.png'
import {Button} from 'reactstrap'

interface IState {value:string,copied:boolean,circleimg:string}

class  GeneralSettings extends React.Component<{},IState>{

    state={
        value: '0xc158687aE91ecdE761d2795580D996BF18bCD823',
        copied: false,
        circleimg:'',
    }
    componentDidUpdate(){
        if(this.state.copied===true){
            setTimeout(() => {
                this.setState({
                    copied:false
                })
            }, 2000);
        }
    }

    onChangecircle = (imageList:ImageListType) => {
        this.setState({
            circleimg:imageList[0].data_url,
        })
    };
  render(){
    return (
        <div>
            <div className="mt-3 pb-4">
                <p className="h3">General Settings</p>
                <p className="h6 mt-4 mb-3">My Wallet Address</p>
                <form>
                    <div className="mb-4" style={{position:'relative'}}>
                        <div className="mb-3 d-flex align-items-center" id="wallet-div" >
                            <p className="mb-0 pl-1 pl-sm-3 text-white">{this.state.value}</p>
                        </div>
                        <CopyToClipboard  text={this.state.value}
                            onCopy={() => this.setState({copied: true})}>
                            <i className="fal fa-copy" id="fa-copy"></i>
                        </CopyToClipboard>
                    </div>
                    {this.state.copied ? <span id="copy-text" >Copied.</span>:''}

                        <div>
                            <p className="h6" id="logo-image-font">Profile Image</p>
                            <ImageUploading
                                    value={[]}
                                    multiple
                                    onChange={this.onChangecircle}
                                    dataURLKey="data_url"
                                >
                                    {({
                                      onImageUpload
                                    }) => (
                                        <div>
                                            {this.state.circleimg ? 
                                             (
                                                <div onClick={onImageUpload} style={{cursor:'pointer'}}>
                                                    <img alt="..." src={this.state.circleimg} id="image-bg-circle"></img>
                                                </div>
                                            ): <div id="image-bg-circle" className="mt-3" onClick={onImageUpload} style={{cursor:'pointer'}}>
                                                    <img alt="..." src={placeholder} id="circular-image"></img>
                                                </div>

                                            }
                                        </div>
                                    )}
                            </ImageUploading>
                        </div>

                        <div className="form-row mt-3">
                          <div className="form-group col-md-5">
                            <label htmlFor="inputusername" className="h6">Username</label>
                            <input type="text" className="form-control text-white" id="inputusername" placeholder="Enter Your Username"/>
                          </div>
                          <div className="form-group col-md-5">
                            <label htmlFor="inputemail" className="h6">Email</label>
                            <input type="mail" className="form-control text-white" id="inputemail" placeholder="Enter Your Email"/>
                          </div>
                        </div>

                        <div className="form-row mt-3">
                            <div className="form-group col-10">
                              <label htmlFor="textareabio" className="h6">Bio</label>
                              <textarea rows={5} className="form-control" placeholder="Enter Your Bio...." id="textareabio"></textarea>   
                            </div>
                        </div>
                        <div className="form-row mt-2">
                        <div className="d-flex col-10 justify-content-center">
                            <Button id="settings-save-btn">Save</Button>
                        </div>
                        </div>


                </form>
            </div>

        </div>
    );

  }
 
}

export default GeneralSettings;
