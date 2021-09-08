import React from 'react';
import '../../App.css';




class  NewsLetter extends React.Component{
  
  render(){
    return (
        <div className="mt-5 row " id="blue_coin_image">

            <div className="col-1 col-md-2 col-lg-3"></div>

            <div className=" col-10 col-md-8 col-lg-6 d">
                <p className="text-center text-white pt-5 h3">SUBSCRIBE TO OUR NEWS LETTER</p>
                <p className="text-center text-white pt-3" id="font-size">Fill your email to recieve latest news about marketplace updates,real state tokenization and blockchain in general.</p>
                <form>
                    <div className="form-group row d-flex justify-content-center mb-4">
                        <div className="col-sm-10">
                            <input id="email_address" type="email" className="form-control form-control-lg text-center mt-3 " placeholder="Email Address"></input>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn mb-5 px-5" id="email_button">Submit</button>
                    </div>
                </form>
            </div>


            <div className="col-1 col-md-2 col-lg-3"></div>

        </div>
    
     );

  }
 
}

export default NewsLetter;