import React from 'react';
import './home.css'
import homeimg from '../../images/2.jpg'
import homefeaturedimages from '../../images/1.jpg'
import HomeDropDown from './homedropdown'
import homevid from '.././../images/NFT_Marketplace_Trailer.mp4';
import HomeProperties from './homeproperties'
import HomeFeaturedTabs from '../imageTabs/imagetabs'
import Coins from '../coins/coins'
import Newsletter from '../newsletter/newsletter'
import '../../../node_modules/react-video-play/public/css/react-video-play.css'
import {Source, ReactVideoPlay, VideoSourceType} from 'react-video-play';


const featured=[homefeaturedimages,homefeaturedimages,homefeaturedimages,homefeaturedimages]



class  Home extends React.Component{
  render(){
    let src: Source[] = [
        {
            name: '1080p',
            source: [{
                source: homevid,
                type: VideoSourceType.video_mp4
            }]
        }] 
    return (
        <div>
            <div style={{position:'relative'}}>

                <ReactVideoPlay
                    sources={src}
                    poster={homeimg}
                    // autoplay={true}
                    // muted={true}
                />

                
                <div id="homeBg-text">
                    <p className="display-4 text-white">Invest in Real Estate with Crypto</p>     
                </div>
                <div>
                    <HomeDropDown></HomeDropDown>
                </div>

            </div>

            <div className="my-2">
                <p className="h3 py-5 text-center" style={{color:'#122e53'}}>LATEST PROPERTIES FOR SALE</p>
                <HomeProperties></HomeProperties>
            </div>

            <div>
                <p className="h2 pb-4 text-center" style={{color:'#122e53'}}>FEATURED PROPERTIES</p>
                <div className="row mx-2">
                    {featured.map((images,index)=>{
                        return(
                        <div key={index} className="col-md-6 col-12 px-4" id="marginFromTopOnHomePage">
                            <HomeFeaturedTabs image={images} ind={index}></HomeFeaturedTabs>
                        </div>)
                    })}
                </div>
            </div>
            
            <div className="mt-5">
                <Coins></Coins>
                <Newsletter></Newsletter>
            </div>
    
        </div>
     );

  }
 
}

export default Home;