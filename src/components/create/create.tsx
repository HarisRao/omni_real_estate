import React from 'react';
import './create.css';
import ImgPlaceholder from '../../images/placeholder.png'
import eth from '../../images/ethereum.png'
import btc from '../../images/bitcoin.png'
import {Button} from 'reactstrap'

interface IState {image:string,bannerimage:string}

class  Create extends React.Component<{},IState>{
    state={
        image:'',
        bannerimage:''
    }

    fileChangeHandler = (e?:any) => {
        if (e.target.files.length > 0){
            // console.log(e.target.files[0])
            this.setState({
                image:e.target.files[0] 
            })
         }
    }
    BannerfileChangeHandler = (e?:any) => {
        if (e.target.files.length > 0){
            // console.log(e.target.files[0])
            this.setState({
                bannerimage:e.currentTarget.files[0]
            })
        }
    }
  render(){
    return (
        <div>
            <div>
                <div className="container my-2">
                    <p className="h1 pt-3" style={{color:'#122e53'}}>Create A Property</p>
                    <p className="h6" style={{fontSize:'20px'}}>Create your NFT</p>
                </div>
                <hr style={{height:'2px',background:'#122e53'}}></hr>
                <div className="container">
                    <div className="h5" style={{fontSize: '22px', marginBottom: '10px',color:'#122e53'}} >Featured Image</div>
                    <p className="h6">(optional) This image will be used for featuring your collection on the homepage, category pages, or other areas. Image size 600 x 400 recommended.</p>                           
                    <div className="row mt-4 mb-4">
                        <div className="col-12 col-sm-4">
                            <div id="img-upload" onClick={() => document.getElementById("input-file")!.click()}>
                                <img alt="..." src={ImgPlaceholder} />
                                {/* Upload Any File with these ext: png, jpg, jpeg, webp, gif <br/>
                                <div className="upload-btn">Upload</div> */}
                            </div>
                            <input type="file" style={{display: 'none'}} id="input-file" onChange={this.fileChangeHandler} />
                        </div>
                        <div className="col-12 col-sm-8"></div>
                        <div className="col-12 col-sm-3 mt-3">
                            <div className="card onsale-item" style={{border:'1px solid white'}} >
                                {this.state.image ? (
                                    <img alt="..." className="card-img item-img" src={URL.createObjectURL(this.state.image)} /> //variant="top"
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                    </div>
                </div>




                <div className="container">
                    <div className="h5" style={{fontSize: '22px', marginBottom: '10px',color:'#122e53'}} >Multiple Banner Image</div>
                    <p className="h6">(optional) This image will appear at the top of your collection page. Avoid including too much text in this banner image, as the dimensions change on different devices. Image size 1400 x 400 recommended.</p>
                    <div className="row mt-4 mb-4">
                        <div className="col-12 col-sm-5">
                            <div id="img-upload" onClick={() => document.getElementById("banner-input-file")!.click()}>
                                <img alt="..." src={ImgPlaceholder} />
                                {/* Upload Any File with these ext: png, jpg, jpeg, webp, gif <br/>
                                <div className="upload-btn">Upload</div> */}
                            </div>
                            <input type="file" style={{display: 'none'}} id="banner-input-file" onChange={this.BannerfileChangeHandler}/>
                        </div>
                        <div className="col-12 col-sm-7"></div>
                        <div className="col-12 col-sm-3 mt-3">
                            <div className="card onsale-item" style={{border:'1px solid white'}} >
                                {this.state.bannerimage ? (
                                    <img alt="..." className="card-img item-img" src={URL.createObjectURL(this.state.bannerimage)} /> //variant="top"
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>

                    </div>
                </div>


                <div className="container">
                    <form>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label htmlFor="inputusernameCreate" className="h5" style={{color:'#122e53',fontWeight:'22px' as any}}>Name</label>
                            <input type="text" className="form-control text-white" id="inputusernameCreate" placeholder="Name of your Property"/>
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="inputState" className="h5" style={{color:'#122e53',fontWeight:'22px' as any}}>Property Type</label>
                            <select id="inputState" className="form-control text-white bg-color">
                                <option className="bg-color" value="unique" selected>Unique</option>
                                <option className="bg-color" value="gaming">Gaming</option>
                                <option className="bg-color" value="art">Art</option>
                                <option className="bg-color" value="signed">Signed</option>
                                <option className="bg-color" value="tradingcards">Trading Cards</option>
                                <option className="bg-color" value="meme">MEME</option>
                                <option className="bg-color" value="digital">Digital</option>
                            </select>
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="inputlocation" className="h5" id="input-color">Location</label>
                            <input type="text" className="form-control text-white" id="inputlocation" placeholder="Location"/>
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="inputbed" className="h5"  id="input-color">Bed</label>
                            <input type="number" className="form-control text-white" id="inputbed" placeholder="Bedrooms"/>
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="inputbath" className="h5" id="input-color">Bath</label>
                            <input type="number" className="form-control text-white" id="inputbath" placeholder="Bathrooms"/>
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="inputsize" className="h5" id="input-color">Size</label>
                            <input type="number" className="form-control text-white" id="inputsize" placeholder="Sizes"/>
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="inputarea" className="h5" id="input-color">Area</label>
                            <input type="number" className="form-control text-white" id="inputarea" placeholder="Area"/>
                          </div>
                        </div>
                    </form>
                </div>

                <div className="container">
                    <div className="row mt-3 mb-3">
                        <div className="col-12">
                            <label htmlFor="descript" className="h5" id="input-color">Description</label><br/>
                            <textarea rows={7}  className="text-white py-1 px-2 form-control" placeholder="0 of 1000 characters used." id="descript"></textarea>
                        </div>
                    </div>
                </div>

                <div className="container mt-5">
                    <p className="h5" id="input-color" >Payment Tokens</p>
                    <p className="h6 mb-0">These tokens can be used to buy or sell your items</p>
                    <div className="row mb-3">
                        <div className="col-12 col-sm-5 col-lg-3">
                            <div className="payment-token mt-3" style={{cursor:'pointer'}}>
                                <span style={{backgroundImage: 'radial-gradient(circle at center, #1f4169 0%, #122e53 100%)', padding: '15px', borderRadius: '13px'}}>
                                    <img src="https://cryptologos.cc/logos/binance-coin-bnb-logo.svg?v=013" alt="..." className="payment-token-bnb" />
                                </span>
                                <div style={{padding: '10px',textAlign:'center',width:'155px'}}>
                                    <span className="CreateCoin">BNB</span><br style={{lineHeight: '0px' }}/>
                                    <span className="text-white h5 font-weight-normal">Binance Coin</span>
                                </div>

                            </div>
                        </div>

                        <div className="col-12 col-sm-5 col-lg-3">
                            <div className="payment-token mt-3" style={{cursor:'pointer'}}>
                                <span style={{backgroundImage: 'radial-gradient(circle at center, #1f4169 0%, #122e53 100%)', padding: '15px', borderRadius: '13px'}}>
                                    <img src={eth} alt="..." className="payment-token-bnb" />
                                </span>
                                <div style={{padding: '10px',textAlign:'center',width:'155px'}}>
                                    <span className="CreateCoin">ETH</span><br style={{lineHeight: '0px' }}/>
                                    <span className="text-white h5 font-weight-normal">Ethereum Coin</span>
                                </div>

                            </div>
                        </div>

                        <div className="col-12 col-sm-5 col-lg-3">
                            <div className="payment-token mt-3" style={{cursor:'pointer'}}>
                                <span style={{backgroundImage: 'radial-gradient(circle at center, #1f4169 0%, #122e53 100%)', padding: '15px', borderRadius: '13px'}}>
                                    <img alt="..." src={btc} className="payment-token-bnb" />
                                </span>
                                <div style={{padding: '10px',textAlign:'center',width:'155px'}}>
                                    <span className="CreateCoin">BTC</span><br style={{lineHeight: '0px' }}/>
                                    <span className="text-white h5 font-weight-normal">Bitcoin</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="container my-4">
                    <div className="form-row mt-3">
                        <div className="d-flex col-10 justify-content-start">
                            <Button id="create-save-btn">Save</Button>
                        </div>
                    </div>
                </div>

                <hr  style={{height:'2px',background:'#122e53'}} className="my-5"></hr>


               





            </div>

        </div>
    );

  }
 
}

export default Create;
